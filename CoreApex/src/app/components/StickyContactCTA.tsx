import { useState, useEffect, memo, useCallback } from "react";
import { Mail, X } from "lucide-react";
import { ANIMATION, CONTACT_INFO } from "../constants";

export const StickyContactCTA = memo(function StickyContactCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > ANIMATION.ctaScrollThreshold && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPosition <= ANIMATION.ctaScrollThreshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleClick = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleDismiss = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed right-6 bottom-6 z-50 hidden md:block"
    >
      <div className="relative group">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 hover:bg-slate-800 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
          aria-label="Dismiss"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Main CTA Button */}
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-teal-500/40 flex items-center gap-3 transition-all hover:scale-105 active:scale-95"
        >
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="font-bold text-sm">Email {CONTACT_INFO.name} Today</div>
            <div className="text-xs text-teal-50">{CONTACT_INFO.role}</div>
          </div>
        </button>
      </div>
    </div>
  );
});