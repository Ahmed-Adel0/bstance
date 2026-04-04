"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarConditional() {
  const pathname = usePathname();
  const hideOn = ["/athlete", "/specialist", "/admin", "/onboarding", "/portal"];
  const shouldHide = hideOn.some((path) => pathname.startsWith(path));

  if (shouldHide) return null;

  return <Navbar />;
}
