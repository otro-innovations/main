import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/siteConfig';
import { siblingHref } from '@/components/Footer';

export const metadata = buildMetadata({
  title: 'Divisions & Services',
  description:
    'Explore the five OTRO divisions: Education, Digital, Trade (B2B sourcing), Shop (B2C retail) and Tours (China travel facilitation).',
  path: '/services',
});

/** Hub "services" page = division directory. Deep detail lives on each pillar site. */
export default function ServicesPage() {
  return (
    <>
      <Navbar links={[{ href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }]} />
      <main id="main">
        <Section
          eyebrow="What we do"
          title="Five divisions. One standard of care."
          lead={`Each ${siteConfig.brandName} division runs its own site with dedicated processes, pricing and reporting.`}
          tone="navy"
        />
        <Section tone="light">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card href={siblingHref('edu')} title="OTRO Education" badge="Study beyond borders">
              University shortlisting, application packages (SOP/CV/LOR), scholarship matching, visa documentation,
              interview prep, academic support and career services.
            </Card>
            <Card href={siblingHref('digital')} title="OTRO Digital" badge="Growth engine">
              Managed Meta, Google and TikTok advertising with strategy and ROI reporting — plus an instant,
              self-serve SMM panel for creators and local businesses.
            </Card>
            <Card href={siblingHref('trade')} title="Trade OTRO" badge="B2B sourcing">
              Supplier discovery, factory audits, QC inspections, negotiation, Incoterms guidance (FOB/CIF/DDP)
              and freight — your buyer&apos;s representative in Asia.
            </Card>
            <Card href={siblingHref('shop')} title="Shop OTRO" badge="B2C retail">
              Curated e-commerce for Bangladesh: cash on delivery, bKash/Nagad payments, Pathao/RedX delivery
              and easy returns.
            </Card>
            <Card href={siblingHref('tours')} title="OTRO Tours" badge="China gateway">
              Trade-fair accompaniment (Canton Fair, Yiwu), medical-travel facilitation and custom leisure
              itineraries with EN↔中文 support on the ground.
            </Card>
            <Card href="/contact" title="Not sure where to start?" badge="Guidance">
              Tell us your goal and we&apos;ll route you to the right division — or combine several for one project.
            </Card>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
