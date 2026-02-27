import { Shield, Lock, BookOpen, CheckCircle2, Sparkles, Mail, Phone } from "lucide-react";
import { memo } from "react";
import { CONTACT_INFO } from "../constants";

export const ContactSection = memo(function ContactSection() {
  const requiredInfo = [
    "School Name",
    "Number of Students (Approx)",
    "Best Contact Number (Mobile preferred)",
    "Preferred Callback Time"
  ];

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-teal-50/50 py-16 sm:py-24 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Value Proposition */}
          <div
            className="space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200/60">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-teal-700 text-sm font-medium">Get Started</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Bring CORE to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Your Campus
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Discover how our competency-based framework delivers measurable NEP 2020 alignment and drives real academic growth—without adding to your teachers' workload.
            </p>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium">Secure Data</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium">Privacy First</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="font-medium">Research Backed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            className="relative"
          >
            {/* Glassmorphic Form Container */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-2xl p-10 relative overflow-hidden">
              {/* Decorative Gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500" />

              {/* Personal Introduction - Sarah from CORE */}
              <div className="mb-8 pb-6 border-b border-slate-200">
                <div className="flex items-start gap-4">
                  <img 
                    src={CONTACT_INFO.imageUrl}
                    alt={CONTACT_INFO.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-500 shadow-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-slate-900 text-lg">{CONTACT_INFO.name}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700 font-medium">
                        {CONTACT_INFO.role}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      "Skip the form. Email or Message me directly."
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50/50 border border-teal-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-slate-900 mb-2">Email Us Directly</h5>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`} 
                        className="text-lg font-bold text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50/50 border border-cyan-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-slate-900 mb-2">WhatsApp / Call Priority Line</h5>
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`} 
                        className="text-lg font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to Include */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h5 className="text-sm font-semibold text-slate-900 mb-4">What to include:</h5>
                  <ul className="space-y-3">
                    {requiredInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-teal-600" />
                        </div>
                        <span className="text-slate-700">{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-cyan-200/30 rounded-full blur-2xl" />
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-sm transform rotate-12"
            >
              ⚡ Personal Response
            </div>
          </div>
        </div>

        {/* Additional Trust Section */}
        <div
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 rounded-2xl border border-teal-200/60 p-8">
            <p className="text-slate-700 text-lg leading-relaxed">
              <span className="font-semibold text-slate-900">Take your academic excellence to the next level.</span> Implement the framework that quantifies and cultivates the logic and reasoning skills your students need for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});