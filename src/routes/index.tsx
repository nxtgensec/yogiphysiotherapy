import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Conditions } from "@/components/site/Conditions";
import { AboutDoctor } from "@/components/site/AboutDoctor";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { CLINIC } from "@/lib/clinic";

const FAQ_ITEMS = [
  { q: "What conditions does physiotherapy treat?", a: "Physiotherapy treats back pain, neck pain, knee and joint pain, sciatica, frozen shoulder, sports injuries, stroke and paralysis recovery, post-surgery rehab, posture issues and more." },
  { q: "How long is each physiotherapy session?", a: "A typical session lasts 45–60 minutes. The first visit includes a full assessment and may take up to 75 minutes." },
  { q: "Do you offer home visit physiotherapy in Tirupati?", a: "Yes — we provide clinic-grade home visit physiotherapy across Tirupati for bedridden, elderly and post-surgery patients." },
  { q: "How does obesity management work?", a: "Our program combines personalized exercise therapy, dietary guidance, body composition tracking and weekly check-ins for sustainable fat loss." },
  { q: "How many sessions will I need?", a: "Most acute conditions resolve in 6–12 sessions. Chronic and neurological conditions may need longer programs." },
  { q: "Is physiotherapy painful?", a: "No. Treatment is designed to relieve pain, not cause it." },
  { q: "Do I need a doctor's referral?", a: "Not required — you can directly book a consultation on WhatsApp or by phone." },
  { q: "What are your clinic timings?", a: "Mon–Sat: 8:00 AM – 9:00 PM. Sundays by appointment only." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Best Physiotherapy Clinic in ${CLINIC.city} | ${CLINIC.shortName}` },
      {
        name: "description",
        content: `Expert physiotherapy, pain relief and obesity management in ${CLINIC.city} led by ${CLINIC.doctor.name} (${CLINIC.doctor.credentials}). Home visits, sports rehab, neuro & ortho care. Book on WhatsApp.`,
      },
      { name: "keywords", content: `physiotherapy ${CLINIC.city}, best physiotherapist ${CLINIC.city}, back pain treatment ${CLINIC.city}, obesity clinic ${CLINIC.city}, home visit physiotherapy ${CLINIC.city}, pain relief clinic ${CLINIC.city}` },
      { property: "og:title", content: `Best Physiotherapy Clinic in ${CLINIC.city} | ${CLINIC.shortName}` },
      { property: "og:description", content: `Pain relief, obesity care and recovery — personalized physiotherapy in ${CLINIC.city}.` },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: `Best Physiotherapy Clinic in ${CLINIC.city}` },
      { name: "twitter:description", content: `Expert physiotherapy and pain relief in ${CLINIC.city}.` },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: CLINIC.city },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Conditions />
        <AboutDoctor />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
