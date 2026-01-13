"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Download,
  FileText,
} from "lucide-react"

const translations = {
  uk: {
    nav: { about: "Про мене", services: "Послуги", experience: "Досвід", portfolio: "Портфоліо", contact: "Контакт" },
    hero: {
      greeting: "Привіт,",
      intro: "Мене звати",
      role: "Креативний фахівець",
      description:
        "Досвідчений спеціаліст у веб-розробці, дизайні, фотографії та сфері обслуговування з багаторічним досвідом.",
      cta: "Зв'язатися",
      viewCV: "Переглянути CV",
      downloadCV: "Завантажити CV",
      available: "Доступний для роботи",
    },
    services: {
      title: "Мої",
      subtitle: "послуги",
      list: [
        {
          title: "Веб-розробка",
          description: "Створення сучасних веб-сайтів та веб-додатків з використанням React, Next.js та Tailwind CSS",
          icon: "💻",
        },
        {
          title: "Креативний дизайн",
          description: "UI/UX дизайн, брендинг, графічний дизайн та створення унікальних візуальних рішень",
          icon: "🎨",
        },
        {
          title: "Фото та моделювання",
          description: "Професійна фотозйомка, робота з перспективою, портфоліо зйомки та комерційна фотографія",
          icon: "📸",
        },
        {
          title: "Обслуговування клієнтів",
          description: "Досвід роботи офіціантом та кухарем у ресторанах України та Німеччини",
          icon: "🍽️",
        },
      ],
    },
    experience: {
      title: "Досвід",
      subtitle: "роботи",
      jobs: [
        {
          period: "2023 — Теперішній",
          role: "Офіціант",
          company: "Café Berlin",
          location: "Берлін, Німеччина",
          description: "Обслуговування гостей у популярному кафе, робота з міжнародною клієнтурою.",
        },
        {
          period: "2021 — 2023",
          role: "Кухар",
          company: "Restaurant Kyiv",
          location: "Київ, Україна",
          description: "Приготування страв української та європейської кухні, робота в команді.",
        },
        {
          period: "2019 — 2021",
          role: "Офіціант",
          company: "Gasthaus München",
          location: "Мюнхен, Німеччина",
          description: "Обслуговування в традиційному баварському ресторані, знання німецької кухні.",
        },
        {
          period: "2017 — 2019",
          role: "Помічник кухаря",
          company: "Ресторан Львів",
          location: "Львів, Україна",
          description: "Початок кар'єри, освоєння основ кулінарії та роботи на кухні.",
        },
      ],
    },
    portfolio: {
      title: "Портфоліо",
      viewProject: "Детальніше",
      projects: [
        {
          title: "E-commerce Platform",
          category: "Веб-розробка",
          description: "Сучасна платформа електронної комерції з Next.js та Stripe",
          tech: ["Next.js", "React", "Tailwind"],
        },
        {
          title: "Brand Identity Design",
          category: "Дизайн",
          description: "Комплексний брендинг для стартапу",
          tech: ["Figma", "Illustrator", "Photoshop"],
        },
        {
          title: "Fashion Photography",
          category: "Фотографія",
          description: "Професійна портфоліо зйомка для моделей",
          tech: ["Canon", "Lightroom", "Photoshop"],
        },
        {
          title: "Restaurant App",
          category: "Веб-розробка",
          description: "Система онлайн-замовлень для ресторану",
          tech: ["React", "Node.js", "MongoDB"],
        },
        {
          title: "Product Photography",
          category: "Фотографія",
          description: "Комерційна зйомка продуктів для e-commerce",
          tech: ["Studio", "Retouching"],
        },
        {
          title: "Mobile App UI",
          category: "Дизайн",
          description: "UI/UX дизайн мобільного додатку для фітнесу",
          tech: ["Figma", "Prototyping"],
        },
      ],
    },
    contact: {
      title: "Зв'яжіться",
      subtitle: "зі мною",
      cta: "Написати листа",
    },
    footer: {
      rights: "Всі права захищені",
    },
    cvModal: {
      title: "Резюме",
      close: "Закрити",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      services: "Dienstleistungen",
      experience: "Erfahrung",
      portfolio: "Portfolio",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo,",
      intro: "Ich bin",
      role: "Kreativer Spezialist",
      description:
        "Erfahrener Spezialist in Webentwicklung, Design, Fotografie und Kundenservice mit langjähriger Erfahrung.",
      cta: "Kontakt",
      viewCV: "Lebenslauf ansehen",
      downloadCV: "Lebenslauf herunterladen",
      available: "Verfügbar für Arbeit",
    },
    services: {
      title: "Meine",
      subtitle: "Dienstleistungen",
      list: [
        {
          title: "Webentwicklung",
          description: "Erstellung moderner Websites und Webanwendungen mit React, Next.js und Tailwind CSS",
          icon: "💻",
        },
        {
          title: "Kreatives Design",
          description: "UI/UX-Design, Branding, Grafikdesign und Erstellung einzigartiger visueller Lösungen",
          icon: "🎨",
        },
        {
          title: "Foto und Modellierung",
          description: "Professionelle Fotografie, Perspektivarbeit, Portfolio-Shootings und kommerzielle Fotografie",
          icon: "📸",
        },
        {
          title: "Kundenservice",
          description: "Erfahrung als Kellner und Koch in Restaurants in der Ukraine und Deutschland",
          icon: "🍽️",
        },
      ],
    },
    experience: {
      title: "Berufs",
      subtitle: "erfahrung",
      jobs: [
        {
          period: "2023 — Heute",
          role: "Kellner",
          company: "Café Berlin",
          location: "Berlin, Deutschland",
          description: "Gästebetreuung in einem beliebten Café, Arbeit mit internationaler Kundschaft.",
        },
        {
          period: "2021 — 2023",
          role: "Koch",
          company: "Restaurant Kyiv",
          location: "Kyiv, Ukraine",
          description: "Zubereitung von ukrainischen und europäischen Gerichten, Teamarbeit.",
        },
        {
          period: "2019 — 2021",
          role: "Kellner",
          company: "Gasthaus München",
          location: "München, Deutschland",
          description: "Service in einem traditionellen bayerischen Restaurant, Kenntnisse der deutschen Küche.",
        },
        {
          period: "2017 — 2019",
          role: "Küchenhelfer",
          company: "Restaurant Lviv",
          location: "Lviv, Ukraine",
          description: "Karrierebeginn, Erlernen der Grundlagen des Kochens und der Küchenarbeit.",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      viewProject: "Mehr erfahren",
      projects: [
        {
          title: "E-commerce Platform",
          category: "Webentwicklung",
          description: "Moderne E-Commerce-Plattform mit Next.js und Stripe",
          tech: ["Next.js", "React", "Tailwind"],
        },
        {
          title: "Brand Identity Design",
          category: "Design",
          description: "Umfassendes Branding für ein Startup",
          tech: ["Figma", "Illustrator", "Photoshop"],
        },
        {
          title: "Fashion Photography",
          category: "Fotografie",
          description: "Professionelle Portfolio-Shootings für Models",
          tech: ["Canon", "Lightroom", "Photoshop"],
        },
        {
          title: "Restaurant App",
          category: "Webentwicklung",
          description: "Online-Bestellsystem für Restaurant",
          tech: ["React", "Node.js", "MongoDB"],
        },
        {
          title: "Product Photography",
          category: "Fotografie",
          description: "Kommerzielle Produktfotografie für E-Commerce",
          tech: ["Studio", "Retouching"],
        },
        {
          title: "Mobile App UI",
          category: "Design",
          description: "UI/UX-Design einer Fitness-App",
          tech: ["Figma", "Prototyping"],
        },
      ],
    },
    contact: {
      title: "Kontaktieren",
      subtitle: "Sie mich",
      cta: "E-Mail senden",
    },
    footer: {
      rights: "Alle Rechte vorbehalten",
    },
    cvModal: {
      title: "Lebenslauf",
      close: "Schließen",
    },
  },
  en: {
    nav: { about: "About", services: "Services", experience: "Experience", portfolio: "Portfolio", contact: "Contact" },
    hero: {
      greeting: "Hello,",
      intro: "I'm",
      role: "Creative Specialist",
      description:
        "Experienced specialist in web development, design, photography, and customer service with years of expertise.",
      cta: "Contact me",
      viewCV: "View CV",
      downloadCV: "Download CV",
      available: "Available for work",
    },
    services: {
      title: "My",
      subtitle: "Services",
      list: [
        {
          title: "Web Development",
          description: "Creating modern websites and web applications using React, Next.js, and Tailwind CSS",
          icon: "💻",
        },
        {
          title: "Creative Design",
          description: "UI/UX design, branding, graphic design, and creating unique visual solutions",
          icon: "🎨",
        },
        {
          title: "Photo & Modeling",
          description: "Professional photography, perspective work, portfolio shoots, and commercial photography",
          icon: "📸",
        },
        {
          title: "Customer Service",
          description: "Experience as a waiter and cook in restaurants across Ukraine and Germany",
          icon: "🍽️",
        },
      ],
    },
    experience: {
      title: "Work",
      subtitle: "Experience",
      jobs: [
        {
          period: "2023 — Present",
          role: "Waiter",
          company: "Café Berlin",
          location: "Berlin, Germany",
          description: "Guest service in a popular café, working with international clientele.",
        },
        {
          period: "2021 — 2023",
          role: "Cook",
          company: "Restaurant Kyiv",
          location: "Kyiv, Ukraine",
          description: "Preparing Ukrainian and European cuisine, teamwork.",
        },
        {
          period: "2019 — 2021",
          role: "Waiter",
          company: "Gasthaus München",
          location: "Munich, Germany",
          description: "Service in a traditional Bavarian restaurant, knowledge of German cuisine.",
        },
        {
          period: "2017 — 2019",
          role: "Kitchen Assistant",
          company: "Restaurant Lviv",
          location: "Lviv, Ukraine",
          description: "Career start, learning the basics of cooking and kitchen work.",
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      viewProject: "View details",
      projects: [
        {
          title: "E-commerce Platform",
          category: "Web Development",
          description: "Modern e-commerce platform built with Next.js and Stripe",
          tech: ["Next.js", "React", "Tailwind"],
        },
        {
          title: "Brand Identity Design",
          category: "Design",
          description: "Comprehensive branding for a startup",
          tech: ["Figma", "Illustrator", "Photoshop"],
        },
        {
          title: "Fashion Photography",
          category: "Photography",
          description: "Professional portfolio shoots for models",
          tech: ["Canon", "Lightroom", "Photoshop"],
        },
        {
          title: "Restaurant App",
          category: "Web Development",
          description: "Online ordering system for restaurant",
          tech: ["React", "Node.js", "MongoDB"],
        },
        {
          title: "Product Photography",
          category: "Photography",
          description: "Commercial product photography for e-commerce",
          tech: ["Studio", "Retouching"],
        },
        {
          title: "Mobile App UI",
          category: "Design",
          description: "UI/UX design for fitness mobile app",
          tech: ["Figma", "Prototyping"],
        },
      ],
    },
    contact: {
      title: "Get in",
      subtitle: "Touch",
      cta: "Send email",
    },
    footer: {
      rights: "All rights reserved",
    },
    cvModal: {
      title: "Resume",
      close: "Close",
    },
  },
}

export default function Portfolio() {
  const [lang, setLang] = useState<"uk" | "de" | "en">("uk")
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cvModalOpen, setCvModalOpen] = useState(false)

  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [lang])

  const langLabels = { uk: "UA", de: "DE", en: "EN" }

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-2deg); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 5s ease-in-out infinite; }
        
        .skill-pill {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skill-pill:hover {
          transform: translateY(-4px) rotate(0deg) !important;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.2);
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Name */}
            <a href="#" className="group">
              <span className="text-2xl md:text-3xl font-black tracking-tight">
                Alex<span className="text-blue-600">.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
                {t.nav.services}
              </a>
              <a href="#experience" className="text-sm font-medium hover:text-blue-600 transition-colors">
                {t.nav.experience}
              </a>
              <a href="#portfolio" className="text-sm font-medium hover:text-blue-600 transition-colors">
                {t.nav.portfolio}
              </a>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium border border-neutral-200 rounded-full hover:border-blue-600 transition-colors"
                >
                  {langLabels[lang]}
                  <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {langDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden">
                    {(["uk", "de", "en"] as const).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l)
                          setLangDropdownOpen(false)
                        }}
                        className={`block w-full px-4 py-2 text-sm text-left hover:bg-neutral-50 transition-colors ${lang === l ? "bg-blue-50 text-blue-600" : ""}`}
                      >
                        {l === "uk" ? "Українська" : l === "de" ? "Deutsch" : "English"}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <a
                href="#contact"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors"
              >
                {t.nav.contact}
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-neutral-100 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  {t.nav.about}
                </a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  {t.nav.services}
                </a>
                <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  {t.nav.experience}
                </a>
                <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  {t.nav.portfolio}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full w-fit"
                >
                  {t.nav.contact}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="reveal">
                <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
                  {t.hero.available}
                </span>
              </div>

              <h1 className="reveal reveal-delay-1">
                <span className="block text-xl md:text-2xl font-light text-neutral-500 mb-2">{t.hero.greeting}</span>
                <span className="block text-xl md:text-2xl font-light text-neutral-500">{t.hero.intro}</span>
                <span className="block text-6xl md:text-8xl font-black tracking-tight leading-none mt-2">Alex</span>
                <span className="block text-6xl md:text-8xl font-black tracking-tight leading-none">
                  Morgan<span className="text-blue-600">.</span>
                </span>
              </h1>

              <p className="reveal reveal-delay-2 mt-6 text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed">
                {t.hero.description}
              </p>

              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                  {t.hero.cta}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setCvModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-neutral-900 text-neutral-900 font-semibold rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  {t.hero.viewCV}
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-100 text-neutral-900 font-semibold rounded-full hover:bg-neutral-200 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  {t.hero.downloadCV}
                </a>
              </div>

              <div className="reveal reveal-delay-4 mt-12 flex items-center gap-8 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Berlin, Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>alex@email.com</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="reveal relative">
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-600 rounded-2xl animate-float opacity-80" />
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-neutral-900 rounded-full animate-float-reverse" />
                <div className="absolute top-1/2 -right-8 w-12 h-12 border-2 border-blue-600 rounded-lg animate-float" />

                {/* Main image container */}
                <div className="relative bg-neutral-100 rounded-3xl overflow-hidden aspect-[4/5]">
                  <img
                    src="/professional-young-man-waiter-portrait-modern-mini.jpg"
                    alt="Alex Morgan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal mb-16">
            <h2 className="text-5xl md:text-7xl font-black">
              {t.services.title}
              <span className="font-serif italic font-normal text-blue-600"> {t.services.subtitle}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.services.list.map((service, index) => (
              <div key={index} className={`reveal reveal-delay-${(index % 4) + 1} group`}>
                <div className="h-full bg-neutral-50 p-8 rounded-3xl border border-neutral-200 hover:border-blue-600 hover:shadow-lg transition-all">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal mb-16">
            <h2 className="text-5xl md:text-7xl font-black">
              {t.experience.title}
              <span className="font-serif italic font-normal text-blue-600"> {t.experience.subtitle}</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 transform md:-translate-x-1/2" />

            {t.experience.jobs.map((job, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${(index % 4) + 1} relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div
                  className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-1/2 z-10"
                  style={{ top: "24px" }}
                />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                    <p className="text-blue-600 font-medium mb-1">{job.company}</p>
                    <p className="text-sm text-neutral-500 mb-3">{job.location}</p>
                    <p className="text-neutral-600">{job.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal mb-16">
            <h2 className="text-5xl md:text-7xl font-black">
              {t.portfolio.title}
              <span className="text-blue-600">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.portfolio.projects.map((project, index) => (
              <div key={index} className={`reveal reveal-delay-${(index % 4) + 1} group`}>
                {/* Browser-style card */}
                <div className="bg-white border-2 border-neutral-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 border-b-2 border-neutral-900">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs text-neutral-500 font-mono">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.com
                    </span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[4/3] bg-neutral-50 relative overflow-hidden">
                    <img
                      src={`/.jpg?height=300&width=400&query=${project.category.toLowerCase()}-${project.title.toLowerCase().replace(/\s+/g, "-")}-professional-work`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-neutral-600 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:gap-3 transition-all">
                      {t.portfolio.viewProject}
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              {t.contact.title}
              <span className="font-serif italic font-normal text-blue-400"> {t.contact.subtitle}</span>
            </h2>
          </div>

          <div className="reveal reveal-delay-1 flex justify-center gap-6 mb-12">
            <a
              href="mailto:alex@email.com"
              className="p-4 bg-white/10 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+491234567890" className="p-4 bg-white/10 rounded-full hover:bg-blue-600 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-4 bg-white/10 rounded-full hover:bg-blue-600 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="reveal reveal-delay-2">
            <a
              href="mailto:alex@email.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              {t.contact.cta}
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-2xl font-black">
              Alex<span className="text-blue-600">.</span>
            </span>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-neutral-500">© 2026 Alex Morgan. {t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {cvModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setCvModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
              <h3 className="text-2xl font-bold">{t.cvModal.title}</h3>
              <button
                onClick={() => setCvModalOpen(false)}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h2 className="text-4xl font-black mb-2">Alex Morgan</h2>
                  <p className="text-xl text-blue-600 mb-4">{t.hero.role}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>alex@email.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+49 123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Berlin, Germany</span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {t.services.list.map((service, index) => (
                      <div key={index} className="flex gap-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <h4 className="font-bold">{service.title}</h4>
                          <p className="text-sm text-neutral-600">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
                    {t.experience.title} {t.experience.subtitle}
                  </h3>
                  <div className="space-y-4">
                    {t.experience.jobs.map((job, index) => (
                      <div key={index} className="border-l-2 border-neutral-200 pl-4">
                        <span className="text-sm text-blue-600 font-medium">{job.period}</span>
                        <h4 className="text-lg font-bold">{job.role}</h4>
                        <p className="text-neutral-700">
                          {job.company} - {job.location}
                        </p>
                        <p className="text-sm text-neutral-600 mt-1">{job.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-4 p-6 border-t border-neutral-200 bg-neutral-50">
              <a
                href="/cv.pdf"
                download
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                {t.hero.downloadCV}
              </a>
              <button
                onClick={() => setCvModalOpen(false)}
                className="px-6 py-3 bg-neutral-200 text-neutral-900 font-semibold rounded-full hover:bg-neutral-300 transition-colors"
              >
                {t.cvModal.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
