"use client";

import { useState } from "react";

const whatsappUrl = "https://wa.me/4917632174763?text=Hallo%20Gregor%2C%20ich%20interessiere%20mich%20f%C3%BCr%20AUTOMAID%20und%20KI-L%C3%B6sungen%20f%C3%BCr%20mein%20Unternehmen.";

const services = [
  {
    number: "01",
    title: "Executive AI",
    description:
      "Ihr persönlicher KI-Assistent. Termine, Informationen und Aufgaben intelligent organisieren.",
  },
  {
    number: "02",
    title: "Business Automation",
    description:
      "Wiederkehrende Abläufe automatisieren. Weniger manuelle Arbeit, mehr Zeit für Ihr Geschäft.",
  },
  {
    number: "03",
    title: "Smart Reporting",
    description:
      "Wichtige Kennzahlen automatisch aufbereiten. Klar verständlich und genau dann, wenn Sie sie brauchen.",
  },
  {
    number: "04",
    title: "AI Solutions",
    description:
      "Individuelle KI-Lösungen, die sich an Ihr Unternehmen anpassen. Nicht umgekehrt.",
  },
];

const examples = [
  {
    category: "AUTOMATISIERUNG",
    image: "photo-1497215728101-856f4ea42174",
    alt: "Heller Arbeitsplatz mit Laptop und Blick ins Grüne",
    title: "Weniger Klicks. Mehr Zeit.",
    description:
      "Eingehende Anfragen automatisch erfassen, strukturieren und an die richtigen Stellen weiterleiten.",
  },
  {
    category: "KÜNSTLICHE INTELLIGENZ",
    image: "photo-1521737711867-e3b97375f902",
    alt: "Menschen arbeiten gemeinsam an einem Projekt",
    title: "Inhalte, die sich selbst vorbereiten.",
    description:
      "KI-gestützte Erstellung von Texten, Audiobeiträgen und regelmäßigen Informationen.",
  },
  {
    category: "SMART REPORTING",
    image: "photo-1460925895917-afdab827c52f",
    alt: "Laptop mit Diagrammen und digitalen Auswertungen",
    title: "Alles Wichtige auf einen Blick.",
    description:
      "Daten aus verschiedenen Systemen zusammenführen und automatisch verständlich aufbereiten.",
  },
];

function ServiceIcon({ number }) {
  const paths = {
    "01": <><rect x="4" y="5" width="16" height="16" rx="3" /><path d="M8 3v4m8-4v4M4 11h16m-12 4h3m-3 3h6" /></>,
    "02": <><rect x="3" y="3" width="6" height="6" rx="2" /><rect x="15" y="15" width="6" height="6" rx="2" /><path d="M9 6h5a4 4 0 0 1 4 4v5M15 12l3 3 3-3M9 18H6a3 3 0 0 1-3-3v-3" /></>,
    "03": <><path d="M4 4v16h16M8 16v-5m5 5V7m5 9v-7" /></>,
    "04": <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /><path d="M20 3v4m-2-2h4" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[number]}</svg>;
}

function WhatsAppIcon() {
  return <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.6-4.8A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="M8.5 7.5c-.7 0-1.1.6-1.1 1.4 0 2.8 3.5 6.3 6.3 6.3.8 0 1.4-.4 1.4-1.1l-1.8-1-1 .7a8 8 0 0 1-3.1-3.1l.7-1-1-2.2Z" /></svg>;
}

function MorningBriefing() {
  return (
    <aside className="morning-briefing" aria-labelledby="morning-title">
      <div className="morning-topline"><span><span className="briefing-dot" /> DEIN KI-ASSISTENT</span><span>07:30</span></div>
      <div className="morning-greeting"><span className="morning-sun" aria-hidden="true">☀</span><p>DEIN TAG. GUT VORBEREITET.</p><h2 id="morning-title">Guten Morgen, Chef.</h2><p>Dein Überblick ist da. Der Kaffee kann kommen.</p></div>
      <div className="morning-agenda">
        <div className="morning-row"><span className="morning-icon"><ServiceIcon number="01" /></span><div><span className="morning-label">DEINE TERMINE</span><strong>09:30 · Projektgespräch</strong><p>Agenda und Unterlagen sind vorbereitet.</p></div></div>
        <div className="morning-row"><span className="morning-icon"><ServiceIcon number="02" /></span><div><span className="morning-label">DEIN POSTEINGANG</span><strong>3 Nachrichten brauchen dich.</strong><p>Das Wichtigste zusammengefasst und priorisiert.</p></div></div>
        <div className="morning-row"><span className="morning-icon"><ServiceIcon number="04" /></span><div><span className="morning-label">DEIN FOKUS</span><strong>Das Angebot für deinen Kunden.</strong><p>Der Entwurf liegt bereit. Du gibst ihn frei.</p></div></div>
      </div>
      <a className="morning-demo-link" href="#demo">So könnte dein Morgen aussehen <span aria-hidden="true">↗</span></a>
      <p className="morning-disclaimer">Beispielbriefing mit fiktiven Daten.</p>
    </aside>
  );
}

export default function Home() {
  const [demo, setDemo] = useState("morgen");

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <a
          href="#start"
          className="brand"
          aria-label="AUTOMAID Startseite"
        >
          <img
            src="/Automaid_Logo_2026.svg"
            alt="AUTOMAID"
            className="brand-logo"
          />
        </a>

        <nav className="nav-links" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#loesungen">Lösungen</a>
          <a href="#demo">Live-Demo</a>
        </nav>

        <a
          className="nav-contact whatsapp-link"
          href={whatsappUrl} target="_blank" rel="noopener noreferrer"
        >
          <WhatsAppIcon /> WhatsApp ↗
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="start">
        <div className="hero-content hero-intro-grid">
          <div className="hero-copy">
          <div className="eyebrow">
            KI-BERATUNG & INTELLIGENTE AUTOMATISIERUNG
          </div>

          <h1>
            Weniger Routine.
            <br />
            <span>Mehr Freiraum.</span>
          </h1>

          <p className="hero-description">
            Wir machen künstliche Intelligenz für den Mittelstand
            einfach nutzbar. Mit maßgeschneiderten Lösungen, die
            Mitarbeiter entlasten und Geschäftsführern mehr Zeit
            für das Wesentliche verschaffen.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#leistungen">
              Möglichkeiten entdecken <span>↗</span>
            </a>

            <a
              className="button-secondary whatsapp-link"
              href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Schreib mir auf WhatsApp
            </a>
          </div>
          </div>
          <MorningBriefing />
        </div>

        <figure className="hero-photo">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85" alt="Lichtdurchflutetes Büro mit offenen Arbeitsbereichen und Pflanzen" width="1600" height="650" decoding="async" />
          <figcaption><span className="photo-caption-icon"><ServiceIcon number="04" /></span><span>Technologie im Hintergrund.<br /><strong>Menschen im Mittelpunkt.</strong></span></figcaption>
        </figure>

        <div className="hero-bottom">
          <span>AUTOMAID</span>
          <span>
            Ihr Unternehmen. Intelligent unterstützt.
          </span>
        </div>
      </section>

      {/* ÜBER AUTOMAID */}
      <section className="intro-section">
        <div className="section-label">DIE IDEE</div>

        <h2>
          Technologie sollte
          <br />
          Arbeit <span>leichter machen.</span>
        </h2>

        <p>
          Künstliche Intelligenz muss nicht kompliziert sein.
          Wir entwickeln einfache, maßgeschneiderte Lösungen,
          die sich nahtlos in Ihren Arbeitsalltag integrieren.
          Persönlich, verständlich und mit einem klaren Ziel:
          mehr Freiraum für die Menschen in Ihrem Unternehmen.
        </p>
      </section>

      {/* LEISTUNGEN */}
      <section className="services-section" id="leistungen">
        <div className="section-heading">
          <div className="section-label">
            UNSERE LEISTUNGEN
          </div>

          <h2>
            Intelligente Lösungen.
            <br />
            <span>Spürbare Entlastung.</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-card-top">
                <span className="service-icon"><ServiceIcon number={service.number} /></span>
                <span className="service-number">{service.number}</span>
              </div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span
                className="service-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* UNSER ANSATZ */}
      <section className="statement-section">
        <div className="section-label">
          UNSER ANSATZ
        </div>

        <h2>
          Nicht mehr Software.
          <br />
          <span>Sondern weniger Arbeit.</span>
        </h2>

        <p>
          Wir schauen zuerst auf Ihre täglichen Abläufe.
          Dann entwickeln wir die KI-Lösung, die tatsächlich
          einen Unterschied macht.
        </p>
      </section>

      {/* ANWENDUNGSBEISPIELE */}
      <section
        className="solutions-section"
        id="loesungen"
      >
        <div className="section-heading">
          <div className="section-label">
            ANWENDUNGSBEISPIELE
          </div>

          <h2>
            Was heute schon
            <br />
            <span>möglich ist.</span>
          </h2>
        </div>

        <div className="examples-grid">
          {examples.map((example) => (
            <article
              className="example-card"
              key={example.title}
            >
              <div className="example-visual">
                <img src={`https://images.unsplash.com/${example.image}?auto=format&fit=crop&w=800&q=80`} alt={example.alt} width="800" height="560" loading="lazy" decoding="async" />
              </div>

              <div className="example-body">
                <span className="example-category">
                  {example.category}
                </span>

                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INTERAKTIVE DEMO */}
      <section className="demo-section" id="demo">
        <div className="section-heading">
          <div className="section-label">
            EXECUTIVE AI
          </div>

          <h2>
            Ihr Unternehmen.
            <br />
            <span>Auf einen Blick.</span>
          </h2>

          <p className="section-description">
            So könnte Ihr persönlicher KI-Assistent
            aussehen: Informationen bündeln,
            Prioritäten erkennen und den Arbeitstag
            intelligent vorbereiten.
          </p>
        </div>

        <div className="demo-window">
          <div className="demo-topbar">
            <div
              className="window-dots"
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
            </div>

            <span>
              AUTOMAID / EXECUTIVE BRIEFING
            </span>

            <span className="demo-status">
              ● DEMO
            </span>
          </div>

          <div className="demo-inner">
            <div className="demo-header">
              <div>
                <span className="demo-kicker">
                  IHR PERSÖNLICHER ASSISTENT
                </span>

                <h3>Guten Morgen.</h3>

                <p>
                  Hier ist Ihr Überblick für heute.
                </p>
              </div>

              <div className="demo-toggle">
                <button
                  type="button"
                  className={
                    demo === "morgen" ? "active" : ""
                  }
                  onClick={() => setDemo("morgen")}
                  aria-pressed={demo === "morgen"}
                >
                  Morgen
                </button>

                <button
                  type="button"
                  className={
                    demo === "fokus" ? "active" : ""
                  }
                  onClick={() => setDemo("fokus")}
                  aria-pressed={demo === "fokus"}
                >
                  Fokus
                </button>
              </div>
            </div>

            {demo === "morgen" ? (
              <div className="briefing-grid">
                <div className="briefing-card">
                  <span>TERMINE</span>
                  <strong>03</strong>
                  <p>
                    Geplante Gespräche und Meetings
                  </p>
                </div>

                <div className="briefing-card">
                  <span>E-MAILS</span>
                  <strong>08</strong>
                  <p>
                    Nachrichten mit Handlungsbedarf
                  </p>
                </div>

                <div className="briefing-card">
                  <span>PRIORITÄTEN</span>
                  <strong>02</strong>
                  <p>
                    Wichtige Aufgaben für heute
                  </p>
                </div>
              </div>
            ) : (
              <div className="focus-panel">
                <span>HEUTE IM FOKUS</span>

                <h4>
                  Das Wesentliche zuerst.
                </h4>

                <p>
                  Zwei Kundenanfragen benötigen eine
                  Entscheidung. Ihr nächstes Meeting
                  ist vorbereitet. Die wichtigsten
                  Kennzahlen liegen bereit.
                </p>
              </div>
            )}

            <div className="demo-note">
              <span aria-hidden="true">✦</span>

              <p>
                <strong>
                  KI-Zusammenfassung
                </strong>
                <br />
                Ihr Assistent bündelt relevante
                Informationen und hilft Ihnen,
                schneller Entscheidungen zu treffen.
              </p>
            </div>
          </div>
        </div>

        <p className="demo-disclaimer">
          Interaktive Beispieldarstellung mit
          fiktiven Daten. Keine Verbindung zu
          realen Unternehmenssystemen.
        </p>
      </section>

      {/* KONTAKT */}
      <section className="contact-section" id="kontakt">
        <div className="section-label">
          KONTAKT
        </div>

        <h2>
          Bereit für
          <br />
          <span>mehr Freiraum?</span>
        </h2>

        <p>
          Lassen Sie uns gemeinsam herausfinden,
          wie künstliche Intelligenz Ihr Unternehmen
          einfacher und effizienter machen kann.
        </p>

        <a
          className="button-primary whatsapp-button"
          href={whatsappUrl} target="_blank" rel="noopener noreferrer"
        >
          <WhatsAppIcon /> Jetzt auf WhatsApp schreiben
        </a>

        <a
          className="contact-email"
          href="mailto:info@automaid.net"
        >
          info@automaid.net
        </a>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <span className="footer-brand">
            AUTOMAID.
          </span>

          <span>
            Ihr Unternehmen. Intelligent unterstützt.
          </span>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AUTOMAID
          </span>

          <div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>

            <a href="/impressum">
              Impressum
            </a>

            <a href="/datenschutz">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
