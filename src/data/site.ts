/**
 * Everything the dealership can rebrand without touching a component:
 * contact details, navigation, marketing copy and the process steps.
 */

export const site = {
  name: "Dewan Motors",
  tagline: "Verified Pre-Owned Cars",
  legalName: "Dewan Motors",
  description:
    "Every Dewan Motors car passes a multi-point inspection and comes with verified ownership history and transparent, no-haggle pricing.",
  // TODO: swap for the live domain once it is registered.
  url: "https://dewanmotors.example",
  /** Primary line — used wherever there is room for only one number. */
  phone: "+91 94122 32961",
  phoneHref: "tel:+919412232961",
  /** Both showroom lines, listed in the footer and on the contact page. */
  phones: [
    { label: "+91 94122 32961", href: "tel:+919412232961" },
    { label: "+91 98974 04004", href: "tel:+919897404004" },
  ],
  whatsapp: "919412232961",
  whatsappHref: "https://wa.me/919412232961",
  // TODO: replace with the dealership's real inbox.
  email: "hello@[yourdomain].com",
  address: {
    line1: "Ambala Road, In Front of City Palace",
    line2: "Saharanpur, Uttar Pradesh",
    full: "Ambala Road, In Front of City Palace, Saharanpur, Uttar Pradesh",
    mapHref: "https://maps.google.com/?q=Dewan+Motors+Ambala+Road+Saharanpur",
  },
  /** Open all seven days, so this is a single line everywhere it appears. */
  hours: {
    all: "Mon–Sun: 10:00 AM – 8:00 PM",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Sell Your Car", href: "/sell" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Browse Inventory", href: "/inventory" },
    { label: "Car Loans & RTO", href: "/#finance" },
    { label: "Sell Your Car", href: "/sell" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  categories: [
    { label: "Sedans", href: "/inventory?body=Sedan" },
    { label: "SUVs", href: "/inventory?body=SUV" },
    { label: "Hatchbacks", href: "/inventory?body=Hatchback" },
    { label: "Luxury Cars", href: "/inventory?min=30" },
    { label: "Under ₹10 Lakh", href: "/inventory?max=10" },
  ],
} as const;

export const heroPromises = [
  "Easy Car Loans",
  "RTO & Paperwork Handled",
  "Inspected & Verified",
] as const;

/**
 * The finance and paperwork band on the home page. Most customers buy on a
 * loan, so this is deliberately one of the first things they see.
 */
export const financeOffer = {
  eyebrow: "Car loans & RTO paperwork",
  title: "Drive home on EMI. We handle the rest.",
  description:
    "Most of our customers buy on a loan — so we arrange the finance for you, and take care of the RTO transfer and every document from start to finish.",
  loan: {
    title: "Easy car finance",
    points: [
      "Loans arranged on used cars",
      "Low down payment options",
      "Help with documents and approval",
      "EMI worked out before you commit",
    ],
  },
  paperwork: {
    title: "End-to-end RTO & paperwork",
    points: [
      "RC transfer into your name",
      "Insurance transfer or renewal",
      "Loan NOC and hypothecation handled",
      "No running around to the RTO",
    ],
  },
  whatsappMessage:
    "Hi Dewan Motors, I'd like to buy a car on loan. Can you check my eligibility?",
} as const;

export const whyChooseUs = [
  {
    icon: "shield",
    title: "210-point inspection",
    body: "Mechanical, electrical and structural checks are completed before a car is photographed — let alone listed.",
  },
  {
    icon: "file",
    title: "Verified ownership history",
    body: "RC, insurance, service records and accident history are pulled and cross-checked against the chassis.",
  },
  {
    icon: "tag",
    title: "No-haggle pricing",
    body: "One fair price, benchmarked against live market data. No inflated sticker, no theatrical discount.",
  },
  {
    icon: "refresh",
    title: "5-day exchange window",
    body: "Drive it for five days. If the car is not what we said it was, bring it back and we will make it right.",
  },
  {
    icon: "wallet",
    title: "Car loans arranged",
    body: "We arrange finance on used cars and work out the EMI with you, so you know the monthly figure before you commit.",
  },
  {
    icon: "truck",
    title: "End-to-end RTO work",
    body: "RC transfer, insurance and hypothecation — our team handles every form and every RTO visit for you.",
  },
] as const;

export const buyingSteps = [
  {
    step: "01",
    title: "Shortlist Online",
    body: "Filter by budget, body type and city, then compare real specifications side by side.",
  },
  {
    step: "02",
    title: "Book a Test Drive",
    body: "At the showroom or at your doorstep, on a slot that suits you.",
  },
  {
    step: "03",
    title: "Review the Report",
    body: "Read the full inspection report and ownership history before you decide.",
  },
  {
    step: "04",
    title: "Drive It Home",
    body: "Finance, paperwork and RC transfer handled end to end by our team.",
  },
] as const;

export const sellingSteps = [
  {
    step: "01",
    title: "Submit Your Details",
    body: "Share your car and contact details online.",
  },
  {
    step: "02",
    title: "We Inspect the Vehicle",
    body: "A quick visit or drop-off at our nearest hub.",
  },
  {
    step: "03",
    title: "Receive an Offer",
    body: "Get a transparent, no-obligation price.",
  },
  {
    step: "04",
    title: "Complete the Sale",
    body: "Accept, sign the paperwork, and get paid.",
  },
] as const;

export const sellingPromises = [
  "Free doorstep or showroom inspection",
  "Transparent offer, explained line by line",
  "Fast payment once you accept",
  "We handle the RC transfer paperwork",
] as const;

export const listingTrustPoints = [
  "Ownership and registration documents verified",
  "Multi-point mechanical & safety inspection completed",
  "No major accident history reported",
  "Price benchmarked against live market data",
] as const;

/**
 * Headline numbers on the home and About pages. Keep these to figures the
 * dealership can stand behind — add a "Cars Sold" count once it is confirmed.
 */
export const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "North India", label: "Customers Across the Region" },
  { value: "7 Days", label: "Open Every Week" },
  { value: "2", label: "Direct Phone Lines" },
] as const;

export const testimonials = [
  {
    quote:
      "They sent the inspection report before I asked for it, and the car was exactly as described. The RC transfer was done in nine days.",
    name: "Priya S.",
    context: "Bought a Honda City",
  },
  {
    quote:
      "I had three quotes for my old Creta. Dewan Motors was not the highest, but they were the only ones who explained how they got to the number.",
    name: "Rahul M.",
    context: "Sold a Hyundai Creta",
  },
  {
    quote:
      "No haggling, no last-minute charges at delivery. The price on the website was the price I paid.",
    name: "Anjali K.",
    context: "Bought a BMW 3 Series",
  },
] as const;

export const faqs = [
  {
    question: "What does the inspection actually cover?",
    answer:
      "210 checkpoints across engine, transmission, suspension, brakes, electricals, air conditioning, body panels and structural members. You receive the full report — including the advisories — before you pay anything.",
  },
  {
    question: "Can I take the car for an independent inspection?",
    answer:
      "Yes. Bring your own mechanic to the showroom, or take the car to a workshop of your choice during the test drive slot.",
  },
  {
    question: "Can I buy a car on loan?",
    answer:
      "Yes — most of our customers do. We arrange finance on used cars, help you with the documents, and work out the EMI with you before you apply.",
  },
  {
    question: "Do you handle the RC transfer and RTO work?",
    answer:
      "Yes, end to end. We prepare the forms, handle the RTO visits, and take care of the insurance transfer and any loan NOC — you just sign where needed. We keep you updated until the RC is in your name.",
  },
  {
    question: "What if the car is not right for me?",
    answer:
      "Every car comes with a 5-day exchange window. Return it within five days or 300 km and pick something else from the inventory.",
  },
] as const;
