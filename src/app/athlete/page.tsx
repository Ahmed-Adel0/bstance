import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AthleteDashboardClient from "./AthleteDashboardClient";

export default async function AthleteDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const isMocked = !user;
  let profile = null;
  let workouts = [];
  let nutrition = [];

  if (!isMocked) {
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    profile = profileData;

    if (!profile) {
      redirect('/onboarding');
    }

    const today = new Date().toISOString().split('T')[0];
    const { data: w } = await supabase
      .from('workouts')
      .select('*')
      .eq('athlete_id', user?.id || '')
      .eq('scheduled_for', today);
    workouts = w || [];

    const { data: n } = await supabase
      .from('nutrition_plans')
      .select('*')
      .eq('athlete_id', user?.id || '');
    nutrition = n || [];
  } else {
    // Mock user data for testing bypass
    profile = { full_name: "أحمد المتدرب" };
    workouts = [
       { is_completed: false, exercises: [{ name: "تمرين سريع لتجربة المنصة" }] }
    ];
    nutrition = [];
  }


  return (
    <AthleteDashboardClient 
      profile={profile} 
      initialWorkouts={workouts || []} 
      initialNutrition={nutrition || []} 
    />
  );
}
