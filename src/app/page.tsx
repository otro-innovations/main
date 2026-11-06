import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/siteConfig';
import { siblingHref } from '@/components/Footer';

/**
 * OTRO Hub — corporate gateway (CONTENT_BRIEFS SITE 0).
 * Flagship, minimal, confident. Routes visitors to the five pillars.
 * All cross-site links derive from siteConfig (domain-portable).
 */
export default function HomePage() {
  return (
    <>
      <Navbar
        links={[
          { href: '#pillars', label: 'Divisions' },
          { href: '/about', label: 'About' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaLabel="Talk to us"
      />
      <main id="main">
        {/* Hero */}
        <Section
          eyebrow={siteConfig.tagline}
          title="OTRO — Business Beyond Borders."
          lead="We connect China, Bangladesh and the world across trade, education, digital growth and travel — one professional LLC, five specialised divisions, zero guesswork."
          tone="navy"
        >
          <Button href="#pillars">Explore Our Divisions</Button>
        </Section>

        {/* Bridge Mindset / founder story */}
        <Section
          eyebrow="The Bridge Mindset"
          title="Not middlemen. A trusted bridge."
          lead="OTRO was built by founders who have lived on both sides of the bridge: an English-literature graduate turned procurement and logistics professional, now a Master's student and published researcher operating out of China. We speak the language — literally and commercially — of Western buyers and Asian suppliers."
          tone="light"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Language bridge">Fluent EN ↔ 中文 ↔ বাংলা communication, negotiated and documented in plain terms.</Card>
            <Card title="Supply-chain fluency">Real sourcing experience at Annex Cargo: Incoterms (FOB/CIF/DDP), QC gates, freight lanes.</Card>
            <Card title="Research-grade rigour">Co-authored Scopus-indexed research. We verify before we promise.</Card>
            <Card title="On-the-ground presence">Siblings operating from China; US-LLC accountability; Bangladesh home-market knowledge.</Card>
          </div>
        </Section>

        {/* Five pillars */}
        <Section
          id="pillars"
          eyebrow="Our divisions"
          title="Five pillars, one bridge"
          lead="Each division runs as its own focused site under one accountable entity."
          tone="mist"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card href={siblingHref('edu')} title="OTRO Education" badge="Study abroad">
              Admissions, scholarships, visas, academic support and career services for students worldwide.
            </Card>
            <Card href={siblingHref('digital')} title="OTRO Digital" badge="Growth">
              Managed Meta/Google/TikTok advertising plus an instant self-serve SMM panel.
            </Card>
            <Card href={siblingHref('trade')} title="Trade OTRO" badge="B2B sourcing">
              Your buyer&apos;s trusted representative in China: sourcing, QC, logistics, Incoterms.
            </Card>
            <Card href={siblingHref('shop')} title="Shop OTRO" badge="B2C retail">
              Curated products with cash-on-delivery and local delivery across Bangladesh.
            </Card>
            <Card href={siblingHref('tours')} title="OTRO Tours" badge="China travel">
              Trade fairs, medical tourism and custom itineraries — facilitation, not guesswork.
            </Card>
          </div>
        </Section>

        {/* Why OTRO */}
        <Section eyebrow="Why OTRO" title="Global competence, local accountability" tone="light">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="US-structured LLC">OTRO INNOVATIONS LLC — contracts, invoicing and conduct to international standards.</Card>
            <Card title="Multilingual by design">No lost-in-translation deals. Every agreement readable in your language.</Card>
            <Card title="End-to-end">From first supplier message to delivered goods or approved admission — one accountable partner.</Card>
            <Card title="Transparent pricing">Published ranges, itemised quotes, no hidden commissions.</Card>
          </div>
        </Section>

        {/* Global footprint */}
        <Section
          eyebrow="Global footprint"
          title="Operating across borders"
          lead="Our founding team operates between China and Bangladesh with clients around the world. As our infrastructure matures, all divisions consolidate under a single global domain — the same teams, the same standards, one address."
          tone="navy"
        >
          <Button href="/about">Read our story</Button>
        </Section>

        {/* Contact CTA */}
        <Section eyebrow="Contact" title="Start the conversation" lead="Tell us which bridge you need to cross — trade, study, growth, retail or travel." tone="mist">
          <Button href="/contact">Book a consultation</Button>
        </Section>
      </main>
      <Footer />
    </>
  );
}
