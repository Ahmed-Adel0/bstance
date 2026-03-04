"use client";
import React from 'react';

/* ── SVG Icons ── */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.59a8.19 8.19 0 004.79 1.53V6.67a4.86 4.86 0 01-1.02.02z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const teamMembers = [
  {
    id: 1,
    name: "Cap Ahmed Arafat",
    nickname: "عفروتو",
    title: "Personal Trainer & Performance Coach",
    image: "/imgs/arafat.jpeg",
    imagePosition: "center top",
    experience: "3+",
    experienceLabel: "سنوات خبرة",
    bio: "كوتش معتمد دولياً في التدريب الشخصي وتطوير الأداء الرياضي، يصمم برامج تدريبية مخصصة ومتكاملة تناسب مختلف المستويات والأهداف — من المبتدئ حتى المحترف.",
    tags: [
      { icon: "💪", label: "Personal Training" },
      { icon: "⚡", label: "Performance" },
      { icon: "📊", label: "Body Comp" },
    ],
    social: [
      { platform: "facebook", url: "https://www.facebook.com/ahmed.arafat.5209?mibextid=wwXIfr&rdid=QOdMgw7c6ZEh0iz5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AYCZAhimi%2F%3Fmibextid%3DwwXIfr#", label: "Facebook" },
      { platform: "instagram", url: "https://www.instagram.com/arafat_coaching?igsh=MWs4YXVjZW9xc2hpeQ%3D%3D&utm_source=qr", label: "Instagram" },
      { platform: "tiktok",    url: "https://www.tiktok.com/@aafroto_74?_r=1&_t=ZS-94MZz7xIHJt",    label: "TikTok" },
      { platform: "whatsapp",  url: "https://wa.me/201061468429",             label: "WhatsApp" },
    ],
    accentColor: "teal",
    delay: "rd1",
  },
  {
    id: 2,
    name: "Cap Ahmed El Nahhas",
    title: "General Manager & Recovery Specialist",
    image: "/imgs/ahmedadel.png",
    imagePosition: "center top",
    experience: "2+",
    experienceLabel: "سنوات خبرة",
    bio: "أخصائي تأهيل بدني وحركي، الحجامة، الإبر الصينية، والمساج الرياضي، يركز على تسريع التعافي وتحسين الأداء والتوازن الجسدي.",
    tags: [
      { icon: "🫁", label: "Sports Massage" },
      { icon: "🏺", label: "Cupping Therapy" },
      { icon: "🦵", label: "Movement Rehab" },
    ],
    social: [
      { platform: "facebook", url: "https://www.facebook.com/ahmed.ibn.adell", label: "Facebook" },
      { platform: "instagram", url: "https://www.instagram.com/ahmed.ibn.adell/", label: "Instagram" },
      // { platform: "tiktok",    url: "https://www.tiktok.com/@bstance.eg",    label: "TikTok" },
      { platform: "whatsapp",  url: "https://wa.me/201554463626",             label: "WhatsApp" },
    ],
    accentColor: "gold",
    delay: "rd2",
  },
  {
    id: 3,
    name: "Dr. Ahmed Fadl",
    title: "Certified Sports Nutritionist",
    image: "/imgs/fadl.jpeg",
    imagePosition: "center top",
    experience: "5+",
    experienceLabel: "سنوات خبرة",
    bio: "أخصائي تغذية معتمد من وحدة الطب الرياضي بوزارة الشباب والرياضة، حاصل على دبلوم في تغذية الرياضيين وماجستير من جامعة السويس، متخصص في إعداد وتصميم برامج التغذية للرياضيين.",
    tags: [
      { icon: "🥗", label: "Sports Nutrition" },
      { icon: "📋", label: "Diet Planning" },
      { icon: "🏅", label: "Sports Medicine" },
    ],
    social: [
      { platform: "facebook", url: "https://www.facebook.com/ahmed.fadl.176316", label: "Facebook" },
      { platform: "whatsapp", url: "https://wa.me/201095625761", label: "WhatsApp" },
    ],
    accentColor: "gold",
    delay: "rd4",
  },
  {
    id: 4,
    name: "Cap Ahmed Al Sakkar",
    title: "Strength & Conditioning Coach",
    image: "/imgs/sakar.jpg",
    imagePosition: "center top",
    experience: "5+",
    experienceLabel: "سنوات خبرة",
    bio: "كوتش متخصص في تدريب القوة والتكييف البدني بخبرة ميدانية متعددة السنوات، يبني برامج تدريبية احترافية تُحسّن القوة والقدرة على التحمّل للرياضيين على جميع المستويات.",
    tags: [
      { icon: "🏋️", label: "Strength" },
      { icon: "🔥", label: "Conditioning" },
      { icon: "🎯", label: "Athletics" },
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
];

const SocialIcon = ({ platform }: { platform: string }) => {
  if (platform === "facebook")  return <FacebookIcon />;
  if (platform === "instagram") return <InstagramIcon />;
  if (platform === "tiktok")    return <TikTokIcon />;
  if (platform === "whatsapp")  return <WhatsAppIcon />;
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
            فريقنا يجمع بين الإدارة الاحترافية، التدريب الشخصي والجيم، والتغذية الرياضية — كل تخصص لخدمة هدف واحد: تحسين أدائك وصحتك
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
                      <span className="tc-tag-icon">{tag.icon}</span>
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
