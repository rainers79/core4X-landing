import React, { useState } from 'react'

const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'https://api.schmidt-kottingbrunn.at/wp-json/core4x/v1').replace(/\/$/, '')

interface PreregisterForm {
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
}

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F1E4]/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/core4x-icon-512.png"
            alt="Core4X Icon"
            className="h-9 w-9 rounded-xl object-cover shadow-sm"
            width={36}
            height={36}
          />
          <span className="text-xl font-black tracking-tight">
            Core<span className="text-[#B5A47A]">4X</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('vormerken')} className="text-sm font-semibold text-black/60 hover:text-black transition-colors">Alpha</button>
          <button onClick={() => scrollTo('features')} className="text-sm font-semibold text-black/60 hover:text-black transition-colors">Funktionen</button>
          <button onClick={() => scrollTo('zukunft')} className="text-sm font-semibold text-black/60 hover:text-black transition-colors">Zukunft</button>
          <button onClick={() => scrollTo('preise')} className="text-sm font-semibold text-black/60 hover:text-black transition-colors">Preise</button>
        </div>
        <button
          onClick={() => scrollTo('vormerken')}
          className="hidden md:block px-4 py-2 rounded-xl bg-[#B5A47A] text-black text-sm font-black uppercase tracking-wide"
        >
          Alpha vormerken
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
          <button onClick={() => scrollTo('features')} className="block text-sm font-semibold">Funktionen</button>
          <button onClick={() => scrollTo('zukunft')} className="block text-sm font-semibold">Zukunft</button>
          <button onClick={() => scrollTo('preise')} className="block text-sm font-semibold">Preise</button>
        </div>
      )}
    </nav>
  )
}

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#B5A47A]/20 text-[#9A8A60] text-xs font-black uppercase tracking-widest mb-6">
          Alpha in Vorbereitung
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
          Vereinsmanagement
          <br />
          <span className="text-[#B5A47A]">neu gedacht.</span>
        </h1>
        <p className="text-base md:text-xl text-black/60 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          Core4X ist eine moderne Vereins-App für Organisation, Kommunikation und Veranstaltungen —
          mit Projekten, Kalender, Aufgaben, Umfragen, Mitgliederverwaltung und integriertem Boniersystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button
            onClick={() => scrollToSection('module')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1A1A1A] text-white text-sm font-black uppercase tracking-wide"
          >
            Funktionen ansehen
          </button>
          <button
            onClick={() => scrollToSection('vormerken')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B5A47A]/20 text-black text-sm font-black uppercase tracking-wide"
          >
            Alpha vormerken
          </button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black">Mobil</div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/40 mt-1">für den Vereinsalltag</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black">Modular</div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/40 mt-1">klar erweiterbar</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black">Praxisnah</div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/40 mt-1">für echte Abläufe</div>
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
      if (err instanceof TypeError) {
        setError('Netzwerk- oder CORS-Fehler. Bitte API-URL und CORS prüfen.')
      } else {
        setError(err.message || 'Etwas ist schiefgelaufen.')
      }
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
            Core4X wird praxisnah weiterentwickelt. Interessierte Vereine können sich für die Alpha vormerken lassen.
          </p>
        </div>
        {success ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-black mb-2">Du bist dabei!</h3>
            <p className="text-black/50">Wir melden uns, sobald der nächste Testschritt startet.</p>
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
              <label className="text-xs font-black uppercase tracking-wider text-black/40 mb-1 block">Verein / Organisation</label>
              <input name="company" value={form.company} onChange={handleChange} placeholder="Mein Verein" className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white font-medium focus:border-[#B5A47A] outline-none" />
            </div>
            {error && (
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">{error}</div>
            )}
            <button onClick={handleSubmit} disabled={loading} className="w-full py-4 rounded-xl bg-[#1A1A1A] text-white text-sm font-black uppercase tracking-wide disabled:opacity-50">
              {loading ? 'Wird gesendet...' : 'Für Alpha vormerken'}
            </button>
            <p className="text-xs text-black/30 text-center">Keine Zahlung erforderlich. Nur eine Vormerkung.</p>
          </div>
        )}
      </div>
    </section>
  )
}

const features = [
  { icon: '📁', title: 'Projekte', description: 'Veranstaltungen und Vorhaben zentral planen, strukturieren und mit den passenden Bereichen verknüpfen.' },
  { icon: '📅', title: 'Kalender', description: 'Termine planen, sichtbar machen und den Verein auf dem aktuellen Stand halten.' },
  { icon: '✅', title: 'Aufgaben', description: 'Aufgaben zuweisen, Verantwortlichkeiten klären und Fortschritte im Blick behalten.' },
  { icon: '📊', title: 'Umfragen', description: 'Meinungen einholen, Entscheidungen vorbereiten und Abstimmungen direkt im Verein organisieren.' },
  { icon: '👥', title: 'Mitgliederverwaltung', description: 'Mitglieder, Rollen und Kontaktdaten zentral verwalten.' },
  { icon: '💬', title: 'Projektchat', description: 'Kommunikation dort führen, wo die Arbeit passiert: direkt im passenden Projekt.' },
]

const Features: React.FC = () => (
  <section id="features" className="py-24 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-xs font-black uppercase tracking-widest text-[#B5A47A] mb-3">Was Core4X kann</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Alles, was der Vereinsalltag braucht.</h2>
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


const Zukunft: React.FC = () => (
  <section id="zukunft" className="py-24 px-5 bg-[#111318] text-white overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#B5A47A]/15 border border-[#B5A47A]/25 text-[#D8C37E] text-xs font-black uppercase tracking-widest mb-6">
            Zukunftsplan
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-5">
            Eine Plattform für viele Vereinswelten.
          </h2>
          <p className="text-sm md:text-base text-white/65 font-medium leading-relaxed mb-6">
            Core4X soll langfristig nicht nur einzelne Abläufe abbilden, sondern verschiedene Vereinsarten sauber unterstützen: vom Sportverein über Feuerwehr und Fischerverein bis zur klassischen Vereinsorganisation.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Sport & Teams', 'Veranstaltungen', 'Aufgaben & Projekte', 'Kommunikation', 'Mitglieder & Rollen', 'Vereinsabläufe'].map((item) => (
              <div key={item} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm font-bold text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-[#B5A47A]/15 blur-3xl rounded-full" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
            <img
              src="/core4x-future-plan.png"
              alt="Core4X Zukunftsplan für verschiedene Vereinsarten"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const includedModules = [
  'Projekte',
  'Kalender',
  'Aufgaben',
  'Umfragen',
  'Mitgliederverwaltung',
  'Kernteam',
  'Einkaufsliste',
  'Rechnungen',
  'Projektchat',
  'Push-Benachrichtigungen',
  'Boniersystem / POS',
]

const Preise: React.FC = () => (
  <section id="preise" className="py-24 px-5 bg-[#F6F1E4]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs font-black uppercase tracking-widest text-[#B5A47A] mb-3">Pakete & Preise</div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Preisstruktur in Ausarbeitung.</h2>
        <p className="mt-4 text-black/55 font-medium max-w-2xl mx-auto text-sm md:text-base">
          Core4X befindet sich aktuell in der Alpha-/Beta-Vorbereitung. Die endgültigen Pakete und Preise werden nach den ersten Praxistests festgelegt.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-white rounded-2xl border border-black/5 p-6 md:p-8 shadow-sm">
          <div className="text-xs font-black uppercase tracking-widest text-black/40 mb-2">Geplanter Grundumfang</div>
          <h3 className="text-2xl font-black tracking-tight mb-4">Ein starkes Basissystem für Vereine.</h3>
          <div className="mb-5 rounded-2xl border border-[#B5A47A]/35 bg-[#F6F1E4] px-5 py-5">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 rounded-xl bg-[#B5A47A] text-black flex items-center justify-center text-xs font-black uppercase tracking-wide flex-shrink-0">
                CI
              </div>
              <div>
                <div className="text-sm font-black text-black/80 mb-1">Eigenes Vereinsbranding ist vorgesehen</div>
                <p className="text-xs text-black/55 leading-relaxed">
                  Core4X soll nicht wie eine fremde Standard-App wirken. Logo, Farben und sichtbare Vereinsdarstellung können auf den jeweiligen Verein abgestimmt werden.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {includedModules.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-xl bg-[#F6F1E4] px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-[#B5A47A] flex-shrink-0" />
                <span className="text-sm font-bold text-black/70">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 p-6 md:p-8 text-white h-full flex flex-col justify-between">
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-[#B5A47A] mb-2">Noch keine Fixpreise</div>
            <h3 className="text-2xl font-black tracking-tight mb-4">Fair, modular und praxisnah.</h3>
            <div className="space-y-4">
              <div className="rounded-xl bg-white/5 px-4 py-4">
                <div className="text-sm font-black mb-1">Basic-Einstieg wird geprüft</div>
                <div className="text-xs text-white/55 leading-relaxed">Kleine Vereine sollen ohne unnötige Hürden starten können.</div>
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-4">
                <div className="text-sm font-black mb-1">Premium-Modell wird ausgearbeitet</div>
                <div className="text-xs text-white/55 leading-relaxed">Erweiterte Nutzung, weniger Limits und stärkere Veranstaltungsfunktionen werden nach den Praxistests bewertet.</div>
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-4">
                <div className="text-sm font-black mb-1">Boniersystem bleibt ein Kernpunkt</div>
                <div className="text-xs text-white/55 leading-relaxed">Das POS-Modul wird besonders auf Vereinsfeste, Verkaufssituationen und Tagesauswertungen ausgerichtet.</div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={() => scrollToSection('vormerken')}
              className="w-full py-4 rounded-xl bg-[#B5A47A] text-black text-sm font-black uppercase tracking-wide"
            >
              Alpha vormerken
            </button>
            <p className="text-xs text-white/40 text-center leading-relaxed">
              Die finale Preisstruktur wird veröffentlicht, sobald die Testphase genug belastbare Rückmeldungen liefert.
            </p>
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
      <Zukunft />
      <Preise />

      <footer className="py-12 px-5 border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xl font-black tracking-tight">
            Core<span className="text-[#B5A47A]">4X</span>
            <span className="text-xs font-bold text-black/30 ml-2 uppercase tracking-widest">Vereins-App</span>
          </div>
          <div className="text-xs text-black/30 font-medium">
            {new Date().getFullYear()} Core4X. Alle Rechte vorbehalten.
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
          <p>Diese Website wird privat betrieben und dient der Vorstellung des Softwareprodukts Core4X.</p>
        </Modal>
      )}

      {showDatenschutz && (
        <Modal title="Datenschutzerklärung" onClose={() => setShowDatenschutz(false)}>
          <p className="font-bold">Verantwortlicher</p>
          <p>Schmidt Rainer<br />Friedrich Schmolka-Strasse 12<br />2542 Kottingbrunn<br />rainer@schmidt-kottingbrunn.at</p>
          <p className="font-bold">Welche Daten wir sammeln</p>
          <p>Im Rahmen der Alpha-Voranmeldung erfassen wir folgende Daten: Vorname, Nachname, E-Mail-Adresse, Telefonnummer und Vereins- bzw. Organisationsname. Die Angabe dieser Daten erfolgt freiwillig.</p>
          <p className="font-bold">Zweck der Verarbeitung</p>
          <p>Die erhobenen Daten werden ausschließlich verwendet, um Sie über den Start der Alpha-Phase und weitere Entwicklungen von Core4X zu informieren.</p>
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
