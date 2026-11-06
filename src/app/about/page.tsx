import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'About OTRO — The Bridge Mindset',
  description:
    'OTRO INNOVATIONS LLC is a US-structured company bridging China, Bangladesh and the world across trade, education, digital growth and travel. Meet the story behind the bridge.',
  path: '/about',
});

/** SITE 0 hub About page — founder story + operating model (CONTENT_BRIEFS). */
export default function AboutPage() {
  return (
    <>
      <Navbar links={[{ href: '/services', label: 'Divisions' }, { href: '/contact', label: 'Contact' }]} />
      <main id="main">
        <Section
          eyebrow="Our story"
          title="Built by people who live between worlds"
          lead={`${siteConfig.legalEntityName} exists because cross-border business shouldn't require trust to be blind. We are the bridge — language, culture, logistics and education, connected by people who operate on both sides.`}
          tone="navy"
        />
        <Section eyebrow="The Bridge Mindset" title="From literature to logistics to research" tone="light">
          <div className="max-w-3xl space-y-4 text-brand-ink/80">
            <p>
              Our founder began with a BA in English — a training in precision of language that became a
              professional superpower. It carried through years in logistics and sourcing at Annex Cargo, where
              purchase orders, Incoterms and supplier negotiations were daily work, and into co-authored,
              Scopus-indexed research. Today they complete a Master&apos;s degree in China, running operations
              where deals actually happen.
            </p>
            <p>
              That combination is rare: Western-educated communication, Chinese-market presence, and Bangladeshi
              home-ground knowledge. Most agencies have one leg; OTRO stands on three. Every engagement is handled
              as a trusted representative would handle their own money — verified, documented and reported.
            </p>
            <p>
              We are deliberately not generalists-for-hire or opportunistic dropshippers. Five focused divisions,
              one accountable entity, published standards.
            </p>
          </div>
        </Section>
        <Section eyebrow="How we work" title="Principles, not promises" tone="mist">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Verify first">Factories audited, documents checked, claims tested before you spend.</Card>
            <Card title="Say it plainly">Contracts and reports in clear English (and 中文/বাংলা when needed).</Card>
            <Card title="Price transparently">Itemised quotes, published ranges, no hidden commissions.</Card>
            <Card title="Stay accountable">A US LLC, real names, one point of contact from kickoff to delivery.</Card>
          </div>
        </Section>
        <Section
          eyebrow="Global footprint"
          title="Operating across borders"
          lead="Our founding siblings run day-to-day operations from China, serve Bangladesh as a home market, and invoice through the US entity. As our infrastructure matures, all divisions consolidate under a single global domain — same teams, same standards."
          tone="navy"
        >
          <Button href="/contact">Work with us</Button>
        </Section>
      </main>
      <Footer />
    </>
  );
}
