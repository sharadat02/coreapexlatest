import { ArrowRight, BookOpen, Brain, Target } from "lucide-react";
import { NeuralNetwork } from "./components/NeuralNetwork";
import { ForSchools } from "./components/ForSchools";
import { ContactSection } from "./components/ContactSection";
import { StickyContactCTA } from "./components/StickyContactCTA";
import { Navigation } from "./components/Navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { NAV_ITEMS, ANIMATION } from "./constants";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = NAV_ITEMS.map(item => item.id);
      const scrollPosition = window.scrollY + ANIMATION.scrollOffset;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    isScrollingRef.current = true;
    setActiveSection(sectionId);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.offsetTop;
      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, ANIMATION.scrollLockDuration);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden relative">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Hero Section */}
      <div id="hero" className="pt-20 min-h-screen flex items-center relative bg-gradient-to-br from-slate-50 via-teal-50/40 to-cyan-50/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 sm:space-y-8 max-w-2xl relative z-20">
              <div className="space-y-4 lg:space-y-6">
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Measure the Thinking.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                    Not just the memorization.
                  </span>
                </h1>

                {/* Subheadline */}
                <p
                  className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-6 lg:mb-8 leading-relaxed max-w-2xl"
                >
                  Equip your school with a Competency-Based Framework aligned to NEP 2020.
                  Measure and enhance the <strong>cognitive skills</strong> that drive <strong>logic, reasoning, and problem-solving</strong>—required for the shifting pattern of <strong>board and competitive exams</strong>. Empower your students to think, apply, and reason <strong>beyond memorization</strong>.
                </p>
              </div>

              {/* CTA Section */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              >
                {/* Left Badge */}
                <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-100 border border-slate-200">
                  <span className="text-emerald-700 text-sm sm:text-base font-medium flex items-center gap-2">
                    <span>✅</span>
                    <span>NEP 2020 Compliant</span>
                  </span>
                </div>

                {/* Right Badge */}
                <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-100 border border-slate-200">
                  <span className="text-emerald-700 text-sm sm:text-base font-medium flex items-center gap-2">
                    <span>🏛</span>
                    <span>Aligned to 5+3+3+4 Structure</span>
                  </span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div
                className="pt-6 lg:pt-8 border-t border-slate-200"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {/* Curriculum Agnostic */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50/50 border border-teal-100">
                    <div className="w-12 h-12 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-slate-900">Curriculum</div>
                      <div className="text-xs sm:text-sm text-slate-900 font-bold">Agnostic</div>
                    </div>
                  </div>

                  {/* Cognitive Science Based */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50/50 border border-purple-100">
                    <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-slate-900">Cognitive</div>
                      <div className="text-xs sm:text-sm text-slate-900 font-bold">Science Based</div>
                    </div>
                  </div>

                  {/* Bloom's Taxonomy Aligned */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-slate-900">Bloom's</div>
                      <div className="text-xs sm:text-sm text-slate-900 font-bold">Taxonomy Aligned</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Neural Network Visualization */}
            <div
              className="relative h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center order-first lg:order-last"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100/60 via-cyan-50/40 to-teal-100/60 blur-3xl rounded-full" />
              
              {/* Glassmorphic Container */}
              <div className="relative w-full h-full rounded-2xl lg:rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/80 to-teal-50/30 backdrop-blur-sm overflow-hidden shadow-xl">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-transparent" />
                
                {/* Neural Network Canvas */}
                <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
                  <NeuralNetwork />
                </div>

                {/* Floating Accent Elements */}
                <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-teal-200/40 blur-2xl animate-pulse" />
                <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-cyan-200/40 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Orbital Ring Effect */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border-2 border-teal-200/40 animate-pulse" style={{ animationDuration: '3s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/60 rounded-full blur-[100px]" />
      </div>

      {/* For Schools Section */}
      <ForSchools />

      {/* Contact Section */}
      <ContactSection />

      {/* Sticky Contact CTA */}
      <StickyContactCTA />
    </div>
  );
}