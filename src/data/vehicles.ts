import type { Vehicle } from "@/lib/types";

/**
 * Inventory.
 *
 * The UI reads nothing but the `Vehicle` shape, so this array can be swapped
 * for a CMS or API response without touching a component.
 *
 * Every entry is a Dewan Motors car, built from the photographs in
 * /public/vehicles. Only what is known is asserted here; price, year,
 * kilometres and ownership are left undefined where they are not known,
 * which renders as "Price on request" and drops the unknown spec rows.
 * Fill in the values marked TODO and they appear automatically.
 */
export const vehicles: Vehicle[] = [
  {
    id: "dm-0005",
    slug: "toyota-innova-crysta-gx-o-at",
    brand: "Toyota",
    model: "Innova Crysta",
    variant: "2.4 GX (O) AT",
    year: 2022,
    mileage: 89982, // read from the odometer photo
    owners: 1,
    // TODO: registrationYear, price
    fuelType: "Diesel", // "2.4 G" badge on the tailgate is the 2.4 diesel
    transmission: "Automatic",
    bodyType: "MPV",
    location: "Saharanpur",
    colour: "Black",
    badge: "New Arrival",
    featured: true,
    listedAt: "2026-09-21",
    images: [
      {
        src: "/vehicles/toyota-innova-crysta-gx-o-at/01-front-three-quarter.jpeg",
        caption: "Front 3/4 View",
      },
      {
        src: "/vehicles/toyota-innova-crysta-gx-o-at/02-rear-three-quarter.jpeg",
        caption: "Rear 3/4 View",
      },
      {
        src: "/vehicles/toyota-innova-crysta-gx-o-at/03-side-view.jpeg",
        caption: "Side View",
      },
      { src: "/vehicles/toyota-innova-crysta-gx-o-at/04-front.jpeg", caption: "Front View" },
      { src: "/vehicles/toyota-innova-crysta-gx-o-at/05-rear.jpeg", caption: "Rear View" },
      {
        src: "/vehicles/toyota-innova-crysta-gx-o-at/06-dashboard.jpeg",
        caption: "Dashboard",
      },
      {
        src: "/vehicles/toyota-innova-crysta-gx-o-at/07-front-seats.jpeg",
        caption: "Front Seats",
      },
      {
        src: "/vehicles/toyota-innova-crysta-gx-o-at/08-second-row.jpeg",
        caption: "Second-Row Captain Seats",
      },
      {
        src: "/vehicles/toyota-innova-crysta-gx-o-at/09-odometer.jpeg",
        caption: "Odometer — 89,982 km",
      },
    ],
    highlights: [
      "2.4 diesel with automatic gearbox",
      "Captain seats in the second row",
      "Single owner from new",
      "Touchscreen, alloy wheels and side steps",
    ],
    description:
      "A 2022, single-owner Innova Crysta 2.4 GX (O) automatic in black. The diesel automatic is the combination families look for, with captain seats in the second row, a touchscreen on the dash, and alloy wheels with side steps outside. The odometer reads 89,982 km at the time of listing.",
  },
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
