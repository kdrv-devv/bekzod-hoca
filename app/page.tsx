"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Send, MapPin, Mail, Globe } from "lucide-react"
import { useState } from "react"
import { translations, type Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("uz")
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white rounded-lg shadow-lg p-2">
        <Button
          size="sm"
          variant={language === "uz" ? "default" : "ghost"}
          onClick={() => setLanguage("uz")}
          className={language === "uz" ? "bg-turkish-red hover:bg-turkish-dark" : ""}
        >
          O'Z
        </Button>
        <Button
          size="sm"
          variant={language === "ru" ? "default" : "ghost"}
          onClick={() => setLanguage("ru")}
          className={language === "ru" ? "bg-turkish-red hover:bg-turkish-dark" : ""}
        >
          РУ
        </Button>
        <Button
          size="sm"
          variant={language === "en" ? "default" : "ghost"}
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-turkish-red hover:bg-turkish-dark" : ""}
        >
          EN
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-turkish-red to-turkish-dark py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-cream rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-cream rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white shadow-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="/ustoz2.png"
                    alt="Bekzod hoca - Turkish Language Teacher"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance">{t.heroTitle}</h1>
            <p className="text-2xl md:text-3xl text-cream mb-6">{t.heroSubtitle}</p>
            <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <a href="https://www.instagram.com/bekzod_hoca/" target="blank">
                <Button size="lg" className="bg-white cursor-pointer text-turkish-red hover:bg-cream transition-colors text-lg px-8">
                <Instagram className="mr-2 h-5 w-5" />
                {t.heroInstagram}
              </Button>
                </a>
              <a href="https://t.me/Turktili_Fergana" target="blank">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white cursor-pointer  text-white hover:bg-white hover:text-turkish-red transition-colors text-lg px-8 bg-transparent"
                >
                <Send className="mr-2 h-5 w-5" />
                {t.heroTelegram}
              </Button>
                </a>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">{t.aboutTitle}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.aboutP1}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.aboutP2}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.aboutP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">{t.coursesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Beginner */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-turkish-red rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">A1</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.beginnerTitle}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t.beginnerDesc}</p>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">{t.beginnerDuration}</p>
                  <p className="text-sm text-muted-foreground">{t.beginnerFrequency}</p>
                </div>
 <a href="https://t.me/Turktili_Fergana" target="blank">
                <Button className="w-full cursor-pointer bg-turkish-red hover:bg-turkish-dark">{t.learnMore}</Button>
                </a>              </CardContent>
            </Card>

            {/* Intermediate */}
            <Card className="border-2 border-turkish-red hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-turkish-dark rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">B1</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.intermediateTitle}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t.intermediateDesc}</p>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">{t.intermediateDuration}</p>
                  <p className="text-sm text-muted-foreground">{t.intermediateFrequency}</p>
                </div>
 <a href="https://t.me/Turktili_Fergana" target="blank">
                <Button className="w-full cursor-pointer bg-turkish-red hover:bg-turkish-dark">{t.learnMore}</Button>
                </a>              </CardContent>
            </Card>

            {/* Advanced */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-turkish-dark rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-2xl">C1</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.advancedTitle}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t.advancedDesc}</p>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">{t.advancedDuration}</p>
                  <p className="text-sm text-muted-foreground">{t.advancedFrequency}</p>
                </div>
                <a href="https://t.me/Turktili_Fergana" target="blank">
                <Button className="w-full cursor-pointer bg-turkish-red hover:bg-turkish-dark">{t.learnMore}</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">{t.testimonialsTitle}</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">{t.testimonialsDesc}</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-turkish-red" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.testimonial1Text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-turkish-red/10 rounded-full flex items-center justify-center">
                    <span className="text-turkish-red font-bold text-lg">K</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.testimonial1Name}</p>
                    <p className="text-sm text-muted-foreground">{t.testimonial1Location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-2 border-turkish-red hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-turkish-red" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.testimonial2Text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-turkish-red/10 rounded-full flex items-center justify-center">
                    <span className="text-turkish-red font-bold text-lg">D</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.testimonial2Name}</p>
                    <p className="text-sm text-muted-foreground">{t.testimonial2Location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-turkish-red" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.testimonial3Text}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-turkish-red/10 rounded-full flex items-center justify-center">
                    <span className="text-turkish-red font-bold text-lg">M</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.testimonial3Name}</p>
                    <p className="text-sm text-muted-foreground">{t.testimonial3Location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-turkish-red">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.socialTitle}</h2>
            <p className="text-xl text-cream mb-12 leading-relaxed">{t.socialDesc}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              
              <Card className="hover:shadow-xl transition-shadow cursor-pointer">
                <a href="https://www.instagram.com/bekzod_hoca/" target="blank">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                    <Instagram className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Instagram</h3>
                  <p className="text-muted-foreground mb-4">{t.instagramHandle}</p>
                  <p className="text-sm text-muted-foreground text-center">{t.instagramDesc}</p>
                </CardContent>
                </a>

              </Card>

              <Card className="hover:shadow-xl transition-shadow cursor-pointer">
                <a href="https://t.me/Turktili_Fergana" target="blank">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Telegram</h3>
                  <p className="text-muted-foreground mb-4">{t.telegramHandle}</p>
                  <p className="text-sm text-muted-foreground text-center">{t.telegramDesc}</p>
                </CardContent>
                </a>

              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">{t.locationTitle}</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-turkish-red rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{t.locationCity}</h3>
                        <p className="text-muted-foreground">{t.locationCityDesc}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-turkish-dark rounded-lg flex items-center justify-center flex-shrink-0">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{t.locationOnline}</h3>
                        <p className="text-muted-foreground">{t.locationOnlineDesc}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg overflow-hidden h-64 md:h-auto">
                    <img
                      src="/najotilmda.png"
                      alt="Istanbul cityscape"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">{t.contactTitle}</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">{t.contactDesc}</p>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t.nameLabel}
                    </label>
                    <Input
                      id="name"
                      placeholder={t.namePlaceholder}
                      className="w-full"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t.phoneLabel}
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      className="w-full"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t.messageLabel}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t.messagePlaceholder}
                      rows={5}
                      className="w-full"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      {t.successMessage}
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      {t.errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-turkish-red hover:bg-turkish-dark text-white"
                    disabled={isSubmitting}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {isSubmitting ? t.sendingButton : t.sendButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-turkish-dark py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{t.heroTitle}</h3>
            <p className="text-cream/80 mb-6">{t.heroSubtitle}</p>

            <div className="flex justify-center gap-6 mb-8">

              <a
              target="blank"
                href="https://www.instagram.com/bekzod_hoca/"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>

              <a
                href="https://t.me/Turktili_Fergana"
                target="blank"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-6 w-6 text-white" />
              </a>
            </div>

            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} {t.heroTitle} – {t.footerCopyright}
            </p>
            <br />
            <p className="text-cream/60 text-xs">Programmer: <a className="underline" href="https://t.me/kadirovs_blogg" target="blank">KadirovJS</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
