"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scrolls to the URL hash once the target section exists.
 *
 * The home page renders nothing until it mounts, so a hash arriving from another
 * route (e.g. /about -> /#services) has no target when the browser or the router
 * would normally scroll. assets/js/main.js only handles this on a full page load,
 * which never fires during client-side navigation.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let frame;
    let timer;
    let cancelled = false;

    const headerOffset = () => document.querySelector("#header")?.offsetHeight ?? 0;

    const scrollTo = (el, behavior) => {
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
      window.scrollTo({ top: Math.max(top, 0), behavior });
    };

    const run = (hash) => {
      if (!hash || hash === "#") return;
      let target;
      try {
        target = document.querySelector(hash);
      } catch {
        return; // malformed hash, nothing to do
      }
      if (!target) return;

      scrollTo(target, "smooth");
      // Images above the target can still be loading; correct the landing spot once.
      timer = setTimeout(() => {
        if (!cancelled) scrollTo(target, "auto");
      }, 700);
    };

    // Wait for the section to exist (the page mounts its content after hydration).
    const waitForTarget = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const deadline = Date.now() + 4000;

      const step = () => {
        if (cancelled) return;
        let exists = false;
        try {
          exists = Boolean(document.querySelector(hash));
        } catch {
          return;
        }
        if (exists) {
          run(hash);
        } else if (Date.now() < deadline) {
          frame = requestAnimationFrame(step);
        }
      };
      step();
    };

    waitForTarget();

    const onHashChange = () => run(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
