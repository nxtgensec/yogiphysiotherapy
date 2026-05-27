import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Conditions } from "@/components/site/Conditions";
import { AboutClinic } from "@/components/site/AboutClinic";
import { AboutDoctor } from "@/components/site/AboutDoctor";
import { Services } from "@/components/site/Services";
import { Machinery } from "@/components/site/Machinery";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { CLINIC } from "@/lib/clinic";

const FAQ_ITEMS = [
  { q: "Which is the best physiotherapy clinic in Tirupati?", a: `Yogi Physiotherapy Pain Relief & Obesity Clinic, led by ${CLINIC.doctor.name} (${CLINIC.doctor.credentials}, Reg ${CLINIC.doctor.regNo}), is among Tirupati's most trusted physiotherapy clinics — known for personalized care, modern equipment and home visits.` },
  { q: "What conditions does physiotherapy treat?", a: "Back pain, neck pain, knee and joint pain, sciatica, frozen shoulder, sports injuries, stroke and paralysis recovery, post-surgery rehab, posture issues and more." },
  { q: "Do you offer home visit physiotherapy in Tirupati?", a: "Yes — clinic-grade home visit physiotherapy across Tirupati for bedridden, elderly and post-surgery patients." },
  { q: "How does obesity management work?", a: "Personalized exercise therapy, dietary guidance, body composition tracking and weekly check-ins for sustainable fat loss." },
  { q: "How many sessions will I need?", a: "Most acute conditions resolve in 6–12 sessions. Chronic and neurological conditions may need longer programs." },
  { q: "Is physiotherapy painful?", a: "No. Treatment is designed to relieve pain, not cause it." },
  { q: "Do I need a doctor's referral?", a: "Not required — book a consultation on WhatsApp or by phone directly." },
  { q: "What are your clinic timings?", a: "Mon–Sat: 8:00 AM – 9:00 PM. Sundays by appointment only." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Best Physiotherapy Clinic in ${CLINIC.city} | ${CLINIC.shortName}` },
      {
        name: "description",
        content: `Best physiotherapy clinic in ${CLINIC.city} for back pain, knee pain, sports injury, paralysis rehab & obesity care. Led by ${CLINIC.doctor.name} (${CLINIC.doctor.credentials}). Home visits available. Book on WhatsApp.`,
      },
      { name: "keywords", content: `best physiotherapy clinic in ${CLINIC.city}, physiotherapy ${CLINIC.city}, best physiotherapist ${CLINIC.city}, back pain treatment ${CLINIC.city}, knee pain ${CLINIC.city}, obesity clinic ${CLINIC.city}, home visit physiotherapy ${CLINIC.city}, sports injury ${CLINIC.city}, paralysis rehabilitation ${CLINIC.city}, sciatica treatment ${CLINIC.city}` },
      { property: "og:title", content: `Best Physiotherapy Clinic in ${CLINIC.city} | ${CLINIC.shortName}` },
      { property: "og:description", content: `Pain relief, obesity care & recovery — Tirupati's trusted physiotherapy clinic. Book on WhatsApp.` },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `Best Physiotherapy Clinic in ${CLINIC.city}` },
      { name: "twitter:description", content: `Expert physiotherapy, pain relief & obesity care in ${CLINIC.city}.` },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: CLINIC.city },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "Physiotherapy"],
          name: CLINIC.name,
          image: "/favicon.png",
          telephone: CLINIC.phone,
          email: CLINIC.email,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            addressLocality: CLINIC.city,
            addressRegion: CLINIC.state,
            addressCountry: "IN",
          },
          areaServed: CLINIC.city,
          medicalSpecialty: ["Physiotherapy", "PainMedicine", "SportsMedicine"],
          openingHours: ["Mo-Sa 08:00-21:00"],
          founder: {
            "@type": "Physician",
            name: CLINIC.doctor.name,
            medicalSpecialty: "Physiotherapy",
            identifier: CLINIC.doctor.regNo,
          },
        }),
      },
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
    <div id="top" className="min-h-dvh bg-background pb-20 text-foreground lg:pb-0">
      <Navbar />
      <main>
        <Hero />

        {/* Quick condition selector — desktop only to keep mobile focused */}
        <div className="hidden lg:block">
          <Conditions />
        </div>

        {/* Section order per request */}
        <AboutClinic />
        <AboutDoctor />
        <Services />
        <Machinery />
        <WhyUs />
        <Process />

        {/* Patient stories — desktop only to reduce mobile overwhelm */}
        <div className="hidden lg:block">
          <Testimonials />
        </div>

        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </div>
  );
}
