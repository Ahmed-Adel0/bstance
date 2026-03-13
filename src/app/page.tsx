"use client";
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AcademyServicesSection from '@/components/sections/AcademyServicesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import AthleteDevelopmentSection from '@/components/sections/AthleteDevelopmentSection';
import TeamSection from '@/components/sections/TeamSection';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';
import BookingFormSection from '@/components/sections/BookingFormSection';
import Footer from '@/components/layout/Footer';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // REVEAL ANIMATION (Global Observer)
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));

    // STATS COUNTER (Global Observer, to keep structure unchanged)
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.querySelectorAll(".stat-num[data-t]").forEach((el) => {
            const htmlEl = el as HTMLElement;
            const t = +(htmlEl.dataset.t || '0');
            const pre = htmlEl.dataset.p || "";
            const suf = htmlEl.dataset.s || "";
            let c = 0,
              step = t / 55;
            const iv = setInterval(() => {
              c = Math.min(c + step, t);
              htmlEl.textContent = pre + Math.floor(c) + suf;
              if (c >= t) {
                clearInterval(iv);
                htmlEl.textContent = pre + t + suf;
              }
            }, 28);
          });
          so.unobserve(e.target);
        });
      },
      { threshold: 0.3 }
    );
    const sg = document.querySelector(".stats-glass");
    if (sg) so.observe(sg);

    return () => {
      ro.disconnect();
      so.disconnect();
    }
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <AcademyServicesSection />
      <ServicesSection />
      <PackagesSection />
      <AthleteDevelopmentSection />
      <TeamSection />
      <CTASection />
      <FAQSection />
      <BookingFormSection />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/201279266345"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا على واتساب"
        className="floating-wa flex items-center gap-2"
      >
        <MessageCircle size={20} fill="currentColor" />
        <span>احجز على واتساب</span>
      </a>
    </>
  );
}
