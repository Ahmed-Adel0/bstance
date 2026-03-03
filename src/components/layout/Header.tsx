"use client";
import { useMobileMenu } from "@/hooks/useMobileMenu";

export default function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <>
      <div className="spotlight"></div>

      {/* STICKY CTA */}
      <div className="sticky-cta">
        <a href="#booking">🎁 احجز مكانك في السحب </a>
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
              <a href="#raffle-hook" className="inline-flex items-center">
                السحب 🏆
              </a>
            </li>
            <li>
              <a href="#packages" className="inline-flex items-center">
                الباقات
              </a>
            </li>
            <li>
              <a href="#why" className="inline-flex items-center">
                لماذا نحن
              </a>
            </li>
            <li>
              <a href="#services" className="inline-flex items-center">
                الخدمات
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
                className="nav-cta inline-flex items-center justify-center"
              >
                📲 احجز الآن
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
            <a href="#raffle-hook" onClick={closeMenu}>
              السحب الكبير 🏆
            </a>
          </li>
          <li>
            <a href="#packages" onClick={closeMenu}>
              باقات النخبة
            </a>
          </li>
          <li>
            <a href="#why" onClick={closeMenu}>
              لماذا B•Stance
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              الخدمات الفردية
            </a>
          </li>
          <li>
            <a href="#team" onClick={closeMenu}>
              الفريق
            </a>
          </li>
          <li>
            <a href="#loyalty" onClick={closeMenu}>
              نظام المكافآت
            </a>
          </li>
          <li>
            <a href="#faq" onClick={closeMenu}>
              الأسئلة الشائعة
            </a>
          </li>
        </ul>
        <a href="#booking" className="mob-cta-link" onClick={closeMenu}>
          📲 احجز مكانك — دخول السحب فوري
        </a>
      </div>
    </>
  );
}
