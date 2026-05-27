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

const SITE_URL = "https://yogiphysiotherapy.com";
const HOME_DESCRIPTION = `Best physiotherapy clinic in ${CLINIC.city} for back pain, neck pain, knee pain, sciatica, sports injury rehabilitation, paralysis rehab, home visit physiotherapy and obesity management. Led by ${CLINIC.doctor.name} (${CLINIC.doctor.credentials}).`;

const FAQ_ITEMS = [
  {
    q: "Which is the best physiotherapy clinic in Tirupati?",
    a: `Yogi Physiotherapy Pain Relief & Obesity Clinic, led by ${CLINIC.doctor.name} (${CLINIC.doctor.credentials}, Reg ${CLINIC.doctor.regNo}), is among Tirupati's most trusted physiotherapy clinics. known for personalized care, modern equipment and home visits.`,
  },
  {
    q: "What conditions does physiotherapy treat?",
    a: "Back pain, neck pain, knee and joint pain, sciatica, frozen shoulder, sports injuries, stroke and paralysis recovery, post-surgery rehab, posture issues and more.",
  },
  {
    q: "Do you offer home visit physiotherapy in Tirupati?",
    a: "Yes. clinic-grade home visit physiotherapy across Tirupati for bedridden, elderly and post-surgery patients.",
  },
  {
    q: "How does obesity management work?",
    a: "Personalized exercise therapy, dietary guidance, body composition tracking and weekly check-ins for sustainable fat loss.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most acute conditions resolve in 6 to 12 sessions. Chronic and neurological conditions may need longer programs.",
  },
  {
    q: "Is physiotherapy painful?",
    a: "No. Physiotherapy is planned to reduce pain and improve movement safely. Some patients may feel mild post-exercise soreness, similar to a workout, and it usually settles quickly.",
  },
  {
    q: "Do I need a doctor's referral?",
    a: "Not required. book a consultation on WhatsApp or by phone directly.",
  },
  {
    q: "What are your clinic timings?",
    a: "Mon to Sat: 8:00 AM  to  9:00 PM. Sundays by appointment only.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Best Physiotherapy Clinic in ${CLINIC.city} | ${CLINIC.shortName}` },
      {
        name: "description",
        content: HOME_DESCRIPTION,
      },
      {
        name: "keywords",
        content: `best physiotherapy clinic in ${CLINIC.city}, best physiotherapist in ${CLINIC.city}, physiotherapy ${CLINIC.city}, back pain treatment ${CLINIC.city}, neck pain treatment ${CLINIC.city}, knee pain physiotherapy ${CLINIC.city}, sciatica treatment ${CLINIC.city}, sports injury physiotherapy ${CLINIC.city}, paralysis rehabilitation ${CLINIC.city}, stroke physiotherapy ${CLINIC.city}, home visit physiotherapy ${CLINIC.city}, obesity clinic ${CLINIC.city}, posture correction ${CLINIC.city}, orthopedic physiotherapy ${CLINIC.city}, neuro physiotherapy ${CLINIC.city}`,
      },
      {
        property: "og:title",
        content: `Best Physiotherapy Clinic in ${CLINIC.city} | ${CLINIC.shortName}`,
      },
      {
        property: "og:description",
        content: HOME_DESCRIPTION,
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `Best Physiotherapy Clinic in ${CLINIC.city}` },
      {
        name: "twitter:description",
        content: HOME_DESCRIPTION,
      },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: CLINIC.city },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "Physiotherapy"],
          name: CLINIC.name,
          image: "/favicon.png",
          url: SITE_URL,
          telephone: CLINIC.phone,
          email: CLINIC.email,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: CLINIC.address.line,
            addressLocality: CLINIC.city,
            addressRegion: CLINIC.state,
            addressCountry: "IN",
          },
          areaServed: CLINIC.city,
          medicalSpecialty: [
            "Physiotherapy",
            "Pain Medicine",
            "Sports Medicine",
            "Neurological Rehabilitation",
            "Orthopedic Rehabilitation",
          ],
          openingHours: ["Mo-Sa 08:00-21:00"],
          hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${CLINIC.name} ${CLINIC.city}`,
          )}`,
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

        {/* Quick condition selector. desktop only to keep mobile focused */}
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

        <Testimonials />

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
