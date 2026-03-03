"use client";
import React from "react";

export default function TeaserSection() {
  return (
    <>
      <section
        className="section"
        id="teaser"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className="reveal"
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <div className="s-label" style={{ justifyContent: "center" }}>
            شراكات النخبة — قريباً
          </div>
          <h2 className="s-title">
            Elite Gym Partners — Coming Soon
          </h2>
          <p
            className="s-sub"
            style={{ margin: "0 auto", marginBottom: "40px" }}
          >
            نعمل على شراكات مع أقوى الجيمات في المنطقة لتوفير اشتراك الجيم
            ضمن باقاتنا. الإعلان الرسمي يوم الافتتاح 27 رمضان.
          </p>

          {/* Blurred placeholder logos */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              filter: "blur(5px)",
              opacity: 0.5,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              />
            ))}
          </div>

          {/* Inquiry nudge */}
          <p
            style={{
              marginTop: "32px",
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.88rem",
            }}
          >
            هل تمثّل جيماً وتريد الانضمام كشريك؟{" "}
            <a
              href="https://wa.me/201279266345"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--teal-light)", textDecoration: "underline" }}
            >
              تواصل معنا
            </a>
          </p>
        </div>

        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/201279266345"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل معنا على واتساب"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            background: "#25D366",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.9rem",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.534 4.094 1.473 5.845L0 24l6.337-1.445A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.003-1.371l-.359-.214-3.762.858.898-3.663-.234-.373A9.79 9.79 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
          </svg>
          احجز على واتساب
        </a>
      </section>
    </>
  );
}
