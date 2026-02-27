import { memo, useState } from "react";
import { NAV_ITEMS, SITE_INFO } from "../constants";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const Navigation = memo(function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    onNavigate(e, sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/60 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600">
              coreapex
            </span>
            <span className="hidden sm:block text-[10px] text-slate-500 tracking-wide italic -mt-1">
              {SITE_INFO.tagline}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center gap-2" role="menubar">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                activeSection === item.id
                  ? "bg-teal-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
              title={item.title}
              onClick={(e) => onNavigate(e, item.id)}
              role="menuitem"
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span className="text-xs font-semibold">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-700" />
          ) : (
            <Menu className="w-6 h-6 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
                onClick={(e) => handleNavigate(e, item.id)}
              >
                <span className="text-sm font-semibold">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
});