import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  FileText,
  Loader2,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  Users,
  Vote,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

/* ============================================================
   ANIMATION VARIANTS
   ============================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 16px oklch(0.26 0.095 255 / 0.08)" },
  hover: { y: -6, boxShadow: "0 12px 32px oklch(0.26 0.095 255 / 0.18)" },
};

/* ============================================================
   SECTION TITLE COMPONENT
   ============================================================ */
function SectionTitle({
  en,
  mr,
  light = false,
}: {
  en: string;
  mr: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <p
        className={`text-sm font-semibold tracking-widest uppercase mb-2 ${light ? "text-gold" : "text-gold"}`}
        style={{ color: "oklch(0.78 0.16 75)" }}
      >
        {en}
      </p>
      <h2
        className={`font-display text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-navy"}`}
        style={{
          color: light ? "white" : "oklch(0.26 0.095 255)",
        }}
      >
        {mr}
      </h2>
      <div className="flex items-center justify-center gap-2 mt-4">
        <div
          className="h-0.5 w-12 rounded-full"
          style={{ backgroundColor: "oklch(0.78 0.16 75)" }}
        />
        <div
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: "oklch(0.78 0.16 75)" }}
        />
        <div
          className="h-0.5 w-12 rounded-full"
          style={{ backgroundColor: "oklch(0.78 0.16 75)" }}
        />
      </div>
    </div>
  );
}

/* ============================================================
   SERVICES DATA
   ============================================================ */
const services = [
  {
    icon: CreditCard,
    title: "AADHAAR SMART CARD",
    desc: "नवीन आधार नोंदणी आणि दुरुस्ती सेवा.",
    tag: "Govt Service",
  },
  {
    icon: FileText,
    title: "PAN CARD",
    desc: "नवीन पॅन कार्ड व अपडेट.",
    tag: "Income Tax",
  },
  {
    icon: BookOpen,
    title: "PASSPORT SERVICE",
    desc: "नवीन पासपोर्ट अर्ज आणि अपॉईंटमेंट.",
    tag: "Central Govt",
  },
  {
    icon: Award,
    title: "CERTIFICATES",
    desc: "Domicile, Income Certificate, Resident Certificate, Senior Citizen Card",
    tag: "State Govt",
  },
  {
    icon: Vote,
    title: "VOTER ID",
    desc: "मतदान ओळखपत्र अर्ज.",
    tag: "Election Commission",
  },
  {
    icon: Shield,
    title: "POLICE VERIFICATION",
    desc: "पोलिस पडताळणी सेवा.",
    tag: "Police Dept",
  },
  {
    icon: Briefcase,
    title: "GUMASTA LICENSE",
    desc: "व्यवसाय परवाना सेवा.",
    tag: "MCGM / Municipal",
  },
];

/* ============================================================
   HEADER
   ============================================================ */
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Legal Services", href: "#legal-services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      data-ocid="header.section"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "oklch(0.26 0.095 255)"
          : "oklch(0.26 0.095 255 / 0.97)",
        boxShadow: scrolled ? "0 2px 24px oklch(0.20 0.08 255 / 0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            data-ocid="header.link"
            className="flex items-center gap-2 group"
          >
            <img
              src="/assets/uploads/ChatGPT-Image-Mar-8-2026-07_00_08-PM-1.png"
              alt="Siddhi Vinayak Enterprises Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="header.link"
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "oklch(0.78 0.16 75)" }}
                />
              </a>
            ))}
          </nav>

          {/* Call Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9076213479"
              data-ocid="header.primary_button"
              className="hidden sm:flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-md transition-all duration-200"
              style={{
                backgroundColor: "oklch(0.78 0.16 75)",
                color: "oklch(0.20 0.08 255)",
              }}
            >
              <Phone className="w-4 h-4" />
              <span>9076213479</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="header.toggle"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t overflow-hidden"
            style={{
              borderColor: "oklch(0.35 0.08 255)",
              backgroundColor: "oklch(0.22 0.09 255)",
            }}
          >
            <nav className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="header.link"
                  className="text-white/90 hover:text-white font-medium py-2 border-b flex items-center justify-between"
                  style={{ borderColor: "oklch(0.35 0.08 255)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <a
                href="tel:9076213479"
                data-ocid="header.primary_button"
                className="flex items-center justify-center gap-2 font-semibold text-sm px-4 py-3 rounded-md mt-2"
                style={{
                  backgroundColor: "oklch(0.78 0.16 75)",
                  color: "oklch(0.20 0.08 255)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>📞 9076213479</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ============================================================
   HERO SECTION
   ============================================================ */
function HeroSection() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1400x700.jpg"
          alt="Siddhi Vinayak Enterprises Office"
          className="w-full h-full object-cover"
        />
        {/* Deep navy gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.20 0.08 255 / 0.92) 0%, oklch(0.26 0.095 255 / 0.85) 50%, oklch(0.20 0.08 255 / 0.90) 100%)",
          }}
        />
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase"
              style={{
                backgroundColor: "oklch(0.78 0.16 75 / 0.15)",
                color: "oklch(0.78 0.16 75)",
                border: "1px solid oklch(0.78 0.16 75 / 0.4)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Vashi, Navi Mumbai
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            तुमच्या सर्व शासकीय आणि कायदेशीर कामांसाठी{" "}
            <span style={{ color: "oklch(0.78 0.16 75)" }}>
              एकच विश्वसनीय ठिकाण!
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            वाशी, नवी मुंबई मधील विश्वासू सेवा केंद्र – आधार, पॅन, पासपोर्ट आणि स्टॅम्प पेपर
            सेवा एकाच छताखाली.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:9076213479"
              data-ocid="hero.primary_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-base transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "oklch(0.78 0.16 75)",
                color: "oklch(0.20 0.08 255)",
                boxShadow: "0 4px 20px oklch(0.78 0.16 75 / 0.4)",
              }}
            >
              <Phone className="w-5 h-5" />📞 Call Now
            </a>
            <a
              href="#contact"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-bold text-base transition-all duration-200 hover:bg-white hover:text-navy"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid oklch(1 0 0 / 0.5)",
              }}
            >
              Book Appointment
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {[
            { num: "7+", label: "सेवा प्रकार" },
            { num: "1000+", label: "समाधानी ग्राहक" },
            { num: "Fast", label: "जलद सेवा" },
            { num: "Legal", label: "अधिकृत केंद्र" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg px-4 py-3 text-center"
              style={{
                backgroundColor: "oklch(1 0 0 / 0.08)",
                border: "1px solid oklch(1 0 0 / 0.15)",
              }}
            >
              <div
                className="font-display font-bold text-2xl"
                style={{ color: "oklch(0.78 0.16 75)" }}
              >
                {stat.num}
              </div>
              <div className="text-white/70 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "oklch(0.78 0.16 75 / 0.5)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: "oklch(0.78 0.16 75)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   SERVICES SECTION
   ============================================================ */
function ServicesSection() {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionTitle en="Our Services" mr="आमच्या सेवा" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                data-ocid={`services.item.${i + 1}`}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  variants={cardHover}
                  className="h-full bg-white rounded-xl p-6 cursor-default"
                  style={{
                    border: "1px solid oklch(0.88 0.03 235)",
                    borderTop: "4px solid oklch(0.78 0.16 75)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "oklch(0.26 0.095 255 / 0.08)",
                    }}
                  >
                    <service.icon
                      className="w-6 h-6"
                      style={{ color: "oklch(0.26 0.095 255)" }}
                    />
                  </div>

                  {/* Tag */}
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3"
                    style={{
                      backgroundColor: "oklch(0.78 0.16 75 / 0.12)",
                      color: "oklch(0.55 0.12 75)",
                    }}
                  >
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display font-bold text-base mb-2 leading-tight"
                    style={{ color: "oklch(0.26 0.095 255)" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.40 0.04 255)" }}
                  >
                    {service.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   LEGAL SERVICES SECTION
   ============================================================ */
function LegalServicesSection() {
  const legalServices = [
    {
      icon: Scale,
      title: "Stamp Paper Service",
      subtitle: "स्टॅम्प पेपर सेवा",
      desc: "₹100 आणि ₹500 चे स्टॅम्प पेपर उपलब्ध. सर्व प्रकारच्या कायदेशीर कामांसाठी.",
      features: ["₹100 Stamp Paper", "₹500 Stamp Paper", "Same Day Service"],
    },
    {
      icon: FileText,
      title: "Advocate Works",
      subtitle: "अ‍ॅडव्होकेट सेवा",
      desc: "नावासह स्टॅम्प पेपर, Affidavit, Legal Documentation — सर्व कायदेशीर कामे एकाच ठिकाणी.",
      features: [
        "Affidavit Drafting",
        "Legal Documentation",
        "Notary Services",
      ],
    },
  ];

  return (
    <section
      id="legal-services"
      data-ocid="legal.section"
      className="py-20"
      style={{ backgroundColor: "oklch(0.96 0.02 235)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionTitle en="Legal Services" mr="कायदेशीर सेवा" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {legalServices.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-navy"
                style={{
                  border: "1px solid oklch(0.88 0.03 235)",
                }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "oklch(0.26 0.095 255)",
                    }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-xl mb-1"
                      style={{ color: "oklch(0.26 0.095 255)" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.78 0.16 75)" }}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.40 0.04 255)" }}
                >
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "oklch(0.78 0.16 75)" }}
                      />
                      <span
                        className="text-sm font-medium"
                        style={{ color: "oklch(0.30 0.05 255)" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "oklch(0.26 0.095 255)" }}
                >
                  अधिक माहितीसाठी संपर्क करा
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT SECTION
   ============================================================ */
function AboutSection() {
  const trustBadges = [
    {
      icon: Clock,
      title: "Fast Service",
      subtitle: "जलद सेवा",
      desc: "किमान प्रतीक्षा, जास्तीत जास्त कार्यक्षमता.",
    },
    {
      icon: CheckCircle,
      title: "Trusted Center",
      subtitle: "विश्वासार्ह केंद्र",
      desc: "नवी मुंबईतील हजारो नागरिकांचा विश्वास.",
    },
    {
      icon: Users,
      title: "Professional Team",
      subtitle: "व्यावसायिक टीम",
      desc: "अनुभवी आणि प्रशिक्षित कर्मचारी.",
    },
  ];

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20"
      style={{ backgroundColor: "oklch(0.26 0.095 255)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionTitle en="About Us" mr="आमच्याबद्दल" light />
          </motion.div>

          {/* Main content */}
          <motion.div
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: "oklch(1 0 0 / 0.06)",
                border: "1px solid oklch(1 0 0 / 0.12)",
              }}
            >
              <span
                className="font-display text-5xl font-bold mb-4 block"
                style={{ color: "oklch(0.78 0.16 75)" }}
              >
                ॐ
              </span>
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-4">
                सिद्धी विनायक एंटरप्रायझेस — वाशी, नवी मुंबई मधील एक विश्वासू शासकीय व
                कायदेशीर सेवा केंद्र.
              </p>
              <p className="text-white/75 leading-relaxed text-base">
                आम्ही नागरिकांना आधार, पॅन, पासपोर्ट, दाखले, स्टॅम्प पेपर आणि इतर सेवा
                जलद, सोप्या आणि विश्वासार्ह पद्धतीने उपलब्ध करून देतो.
              </p>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.title}
                variants={fadeUp}
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.12)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "oklch(0.78 0.16 75 / 0.15)",
                    border: "1px solid oklch(0.78 0.16 75 / 0.3)",
                  }}
                >
                  <badge.icon
                    className="w-7 h-7"
                    style={{ color: "oklch(0.78 0.16 75)" }}
                  />
                </div>
                <h3
                  className="font-display font-bold text-lg mb-1"
                  style={{ color: "oklch(0.78 0.16 75)" }}
                >
                  {badge.title}
                </h3>
                <p className="text-white/60 text-sm mb-2">{badge.subtitle}</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {badge.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT SECTION
   ============================================================ */
function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast.error("कृपया सर्व माहिती भरा (Please fill all fields)");
      return;
    }
    setStatus("loading");
    try {
      await actor?.submitContact(name.trim(), phone.trim(), message.trim());
      setStatus("success");
      toast.success(
        "धन्यवाद! आम्ही लवकरच संपर्क करू. (Thank you! We'll be in touch soon.)",
      );
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      toast.error("काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.");
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionTitle en="Contact Us" mr="संपर्क करा" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info + Map */}
            <motion.div variants={fadeUp} className="space-y-6">
              {/* Address Card */}
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "oklch(0.96 0.02 235)",
                  border: "1px solid oklch(0.88 0.03 235)",
                }}
              >
                <h3
                  className="font-display font-bold text-xl mb-4"
                  style={{ color: "oklch(0.26 0.095 255)" }}
                >
                  आमचा पत्ता / Our Address
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "oklch(0.78 0.16 75)" }}
                    />
                    <div>
                      <p
                        className="font-medium text-sm"
                        style={{ color: "oklch(0.26 0.095 255)" }}
                      >
                        Shop No.1, SS-4, Xerox Line,
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "oklch(0.40 0.04 255)" }}
                      >
                        Sector-2, Vashi, Navi Mumbai – 400703
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "oklch(0.78 0.16 75)" }}
                    />
                    <a
                      href="tel:9076213479"
                      data-ocid="contact.link"
                      className="font-semibold text-sm transition-colors"
                      style={{ color: "oklch(0.26 0.095 255)" }}
                    >
                      9076213479
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "oklch(0.78 0.16 75)" }}
                    />
                    <a
                      href="https://wa.me/919076213479"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.link"
                      className="font-semibold text-sm transition-colors"
                      style={{ color: "oklch(0.26 0.095 255)" }}
                    >
                      WhatsApp: +91 9076213479
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  border: "2px solid oklch(0.88 0.03 235)",
                }}
                data-ocid="contact.map_marker"
              >
                <iframe
                  title="Siddhi Vinayak Enterprises Location"
                  src="https://maps.google.com/maps?q=Sector+2,+Vashi,+Navi+Mumbai+400703&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={fadeUp}>
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "oklch(0.26 0.095 255)",
                  boxShadow: "0 8px 40px oklch(0.26 0.095 255 / 0.25)",
                }}
              >
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  अपॉईंटमेंट बुक करा
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Book an Appointment — आम्ही तुमच्याशी संपर्क साधू.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label
                      htmlFor="contact-name"
                      className="text-white/80 text-sm font-medium mb-1.5 block"
                    >
                      नाव / Name *
                    </Label>
                    <Input
                      id="contact-name"
                      data-ocid="contact.input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="तुमचे नाव / Your name"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold focus:ring-0"
                      style={{
                        borderColor: "oklch(1 0 0 / 0.2)",
                        backgroundColor: "oklch(1 0 0 / 0.08)",
                        color: "white",
                      }}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="contact-phone"
                      className="text-white/80 text-sm font-medium mb-1.5 block"
                    >
                      फोन / Phone *
                    </Label>
                    <Input
                      id="contact-phone"
                      data-ocid="contact.input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="तुमचा फोन नंबर / Your phone number"
                      type="tel"
                      required
                      style={{
                        borderColor: "oklch(1 0 0 / 0.2)",
                        backgroundColor: "oklch(1 0 0 / 0.08)",
                        color: "white",
                      }}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="contact-message"
                      className="text-white/80 text-sm font-medium mb-1.5 block"
                    >
                      संदेश / Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      data-ocid="contact.textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="तुम्हाला कोणती सेवा हवी आहे? / Which service do you need?"
                      rows={4}
                      required
                      style={{
                        borderColor: "oklch(1 0 0 / 0.2)",
                        backgroundColor: "oklch(1 0 0 / 0.08)",
                        color: "white",
                        resize: "none",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={status === "loading" || status === "success"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-md font-bold text-base transition-all duration-200 disabled:opacity-70"
                    style={{
                      backgroundColor: "oklch(0.78 0.16 75)",
                      color: "oklch(0.20 0.08 255)",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span data-ocid="contact.loading_state">
                          सबमिट होत आहे...
                        </span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span data-ocid="contact.success_state">धन्यवाद! ✓</span>
                      </>
                    ) : (
                      <>
                        <Phone className="w-5 h-5" />
                        अपॉईंटमेंट बुक करा / Submit
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "oklch(0.18 0.07 255)" }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b"
          style={{ borderColor: "oklch(1 0 0 / 0.1)" }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="font-display text-4xl font-bold"
                style={{ color: "oklch(0.78 0.16 75)" }}
              >
                ॐ
              </span>
              <div>
                <div
                  className="font-display font-bold text-lg"
                  style={{ color: "oklch(0.78 0.16 75)" }}
                >
                  Siddhi Vinayak Enterprises
                </div>
                <div className="text-white/50 text-xs">
                  Government & Legal Service Center
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              वाशी, नवी मुंबई मधील विश्वासू शासकीय व कायदेशीर सेवा केंद्र.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-sm mb-4 uppercase tracking-widest"
              style={{ color: "oklch(0.78 0.16 75)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["Legal Services", "#legal-services"],
                ["About Us", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-semibold text-sm mb-4 uppercase tracking-widest"
              style={{ color: "oklch(0.78 0.16 75)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-white/40" />
                <p className="text-white/60 text-sm">
                  Shop No.1, SS-4, Xerox Line,
                  <br />
                  Sector-2, Vashi, Navi Mumbai – 400703
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-white/40" />
                <a
                  href="tel:9076213479"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  9076213479
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0 text-white/40" />
                <a
                  href="https://wa.me/919076213479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {year}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-white/30 text-xs">
            Siddhi Vinayak Enterprises | Vashi, Navi Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   WHATSAPP FLOATING BUTTON
   ============================================================ */
function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919076213479"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform"
      style={{ backgroundColor: "#25D366" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
}

/* ============================================================
   MAIN APP
   ============================================================ */
export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <LegalServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
