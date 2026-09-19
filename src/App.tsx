import React, { useState } from 'react'

const APP_BASE = 'https://app.core4xapp.com'
const APP_LEGAL_BASE = 'https://app.core4xapp.com'
const API_BASE = 'https://api.core4xapp.com/wp-json/core4x/v1'
const BRAND_ICON = `${APP_BASE}/icon-512.png`

const STRIPE_LINKS = {
  pro: import.meta.env.VITE_STRIPE_PRO_URL || '',
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
          <img src={BRAND_ICON} alt="Core4X" className="h-10 w-10 rounded-xl object-contain shadow-sm" width={40} height={40} />
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
        <p className="mt-7 text-base md:text-xl text-black/60 font-medium leading-relaxed max-w-2xl">
          Core4X verbindet Organisation, Kommunikation, Projekte, Veranstaltungen und Boniersystem in einer mobilen Plattform. Weniger Insellösungen, weniger Abstimmungschaos, mehr Überblick.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button onClick={() => scrollToSection('preise')} className="px-7 py-4 rounded-2xl bg-[#1A1A1A] text-white text-sm font-black uppercase tracking-wide shadow-xl">Tarife ansehen</button>
          <button onClick={() => scrollToSection('features')} className="px-7 py-4 rounded-2xl bg-white border border-black/5 text-black text-sm font-black uppercase tracking-wide">Funktionen entdecken</button>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-black/45">
          <span>✓ Basic kostenlos</span>
          <span>✓ Pro für aktive Vereine</span>
          <span>✓ Business in Vorbereitung</span>
          <span>✓ 48h Event Pass</span>
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
            <img src={BRAND_ICON} alt="Core4X App Icon" className="w-16 h-16 rounded-2xl object-contain" />
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

type BillingCountry = 'AT' | 'DE'
type CustomerType = 'association' | 'business' | 'private'

const CheckoutButton: React.FC<{ plan: StripePlan; children: React.ReactNode; light?: boolean; onCheckout: (plan: StripePlan) => void }> = ({ plan, children, light, onCheckout }) => {
  const disabled = !STRIPE_LINKS[plan] && plan !== 'pro'

  return (
    <button
      onClick={() => onCheckout(plan)}
      disabled={disabled}
      className={`w-full py-4 rounded-xl text-sm font-black uppercase tracking-wide transition-transform ${disabled ? 'cursor-not-allowed opacity-45' : 'hover:-translate-y-0.5'} ${light ? 'bg-white text-black' : 'bg-[#1A1A1A] text-white'}`}
    >
      {children}
    </button>
  )
}

const PurchaseModal: React.FC<{ plan: StripePlan; onClose: () => void }> = ({ plan, onClose }) => {
  const [form, setForm] = useState({
    customer_type: 'association' as CustomerType,
    organization_name: '',
    contact_first_name: '',
    contact_last_name: '',
    email: '',
    phone: '',
    address_line1: '',
    postal_code: '',
    city: '',
    country_code: 'AT' as BillingCountry,
    vat_id: '',
    billing_data_confirmed: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [testResult, setTestResult] = useState<{ message: string; pdf_url?: string | null } | null>(null)

  const setField = (field: keyof typeof form, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (!form.billing_data_confirmed) {
      setError('Bitte bestätige die Rechnungsdaten.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`${API_BASE}/billing/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          product_key: plan,
          billing_cycle: plan === 'event48' ? 'one_time' : 'yearly',
        }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || 'Die Bestellung konnte nicht vorbereitet werden.')
      }

      const stripeUrl = STRIPE_LINKS[plan]
      if (stripeUrl) {
        const target = new URL(stripeUrl)
        target.searchParams.set('prefilled_email', form.email)
        target.searchParams.set('client_reference_id', data.order_key)
        window.location.href = target.toString()
        return
      }

      if (plan !== 'pro') {
        throw new Error('Für dieses Produkt ist der Testmodus noch nicht verfügbar.')
      }

      const testResponse = await fetch(`${API_BASE}/billing/orders/${encodeURIComponent(data.order_key)}/simulate-test-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test_token: data.test_token }),
      })
      const testData = await testResponse.json().catch(() => ({}))
      if (!testResponse.ok || !testData?.success) {
        throw new Error(testData?.message || 'Die Testzahlung konnte nicht simuliert werden.')
      }

      setTestResult({ message: testData.message, pdf_url: testData.pdf_url || null })
      setLoading(false)
    } catch (err: any) {
      setError(err?.message || 'Die Bestellung konnte nicht vorbereitet werden.')
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center px-3 py-3">
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={loading ? undefined : onClose} />
      <div className="relative z-10 w-full max-w-2xl max-h-[94vh] overflow-y-auto rounded-[1.75rem] bg-white shadow-2xl">
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-black/5 px-5 md:px-7 py-5 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9A8A60]">Rechnungsdaten</div>
            <h3 className="text-xl font-black mt-1">{plan === 'event48' ? '48h Event Pass' : 'Core4X Pro'} kaufen</h3>
          </div>
          <button type="button" onClick={onClose} disabled={loading} className="text-2xl font-black text-black/35 disabled:opacity-30">×</button>
        </div>

        <form onSubmit={submit} className="p-5 md:p-7 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-bold">Kundentyp
              <select value={form.customer_type} onChange={(e) => setField('customer_type', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-3 py-3 bg-white">
                <option value="association">Verein</option>
                <option value="business">Unternehmen</option>
                <option value="private">Privatperson</option>
              </select>
            </label>
            <label className="text-sm font-bold">Land
              <select value={form.country_code} onChange={(e) => setField('country_code', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-3 py-3 bg-white">
                <option value="AT">Österreich</option>
                <option value="DE">Deutschland</option>
              </select>
            </label>
          </div>

          <label className="block text-sm font-bold">{form.customer_type === 'association' ? 'Vereinsname' : form.customer_type === 'business' ? 'Firmenname' : 'Name für die Rechnung'}
            <input required value={form.organization_name} onChange={(e) => setField('organization_name', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" />
          </label>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-bold">Vorname Ansprechpartner
              <input required value={form.contact_first_name} onChange={(e) => setField('contact_first_name', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" />
            </label>
            <label className="text-sm font-bold">Nachname Ansprechpartner
              <input required value={form.contact_last_name} onChange={(e) => setField('contact_last_name', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-bold">E-Mail
              <input required type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" />
            </label>
            <label className="text-sm font-bold">Telefon <span className="font-medium text-black/35">(optional)</span>
              <input value={form.phone} onChange={(e) => setField('phone', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" />
            </label>
          </div>

          <label className="block text-sm font-bold">Rechnungsadresse
            <input required value={form.address_line1} onChange={(e) => setField('address_line1', e.target.value)} placeholder="Straße und Hausnummer" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" />
          </label>

          <div className="grid grid-cols-[.7fr_1.3fr] gap-4">
            <label className="text-sm font-bold">PLZ
              <input required value={form.postal_code} onChange={(e) => setField('postal_code', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" />
            </label>
            <label className="text-sm font-bold">Ort
              <input required value={form.city} onChange={(e) => setField('city', e.target.value)} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" />
            </label>
          </div>

          <label className="block text-sm font-bold">UID / USt-IdNr. <span className="font-medium text-black/35">(falls vorhanden)</span>
            <input value={form.vat_id} onChange={(e) => setField('vat_id', e.target.value.toUpperCase())} placeholder={form.country_code === 'DE' ? 'DE123456789' : 'ATU12345678'} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 uppercase" />
          </label>

          <div className={`rounded-2xl p-4 text-sm leading-relaxed ${form.country_code === 'DE' ? 'bg-amber-50 border border-amber-200 text-amber-950' : 'bg-emerald-50 border border-emerald-200 text-emerald-950'}`}>
            {form.country_code === 'DE'
              ? 'Deutschland: Nach erfolgreicher Zahlung erhältst du zuerst eine Zahlungsbestätigung. Die Rechnung wird vor dem Versand manuell geprüft.'
              : 'Österreich: Nach erfolgreicher Zahlung wird die Rechnung automatisch erstellt und an die angegebene E-Mail-Adresse gesendet.'}
          </div>

          <div className="rounded-2xl bg-[#F7F3E8] border border-black/5 p-4 text-sm leading-relaxed">
            <div className="font-black mb-1">Rechnungssteller</div>
            <div>Natascha Schmidt</div>
            <div>Friedrich-Schmolka-Straße 12</div>
            <div>2542 Kottingbrunn · Österreich</div>
          </div>

          <label className="flex gap-3 items-start text-sm font-semibold">
            <input type="checkbox" checked={form.billing_data_confirmed} onChange={(e) => setField('billing_data_confirmed', e.target.checked)} className="mt-1" />
            <span>Ich bestätige, dass die angegebenen Rechnungsdaten korrekt und vollständig sind.</span>
          </label>

          {error && <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm font-semibold text-red-700">{error}</div>}

          {testResult && (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-950">
              <div className="font-black mb-1">Test erfolgreich</div>
              <div>{testResult.message}</div>
              {testResult.pdf_url && <a href={testResult.pdf_url} target="_blank" rel="noreferrer" className="inline-block mt-3 font-black underline">Testrechnung als PDF öffnen</a>}
            </div>
          )}

          {!testResult && (
            <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#111318] text-white py-4 text-sm font-black uppercase tracking-wide disabled:opacity-50">
              {loading ? 'Bestellung wird vorbereitet…' : (STRIPE_LINKS[plan] ? 'Weiter zur sicheren Zahlung' : 'Testzahlung simulieren')}
            </button>
          )}
          <p className="text-[11px] text-black/40 text-center">
            {STRIPE_LINKS[plan]
              ? 'Die Zahlung wird anschließend über Stripe abgewickelt.'
              : 'TESTMODUS: Es findet keine echte Zahlung statt. Die Testrechnung erhält keine echte Rechnungsnummer.'}
          </p>
        </form>
      </div>
    </div>
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

const Preise: React.FC = () => {
  const [checkoutPlan, setCheckoutPlan] = useState<StripePlan | null>(null)

  return (
  <section id="preise" className="py-24 px-5 bg-[#F7F3E8]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-[#9A8A60] mb-3">Tarife & Preise</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em]">Drei Tarife. Auf einen Blick.</h2>
        <p className="mt-5 text-black/50 font-medium">Basic für den Einstieg, Pro für den aktiven Vereinsbetrieb und Business für größere Strukturen.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 items-stretch">
        <PreisCard
          eyebrow="Basic"
          title="Einfach starten"
          price="0 €"
          cadence="dauerhaft kostenlos"
          description="Für kleine Vereine, Tests und einfache digitale Organisation."
          features={['Projekte', 'Kalender', 'Aufgaben', 'Umfragen', 'Grundfunktionen für Mitglieder']}
          action={<a href={APP_BASE} className="w-full py-4 rounded-xl bg-[#F0ECE1] text-black text-sm font-black uppercase tracking-wide text-center">Kostenlos starten</a>}
        />

        <PreisCard
          eyebrow="Pro"
          title="Für aktive Vereine"
          price="129 €"
          cadence="pro Jahr · statt 180 €"
          description="Der Haupttarif für Vereine, die Core4X regelmäßig operativ einsetzen."
          features={['Alle Basic-Funktionen', 'Mitglieder & Rollen', 'Kernteam & Einkauf', 'Rechnungen & Belege', 'Boniersystem / POS', 'Auswertungen & Archiv']}
          featured
          badge="51 € Startvorteil"
          action={<CheckoutButton plan="pro" light onCheckout={setCheckoutPlan}>Pro kaufen</CheckoutButton>}
        />

        <PreisCard
          eyebrow="Business"
          title="Für größere Strukturen"
          price="Coming soon"
          cadence="Preis und Start werden bekanntgegeben"
          description="Für Organisationen mit erweiterten Anforderungen, mehreren Bereichen oder zusätzlicher Betreuung."
          features={['Alle Pro-Funktionen', 'Erweiterte Rechte & Strukturen', 'Mehrere Organisationsbereiche', 'Erweiterte Auswertungen', 'Priorisierte Betreuung']}
          badge="Coming soon"
          action={<button disabled className="w-full py-4 rounded-xl bg-[#EAE6DA] text-black/40 text-sm font-black uppercase tracking-wide cursor-not-allowed">Noch nicht verfügbar</button>}
        />
      </div>

      <div className="mt-6 rounded-[1.75rem] bg-[#111318] text-white p-6 md:p-8 border border-[#B5A47A]/30 shadow-xl">
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-8 items-center">
          <div>
            <div className="inline-flex rounded-full bg-[#B5A47A] text-black px-3 py-1 text-[10px] font-black uppercase tracking-wide mb-4">48h Event Pass</div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">Ein Event. 48 Stunden. Volle Event-Funktionen.</h3>
            <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-2xl">Für einzelne Veranstaltungen ohne Jahresbindung – inklusive Boniersystem, Tische, Artikel, Zahlungen und Tagesübersicht.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Boniersystem / POS', 'Tische & Artikel', 'Zahlungen', 'Tagesübersicht', '48h Freischaltung'].map((item) => (
                <span key={item} className="px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-xs font-bold text-white/75">✓ {item}</span>
              ))}
            </div>
          </div>
          <div className="lg:text-right">
            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#D6C28B]">Einmaliger Event-Tarif</div>
            <div className="text-4xl font-black tracking-[-0.04em] mt-2">Preis folgt</div>
            <div className="text-xs text-white/40 font-bold mt-1">keine Jahresbindung</div>
            <div className="mt-5 max-w-sm lg:ml-auto"><CheckoutButton plan="event48" light onCheckout={setCheckoutPlan}>48h Pass kaufen</CheckoutButton></div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white border border-black/5 p-5 md:p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <div className="font-black">Sicher bezahlen über Stripe</div>
          <div className="text-sm text-black/50 mt-1">Im Checkout können – abhängig von Land und Verfügbarkeit – Karte, Apple Pay, Google Pay, PayPal, EPS, SEPA und weitere Verfahren angeboten werden.</div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-wide text-black/45">
          {['Visa', 'Mastercard', 'Apple Pay', 'Google Pay', 'PayPal', 'EPS', 'SEPA'].map((item) => <span key={item} className="px-3 py-2 rounded-lg bg-[#F7F3E8]">{item}</span>)}
        </div>
      </div>
    </div>
    {checkoutPlan && <PurchaseModal plan={checkoutPlan} onClose={() => setCheckoutPlan(null)} />}
  </section>
  )
}

const comparisonRows = [
  ['Projekte, Kalender, Aufgaben', '✓', '✓', '✓'],
  ['Umfragen', '✓', '✓', '✓'],
  ['Mitglieder & Rollen', 'Basis', '✓', '✓'],
  ['Rechnungen & Belege', '–', '✓', '✓'],
  ['Boniersystem / POS', 'Limitiert', '✓', '✓'],
  ['Auswertungen & Archiv', 'Basis', '✓', 'Erweitert'],
  ['Laufzeit', 'Unbegrenzt', '1 Jahr', 'Flexibel'],
]

const Vergleich: React.FC = () => (
  <section id="vergleich" className="py-24 px-5 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-[#9A8A60] mb-3">Direkter Tarifvergleich</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em]">Basic, Pro und Business direkt nebeneinander.</h2>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-black/5">
        <table className="w-full min-w-[680px] text-sm">
          <thead className="bg-[#111318] text-white">
            <tr>
              <th className="text-left p-4 font-black">Funktion</th>
              <th className="p-4 font-black">Basic</th>
              <th className="p-4 font-black text-[#D6C28B]">Pro</th>
              <th className="p-4 font-black">Business</th>
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
      <p className="mt-4 text-sm text-black/45">Der 48h Event Pass ist bewusst separat dargestellt, weil er kein dauerhafter Vereinstarif, sondern eine zeitlich begrenzte Event-Freischaltung ist.</p>
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
  ['Was kostet Core4X Pro?', 'Der Einführungspreis beträgt 129 € pro Jahr statt regulär 180 €. Das entspricht einem Startvorteil von 51 €.'],
  ['Wann ist Business verfügbar?', 'Business ist als erweiterter Tarif vorgesehen und aktuell noch nicht verfügbar. Preis und Start werden rechtzeitig bekanntgegeben.'],
  ['Was ist der 48h Event Pass?', 'Eine zeitlich begrenzte Freischaltung für einzelne Veranstaltungen. Sie ist insbesondere für das Boniersystem und Eventfunktionen ohne Jahresbindung gedacht.'],
  ['Welche Zahlungsarten gibt es?', 'Der Checkout wird über Stripe abgewickelt. Je nach Land und Verfügbarkeit können unter anderem Karten, Apple Pay, Google Pay, PayPal, EPS und SEPA angeboten werden.'],
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

      <footer className="py-10 px-5 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex items-center gap-3">
            <img src={BRAND_ICON} alt="Core4X" className="h-9 w-9 rounded-lg object-contain" />
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
          <p>Natascha Schmidt<br />Friedrich-Schmolka-Straße 12<br />2542 Kottingbrunn<br />Österreich</p>
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
