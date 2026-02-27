/**
 * CORE Assessment Platform - Constants
 * Centralized configuration and constants for the application
 */

// Site Information
export const SITE_INFO = {
  name: "CORE",
  fullName: "CORE Assessment Platform",
  tagline: "Intelligence. Quantified.",
  description: "Measure the Thinking. Not just the memorization.",
} as const;

// Contact Information
export const CONTACT_INFO = {
  name: "Nithya",
  role: "School Partnership Lead",
  email: "partners@coreapex.org",
  phone: "+91 98765 43210",
  imageUrl: "https://images.unsplash.com/photo-1758600587728-9bde755354ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGZhY2UlMjBwcm9mZXNzaW9uYWwlMjBzbWlsZSUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3NzIxNjQxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

// Navigation Items
export const NAV_ITEMS = [
  { id: "hero", label: "Home", title: "Home" },
  { id: "for-schools", label: "Features", title: "For Schools" },
  { id: "contact", label: "Contact", title: "Contact" },
] as const;

// Feature Flags
export const FEATURES = {
  analytics: false,
  stickyContactCTA: true,
} as const;

// Animation Settings
export const ANIMATION = {
  scrollLockDuration: 1500, // milliseconds
  scrollOffset: 100, // pixels from top to activate section
  ctaScrollThreshold: 300, // pixels scrolled before showing sticky CTA
} as const;

// Neural Network Settings
export const NEURAL_NETWORK = {
  nodeCount: 60,
  maxConnectionDistance: 150,
  nodeSpeed: 0.3,
  connectionOpacity: 0.3,
} as const;