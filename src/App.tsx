import React, { useState } from 'react'

const API_BASE = 'https://schmidt-kottingbrunn.at/api/wp-json/core4x/v1'

interface PreregisterForm {
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
}

const Modal: React.FC<{ title: string; onClose: () => void; children: React.ReactNode }> = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0">
    <div className="absolute inset-0 bg-black/50" onClick={onClose} />
    <div className="relative bg-white rounded-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 z-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-black">{title}</h3>
        <button onClick={onClose} className="text-black/40 hover:text-black text-2xl font-black leading-none">×</button>
      </div>
      <div className="text-sm text-black/70 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  </div>
)

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F1E4]/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="text-xl font-black tracking-tight">
          core<span className="text-[#B5A47A]">V</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('vormerken')} className="text-sm font-semibold text-black/60 hover:text-black transition-colors">Alpha</button>
          <button onClick={() => scrollTo('features')} className="text-sm font-semibold text-black/60 hover:text-black transition-colors">Features</button>
          <button onClick={() => scrollTo('module')} className="text-sm font-semibold text-black/60 hover:text-black transition-colors">Module</button>
          <button onClick={() => scrollTo('preise')} className="text-sm font-semibold text-black/60 hover:text-black transition-colors">Preise</button>
        </div>
        <button
          onClick={() => scrollTo('vormerken')}
          className="hidden md:block px-4 py-2 rounded-xl bg-[#B5A47A] text-black text-sm font-black uppercase tracking-wide"
        >
          Jetzt vormerken
        </button>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-0.5 bg-black mb-1" />
          <div className="w-5 h-0.5 bg-black mb-1" />
          <div className="w-5 h-0.5 bg-black" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#F6F1E4] border-t border-black/5 px-5 py-4 space-y-3">
          <button onClick={() => scrollTo('vormerken')} className="block text-sm font-semibold">Alpha vormerken</button>
          <button onClick={() => scrollTo('features')} className="block text-sm font-semibold">Features</button>
          <button onClick={() => scrollTo('module')} className="block text-sm font-semibold">Module</button>
          <button onClick={() => scrollTo('preise')} className="block text-sm font-semibold">Preise</button>
        </div>
      )}
    </nav>
  )
}

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#B5A47A]/20 text-[#9A8A60] text-xs font-black uppercase tracking-widest mb-6">
          Alpha coming soon
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
          Vereins-management
          <br />
          <span className="text-[#B5A47A]">neu gedacht.</span>
        </h1>
        <p className="text-base md:text-xl text-black/60 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          coreV ist die moderne All-in-One App für österreichische Vereine —
          von der Mitgliederverwaltung bis zum integrierten Kassasystem.
          Modular aufgebaut, mobil nutzbar und bereit für Wachstum.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button
            onClick={() => scrollTo('vormerken')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1A1A1A] text-white text-sm font-black uppercase tracking-wide"
          >
            Alpha vormerken
          </button>
          <button
            onClick={() => scrollTo('preise')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B5A47A]/20 text-black text-sm font-black uppercase tracking-wide"
          >
            Pakete ansehen
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black">125k+</div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/40 mt-1">Vereine in AT</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black">1 App</div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/40 mt-1">Standardmodule</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black">Gratis</div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/40 mt-1">Basic Einstieg</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Vormerken: React.FC = () => {
  const [form, setForm] = useState<PreregisterForm>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!form.first_name || !form.email) {
      setError('Vorname und E-Mail sind erforderlich.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/preregister`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Fehler bei der Anmeldung.')
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Etwas ist schiefgelaufen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="vormerken" className="py-24 px-5 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-black uppercase tracking-widest text-[#B5A47A] mb-3">Alpha-Phase</div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Jetzt vormerken.</h2>
          <p className="mt-4 text-black/50 font-medium text-sm md:text-base">
            Sei dabei wenn coreV startet. Alpha-Tester bekommen exklusiven Früh-Zugang und helfen das Produkt zu formen.
          </p>
        </div>
        {success ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-black mb-2">Du bist dabei!</h3>
            <p className="text-black/50">Wir melden uns sobald die Alpha startet.</p>
          </div>
        ) : (
          <div className="bg-[#F6F1E4] rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-black/40 mb-1 block">Vorname *</label>
                <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="Max" className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-medium focus:border-[#B5A47A] outline-none" />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-black/40 mb-1 block">Nachname</label>
                <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Mustermann" className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-medium focus:border-[#B5A47A] outline-none" />
              </div>
            </div>
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-black/40 mb-1 block">E-Mail *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="max@meinverein.at" className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-medium focus:border-[#B5A47A] outline-none" />
            </div>
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-black/40 mb-1 block">Telefon</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="+43 123 456 789" className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-medium focus:border-[#B5A47A] outline-none" />
            </div>
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-black/40 mb-1 block">Verein / Firma</label>
              <input name="company" value={form.company} onChange={handleChange} placeholder="Mein Verein" className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-medium focus:border-[#B5A47A] outline-none" />
            </div>
            {error && (
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">{error}</div>
            )}
            <button onClick={handleSubmit} disabled={loading} className="w-full py-4 rounded-xl bg-[#1A1A1A] text-white text-sm font-black uppercase tracking-wide disabled:opacity-50">
              {loading ? 'Wird gesendet...' : 'Für Alpha vormerken'}
            </button>
            <p className="text-xs text-black/30 text-center">Keine Zahlung erforderlich. Nur eine Vorankündigung.</p>
          </div>
        )}
      </div>
    </section>
  )
}

const features = [
  { icon: '👥', title: 'Mitgliederverwaltung', description: 'Alle Mitglieder zentral verwalten. Profile, Rollen, Kontaktdaten — alles an einem Ort.' },
  { icon: '🧾', title: 'Kassasystem (POS)', description: 'Integriertes Boniersystem für Veranstaltungen. Schnell, mobil, übersichtlich.' },
  { icon: '📅', title: 'Kalender & Events', description: 'Veranstaltungen planen, Termine koordinieren und das Team auf dem Laufenden halten.' },
  { icon: '✅', title: 'Aufgaben & Teams', description: 'Aufgaben zuweisen, Fortschritt verfolgen und Kernteams für Projekte zusammenstellen.' },
  { icon: '💬', title: 'Chat & Kommunikation', description: 'Interner Chat für das Team — direkt in der App, kein externes Tool nötig.' },
  { icon: '📊', title: 'Umfragen & Abstimmungen', description: 'Schnell Meinungen einholen und Entscheidungen demokratisch treffen.' },
]

const Features: React.FC = () => (
  <section id="features" className="py-24 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-xs font-black uppercase tracking-widest text-[#B5A47A] mb-3">Was coreV kann</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Alles was dein Verein braucht.</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-black mb-2">{f.title}</h3>
            <p className="text-sm text-black/60 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const modules = [
  { name: 'coreV', desc: 'Standardmodule für Vereinsmanagement, Kommunikation und POS.', status: 'Verfügbar', color: 'bg-green-100 text-green-700' },
  { name: 'Fangstatistik', desc: 'Spezialmodul für Fischerei- und Angelvereine.', status: 'Separat', color: 'bg-[#F6F1E4] text-[#9A8A60]' },
  { name: 'Business', desc: 'Spezialmodul für erweiterte geschäftliche Anforderungen.', status: 'Geplant', color: 'bg-slate-100 text-slate-500' },
  { name: 'Revier', desc: 'Spezialmodul für Revier- und Gebietsverwaltung.', status: 'Geplant', color: 'bg-slate-100 text-slate-500' },
]

const Module: React.FC = () => (
  <section id="module" className="py-24 px-5 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-xs font-black uppercase tracking-widest text-[#B5A47A] mb-3">Das Ökosystem</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">core4X Module.</h2>
        <p className="mt-4 text-black/50 font-medium max-w-xl mx-auto text-sm md:text-base">
          coreV deckt die Standardmodule ab. Spezialmodule wie Fangstatistik, Business oder Revier werden separat angeboten.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modules.map((m, i) => (
          <div key={i} className="rounded-2xl border border-black/10 p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F6F1E4] flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-black text-[#B5A47A] text-center leading-tight">{m.name}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1 gap-2">
                <h3 className="font-black text-sm">{m.name}</h3>
                <span className={`text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0 ${m.color}`}>
                  {m.status}
                </span>
              </div>
              <p className="text-xs text-black/50">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const basicFeatures = [
  'Kostenloser Einstieg',
  'Kalender mit vollem Standardzugriff',
  'Rechnungen immer verfügbar',
  'Boniersystem mit max. 6 Artikeln',
  'Boniersystem bis max. €1.500 Umsatz',
  'Max. 2 Aufgaben pro Projekt',
  'Max. 2 Einkaufseinträge pro Projekt',
  'Max. 5 Umfragen pro Projekt',
  'Max. 1 Projektchat-Gruppe pro Projekt',
]

const premiumFeatures = [
  'Alle Standardmodule enthalten',
  'Keine Limits bei Artikeln und Umsatz',
  'Keine Limits bei Aufgaben, Einkauf und Umfragen',
  'Keine Limits bei Projektchat-Gruppen',
  'Ideal für wachsende Communities und Veranstaltungsbetrieb',
  'Spezialmodule werden bei Bedarf separat ergänzt',
]

const Preise: React.FC = () => (
  <section id="preise" className="py-24 px-5">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-xs font-black uppercase tracking-widest text-[#B5A47A] mb-3">Transparent & fair</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Klare Pakete statt Chaos.</h2>
        <p className="mt-4 text-black/50 font-medium text-sm md:text-base max-w-2xl mx-auto">
          Basic ist kostenlos. Premium enthält alle Standardmodule ohne Limits. Spezialmodule wie Fangstatistik, Business oder Revier werden separat angeboten.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-black/10 p-6 md:p-8">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="text-xs font-black uppercase tracking-widest text-black/40">Basic</div>
            <span className="text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full bg-[#F6F1E4] text-[#9A8A60]">Kostenlos</span>
          </div>
          <div className="text-4xl font-black mb-1">Gratis</div>
          <div className="text-sm text-black/40 mb-6">für den einfachen Einstieg</div>
          <ul className="space-y-3 mb-8">
            {basicFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-medium">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl bg-slate-100 px-4 py-3 text-xs text-slate-600 font-semibold leading-relaxed mb-4">
            Basic ist bewusst begrenzt. Das Paket soll klein starten, aber produktiv nutzbar bleiben.
          </div>
          <div className="w-full py-3 rounded-xl bg-[#1A1A1A] text-center text-sm font-black uppercase tracking-wide text-white">
            Kostenlos starten
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 p-6 md:p-8 text-white">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="text-xs font-black uppercase tracking-widest text-[#B5A47A]">Premium</div>
            <span className="text-[10px] font-black uppercase tracking-wide px-2 py-1 rounded-full bg-[#B5A47A] text-black">Ohne Limits</span>
          </div>
          <div className="text-4xl font-black mb-1">Preis folgt</div>
          <div className="text-sm text-white/40 mb-6">für Vereine mit mehr Umfang</div>
          <ul className="space-y-3 mb-8">
            {premiumFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-medium">
                <span className="text-[#B5A47A] mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl bg-white/5 px-4 py-3 text-xs text-white/70 font-semibold leading-relaxed mb-4">
            Premium enthält alle Standardmodule ohne Limits. Spezialmodule wie Fangstatistik sind nicht enthalten und werden separat angeboten.
          </div>
          <div className="w-full py-3 rounded-xl bg-[#B5A47A] text-center text-sm font-black uppercase tracking-wide text-black">
            Preis folgt nach Alpha
          </div>
        </div>
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
      <Vormerken />
      <Features />
      <Module />
      <Preise />

      <footer className="py-12 px-5 border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xl font-black tracking-tight">
            core<span className="text-[#B5A47A]">V</span>
            <span className="text-xs font-bold text-black/30 ml-2 uppercase tracking-widest">by core4X</span>
          </div>
          <div className="text-xs text-black/30 font-medium">
            {new Date().getFullYear()} core4X. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6">
            <button onClick={() => setShowImpressum(true)} className="text-xs font-semibold text-black/40 hover:text-black">Impressum</button>
            <button onClick={() => setShowDatenschutz(true)} className="text-xs font-semibold text-black/40 hover:text-black">Datenschutz</button>
          </div>
        </div>
      </footer>

      {showImpressum && (
        <Modal title="Impressum" onClose={() => setShowImpressum(false)}>
          <p className="font-bold">Angaben gemäß § 5 ECG</p>
          <p>Schmidt Rainer<br />Friedrich Schmolka-Strasse 12<br />2542 Kottingbrunn<br />Österreich</p>
          <p>E-Mail: rainer@schmidt-kottingbrunn.at<br />Telefon: +43 676 4808464</p>
          <p>Diese Website wird privat betrieben und dient der Vorstellung des Softwareprodukts coreV im Rahmen des core4X Projekts.</p>
        </Modal>
      )}

      {showDatenschutz && (
        <Modal title="Datenschutzerklärung" onClose={() => setShowDatenschutz(false)}>
          <p className="font-bold">Verantwortlicher</p>
          <p>Schmidt Rainer<br />Friedrich Schmolka-Strasse 12<br />2542 Kottingbrunn<br />rainer@schmidt-kottingbrunn.at</p>
          <p className="font-bold">Welche Daten wir sammeln</p>
          <p>Im Rahmen der Alpha-Voranmeldung erfassen wir folgende Daten: Vorname, Nachname, E-Mail-Adresse, Telefonnummer und Vereins- bzw. Firmenname. Die Angabe dieser Daten erfolgt freiwillig.</p>
          <p className="font-bold">Zweck der Verarbeitung</p>
          <p>Die erhobenen Daten werden ausschließlich verwendet um Sie über den Start der Alpha-Phase und weitere Entwicklungen der core4X Produktfamilie zu informieren.</p>
          <p className="font-bold">Speicherung</p>
          <p>Ihre Daten werden auf einem Server von World4You Internet Services GmbH in Österreich gespeichert.</p>
          <p className="font-bold">Ihre Rechte</p>
          <p>Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten Daten, sowie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Bitte wenden Sie sich dazu an: rainer@schmidt-kottingbrunn.at</p>
          <p className="font-bold">Keine Weitergabe</p>
          <p>Ihre Daten werden nicht an Dritte weitergegeben.</p>
        </Modal>
      )}
    </div>
  )
}

export default App
