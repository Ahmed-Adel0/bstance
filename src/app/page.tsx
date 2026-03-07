"use client";
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import RaffleHookSection from '@/components/sections/RaffleHookSection';
// GoldenOpportunitySection — تم دمج محتواه ضمن RaffleHookSection
import PackagesSection from '@/components/sections/PackagesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeaserSection from '@/components/sections/TeaserSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import RewardsSection from '@/components/sections/RewardsSection';
import FAQSection from '@/components/sections/FAQSection';
import BookingFormSection from '@/components/sections/BookingFormSection';
import Footer from '@/components/layout/Footer';

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
      <WhyUsSection />
      <RaffleHookSection />
      <PackagesSection />
      <ServicesSection />
      <TeamSection />
      {/* <TestimonialsSection /> */}
      {/* <RewardsSection /> */}
      <TeaserSection />
      <FAQSection />
      <BookingFormSection />
      <Footer />
    </>
  );
}
