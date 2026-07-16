"use client"

import type { FormEvent } from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { LucideIcon } from "lucide-react"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpenText,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Globe2,
  GraduationCap,
  Instagram,
  Landmark,
  LoaderCircle,
  MapPin,
  MessageCircleMore,
  MessagesSquare,
  Navigation,
  PhoneCall,
  Quote,
  Route,
  Send,
  Sparkles,
  Star,
  Target,
  Video,
  X,
} from "lucide-react"
import { useTranslation } from "react-i18next"

import "@/lib/i18n"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  languageOptions,
  type Language,
} from "@/lib/translations"

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

const INSTAGRAM_URL = "https://www.instagram.com/bekzod_hoca/"
const TELEGRAM_URL = "https://t.me/Turktili_Fergana"
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=40.38590010165583%2C71.78655515844427"
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d741.5859288239686!2d71.78655515844427!3d40.38590010165583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb839bee163acf%3A0x30d540a537349f53!2sNAJOT%20ILMDA%20O%E2%80%98quv%20markazi!5e0!3m2!1sen!2s!4v1784232579915!5m2!1sen!2s"

const courseKeys = ["zero", "one", "two"] as const
const reviewKeys = ["zero", "one", "two"] as const
const faqKeys = ["zero", "one", "two", "three", "four"] as const

const methodItems: Array<{
  key: "speaking" | "system" | "culture" | "feedback"
  icon: LucideIcon
  className: string
}> = [
  { key: "speaking", icon: MessagesSquare, className: "method-cell--speaking" },
  { key: "system", icon: Route, className: "method-cell--system" },
  { key: "culture", icon: Landmark, className: "method-cell--culture" },
  { key: "feedback", icon: Target, className: "method-cell--feedback" },
]

type LeadFormProps = {
  className?: string
  showMessage?: boolean
}

function LeadForm({ className = "", showMessage = true }: LeadFormProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [phoneError, setPhoneError] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  )

  const validatePhone = (phone: string) => {
    const digitCount = phone.replace(/\D/g, "").length
    const isValid =
      digitCount >= 7 &&
      digitCount <= 15 &&
      /^[+\d\s().-]+$/.test(phone.trim())

    setPhoneError(isValid ? "" : t("lead.invalidPhone"))
    return isValid
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (status === "submitting" || !validatePhone(formData.phone)) {
      return
    }

    setStatus("submitting")

    const submittedForm = new FormData(event.currentTarget)
    const website = String(submittedForm.get("website") ?? "")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          website,
        }),
      })

      if (!response.ok) {
        setStatus("error")
        return
      }

      setStatus("success")
      setFormData({ name: "", phone: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className={`lead-success ${className}`} role="status" aria-live="polite">
        <span className="lead-success__icon" aria-hidden="true">
          <CheckCircle2 />
        </span>
        <p>{t("lead.success")}</p>
      </div>
    )
  }

  return (
    <form className={`lead-form ${className}`} onSubmit={handleSubmit} noValidate>
      <div className="lead-honeypot" aria-hidden="true">
        <label htmlFor={`website-${showMessage ? "full" : "modal"}`}>Website</label>
        <input
          id={`website-${showMessage ? "full" : "modal"}`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="lead-form__field">
        <label htmlFor={`name-${showMessage ? "full" : "modal"}`}>
          {t("lead.nameLabel")}
        </label>
        <Input
          id={`name-${showMessage ? "full" : "modal"}`}
          name="name"
          value={formData.name}
          maxLength={80}
          autoComplete="name"
          placeholder={t("lead.namePlaceholder")}
          onChange={(event) =>
            setFormData((current) => ({ ...current, name: event.target.value }))
          }
        />
      </div>

      <div className="lead-form__field">
        <label htmlFor={`phone-${showMessage ? "full" : "modal"}`}>
          {t("lead.phoneLabel")}
        </label>
        <Input
          id={`phone-${showMessage ? "full" : "modal"}`}
          name="phone"
          type="tel"
          inputMode="tel"
          value={formData.phone}
          maxLength={32}
          autoComplete="tel"
          required
          aria-invalid={Boolean(phoneError)}
          aria-describedby={
            phoneError ? `phone-error-${showMessage ? "full" : "modal"}` : undefined
          }
          placeholder={t("lead.phonePlaceholder")}
          onBlur={() => {
            if (formData.phone) validatePhone(formData.phone)
          }}
          onChange={(event) => {
            setFormData((current) => ({ ...current, phone: event.target.value }))
            if (phoneError) setPhoneError("")
            if (status === "error") setStatus("idle")
          }}
        />
        {phoneError ? (
          <p
            id={`phone-error-${showMessage ? "full" : "modal"}`}
            className="lead-form__error"
          >
            {phoneError}
          </p>
        ) : null}
      </div>

      {showMessage ? (
        <div className="lead-form__field">
          <label htmlFor="message-full">{t("lead.messageLabel")}</label>
          <Textarea
            id="message-full"
            name="message"
            value={formData.message}
            maxLength={1500}
            rows={4}
            placeholder={t("lead.messagePlaceholder")}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
          />
        </div>
      ) : null}

      <p className="lead-form__consent">{t("lead.consent")}</p>

      {status === "error" ? (
        <p className="lead-form__status lead-form__status--error" role="alert">
          {t("lead.error")}
        </p>
      ) : null}

      <Button
        type="submit"
        className="lead-form__submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <LoaderCircle className="animate-spin" aria-hidden="true" />
        ) : (
          <PhoneCall aria-hidden="true" />
        )}
        {status === "submitting" ? t("lead.submitting") : t("lead.submit")}
      </Button>
    </form>
  )
}

export function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [leadDialogOpen, setLeadDialogOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const language = (
    languageOptions.some((option) => option.code === i18n.resolvedLanguage)
      ? i18n.resolvedLanguage
      : "uz"
  ) as Language

  const changeLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem("bekzod-hoca-language", nextLanguage)
    void i18n.changeLanguage(nextLanguage)
  }

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("bekzod-hoca-language")

    if (
      savedLanguage &&
      languageOptions.some((option) => option.code === savedLanguage)
    ) {
      void i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      })

      intro
        .from(".site-header", {
          y: -80,
          opacity: 0,
          duration: 0.75,
        })
        .from(
          "[data-hero-word]",
          {
            yPercent: 45,
            rotate: 1.5,
            opacity: 0.7,
            stagger: 0.1,
            duration: 0.95,
          },
          "-=0.35",
        )
        .from(
          ".hero-copy [data-hero-support]",
          {
            y: 18,
            opacity: 0.72,
            stagger: 0.08,
            duration: 0.65,
          },
          "-=0.55",
        )
        .from(
          ".hero-portrait-frame",
          {
            y: 26,
            scale: 0.94,
            opacity: 0.76,
            filter: "saturate(0.72)",
            duration: 1.15,
          },
          "-=0.9",
        )
        .from(
          ".hero-stamp, .hero-greeting",
          {
            scale: 0.65,
            opacity: 0.72,
            stagger: 0.12,
            duration: 0.55,
          },
          "-=0.5",
        )

      gsap.to(".hero-rosette--one", {
        rotate: 180,
        duration: 36,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".hero-rosette--two", {
        rotate: -180,
        duration: 48,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".scroll-progress__bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.25,
        },
      })

      gsap.to(".hero-portrait-frame", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.utils.toArray<HTMLElement>("[data-reveal='heading']").forEach((item) => {
        gsap.from(item, {
          y: 22,
          opacity: 0.78,
          filter: "blur(2px)",
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            once: true,
          },
        })
      })

      gsap.from(".course-stage", {
        y: (index) => (index % 2 === 0 ? 38 : 20),
        opacity: 0.68,
        stagger: 0.12,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".course-rail",
          start: "top 78%",
          once: true,
        },
      })

      gsap.from(".method-cell", {
        clipPath: "inset(0 8% 0 0 round 16px)",
        opacity: 0.72,
        stagger: 0.1,
        duration: 0.9,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".method-grid",
          start: "top 78%",
          once: true,
        },
      })

      gsap.from(".review-card", {
        y: 30,
        opacity: 0.68,
        stagger: 0.1,
        duration: 0.85,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".reviews-grid",
          start: "top 80%",
          once: true,
        },
      })

      gsap.to(".social-backdrop img", {
        scale: 1.12,
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".social-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.from(".map-frame", {
        clipPath: "inset(0 10% 0 0 round 16px)",
        opacity: 0.76,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".location-layout",
          start: "top 78%",
          once: true,
        },
      })
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="site-shell">
      <a className="skip-link" href="#main-content">
        {t("common.viewCourses")}
      </a>

      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" />
      </div>

      <header className="site-header">
        <div className="site-container site-header__inner">
          <a href="#top" className="brand-mark" aria-label="Bekzod Hoca">
            <span className="brand-mark__monogram" aria-hidden="true">
              BH
            </span>
            <span className="brand-mark__name">
              Bekzod
              <span>Hoca</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
            <a href="#about">{t("nav.about")}</a>
            <a href="#courses">{t("nav.courses")}</a>
            <a href="#method">{t("nav.method")}</a>
            <a href="#reviews">{t("nav.reviews")}</a>
            <a href="#location">{t("nav.location")}</a>
          </nav>

          <div className="site-header__actions">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="language-trigger"
                  aria-label="Tilni tanlash"
                >
                  <Globe2 aria-hidden="true" />
                  {
                    languageOptions.find((option) => option.code === language)
                      ?.shortLabel
                  }
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="language-menu"
              >
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={(value) => changeLanguage(value as Language)}
                >
                  {languageOptions.map((option) => (
                    <DropdownMenuRadioItem key={option.code} value={option.code}>
                      <span>{option.label}</span>
                      <span className="language-menu__code">
                        {option.shortLabel}
                      </span>
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              type="button"
              className="header-cta"
              onClick={() => setLeadDialogOpen(true)}
            >
              <PhoneCall aria-hidden="true" />
              <span>{t("common.consultation")}</span>
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero">
          <div className="hero-rosette hero-rosette--one" aria-hidden="true" />
          <div className="hero-rosette hero-rosette--two" aria-hidden="true" />
          <span className="hero-city hero-city--left" aria-hidden="true">
            Farg‘ona
          </span>
          <span className="hero-city hero-city--right" aria-hidden="true">
            İstanbul
          </span>

          <div className="site-container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker" data-hero-support>
                <span className="hero-kicker__dot" aria-hidden="true" />
                {t("hero.kicker")}
              </div>

              <h1 className="hero-title">
                <span className="hero-title__line">
                  <span data-hero-word>{t("hero.titleLead")}</span>
                </span>
                <span className="hero-title__line hero-title__line--accent">
                  <span data-hero-word>{t("hero.titleStrong")}</span>
                </span>
                <span className="hero-title__line">
                  <span data-hero-word>{t("hero.titleTail")}</span>
                </span>
              </h1>

              <p className="hero-description" data-hero-support>
                {t("hero.description")}
              </p>

              <div className="hero-actions" data-hero-support>
                <Button
                  type="button"
                  className="hero-primary-cta"
                  onClick={() => setLeadDialogOpen(true)}
                >
                  {t("common.start")}
                  <ArrowRight aria-hidden="true" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="hero-secondary-cta"
                >
                  <a href="#courses">
                    {t("common.viewCourses")}
                    <ArrowDown aria-hidden="true" />
                  </a>
                </Button>
              </div>

              <div className="hero-availability" data-hero-support>
                <span className="hero-availability__avatars" aria-hidden="true">
                  <span>K</span>
                  <span>D</span>
                  <span>M</span>
                </span>
                <span>
                  <Check aria-hidden="true" />
                  {t("hero.availability")}
                </span>
              </div>
            </div>

            <div className="hero-visual" aria-label={t("hero.portraitCaption")}>
              <div className="hero-halo" aria-hidden="true" />
              <div className="hero-portrait-frame">
                <Image
                  src="/ustoz2.png"
                  alt={t("hero.portraitAlt")}
                  fill
                  priority
                  sizes="(max-width: 767px) 88vw, (max-width: 1199px) 46vw, 520px"
                />
                <div className="hero-portrait-shade" aria-hidden="true" />
                <div className="hero-portrait-caption">
                  <strong>{t("hero.portraitCaption")}</strong>
                  <span>{t("hero.portraitRole")}</span>
                </div>
              </div>

              <div className="hero-stamp" aria-label="TYS, CEFR C1">
                <Award aria-hidden="true" />
                <strong>TYS</strong>
                <span>CEFR C1</span>
              </div>

              <div className="hero-greeting" lang="tr">
                <Sparkles aria-hidden="true" />
                Merhaba!
              </div>
            </div>
          </div>

          <a className="hero-scroll" href="#about">
            <span>{t("hero.scroll")}</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section className="proof-strip" aria-label="Tajriba va format">
          <div className="site-container proof-strip__inner">
            <div className="proof-item">
              <Clock3 aria-hidden="true" />
              <div>
                <strong>{t("proof.yearsValue")}</strong>
                <span>{t("proof.yearsLabel")}</span>
              </div>
            </div>
            <div className="proof-item">
              <Award aria-hidden="true" />
              <div>
                <strong>{t("proof.certificateValue")}</strong>
                <span>{t("proof.certificateLabel")}</span>
              </div>
            </div>
            <div className="proof-item">
              <Video aria-hidden="true" />
              <div>
                <strong>{t("proof.formatValue")}</strong>
                <span>{t("proof.formatLabel")}</span>
              </div>
            </div>
            <div className="proof-item">
              <GraduationCap aria-hidden="true" />
              <div>
                <strong>{t("proof.communityValue")}</strong>
                <span>{t("proof.communityLabel")}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="site-container about-layout">
            <div className="about-copy">
              <p className="section-index" aria-hidden="true">
                Bekzod Hoca
              </p>
              <h2 data-reveal="heading">{t("about.heading")}</h2>
              <p className="about-lead">{t("about.lead")}</p>
              <p>{t("about.body")}</p>
            </div>

            <div className="about-artifact">
              <div className="about-artifact__word" lang="tr" aria-hidden="true">
                konuş
              </div>
              <blockquote>
                <Quote aria-hidden="true" />
                <p>{t("about.quote")}</p>
              </blockquote>
              <div className="about-points">
                <div className="about-point">
                  <span>
                    <Award aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{t("about.certificate")}</h3>
                    <p>{t("about.certificateText")}</p>
                  </div>
                </div>
                <div className="about-point">
                  <span>
                    <Route aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{t("about.personal")}</h3>
                    <p>{t("about.personalText")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="section courses-section">
          <div className="site-container">
            <div className="section-heading section-heading--split">
              <h2 data-reveal="heading">{t("courses.heading")}</h2>
              <p>{t("courses.description")}</p>
            </div>

            <div className="course-rail">
              {courseKeys.map((key, index) => (
                <article
                  key={key}
                  className={`course-stage ${
                    index === 1 ? "course-stage--featured" : ""
                  }`}
                >
                  <div className="course-stage__top">
                    <span className="course-stage__level">
                      {t(`courses.items.${key}.level`)}
                    </span>
                    {index === 1 ? (
                      <span className="course-stage__popular">
                        <Star aria-hidden="true" />
                        {t("courses.current")}
                      </span>
                    ) : (
                      <span className="course-stage__number" aria-hidden="true">
                        0{index + 1}
                      </span>
                    )}
                  </div>

                  <h3>{t(`courses.items.${key}.title`)}</h3>
                  <p className="course-stage__description">
                    {t(`courses.items.${key}.description`)}
                  </p>

                  <dl className="course-stage__details">
                    <div>
                      <dt>
                        <Clock3 aria-hidden="true" />
                        {t("courses.durationLabel")}
                      </dt>
                      <dd>{t(`courses.items.${key}.duration`)}</dd>
                    </div>
                    <div>
                      <dt>
                        <CalendarDays aria-hidden="true" />
                        {t("courses.frequencyLabel")}
                      </dt>
                      <dd>{t(`courses.items.${key}.frequency`)}</dd>
                    </div>
                    <div>
                      <dt>
                        <Target aria-hidden="true" />
                        {t("courses.resultLabel")}
                      </dt>
                      <dd>{t(`courses.items.${key}.result`)}</dd>
                    </div>
                  </dl>

                  <Button
                    type="button"
                    variant={index === 1 ? "secondary" : "outline"}
                    className="course-stage__cta"
                    onClick={() => setLeadDialogOpen(true)}
                  >
                    {t("common.learnMore")}
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="section method-section">
          <div className="site-container">
            <div className="method-intro">
              <h2 data-reveal="heading">{t("method.heading")}</h2>
              <p>{t("method.description")}</p>
            </div>

            <div className="method-grid">
              {methodItems.map(({ key, icon: Icon, className }, index) => (
                <article key={key} className={`method-cell ${className}`}>
                  <div className="method-cell__meta">
                    <Icon aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{t(`method.items.${key}.title`)}</h3>
                  <p>{t(`method.items.${key}.text`)}</p>
                </article>
              ))}
            </div>

            <p className="method-note">
              <span aria-hidden="true">→</span>
              {t("method.note")}
            </p>
          </div>
        </section>

        <section id="reviews" className="section reviews-section">
          <div className="site-container">
            <div className="section-heading section-heading--split">
              <h2 data-reveal="heading">{t("reviews.heading")}</h2>
              <p>{t("reviews.description")}</p>
            </div>

            <div className="reviews-grid">
              {reviewKeys.map((key, index) => (
                <figure
                  key={key}
                  className={`review-card ${
                    index === 0 ? "review-card--featured" : ""
                  }`}
                >
                  <div className="review-card__stars" aria-label="5 / 5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote>
                    <p>“{t(`reviews.items.${key}.text`)}”</p>
                  </blockquote>
                  <figcaption>
                    <span className="review-card__avatar" aria-hidden="true">
                      {t(`reviews.items.${key}.name`).slice(0, 1)}
                    </span>
                    <span>
                      <strong>{t(`reviews.items.${key}.name`)}</strong>
                      <small>{t(`reviews.items.${key}.location`)}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section social-section">
          <div className="social-backdrop" aria-hidden="true">
            <Image
              src="/istanbul-cityscape-bosphorus.jpg"
              alt=""
              fill
              sizes="100vw"
            />
          </div>
          <div className="social-overlay" aria-hidden="true" />
          <div className="site-container social-content">
            <div className="social-copy">
              <h2 data-reveal="heading">{t("social.heading")}</h2>
              <p>{t("social.description")}</p>
            </div>

            <div className="social-links">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="social-link social-link--instagram"
              >
                <span className="social-link__icon">
                  <Instagram aria-hidden="true" />
                </span>
                <span>
                  <strong>Instagram</strong>
                  <small>{t("social.instagramText")}</small>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="social-link social-link--telegram"
              >
                <span className="social-link__icon">
                  <Send aria-hidden="true" />
                </span>
                <span>
                  <strong>Telegram</strong>
                  <small>{t("social.telegramText")}</small>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="location" className="section location-section">
          <div className="site-container">
            <div className="section-heading section-heading--split">
              <h2 data-reveal="heading">{t("location.heading")}</h2>
              <p>{t("location.description")}</p>
            </div>

            <div className="location-layout">
              <div className="map-frame">
                <iframe
                  src={MAP_EMBED_URL}
                  title={t("location.mapTitle")}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <div className="map-frame__badge">
                  <span aria-hidden="true">
                    <MapPin />
                  </span>
                  <div>
                    <strong>{t("location.center")}</strong>
                    <small>{t("location.address")}</small>
                  </div>
                </div>
              </div>

              <aside className="location-card">
                <div className="location-card__pin" aria-hidden="true">
                  <MapPin />
                </div>
                <p className="location-card__label">{t("location.center")}</p>
                <h3>{t("location.address")}</h3>

                <div className="location-options">
                  <div>
                    <span>
                      <Landmark aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{t("location.offline")}</strong>
                      <p>{t("location.offlineText")}</p>
                    </div>
                  </div>
                  <div>
                    <span>
                      <Video aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{t("location.online")}</strong>
                      <p>{t("location.onlineText")}</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="location-card__cta">
                  <a href={MAP_URL} target="_blank" rel="noreferrer noopener">
                    <Navigation aria-hidden="true" />
                    {t("common.openMap")}
                  </a>
                </Button>
              </aside>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="site-container faq-layout">
            <div className="faq-intro">
              <h2 data-reveal="heading">{t("faq.heading")}</h2>
              <p>{t("faq.description")}</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => setLeadDialogOpen(true)}
              >
                <MessageCircleMore aria-hidden="true" />
                {t("common.consultation")}
              </Button>
            </div>

            <Accordion type="single" collapsible className="faq-list">
              {faqKeys.map((key, index) => (
                <AccordionItem key={key} value={key} className="faq-item">
                  <AccordionTrigger className="faq-question">
                    <span className="faq-question__number" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span>{t(`faq.items.${key}.question`)}</span>
                  </AccordionTrigger>
                  <AccordionContent className="faq-answer">
                    {t(`faq.items.${key}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-rosette" aria-hidden="true" />
          <div className="site-container contact-layout">
            <div className="contact-copy">
              <span className="contact-copy__icon" aria-hidden="true">
                <PhoneCall />
              </span>
              <h2 data-reveal="heading">{t("lead.sectionTitle")}</h2>
              <p>{t("lead.sectionDescription")}</p>
              <div className="contact-direct">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Send aria-hidden="true" />
                  @Turktili_Fergana
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Instagram aria-hidden="true" />
                  @bekzod_hoca
                </a>
              </div>
            </div>

            <div className="contact-form-panel">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container site-footer__grid">
          <div className="site-footer__brand">
            <a href="#top" className="brand-mark brand-mark--footer">
              <span className="brand-mark__monogram" aria-hidden="true">
                BH
              </span>
              <span className="brand-mark__name">
                Bekzod
                <span>Hoca</span>
              </span>
            </a>
            <p>{t("footer.tagline")}</p>
          </div>

          <div className="site-footer__nav">
            <strong>{t("footer.navigation")}</strong>
            <a href="#about">{t("nav.about")}</a>
            <a href="#courses">{t("nav.courses")}</a>
            <a href="#location">{t("nav.location")}</a>
            <a href="#faq">{t("nav.faq")}</a>
          </div>

          <div className="site-footer__nav">
            <strong>{t("footer.contact")}</strong>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener">
              Instagram
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer noopener">
              Telegram
            </a>
            <button type="button" onClick={() => setLeadDialogOpen(true)}>
              {t("common.consultation")}
            </button>
          </div>
        </div>

        <div className="site-container site-footer__bottom">
          <p>
            © {new Date().getFullYear()} Bekzod Hoca. {t("footer.rights")}
          </p>
          <p>
            {t("footer.developer")}{" "}
            <a
              href="https://t.me/kadirovs_blogg"
              target="_blank"
              rel="noreferrer noopener"
            >
              KadirovJS
            </a>
          </p>
        </div>
      </footer>

      <div className="mobile-cta">
        <Button type="button" onClick={() => setLeadDialogOpen(true)}>
          <PhoneCall aria-hidden="true" />
          {t("mobileCta")}
        </Button>
      </div>

      <Dialog open={leadDialogOpen} onOpenChange={setLeadDialogOpen}>
        <DialogContent className="lead-dialog" showCloseButton={false}>
          <DialogClose className="lead-dialog__close">
            <X aria-hidden="true" />
            <span className="sr-only">{t("common.close")}</span>
          </DialogClose>
          <DialogHeader>
            <span className="lead-dialog__icon" aria-hidden="true">
              <BookOpenText />
            </span>
            <DialogTitle>{t("lead.modalTitle")}</DialogTitle>
            <DialogDescription>{t("lead.modalDescription")}</DialogDescription>
          </DialogHeader>
          <LeadForm showMessage={false} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
