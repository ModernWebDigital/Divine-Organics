"use client";

import { useEffect } from "react";

export default function ScrollFX() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const navToggle = document.getElementById("nav-toggle") as HTMLInputElement | null;
    const panelLinks = document.querySelectorAll(".mobile-panel a");
    const closeMenu = () => {
      if (navToggle) navToggle.checked = false;
    };
    panelLinks.forEach((a) => a.addEventListener("click", closeMenu));

    const revealEls = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let io: IntersectionObserver | undefined;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach((el) => io!.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      panelLinks.forEach((a) => a.removeEventListener("click", closeMenu));
      io?.disconnect();
    };
  }, []);

  return null;
}
