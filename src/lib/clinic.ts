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
    weekdays: "Mon  to  Sat: 8:00 AM  to  9:00 PM",
    sunday: "Sunday: By Appointment",
  },
};

export function buildWhatsAppLink(condition?: string, painNote?: string) {
  const base = `https://wa.me/${CLINIC.whatsapp}`;
  const lines = [
    `Hello Dr. Yugandhar,`,
    condition
      ? `I am looking for help with: *${condition}*.`
      : `I would like to book a physiotherapy consultation.`,
    painNote ? `My concern: ${painNote}` : `Please share available timings and next steps.`,
    `  Sent from yogiphysiotherapy.com`,
  ];
  return `${base}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function buildCallLink() {
  return `tel:${CLINIC.phone}`;
}
