"use client";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { CalendarCheck } from "lucide-react";

export default function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <>
      <div className="spotlight"></div>

      {/* STICKY CTA */}
      <div className="sticky-cta">
        <a href="#booking" className="flex items-center gap-2">
          <CalendarCheck size={18} />
          <span>احجز جلستك الآن</span>
        </a>
      </div>

      {/* NAV */}
      <nav className="nav flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand logo */}
        <div className="flex items-center">
          <a href="#hero" className="nav-logo flex items-center gap-2 sm:gap-3">
            <img
              src="/imgs/Icon.png"
              alt="B•Stance"
              className="nav-logo-img w-11 h-11 sm:w-12 sm:h-12"
            />
            <div className="nav-logo-text">
              <div className="nav-logo-name text-lg lg:text-xl font-black">
                B•Stance
              </div>
            </div>
          </a>
        </div>

        {/* Right: Nav links + hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ul className="nav-links hidden md:flex items-center gap-3 lg:gap-4">
            <li>
              <a href="#hero" className="inline-flex items-center">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#services" className="inline-flex items-center">
                لماذا B•Stance
              </a>
            </li>
            <li>
              <a href="#academies" className="inline-flex items-center">
                الأكاديميات
              </a>
            </li>
            <li>
              <a href="#packages" className="inline-flex items-center">
                الباقات
              </a>
            </li>
            <li>
              <a href="#athlete-dev" className="inline-flex items-center">
                صناعة البطل
              </a>
            </li>
            <li>
              <a href="#team" className="inline-flex items-center">
                الفريق
              </a>
            </li>
            <li>
              <a href="#faq" className="inline-flex items-center">
                الأسئلة
              </a>
            </li>
            <li className="ml-2 lg:ml-4">
              <a
                href="#booking"
                className="nav-cta inline-flex items-center justify-center gap-2"
              >
                <CalendarCheck size={18} />
                <span>احجز الآن</span>
              </a>
            </li>
          </ul>
          <button
            className={`hamburger ${isOpen ? "open" : ""} flex md:hidden p-2`}
            id="ham"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mob-menu ${isOpen ? "open" : ""}`} id="mobMenu">
        <ul>
          <li>
            <a href="#hero" onClick={closeMenu}>
              الرئيسية
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              لماذا نحن؟
            </a>
          </li>
          <li>
            <a href="#academies" onClick={closeMenu}>
              خدمات الأكاديميات
            </a>
          </li>
          <li>
            <a href="#packages" onClick={closeMenu}>
              باقات الاشتراك
            </a>
          </li>
          <li>
            <a href="#athlete-dev" onClick={closeMenu}>
              منهج صناعة البطل
            </a>
          </li>
          <li>
            <a href="#team" onClick={closeMenu}>
              فريق العمل
            </a>
          </li>
          <li>
            <a href="#faq" onClick={closeMenu}>
              الأسئلة الشائعة
            </a>
          </li>
        </ul>
        <a href="#booking" className="mob-cta-link flex items-center justify-center gap-2" onClick={closeMenu}>
          <CalendarCheck size={20} />
          <span>احجز جلستك الآن</span>
        </a>
      </div>
    </>
  );
}
