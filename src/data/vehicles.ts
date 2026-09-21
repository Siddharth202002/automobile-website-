import type { Vehicle } from "@/lib/types";

/**
 * Inventory.
 *
 * The UI reads nothing but the `Vehicle` shape, so this array can be swapped
 * for a CMS or API response without touching a component.
 *
 * ── REAL STOCK ───────────────────────────────────────────────────────────
 * The first four entries are Dewan Motors cars, built from the photographs
 * in /public/vehicles. Only what is visible in those photos is asserted here;
 * price, year, kilometres and ownership are left undefined where they are not
 * known, which renders as "Price on request" and drops the unknown spec rows.
 * Fill in the values marked TODO and they appear automatically.
 *
 * ── DEMO STOCK ───────────────────────────────────────────────────────────
 * Everything after the marker further down is placeholder data from the
 * original build. Delete that block before the site goes live.
 */
export const vehicles: Vehicle[] = [
  {
    id: "dm-0001",
    slug: "mahindra-thar-4x4-hard-top",
    brand: "Mahindra",
    model: "Thar",
    variant: "4x4 Hard Top",
    year: 2023,
    mileage: 70000,
    owners: 1,
    // TODO: registrationYear, price, fuelType
    transmission: "Manual",
    bodyType: "SUV",
    location: "Saharanpur",
    colour: "Black",
    badge: "Verified",
    featured: true,
    listedAt: "2026-09-21",
    images: [
      {
        src: "/vehicles/mahindra-thar-4x4-hard-top/01-side-profile.jpeg",
        caption: "Side Profile",
      },
      {
        src: "/vehicles/mahindra-thar-4x4-hard-top/02-front.jpeg",
        caption: "Front View",
      },
      {
        src: "/vehicles/mahindra-thar-4x4-hard-top/03-rear-three-quarter.jpeg",
        caption: "Rear 3/4 View",
      },
      {
        src: "/vehicles/mahindra-thar-4x4-hard-top/04-rear.jpeg",
        caption: "Rear View",
      },
      {
        src: "/vehicles/mahindra-thar-4x4-hard-top/05-interior.jpeg",
        caption: "Interior & Dashboard",
      },
    ],
    highlights: [
      "4x4 with low-range transfer case",
      "Hard top with tinted glass and side steps",
      "Alloy wheels on MRF Wanderer all-terrain tyres",
      "Single owner from new",
    ],
    description:
      "A 2023, single-owner black Thar hard top in 4x4 trim with a manual gearbox. The paint is glossy across the panels, it sits on alloy wheels with MRF Wanderer all-terrain tyres, and the cabin has been kept under seat covers and quilted floor mats.",
  },
  {
    id: "dm-0002",
    slug: "tata-punch-amt",
    brand: "Tata",
    model: "Punch",
    variant: "AMT",
    // TODO: year, registrationYear, price, owners
    mileage: 39308, // read from the odometer photo
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    location: "Saharanpur",
    colour: "Grey",
    badge: "Verified",
    featured: true,
    listedAt: "2026-09-21",
    images: [
      {
        src: "/vehicles/tata-punch-amt/01-side-profile.jpeg",
        caption: "Side Profile",
      },
      { src: "/vehicles/tata-punch-amt/02-front.jpeg", caption: "Front View" },
      {
        src: "/vehicles/tata-punch-amt/03-rear-three-quarter.jpeg",
        caption: "Rear 3/4 View",
      },
      { src: "/vehicles/tata-punch-amt/04-rear.jpeg", caption: "Rear View" },
      {
        src: "/vehicles/tata-punch-amt/05-interior.jpeg",
        caption: "Interior & Dashboard",
      },
      {
        src: "/vehicles/tata-punch-amt/06-odometer.jpeg",
        caption: "Odometer — 39,308 km",
      },
    ],
    highlights: [
      "AMT automatic — easy in city traffic",
      "Touchscreen infotainment with steering controls",
      "Roof rails and black alloy wheels",
      "39,308 km on the odometer",
    ],
    description:
      "A grey Punch with the AMT automatic gearbox, originally supplied by a Saharanpur dealer. It rides on black alloy wheels with roof rails, and the interior has been kept under seat covers. The odometer reads 39,308 km at the time of listing.",
  },
  {
    id: "dm-0003",
    slug: "maruti-suzuki-wagon-r",
    brand: "Maruti Suzuki",
    model: "WagonR",
    variant: "LXi",
    year: 2022,
    mileage: 32000,
    // TODO: registrationYear, price, owners
    fuelType: "Petrol",
    transmission: "Manual",
    bodyType: "Hatchback",
    location: "Saharanpur",
    colour: "Bronze",
    badge: "Verified",
    featured: true,
    listedAt: "2026-09-21",
    images: [
      {
        src: "/vehicles/maruti-suzuki-wagon-r/01-front-three-quarter.jpeg",
        caption: "Front 3/4 View",
      },
      {
        src: "/vehicles/maruti-suzuki-wagon-r/02-side-profile.jpeg",
        caption: "Side Profile",
      },
      {
        src: "/vehicles/maruti-suzuki-wagon-r/03-front.jpeg",
        caption: "Front View",
      },
      {
        src: "/vehicles/maruti-suzuki-wagon-r/04-rear.jpeg",
        caption: "Rear View",
      },
      {
        src: "/vehicles/maruti-suzuki-wagon-r/05-interior.jpeg",
        caption: "Interior & Dashboard",
      },
    ],
    highlights: [
      "Tall-boy cabin with a genuinely roomy back seat",
      "Touchscreen infotainment fitted",
      "Driver airbag and reverse parking sensors",
      "Cheap to run and simple to service",
    ],
    description:
      "A 2022 bronze WagonR LXi with 32,000 km, a manual gearbox, clean beige interior and a fitted touchscreen. The easiest kind of second car: light to drive, cheap to fuel, and serviceable at any workshop in town.",
  },

  {
    id: "dm-0004",
    slug: "mahindra-scorpio-s7",
    brand: "Mahindra",
    model: "Scorpio",
    variant: "S7",
    year: 2020,
    mileage: 80584, // read from the odometer photo
    // TODO: registrationYear, price, owners
    fuelType: "Diesel", // mHawk badge on the front wing
    transmission: "Manual",
    bodyType: "SUV",
    location: "Saharanpur",
    colour: "White",
    badge: "Verified",
    featured: true,
    listedAt: "2026-09-21",
    images: [
      {
        src: "/vehicles/mahindra-scorpio-s7/01-side-profile.jpeg",
        caption: "Side Profile",
      },
      { src: "/vehicles/mahindra-scorpio-s7/02-front.jpeg", caption: "Front View" },
      {
        src: "/vehicles/mahindra-scorpio-s7/03-side-left.jpeg",
        caption: "Left Side",
      },
      { src: "/vehicles/mahindra-scorpio-s7/04-rear.jpeg", caption: "Rear View" },
      {
        src: "/vehicles/mahindra-scorpio-s7/05-interior.jpeg",
        caption: "Interior & Dashboard",
      },
      {
        src: "/vehicles/mahindra-scorpio-s7/06-odometer.jpeg",
        caption: "Odometer — 80,584 km",
      },
    ],
    highlights: [
      "mHawk diesel with a manual gearbox",
      "Seven-seat layout for the whole family",
      "Roof rails, side steps and rear spoiler",
      "Touchscreen infotainment fitted",
    ],
    description:
      "A white 2020 Scorpio S7 with the mHawk diesel and a manual gearbox. It has the classic tall Scorpio stance, roof rails and side steps, and a cabin with a fitted touchscreen. The odometer reads 80,584 km at the time of listing.",
  },

  // ── DEMO STOCK BELOW — placeholder cars, delete before going live ────────
  {
    id: "av-1001",
    slug: "bmw-3-series-320d-luxury-line",
    brand: "BMW",
    model: "3 Series",
    variant: "320d Luxury Line",
    year: 2021,
    registrationYear: 2021,
    price: 3475000,
    mileage: 28450,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "Sedan",
    location: "Bengaluru",
    owners: 1,
    colour: "Mineral White",
    photos: 12,
    badge: "Verified",
    listedAt: "2026-08-28",
    highlights: [
      "Full BMW service history on record",
      "Adaptive LED headlamps with cornering",
      "Harman Kardon surround sound",
      "Tyres replaced at 26,000 km",
    ],
    description:
      "A single-owner 320d Luxury Line that has spent its life on highway runs rather than city crawl. Paint reads original across all panels, the cabin is unmarked, and the last service was completed 1,200 km ago at an authorised centre.",
  },
  {
    id: "av-1002",
    slug: "mercedes-benz-c-class-c-220d",
    brand: "Mercedes-Benz",
    model: "C-Class",
    variant: "C 220d",
    year: 2020,
    registrationYear: 2020,
    price: 3190000,
    mileage: 41200,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "Sedan",
    location: "Bengaluru",
    owners: 2,
    colour: "Obsidian Black",
    photos: 10,
    listedAt: "2026-08-21",
    highlights: [
      "Burmester audio and panoramic sunroof",
      "New brake discs and pads fitted",
      "Extended warranty valid to 2027",
      "No paintwork on any structural panel",
    ],
    description:
      "The outgoing C-Class still drives like nothing else in its price band. This one came to us from a corporate lease, so the service book is complete and the interior has been kept to fleet standard.",
  },
  {
    id: "av-1003",
    slug: "toyota-fortuner-2-8-legender",
    brand: "Toyota",
    model: "Fortuner",
    variant: "2.8 Legender 4x2 AT",
    year: 2022,
    registrationYear: 2022,
    price: 4250000,
    mileage: 19800,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    location: "Chennai",
    owners: 1,
    colour: "Platinum White Pearl",
    photos: 14,
    badge: "New Arrival",
    listedAt: "2026-09-12",
    highlights: [
      "Under 20,000 km with one owner",
      "Toyota warranty active until 2027",
      "Ventilated front seats, 360-degree camera",
      "Original tyres with 70% tread left",
    ],
    description:
      "A barely-run Legender in the colour everyone asks for. It arrived with the first owner's complete documentation, including every service invoice, and passed our 210-point inspection without a single advisory.",
  },
  {
    id: "av-1004",
    slug: "honda-city-vx-cvt",
    brand: "Honda",
    model: "City",
    variant: "VX CVT",
    year: 2021,
    registrationYear: 2021,
    price: 1195000,
    mileage: 33100,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "Sedan",
    location: "Pune",
    owners: 1,
    colour: "Radiant Red Metallic",
    photos: 11,
    badge: "Verified",
    listedAt: "2026-08-04",
    highlights: [
      "Honda Sensing driver assistance",
      "Serviced every 10,000 km without a miss",
      "Non-smoker cabin, original upholstery",
      "New battery fitted in 2026",
    ],
    description:
      "The sensible pick in this listing set: a CVT City with light usage, complete paperwork and the kind of maintenance record that makes a resale conversation short.",
  },
  {
    id: "av-1005",
    slug: "hyundai-creta-sx-o-turbo",
    brand: "Hyundai",
    model: "Creta",
    variant: "SX (O) Turbo DCT",
    year: 2023,
    registrationYear: 2023,
    price: 1785000,
    mileage: 14600,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    location: "Hyderabad",
    owners: 1,
    colour: "Abyss Black",
    photos: 13,
    badge: "New Arrival",
    listedAt: "2026-09-16",
    highlights: [
      "Panoramic sunroof and Bose audio",
      "Level 2 driver assistance package",
      "Balance manufacturer warranty",
      "Ceramic coating applied in 2025",
    ],
    description:
      "A current-generation Creta in the fully-loaded turbo trim, still inside its factory warranty. Low kilometres, one owner, and no accident history on the insurance record.",
  },
  {
    id: "av-1006",
    slug: "kia-seltos-htx-plus-diesel",
    brand: "Kia",
    model: "Seltos",
    variant: "HTX Plus Diesel AT",
    year: 2022,
    registrationYear: 2022,
    price: 1640000,
    mileage: 26900,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    location: "Mumbai",
    owners: 1,
    colour: "Gravity Grey",
    photos: 9,
    badge: "Verified",
    listedAt: "2026-07-29",
    highlights: [
      "Ventilated seats and air purifier",
      "All four tyres replaced in 2025",
      "Kia service history on record",
      "Two sets of keys included",
    ],
    description:
      "A well-kept Seltos diesel automatic, bought and maintained in Mumbai. The underbody is clean, there is no flood history, and the RC is ready for immediate transfer.",
  },
  {
    id: "av-1007",
    slug: "mahindra-xuv700-ax7-l",
    brand: "Mahindra",
    model: "XUV700",
    variant: "AX7 L Diesel AT",
    year: 2022,
    registrationYear: 2023,
    price: 2190000,
    mileage: 31500,
    fuelType: "Diesel",
    transmission: "Automatic",
    bodyType: "SUV",
    location: "Delhi NCR",
    owners: 1,
    colour: "Midnight Black",
    photos: 12,
    listedAt: "2026-08-11",
    highlights: [
      "Seven seats with captain chairs",
      "Driver assistance, Sony 3D audio, dual displays",
      "Warranty transferable to the new owner",
      "Front and rear dash cams fitted",
    ],
    description:
      "The AX7 L is the trim worth waiting for, and this one has been garage-kept since new. Expect a straight body, tight panel gaps and an interior that still smells factory-fresh.",
  },
  {
    id: "av-1008",
    slug: "maruti-suzuki-baleno-zeta",
    brand: "Maruti Suzuki",
    model: "Baleno",
    variant: "Zeta 1.2 MT",
    year: 2021,
    registrationYear: 2021,
    price: 785000,
    mileage: 38400,
    fuelType: "Petrol",
    transmission: "Manual",
    bodyType: "Hatchback",
    location: "Ahmedabad",
    owners: 2,
    colour: "Nexa Blue",
    photos: 8,
    badge: "Verified",
    listedAt: "2026-07-18",
    highlights: [
      "Head-up display and 360-degree camera",
      "Fuel economy verified at 19 km/l",
      "Clutch replaced in 2025",
      "Clean insurance claim history",
    ],
    description:
      "An easy first car or second car: cheap to run, simple to service, and with every scheduled visit logged at an authorised workshop.",
  },
  {
    id: "av-1009",
    slug: "bmw-x1-sdrive18i-m-sport",
    brand: "BMW",
    model: "X1",
    variant: "sDrive18i M Sport",
    year: 2023,
    registrationYear: 2023,
    price: 4480000,
    mileage: 11200,
    fuelType: "Petrol",
    transmission: "Automatic",
    bodyType: "SUV",
    location: "Bengaluru",
    owners: 1,
    colour: "Storm Bay",
    photos: 15,
    badge: "New Arrival",
    listedAt: "2026-09-18",
    highlights: [
      "Just 11,200 km from new",
      "Service package covered until 2028",
      "Curved display with the latest infotainment",
      "M Sport package with 18-inch alloys",
    ],
    description:
      "Effectively a new car without the waiting list. It has covered barely 11,000 km, carries the full factory warranty, and comes with the original invoice and both keys.",
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getFeaturedVehicles(limit = 3): Vehicle[] {
  return vehicles.filter((vehicle) => vehicle.featured).slice(0, limit);
}

export function getRelatedVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  const sameShape = vehicles.filter(
    (candidate) =>
      candidate.id !== vehicle.id &&
      (candidate.bodyType === vehicle.bodyType || candidate.brand === vehicle.brand),
  );
  const rest = vehicles.filter(
    (candidate) => candidate.id !== vehicle.id && !sameShape.includes(candidate),
  );
  return [...sameShape, ...rest].slice(0, limit);
}
