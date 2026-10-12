// ─── Service / Product Model ─────────────────────────────────────────────────
export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: string;
  route: string;
  features?: string[];
}

// ─── Hero Slider Slide Model ─────────────────────────────────────────────────
export interface HeroSlide {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  ctaLabel: string;
  ctaRoute: string;
  image: string;
}

// ─── Stat Counter Model ──────────────────────────────────────────────────────
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

// ─── FAQ Model ───────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

// ─── Partner / Brand Logo Model ──────────────────────────────────────────────
export interface Partner {
  name: string;
  logo: string;
  url?: string;
}

// ─── Page Banner Model ───────────────────────────────────────────────────────
export interface PageBannerData {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; route?: string }[];
  backgroundImage?: string;
}
