import React, { useState } from 'react'

const APP_BASE = 'https://app.core4xapp.com'
const APP_LEGAL_BASE = 'https://app.core4xapp.com'

const STRIPE_LINKS = {
  pro: import.meta.env.VITE_STRIPE_PRO_URL || '',
  business: import.meta.env.VITE_STRIPE_BUSINESS_URL || '',
  event48: import.meta.env.VITE_STRIPE_EVENT48_URL || '',
}

type StripePlan = keyof typeof STRIPE_LINKS

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const Modal: React.FC<{ title: string; onClose: () => void; children: React.ReactNode }> = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0">
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
    <div className="relative bg-white rounded-[1.75rem] w-full max-w-lg max-h-[82vh] overflow-y-auto p-6 md:p-8 z-10 shadow-2xl">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-black">{title}</h3>
        <button onClick={onClose} className="text-black/40 hover:text-black text-2xl font-black leading-none">×</button>
      </div>
      <div className="text-sm text-black/70 leading-relaxed space-y-3">{children}</div>
    </div>
  </div>
)

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F3E8]/90 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <button onClick={() => go('top')} className="flex items-center gap-3">
          <img src="/core4x-icon-512.png" alt="Core4X" className="h-9 w-9 rounded-xl shadow-sm" width={36} height={36} />
          <span className="text-xl font-black tracking-tight">Core<span className="text-[#B5A47A]">4X</span></span>
        </button>

        <div className="hidden md:flex items-center gap-7">
          <button onClick={() => go('features')} className="text-sm font-bold text-black/55 hover:text-black">Funktionen</button>
          <button onClick={() => go('preise')} className="text-sm font-bold text-black/55 hover:text-black">Tarife</button>
          <button onClick={() => go('vergleich')} className="text-sm font-bold text-black/55 hover:text-black">Vergleich</button>
          <button onClick={() => go('faq')} className="text-sm font-bold text-black/55 hover:text-black">FAQ</button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={APP_BASE} className="px-4 py-2.5 rounded-xl text-sm font-black text-black/65 hover:text-black">App öffnen</a>
          <button onClick={() => go('preise')} className="px-4 py-2.5 rounded-xl bg-[#1A1A1A] text-white text-sm font-black">Tarif wählen</button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü öffnen">
          <div className="w-5 h-0.5 bg-black mb-1" />
          <div className="w-5 h-0.5 bg-black mb-1" />
          <div className="w-5 h-0.5 bg-black" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F7F3E8] border-t border-black/5 px-5 py-5 space-y-4 shadow-lg">
          <button onClick={() => go('features')} className="block text-sm font-bold">Funktionen</button>
          <button onClick={() => go('preise')} className="block text-sm font-bold">Tarife</button>
          <button onClick={() => go('vergleich')} className="block text-sm font-bold">Vergleich</button>
          <button onClick={() => go('faq')} className="block text-sm font-bold">FAQ</button>
          <a href={APP_BASE} className="block text-sm font-bold">App öffnen</a>
        </div>
      )}
    </nav>
  )
}

const Hero: React.FC = () => (
  <section id="top" className="relative min-h-[92vh] flex items-center px-5 pt-24 pb-16 overflow-hidden">
    <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-[#B5A47A]/20 blur-3xl" />
    <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-white blur-3xl" />

    <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.08fr_.92fr] gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm text-[11px] font-black uppercase tracking-[0.18em] text-[#8E7C50] mb-6">
          Vereinsmanagement · Projekte · POS · Community
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-[-0.055em] leading-[0.95] max-w-4xl">
          Ein System für den ganzen <span className="text-[#A9986D]">Vereinsalltag.</span>
        </h1>
        <p className="mt-7 text-base md:text-xl text-black/58 font-medium leading-relaxed max-w-2xl">
          Core4X verbindet Organisation, Kommunikation, Projekte, Veranstaltungen und Boniersystem in einer mobilen Plattform. Weniger Insellösungen, weniger Abstimmungschaos, mehr Überblick.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button onClick={() => scrollToSection('preise')} className="px-7 py-4 rounded-2xl bg-[#1A1A1A] text-white text-sm font-black uppercase tracking-wide shadow-xl">
            Tarife ansehen
          </button>
          <button onClick={() => scrollToSection('features')} className="px-7 py-4 rounded-2xl bg-white border border-black/5 text-black text-sm font-black uppercase tracking-wide">
            Funktionen entdecken
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-black/45">
          <span>✓ Basic kostenlos</span>
          <span>✓ Pro für aktive Vereine</span>
          <span>✓ 48h Event Pass</span>
          <span>✓ Stripe Checkout</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-8 bg-[#B5A47A]/15 blur-3xl rounded-full" />
        <div className="relative bg-[#111318] rounded-[2rem] p-5 md:p-7 shadow-2xl border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-black">Core4X Plattform</div>
              <div className="text-white text-xl font-black mt-1">Alles dort, wo es gebraucht wird.</div>
            </div>
            <img src="/core4x-icon-512.png" alt="Core4X App Icon" className="w-14 h-14 rounded-2xl" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Projekte', 'Kalender', 'Aufgaben', 'Mitglieder', 'Rechnungen', 'Boniersystem'].map((item, index) => (
              <div key={item} className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 min-h-24 flex flex-col justify-between">
                <span className="text-[#D6C28B] font-black text-lg">0{index + 1}</span>
                <span className="text-white/80 text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

const features = [
  ['Projekte & Projektrad', 'Vorhaben, Veranstaltungen und Teams zentral strukturieren.'],
  ['Kalender & Termine', 'Termine von Minuten bis zu mehrtägigen Veranstaltungen organisieren.'],
  ['Aufgaben & Einkauf', 'Verantwortlichkeiten, Erledigungen und Einkaufslisten direkt im Projekt.'],
  ['Mitglieder & Rollen', 'Mitglieder verwalten und Funktionen gezielt nach Rollen freigeben.'],
  ['Umfragen', 'Öffentliche oder anonyme Abstimmungen projektbezogen oder global durchführen.'],
  ['Projektchat', 'Kommunikation bleibt dort, wo das jeweilige Projekt stattfindet.'],
  ['Rechnungen & Belege', 'Belege erfassen, PDFs erzeugen, versenden und archivieren.'],
  ['Boniersystem / POS', 'Artikel, Tische, Zahlungen, Tagesumsatz und Veranstaltungsbetrieb abwickeln.'],
  ['Archiv & Auswertungen', 'Abgeschlossene Vorgänge nachvollziehbar aufbewahren und auswerten.'],
]

const Features: React.FC = () => (
  <section id="features" className="py-24 px-5 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mb-14">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-[#9A8A60] mb-3">Funktionen</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em]">Nicht noch eine App. Eine gemeinsame Arbeitsplattform.</h2>
        <p className="mt-5 text-black/50 font-medium leading-relaxed">Core4X bildet die Abläufe ab, die im Vereinsbetrieb tatsächlich zusammengehören – von der Planung bis zum Verkauf bei der Veranstaltung.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(([title, description], index) => (
          <div key={title} className="group rounded-[1.5rem] border border-black/5 bg-[#FAF8F2] p-6 hover:-translate-y-1 transition-transform">
            <div className="text-xs font-black text-[#A9986D] mb-8">0{index + 1}</div>
            <h3 className="text-lg font-black mb-2">{title}</h3>
            <p className="text-sm text-black/55 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const CheckoutButton: React.FC<{ plan: StripePlan; children: React.ReactNode; light?: boolean }> = ({ plan, children, light }) => {
  const checkout = () => {
    const url = STRIPE_LINKS[plan]
    if (url) {
      window.location.href = url
      return
    }
    scrollToSection('kontakt')
  }

  return (
    <button onClick={checkout} className={`w-full py-4 rounded-xl text-sm font-black uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${light ? 'bg-white text-black' : 'bg-[#1A1A1A] text-white'}`}>
      {children}
    </button>
  )
}

const PreisCard: React.FC<{
  eyebrow: string
  title: string
  price: string
  cadence: string
  description: string
  features: string[]
  featured?: boolean
  badge?: string
  action: React.ReactNode
}> = ({ eyebrow, title, price, cadence, description, features: items, featured, badge, action }) => (
  <div className={`relative rounded-[1.75rem] p-6 md:p-7 flex flex-col ${featured ? 'bg-[#111318] text-white shadow-2xl border border-[#B5A47A]/40' : 'bg-white border border-black/5 shadow-sm'}`}>
    {badge && <div className="absolute right-5 top-5 rounded-full bg-[#B5A47A] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black">{badge}</div>}
    <div className={`text-[11px] font-black uppercase tracking-[0.18em] mb-2 ${featured ? 'text-[#D6C28B]' : 'text-black/35'}`}>{eyebrow}</div>
    <h3 className="text-2xl font-black tracking-tight pr-20">{title}</h3>
    <div className="mt-5 mb-5">
      <div className="text-4xl font-black tracking-[-0.04em]">{price}</div>
      <div className={`text-xs font-bold mt-1 ${featured ? 'text-white/40' : 'text-black/40'}`}>{cadence}</div>
    </div>
    <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-white/60' : 'text-black/55'}`}>{description}</p>
    <div className="space-y-2.5 mb-7 flex-1">
      {items.map((feature) => (
        <div key={feature} className={`flex items-start gap-3 rounded-xl px-3 py-2.5 ${featured ? 'bg-white/[0.055]' : 'bg-[#F7F3E8]'}`}>
          <span className="text-[#B5A47A] font-black">✓</span>
          <span className={`text-sm font-bold ${featured ? 'text-white/75' : 'text-black/65'}`}>{feature}</span>
        </div>
      ))}
    </div>
    {action}
  </div>
)

const Preise: React.FC = () => (
  <section id="preise" className="py-24 px-5 bg-[#F7F3E8]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-[#9A8A60] mb-3">Tarife</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em]">Vom Einstieg bis zum Veranstaltungsbetrieb.</h2>
        <p className="mt-5 text-black/50 font-medium">Basic zum Starten, Pro für den laufenden Vereinsbetrieb, Business für größere Anforderungen und der 48h Event Pass für einzelne Veranstaltungen.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
        <PreisCard
          eyebrow="Basic"
          title="Kostenlos starten"
          price="0 €"
          cadence="dauerhaft kostenlos"
          description="Für kleine Vereine und den Einstieg in die digitale Organisation."
          features={['Projekte', 'Kalender', 'Aufgaben', 'Umfragen', 'Grundfunktionen für Mitglieder']}
          action={<a href={APP_BASE} className="w-full py-4 rounded-xl bg-[#F0ECE1] text-black text-sm font-black uppercase tracking-wide text-center">Kostenlos starten</a>}
        />

        <PreisCard
          eyebrow="Pro"
          title="Für aktive Vereine"
          price="126 €"
          cadence="pro Jahr · Einführungspreis statt 180 €"
          description="Der Haupttarif für Vereine, die Core4X regelmäßig operativ einsetzen."
          features={['Alle Basic-Funktionen', 'Mitglieder & Rollen', 'Kernteam & Einkauf', 'Rechnungen & Belege', 'Boniersystem / POS', 'Auswertungen & Archiv']}
          featured
          badge="30 % Startvorteil"
          action={<CheckoutButton plan="pro" light>Pro kaufen</CheckoutButton>}
        />

        <PreisCard
          eyebrow="Business"
          title="Für größere Strukturen"
          price="Business"
          cadence="Preis nach Funktionsumfang"
          description="Für Organisationen mit erweiterten Anforderungen, mehreren Bereichen oder zusätzlicher Betreuung."
          features={['Alle Pro-Funktionen', 'Erweiterte Rechte & Strukturen', 'Mehrere Organisationsbereiche', 'Erweiterte Auswertungen', 'Priorisierte Betreuung']}
          action={<CheckoutButton plan="business">Business anfragen</CheckoutButton>}
        />

        <PreisCard
          eyebrow="48h Event Pass"
          title="Ein Event. Volle Leistung."
          price="48h"
          cadence="einmalige Freischaltung"
          description="Für Vereine, die Core4X bei einer einzelnen Veranstaltung mit erweiterten Funktionen einsetzen wollen."
          features={['48 Stunden Freischaltung', 'Boniersystem / POS', 'Tische & Artikel', 'Zahlungen & Tagesübersicht', 'Keine Jahresbindung']}
          badge="Event"
          action={<CheckoutButton plan="event48">48h Pass kaufen</CheckoutButton>}
        />
      </div>

      <div className="mt-8 rounded-2xl bg-white border border-black/5 p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <div className="font-black">Sicher bezahlen über Stripe</div>
          <div className="text-sm text-black/50 mt-1">Je nach Verfügbarkeit und Land können Karte, Apple Pay, Google Pay, PayPal, EPS, SEPA und weitere Verfahren im Checkout angeboten werden.</div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-wide text-black/45">
          {['Visa', 'Mastercard', 'Apple Pay', 'Google Pay', 'PayPal', 'EPS', 'SEPA'].map((item) => <span key={item} className="px-3 py-2 rounded-lg bg-[#F7F3E8]">{item}</span>)}
        </div>
      </div>
    </div>
  </section>
)

const comparisonRows = [
  ['Projekte, Kalender, Aufgaben', '✓', '✓', '✓', '✓'],
  ['Umfragen', '✓', '✓', '✓', '✓'],
  ['Mitglieder & Rollen', 'Basis', '✓', '✓', 'Event'],
  ['Rechnungen & Belege', '–', '✓', '✓', '–'],
  ['Boniersystem / POS', 'Limitiert', '✓', '✓', '✓'],
  ['Auswertungen & Archiv', 'Basis', '✓', 'Erweitert', 'Event'],
  ['Laufzeit', 'Unbegrenzt', '1 Jahr', 'Flexibel', '48 Stunden'],
]

const Vergleich: React.FC = () => (
  <section id="vergleich" className="py-24 px-5 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-[#9A8A60] mb-3">Direkter Vergleich</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em]">Welcher Tarif passt zum Einsatz?</h2>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-black/5">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-[#111318] text-white">
            <tr>
              <th className="text-left p-4 font-black">Funktion</th>
              <th className="p-4 font-black">Basic</th>
              <th className="p-4 font-black text-[#D6C28B]">Pro</th>
              <th className="p-4 font-black">Business</th>
              <th className="p-4 font-black">48h Pass</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, index) => (
              <tr key={row[0]} className={index % 2 ? 'bg-[#FAF8F2]' : 'bg-white'}>
                {row.map((cell, cellIndex) => (
                  <td key={`${row[0]}-${cellIndex}`} className={`p-4 border-t border-black/5 ${cellIndex === 0 ? 'font-bold text-left' : 'text-center text-black/60'}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
)

const Zukunft: React.FC = () => (
  <section className="py-24 px-5 bg-[#111318] text-white overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-[.95fr_1.05fr] gap-12 items-center">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.18em] text-[#D6C28B] mb-3">Plattformgedanke</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em]">Eine Basis für unterschiedliche Vereinswelten.</h2>
        <p className="mt-5 text-white/55 leading-relaxed">Core4X wird modular weiterentwickelt. Sport, Veranstaltungen, Projektarbeit, Verwaltung und Kommunikation sollen auf derselben technischen Basis zusammenspielen.</p>
      </div>
      <div className="relative">
        <div className="absolute -inset-8 bg-[#B5A47A]/15 blur-3xl rounded-full" />
        <img src="/core4x-future-plan.png" alt="Core4X Plattformübersicht" className="relative rounded-[1.75rem] border border-white/10 shadow-2xl w-full" loading="lazy" />
      </div>
    </div>
  </section>
)

const faqItems = [
  ['Kann ich kostenlos starten?', 'Ja. Basic ist für den Einstieg vorgesehen und kann ohne Jahreslizenz genutzt werden.'],
  ['Wie funktioniert der Pro-Kauf?', 'Der Kauf wird über Stripe Checkout abgewickelt. Nach erfolgreicher Zahlung kann die Lizenz automatisiert dem Core4X-System zugeordnet werden.'],
  ['Was ist der 48h Event Pass?', 'Eine zeitlich begrenzte Freischaltung für einzelne Veranstaltungen. Sie ist für Vereine gedacht, die insbesondere das Boniersystem und Eventfunktionen ohne Jahresbindung benötigen.'],
  ['Muss der Owner den Tarif kaufen?', 'Der Kauf kann auch durch einen berechtigten Administrator erfolgen. Entscheidend ist die anschließende Zuordnung der Lizenz zur richtigen Community bzw. Organisation.'],
  ['Welche Zahlungsarten gibt es?', 'Stripe zeigt im Checkout die für den Kunden und das Land verfügbaren Zahlungsarten an. Vorgesehen sind unter anderem Karten, Wallets, PayPal, EPS und SEPA.'],
]

const FAQ: React.FC = () => (
  <section id="faq" className="py-24 px-5 bg-[#F7F3E8]">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-[#9A8A60] mb-3">FAQ</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em]">Kurz erklärt.</h2>
      </div>
      <div className="space-y-3">
        {faqItems.map(([question, answer]) => (
          <details key={question} className="group bg-white rounded-2xl border border-black/5 p-5">
            <summary className="cursor-pointer font-black list-none flex justify-between gap-4">{question}<span className="text-[#A9986D]">+</span></summary>
            <p className="mt-3 text-sm text-black/55 leading-relaxed max-w-3xl">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

const Kontakt: React.FC = () => (
  <section id="kontakt" className="py-20 px-5 bg-white">
    <div className="max-w-5xl mx-auto rounded-[2rem] bg-[#111318] text-white p-7 md:p-12 text-center">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-[#D6C28B] mb-3">Checkout wird vorbereitet</div>
      <h2 className="text-3xl md:text-4xl font-black tracking-[-0.04em]">Stripe wird direkt mit Core4X verbunden.</h2>
      <p className="mt-4 text-white/55 max-w-2xl mx-auto">Bis die finalen Stripe-Payment-Links hinterlegt sind, führt ein noch nicht aktivierter Kaufbutton hierher. Danach startet derselbe Button direkt den sicheren Stripe Checkout.</p>
      <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="mailto:office@core4xapp.com?subject=Core4X%20Tarif" className="px-6 py-3.5 rounded-xl bg-[#B5A47A] text-black text-sm font-black uppercase tracking-wide">Tarif anfragen</a>
        <a href={APP_BASE} className="px-6 py-3.5 rounded-xl bg-white/10 text-white text-sm font-black uppercase tracking-wide">Core4X öffnen</a>
      </div>
    </div>
  </section>
)

const App: React.FC = () => {
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <Preise />
      <Vergleich />
      <Zukunft />
      <FAQ />
      <Kontakt />

      <footer className="py-10 px-5 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img src="/core4x-icon-512.png" alt="Core4X" className="h-8 w-8 rounded-lg" />
            <div className="text-lg font-black">Core<span className="text-[#B5A47A]">4X</span></div>
          </div>
          <div className="text-xs text-black/35 font-medium">{new Date().getFullYear()} Core4X. Alle Rechte vorbehalten.</div>
          <div className="flex flex-wrap justify-center gap-5">
            <button onClick={() => setShowImpressum(true)} className="text-xs font-semibold text-black/45 hover:text-black">Impressum</button>
            <button onClick={() => setShowDatenschutz(true)} className="text-xs font-semibold text-black/45 hover:text-black">Datenschutz</button>
            <a href={`${APP_LEGAL_BASE}/terms.html`} target="_blank" rel="noreferrer" className="text-xs font-semibold text-black/45 hover:text-black">Nutzungsbedingungen</a>
            <a href="/account-deletion.html" className="text-xs font-semibold text-black/45 hover:text-black">Konto löschen</a>
          </div>
        </div>
      </footer>

      {showImpressum && (
        <Modal title="Impressum" onClose={() => setShowImpressum(false)}>
          <p className="font-bold">Medieninhaber und Betreiber</p>
          <p>Rainer Schmidt<br />Friedrich-Schmolka-Straße 12<br />2542 Kottingbrunn<br />Österreich</p>
          <p>E-Mail: office@core4xapp.com</p>
          <p>Entwicklung, Bereitstellung und Betrieb der Softwareplattform Core4X für Vereins-, Community-, Projekt-, Kommunikations-, Verwaltungs- und POS-Funktionen.</p>
          <p><a href={`${APP_LEGAL_BASE}/imprint.html`} target="_blank" rel="noreferrer" className="font-bold underline">Vollständiges Impressum öffnen</a></p>
        </Modal>
      )}

      {showDatenschutz && (
        <Modal title="Datenschutzerklärung" onClose={() => setShowDatenschutz(false)}>
          <p>Die vollständigen Informationen zu Zwecken, Rechtsgrundlagen, Empfängern, Speicherfristen und Betroffenenrechten findest du in der aktuellen Core4X-Datenschutzerklärung.</p>
          <p><a href={`${APP_LEGAL_BASE}/privacy.html`} target="_blank" rel="noreferrer" className="font-bold underline">Vollständige Datenschutzerklärung öffnen</a></p>
        </Modal>
      )}
    </div>
  )
}

export default App
