"use client";
import React from 'react';
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Music,
  Apple,
  BarChart3,
  Medal,
  Dumbbell,
  Zap,
  ClipboardList,
  Target,
  Activity,
  Droplets,
  ShieldAlert,
  Sword,
  CheckCircle2
} from 'lucide-react';

// Custom Icons handled by Lucide now

/* ════════════════════════════════════════
   بيانات الفريق — شهادات + نتائج
   ════════════════════════════════════════ */
const teamMembers = [
  {
    id: 3,
    name: "Dr. Ahmed Fadl",
    title: "Sports Nutritionist",
    role: "Fuel — التغذية الدقيقة",
    image: "/imgs/fadl.jpeg",
    imagePosition: "center top",
    experience: "5+",
    experienceLabel: "سنوات خبرة",
    bio: "أخصائي تغذية رياضية معتمد من وحدة الطب الرياضي بوزارة الشباب والرياضة، حاصل على ماجستير من جامعة السويس ودبلوم في تغذية الرياضيين. أعدّ برامج غذائية ساهمت في وصول رياضيين لمستويات تنافسية عالية — بما فيها لاعبات وصلن للمنتخب الوطني وبطولات التايكوندو.",
    tags: [
      { icon: <Apple size={14} />, label: "Sports Nutrition" },
      { icon: <BarChart3 size={14} />, label: "Performance Fueling" },
      { icon: <Medal size={14} />, label: "Sports Medicine" },
    ],
    social: [
      { platform: "facebook", url: "https://www.facebook.com/ahmed.fadl.176316", label: "Facebook" },
      { platform: "whatsapp", url: "https://wa.me/201095625761", label: "WhatsApp" },
    ],
    accentColor: "gold",
    delay: "rd1",
  },
  {
    id: 1,
    name: "Cap Ahmed Arafat",
    nickname: "عفروتو",
    title: "Performance Coach",
    role: "Train — التدريب الذكي",
    image: "/imgs/arafat.jpeg",
    imagePosition: "center top",
    experience: "3+",
    experienceLabel: "سنوات خبرة",
    bio: "كوتش معتمد دولياً في التدريب الشخصي وتطوير الأداء الرياضي. بنى برامج تدريبية حققت تحولات مرئية لعشرات المتدربين في فترات قياسية — من المبتدئ حتى المحترف.",
    tags: [
      { icon: <Dumbbell size={14} />, label: "Strength & Body Comp" },
      { icon: <Zap size={14} />, label: "Performance Boost" },
      { icon: <ClipboardList size={14} />, label: "Customized Programs" },
    ],
    social: [
      { platform: "facebook", url: "https://www.facebook.com/ahmed.arafat.5209?mibextid=wwXIfr&rdid=QOdMgw7c6ZEh0iz5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AYCZAhimi%2F%3Fmibextid%3DwwXIfr#", label: "Facebook" },
      { platform: "instagram", url: "https://www.instagram.com/arafat_coaching?igsh=MWs4YXVjZW9xc2hpeQ%3D%3D&utm_source=qr", label: "Instagram" },
      { platform: "tiktok",    url: "https://www.tiktok.com/@aafroto_74?_r=1&_t=ZS-94MZz7xIHJt",    label: "TikTok" },
      { platform: "whatsapp",  url: "https://wa.me/201061468429",             label: "WhatsApp" },
    ],
    accentColor: "teal",
    delay: "rd2",
  },
  {
    id: 4,
    name: "Cap Ahmed Al Sakkar",
    title: "Strength & Conditioning Coach",
    role: "Train — القوة والتكييف",
    image: "/imgs/sakar.jpg",
    imagePosition: "center top",
    experience: "5+",
    experienceLabel: "سنوات خبرة",
    bio: "كوتش متخصص في تدريب القوة والتكييف البدني بخبرة ميدانية تتجاوز 5 سنوات، يبني برامج تدريبية احترافية تُحسّن القوة والقدرة على التحمّل للرياضيين على جميع المستويات — من المبتدئ حتى المحترف.",
    tags: [
      { icon: <Dumbbell size={14} />, label: "Strength Training" },
      { icon: <Zap size={14} />, label: "Conditioning" },
      { icon: <Target size={14} />, label: "Athletic Performance" },
    ],
    social: [
      { platform: "facebook", url: "https://www.facebook.com/ahmed.alsakar.906", label: "Facebook" },
      // { platform: "instagram", url: "https://www.instagram.com/bstance.eg/", label: "Instagram" },
      // { platform: "tiktok",    url: "https://www.tiktok.com/@bstance.eg",    label: "TikTok" },
      { platform: "whatsapp",  url: "https://wa.me/201121609806",             label: "WhatsApp" },
    ],
    accentColor: "teal",
    delay: "rd3",
  },
  {
    id: 2,
    name: "Cap Ahmed El Nahhas",
    title: "Recovery Specialist & GM",
    role: "Recover — الاستشفاء المتقدم",
    image: "/imgs/ahmedadel.png",
    imagePosition: "center top",
    experience: "2+",
    experienceLabel: "سنوات خبرة",
    bio: "أخصائي تأهيل بدني وحركي، وخبير معتمد في الحجامة والمساج الرياضي العميق. يتمتع بخبرة عملية واسعة في تقديم جلسات ريكافري متخصصة تسهم بفعالية في تسريع التعافي العضلي، الحد من الإصابات، واستعادة الجاهزية البدنية للرياضيين في وقت قياسي.",
    tags: [
      { icon: <Activity size={14} />, label: "Deep Sports Massage" },
      { icon: <Droplets size={14} />, label: "Cupping Therapy" },
      { icon: <Zap size={14} />, label: "Rapid Recovery" },
    ],
    social: [
      { platform: "facebook", url: "https://www.facebook.com/ahmed.ibn.adell", label: "Facebook" },
      { platform: "instagram", url: "https://www.instagram.com/ahmed.ibn.adell/", label: "Instagram" },
      // { platform: "tiktok",    url: "https://www.tiktok.com/@bstance.eg",    label: "TikTok" },
      { platform: "whatsapp",  url: "https://wa.me/201554463626",             label: "WhatsApp" },
    ],
    accentColor: "gold",
    delay: "rd4",
  },
  {
    id: 5,
    name: "Dr. Ahmed Malla",
    title: "Nutrition & Combat Sports Specialist",
    role: "Train • Fuel — أداء وتغذية رياضية",
    image: "/imgs/mala.png", // Placeholder
    imagePosition: "center top",
    experience: "5+",
    experienceLabel: "سنوات خبرة",
    bio: "متخصص في تدريب وتغذية الرياضيين الهواة والمحترفين، وخبير في تدريب الرياضيين للأطفال والكبار. باحث ماجستير في علوم الصحة والتغذية الرياضية، وحاصل على ماجستير في الإصابات الرياضية من جامعة طنطا.",
    tags: [
      { icon: <Sword size={14} />, label: "Kickboxing & Boxing" },
      { icon: <Apple size={14} />, label: "Sports Nutrition" },
      { icon: <CheckCircle2 size={14} />, label: "Injury Prevention" },
    ],
    social: [
      // { platform: "whatsapp",  url: "https://wa.me/201279266345",             label: "WhatsApp" },
      { platform: "facebook", url: "https://www.facebook.com/ahmd.almla.192244/", label: "Facebook" },
      { platform: "instagram", url: "https://www.instagram.com/mall_a00?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    ],
    accentColor: "teal",
    delay: "rd5",
  },
];

const SocialIcon = ({ platform }: { platform: string }) => {
  if (platform === "facebook")  return <Facebook size={16} />;
  if (platform === "instagram") return <Instagram size={16} />;
  if (platform === "tiktok")    return <Music size={16} />;
  if (platform === "whatsapp")  return <MessageCircle size={16} />;
  return null;
};

export default function TeamSection() {
  return (
    <>
      {/* ═══════ TEAM ═══════ */}
      <section className="section" id="team">
        {/* Section Header */}
        <div className="team-header">
          <div className="s-label" style={{ justifyContent: "center" }}>
            الفريق
          </div>
          <h2 className="s-title team-title">خبرات متنوعة لتحقيق أفضل أداء</h2>
          <p className="s-sub team-sub">
            فريقنا يجمع بين الخبرة المهنية والنتائج الميدانية — كل متخصص مسؤول عن بُعد من أبعاد{" "}
            <strong style={{ color: "var(--teal-light)" }}>Train • Fuel • Recover.</strong>
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid-v2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`team-card-v2 reveal ${member.delay}`}
              data-accent={member.accentColor}
            >
              {/* Glow accent */}
              <div className={`tc-glow tc-glow--${member.accentColor}`} />

              {/* Photo */}
              <div className="tc-photo-wrap">
                <div className="tc-photo-ring">
                  <div className="tc-photo-inner">
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{ objectPosition: member.imagePosition }}
                    />
                  </div>
                </div>

                {/* Experience Badge */}
                <div className={`tc-exp-badge tc-exp-badge--${member.accentColor}`}>
                  <span className="tc-exp-num">{member.experience}</span>
                  <span className="tc-exp-lbl">{member.experienceLabel}</span>
                </div>
              </div>

              {/* Info */}
              <div className="tc-body">
                <div className="tc-name-block">
                  <h3 className="tc-name">{member.name}</h3>
                  {member.nickname && (
                    <span className="tc-nickname">«{member.nickname}»</span>
                  )}
                  <p className="tc-title">{member.title}</p>
                </div>

                <p className="tc-bio">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="tc-tags">
                  {member.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`tc-tag tc-tag--${member.accentColor}`}
                    >
                      <span className="tc-tag-icon" style={{ color: member.accentColor === 'gold' ? 'var(--gold)' : 'var(--teal-light)' }}>
                        {tag.icon}
                      </span>
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="tc-socials">
                  {member.social.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`tc-social-btn tc-social-btn--${s.platform}`}
                      title={s.label}
                    >
                      <SocialIcon platform={s.platform} />
                    </a>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
