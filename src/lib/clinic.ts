export const CLINIC = {
  name: "Yogi Physiotherapy Pain Relief & Obesity Clinic",
  shortName: "Yogi Physiotherapy",
  city: "Tirupati",
  state: "Andhra Pradesh",
  country: "India",
  doctor: {
    name: "Dr. G Yugandhar",
    credentials: "D.P.T., B.P.T.-MIAP",
    regNo: "LA-39306",
  },
  phone: "+919573705420",
  phoneDisplay: "+91 95737 05420",
  whatsapp: "917386044600",
  whatsappDisplay: "+91 73860 44600",
  email: "yogiphysiotherapy@gmail.com",
  address: {
    line: "Tirupati, Andhra Pradesh, India",
  },
  hours: {
    weekdays: "Mon – Sat: 8:00 AM – 9:00 PM",
    sunday: "Sunday: By Appointment",
  },
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export function buildWhatsAppLink(condition?: string) {
  const base = `https://wa.me/${CLINIC.whatsapp}`;
  const msg = condition
    ? `Hello Dr. Yugandhar, I would like to book an appointment for ${condition}. Please share available timings.`
    : `Hello Dr. Yugandhar, I would like to book a physiotherapy consultation. Please share available timings.`;
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export function buildCallLink() {
  return `tel:${CLINIC.phone}`;
}
