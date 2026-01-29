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
      //greeting: "Привіт,",
      //intro: "Мене звати",
      role: "Креативний фахівець",
      description:
        "Досвідчений спеціаліст у веб-розробці, дизайні, фотографії та сфері обслуговування.",
      cta: "Зв'язатися",
      viewCV: "Переглянути CV",
      downloadCV: "Завантажити CV",
      available: "Відкритий для роботи",
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
          description: "UI/UX дизайн, брендинг, створення презентацій, графічний дизайн та створення унікальних візуальних рішень",
          icon: "🎨",
        },
        {
          title: "Фото та монтаж",
          description: "Предметна фотозйомка, робота з DaVinci Resolve, Sony Vegas, редагування та монтаж комерційних проектів, послуги моделі для комерційних зйомок",
          icon: "📸",
        },
        {
          title: "Обслуговування клієнтів",
          description: "Досвід роботи у закладах готельно-ресторанного бізнесу України",
          icon: "🍽️",
        },
      ],
    },
    experience: {
      title: "Досвід",
      subtitle: "роботи",
      jobs: [
        {
          period: "01.2026 — Теперішній",
          role: "Помічник кухаря",
          company: "Bar&Breakfast",
          location: "Тернопіль, Україна",
          description: "Допомога в приготуванні страв, європейська кухня.",
        },
        {
          period: "10.2025 — 01.2026",
          role: "Кухар",
          company: "ХАН",
          location: "Тернопіль, Україна",
          description: "Приготування фаст-фуду та донеру, комплексна робота з прийомом замовлень, касою, праця на складі.",
        },
        {
          period: "08-09.2025",
          role: "Касир",
          company: "Парк Ліхтарів",
          location: "Тернопіль, Україна",
          description: "Обслуговування клієнтів, робота з готівкою та касовим апаратом.",
        },
        {
          period: "Q2 2025 — Q3 2025",
          role: "Ранер",
          company: "Ресторан-пивоварня \"Ковчег\"",
          location: "Тернопіль, Україна",
          description: "Початок кар'єри, освоєння основ обслуговування гостей, робота в колективі.",
        },
      ],
    },
    portfolio: {
      title: "Портфоліо",
      viewProject: "Детальніше",
      projects: [
        {
          title: "E-commerce Platform for Kortex",
          category: "Веб-розробка",
          description: "Сучасна платформа електронної комерції з Next.js та Stripe",
          tech: ["Next.js", "React", "Tailwind"],
        },
        {
          title: "Платформа для персоналу ресторану",
          category: "Веб-розробка",
          description: "Робоче середовище для персоналу ресторану",
          tech: ["MERN", "React", "Node.js", "MongoDB"],
        },
        {
          title: "Дизайн презентацій та відеомонтаж",
          category: "Дизайн та монтаж",
          description: "Комерційна зйомка продуктів для e-commerce, редагування відео та створення презентацій",
          tech: ["Освітлення", "Студійна зйомка", "Photoshop", "Canva", "DaVinci Resolve"],
        }
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
      // Removed greeting and intro to match UA
      role: "Kreativer Spezialist",
      description:
        "Erfahrener Spezialist in Webentwicklung, Design, Fotografie und Kundenservice.",
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
          description: "UI/UX-Design, Branding, Präsentationserstellung, grafischer Design und Erstellung einzigartiger visueller Lösungen",
          icon: "🎨",
        },
        {
          title: "Foto & Montage",
          description: "Präsentationsfotografie, Arbeit mit DaVinci Resolve, Sony Vegas, Bearbeitung und Montage kommerzieller Projekte, Modell-Dienste für kommerzielle Shoots",
          icon: "📸",
        },
        {
          title: "Kundenservice",
          description: "Erfahrung in der Gastronomie- und Restaurantbranche in der Ukraine",
          icon: "🍽️",
        },
      ],
    },
    experience: {
      title: "Bерufs",
      subtitle: "Erfahrung",
      jobs: [
        {
          period: "01.2026 — Heute",
          role: "Küchenhilfe",
          company: "Bar&Breakfast",
          location: "Ternopil, Ukraine",
          description: "Hilfe bei der Zubereitung von Gerichten, європейська кухня.",
        },
        {
          period: "10.2025 — 01.2026",
          role: "Koch",
          company: "KHAN",
          location: "Ternopil, Ukraine",
          description: "Zubereitung von Fast Food und Döner, Bearbeitung von Bestellungen, Kasse und Lagerarbeit.",
        },
        {
          period: "08-09.2025",
          role: "Kassierer",
          company: "Park of Lanterns",
          location: "Ternopil, Ukraine",
          description: "Kundenservice, Umgang mit Bargeld und Kasse.",
        },
        {
          period: "Q2 2025 — Q3 2025",
          role: "Hilfskraft",
          company: "Restaraunt Kovcheg",
          location: "Ternopil, Ukraine",
          description: "Karrierestart, Erlernen der Grundlagen des Gästeservices und der Teamarbeit.",
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
          tech: ["Next.js", "React", "Tailwind4v"],
        },
        {
          title: "Presentation Design",
          category: "Design",
          description: "Umfassendes Branding für ein Startup",
          tech: ["Figma", "Canva"],
        },
        {
          title: "Restaurant App",
          category: "Webentwicklung",
          description: "Arbeitsumgebung für Restaurant-Mitarbeiter",
          tech: ["MERN", "React", "Node.js", "MongoDB"],
        }
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
      // Removed greeting and intro to match UA
      role: "Creative Specialist",
      description:
        "Experienced specialist in web development, design, photography, and customer service.",
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
          description: "UI/UX design, branding, presentation creation, graphic design, and unique visual solutions",
          icon: "🎨",
        },
        {
          title: "Photo & Editing",
          description: "Product photography, working with DaVinci Resolve, Sony Vegas, editing and assembling commercial projects, modeling services for commercial shoots",
          icon: "📸",
        },
        {
          title: "Customer Service",
          description: "Experience in the hospitality and restaurant industry in Ukraine",
          icon: "🍽️",
        },
      ],
    },
    experience: {
      title: "Work",
      subtitle: "Experience",
      jobs: [
        {
          period: "01.2026 — Present",
          role: "Kitchen Assistant",
          company: "Bar&Breakfast",
          location: "Ternopil, Ukraine",
          description: "Assisting in dish preparation, European cuisine.",
        },
        {
          period: "10.2025 — 01.2026",
          role: "Cook",
          company: "KHAN",
          location: "Ternopil, Ukraine",
          description: "Preparing fast food and doner, handling orders, cash register, and warehouse work.",
        },
        {
          period: "08-09.2025",
          role: "Cashier",
          company: "Park of Lanterns",
          location: "Ternopil, Ukraine",
          description: "Customer service, handling cash and cash register.",
        },
        {
          period: "Q2 2025 — Q3 2025",
          role: "Runner",
          company: "Restaurant-Brewery 'Kovcheg'",
          location: "Ternopil, Ukraine",
          description: "Career start, learning the basics of guest service and teamwork.",
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
          title: "Restaurant App",
          category: "Web Development",
          description: "Work environment for restaurant staff",
          tech: ["MERN", "React", "Node.js", "MongoDB"],
        }
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
                Oleksandr<span className="text-blue-600">.</span>
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
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="flex-1">
              <div className="max-w-xl">

              <h1 className="reveal reveal-delay-1">
                <span className="block text-6xl md:text-8xl font-black tracking-tight leading-none mt-2">Oleksandr</span>
                <span className="block text-6xl md:text-8xl font-black tracking-tight leading-none">
                  Markovych<span className="text-blue-600">.</span>
                </span>
              </h1>
              
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  {t.hero.role}
                </h2>
                <p className="text-lg md:text-xl text-neutral-700 mb-6">
                  {t.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 text-sm font-medium bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
                  >
                    {t.hero.cta}
                  </a>
                  <div className="flex gap-4">
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {t.hero.downloadCV}
                    </a>
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-neutral-300 rounded-full text-neutral-900 hover:border-blue-600 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      {t.hero.viewCV}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 max-w-xs mx-auto">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-auto rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                {t.nav.about}
              </h2>
              <p className="text-lg text-neutral-700 mb-4">
                {/* Add a short bio or introduction here */}
                Привіт, я Саша, креативний спеціаліст з України. Я займаюся веб-розробкою, дизайном, фотографією та обслуговуванням клієнтів. Моя мета - створювати інноваційні рішення, які надихають та приносять користь.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-sm font-medium bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
              >
                {t.hero.cta}
              </a>
            </div>
            <div className="flex-1">
              <img
                src="/about-image.jpg"
                alt="About Image"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            {t.services.title} {t.services.subtitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.list.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            {t.experience.title} {t.experience.subtitle}
          </h2>
          <div className="space-y-8">
            {t.experience.jobs.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {job.role}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {job.company} - {job.location}
                    </p>
                  </div>
                  <div className="text-sm text-neutral-500">
                    {job.period}
                  </div>
                </div>
                <p className="text-neutral-700">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            {t.portfolio.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.portfolio.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  {project.category}
                </p>
                <p className="text-neutral-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-blue-100 text-blue-600 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
                >
                  {t.portfolio.viewProject}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            {t.nav.contact}
          </h2>
          <div className="max-w-xl mx-auto">
            <form
              action="#"
              method="POST"
              className="bg-white p-8 rounded-lg shadow-md space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Ваше ім'я"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Ваш email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full p-3 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Ваше повідомлення"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                Відправити
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-500">
              {t.footer.rights} &copy; {new Date().getFullYear()} Oleksandr.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
