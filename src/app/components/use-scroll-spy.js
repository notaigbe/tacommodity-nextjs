"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently in view.
 *
 * React owns the nav's active state, so nav links deliberately drop the
 * .scrollto class: assets/js/main.js would otherwise toggle .active on the same
 * elements and fight React's renders.
 *
 * Returns the active section id, or "" when none is (yet) in view.
 */
export function useScrollSpy(ids, enabled = true) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!enabled) {
      setActiveId("");
      return;
    }

    const update = () => {
      const offset = (document.querySelector("#header")?.offsetHeight ?? 0) + 16;
      const position = window.scrollY + offset;
      let current = "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (position >= el.getBoundingClientRect().top + window.scrollY) current = id;
      }

      // Above the first section (page top), keep the first nav item lit.
      if (!current) current = ids.find((id) => document.getElementById(id)) ?? "";

      // At the bottom of the page the last section may never clear the offset.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        const last = ids.filter((id) => document.getElementById(id)).pop();
        if (last) current = last;
      }

      setActiveId(current);
    };

    update();
    // Sections can mount after hydration, so re-check once they exist.
    const timer = setTimeout(update, 800);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
    // `ids` is a module-level constant in every caller.
  }, [ids, enabled]);

  return activeId;
}

/**
 * Smooth-scrolls to a section on the current page, clearing the fixed header.
 * Returns false when the section is not on this page, so the caller can let the
 * router navigate instead.
 */
export function scrollToSection(hash) {
  let target;
  try {
    target = document.querySelector(hash);
  } catch {
    return false;
  }
  if (!target) return false;

  const offset = document.querySelector("#header")?.offsetHeight ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  window.history.pushState(null, "", hash);
  return true;
}
