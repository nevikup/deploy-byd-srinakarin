const dolphin = "/assets/model-DPxt2v-5.webp";
const atto3 = "/assets/model-Do6RdNLA.webp";
const atto1Image = "/assets/model-DmqurozH.webp";
const atto2Image = "/assets/model-DVVeWV9a.webp";
const seal = "/assets/model-D_1gWX9C.webp";
const sealion7 = "/assets/model-BkPZronI.webp";
const m6Image = "/assets/model-2RbGPzJz.webp";
const seal6Image = "/assets/model-DzLZmS7T.webp";
const sealion5Image = "/assets/model-OnDecc3W.webp";
const seal5Image = "/assets/model-DRwQ7dEf.webp";
const sealion6Image = "/assets/model-m08bbN43.webp";
const dolphinMobile = "/assets/model-mobile-o3Hdymir.webp";
const atto3Mobile = "/assets/model-mobile-DqNXWSyQ.webp";
const atto1Mobile = "/assets/model-mobile-CqVawhIB.webp";
const atto2Mobile = "/assets/model-mobile-DyuEQHjt.webp";
const sealMobile = "/assets/model-mobile-Db4O9-du.webp";
const sealion7Mobile = "/assets/model-mobile-DZr7by6S.webp";
const m6Mobile = "/assets/model-mobile-DvYNKJKf.webp";
const seal6Mobile = "/assets/model-mobile-UQcU9iiq.webp";
const sealion5Mobile = "/assets/model-mobile-z-DnI3Xb.webp";
const seal5Mobile = "/assets/model-mobile-DyVhe1RH.webp";
const sealion6Mobile = "/assets/model-mobile-rCR27Bxx.webp";
const colorWhite$5 = "/assets/new-dolphin-frost-white-hJzZkvcX.png";
const colorWhite$4 = "/assets/new-byd-atto3-frost-white-BcF9jf1u.webp";
const colorShellWhite = "/assets/atto1-shell-white-model-RjKdg_T1.png";
const colorSurgeWhite = "/assets/atto2-surge-white-model-DjF2MMF8.png";
const colorWhite$3 = "/assets/seal-horizon-white-Dkzsnqe1.png";
const crystalWhite = "/assets/m6-crystal-white-C50DqGgO.png";
const colorWhite$2 = "/assets/sealion7-white-bXleeqDO.png";
const colorHorizonWhite = "/assets/seal6-white-model-CJZ1Jpy8.png";
const colorWhite$1 = "/assets/sealion5dmi-horizon-white-model-C_tWN7AL.png";
const colorWhite = "/assets/seal5-dm-i-horizon-white-cXJ8YKkz.png";
const sealion6White = "/assets/sealion6-dm-i-white-DhL_c18F.png";
const MODELS = [
  {
    slug: "byd-dolphin",
    name: "BYD DOLPHIN",
    tagline: "A modern electric hatchback that is agile and easy to use every day",
    body: "Hatchback",
    image: dolphin,
    priceFrom: 509900,
    range: 435,
    battery: "50.25 kWh Blade Battery",
    power: "70 kW (95 hp)",
    accel: "0-100 km/h in 12.3 seconds",
    topSpeed: "150 km/h",
    charging: "DC 60 kW (30-80% in 30 minutes)",
    seats: 5,
    href: "/byd-dolphin",
    highlights: ["Up to 435 km range (NEDC)", "Blade Battery with advanced safety systems", "Ocean-inspired design", "A cabin with both comfort and entertainment"],
    description: "BYD DOLPHIN is a 100% electric vehicle designed for agile city and suburban use. It stands out with an ocean-inspired design, comprehensive safety systems, and Blade Battery technology that helps deliver confident driving every day."
  },
  {
    slug: "byd-atto3",
    name: "BYD ATTO 3",
    tagline: "A new-generation electric SUV with long range and complete technology",
    body: "SUV",
    image: atto3,
    priceFrom: 669900,
    range: 410,
    rangeLabel: "Base model range",
    rangeNote: "The Extended version can travel up to 480 km (NEDC)",
    battery: "50.25 kWh Blade Battery",
    power: "150 kW (204 hp)",
    accel: "0-100 km/h in 7.9 seconds",
    topSpeed: "160 km/h",
    charging: "DC 88 kW (30-80% in 27 minutes)",
    seats: 5,
    href: "/byd-atto3",
    highlights: ["Up to 410 km range (NEDC)", "15.6-inch rotating centre screen", "Blade Battery with intelligent ADAS", "Dragon Face 3.0 design"],
    description: "BYD ATTO 3 is an electric SUV that balances design, technology, and real-world usability. It comes with Blade Battery technology, a 15.6-inch display, and ADAS driver assistance to make every trip easier and more confident."
  },
  {
    slug: "byd-atto1",
    name: "BYD ATTO 1",
    tagline: "A compact electric vehicle: My Urban, My EV",
    body: "SUV",
    image: atto1Image,
    priceFrom: 429900,
    range: 380,
    battery: "38.88 kWh Blade Battery",
    power: "55 kW",
    accel: "0-50 km/h in 4.9 seconds",
    topSpeed: "-",
    charging: "AC Type 2 6.6 kW / DC CCS2 40 kW",
    seats: 5,
    href: "/byd-atto1",
    highlights: ["Up to 380 km range (NEDC)", "High-safety Blade Battery", "Agile Urban EV design", "Supports DC fast charging up to 40 kW"],
    description: "BYD ATTO 1 is a compact electric vehicle focused on agility for city life. It features Blade Battery technology, a modern design, and practical features for everyday travel."
  },
  {
    slug: "byd-atto2",
    name: "BYD ATTO 2",
    tagline: "A 100% electric compact SUV for the way you move",
    body: "SUV",
    image: atto2Image,
    priceFrom: 629900,
    range: 410,
    battery: "51.13 kWh Blade Battery",
    power: "130 kW",
    accel: "0-100 km/h in 7.9 seconds",
    topSpeed: "-",
    charging: "AC Type 2 7 kW / DC CCS2 82 kW",
    seats: 5,
    href: "/byd-atto2",
    highlights: ["Up to 410 km range (NEDC)", "Maximum motor power of 130 kW", "51.13 kWh Blade Battery", "Supports DC charging up to 82 kW"],
    description: "BYD ATTO 2 is a compact electric SUV designed for city use and everyday travel. It features e-Platform 3.0, Blade Battery technology, and comprehensive safety features in the Dynamic and Premium grades."
  },
  {
    slug: "byd-seal",
    name: "BYD SEAL",
    tagline: "A sporty electric sedan that blends modernity and driving excitement",
    body: "Sedan",
    image: seal,
    priceFrom: 989900,
    range: 510,
    battery: "61.44 kWh Blade Battery",
    power: "230 kW (313 hp)",
    accel: "0-100 km/h in 7.5 seconds",
    topSpeed: "180 km/h",
    charging: "DC 150 kW (30-80% in 26 minutes)",
    seats: 5,
    href: "/byd-seal",
    highlights: ["Up to 510 km range", "61.44 kWh Blade Battery", "Ocean-inspired design", "Premium sporty sedan presence"],
    description: "BYD SEAL is a sporty electric sedan designed so performance and fluid styling work together seamlessly. It is ideal for drivers who want a single EV that delivers sporty character, premium appeal, and modern driving technology."
  },
  {
    slug: "byd-m6",
    name: "BYD M6",
    tagline: "A 6-seat electric MPV built for families and shared journeys",
    body: "MPV",
    image: m6Image,
    priceFrom: 769900,
    range: 420,
    rangeLabel: "Dynamic model range",
    rangeNote: "The Extended version can travel up to 530 km (NEDC)",
    battery: "55.4 kWh Blade Battery",
    power: "120 kW / 310 Nm",
    powerNote: "The Extended version delivers up to 150 kW and a 71.8 kWh battery",
    accel: "0-100 km/h -",
    topSpeed: "-",
    charging: "AC Type 2 7 kW / DC CCS2 85 kW",
    seats: 6,
    fuelType: "Electric",
    href: "/byd-m6",
    highlights: [
      "Up to 420 km range (NEDC) in the Dynamic grade",
      "55.4 kWh Blade Battery with an available 71.8 kWh Extended version",
      "Three-row 2-2-2 cabin layout for 6 passengers",
      "12.8-inch rotating touchscreen with Apple CarPlay and Android Auto"
    ],
    description: "BYD M6 is an electric MPV for families that prioritizes spacious comfort and everyday practicality. Based on the Overview and Tech Spec information from Rêver Automotive, the Dynamic grade starts at THB 769,900 and features a 3-row 2-2-2 cabin, Blade Battery technology, and AC/DC charging support for both city and long-distance trips."
  },
  {
    slug: "byd-sealion7",
    name: "BYD SEALION 7",
    tagline: "A premium sporty electric SUV for the modern lifestyle",
    body: "SUV",
    image: sealion7,
    priceFrom: 1199e3,
    range: 567,
    battery: "82.5 kWh Blade Battery",
    power: "390 kW AWD (530 hp)",
    powerNote: "This output refers to the AWD Performance grade, while the starting price is for the Premium grade",
    accel: "0-100 km/h in 6.7 seconds",
    topSpeed: "215 km/h",
    charging: "DC 230 kW (10-80% in 24 minutes)",
    seats: 5,
    href: "/byd-sealion7",
    highlights: ["Up to 567 km range", "82.5 kWh Blade Battery", "Premium sporty design inspired by the sea", "A spacious cabin for every journey"],
    description: "BYD SEALION 7 is an electric SUV that emphasizes premium presence, performance, and passenger comfort. Its modern personality is expressed through aerodynamic lines, a spacious cabin, and technology designed for real-world use."
  },
  {
    slug: "byd-seal6",
    name: "BYD SEAL 6",
    tagline: "An e-Platform 3.0 electric sedan that drives comfortably, covers all needs, and charges quickly",
    body: "Sedan",
    image: seal6Image,
    priceFrom: 799900,
    range: 485,
    battery: "56.64 kWh Blade Battery",
    power: "-",
    accel: "0-100 km/h in 10.9 seconds",
    topSpeed: "-",
    charging: "DC CCS2 100 kW / AC Type 2 7 kW",
    seats: 5,
    fuelType: "Electric",
    href: "/byd-seal6",
    highlights: ["Up to 485 km range (NEDC)", "e-Platform 3.0 with Cell-to-Body Technology", "Practical 65-litre frunk", "DC charging up to 100 kW"],
    description: "BYD SEAL 6 is an electric sedan that balances design, practicality, and modern driving technology. It comes with e-Platform 3.0, Cell-to-Body Technology, and front storage space to improve everyday convenience."
  },
  {
    slug: "byd-sealion5dmi",
    name: "BYD SEALION 5 DM-i",
    tagline: "A plug-in hybrid SUV that drives on electric power in the city and travels long distances with ease",
    body: "SUV",
    image: sealion5Image,
    priceFrom: 759900,
    range: 110,
    rangeLabel: "Pure EV range",
    totalRange: "1,200+ km",
    battery: "18.3 kWh Blade Battery",
    power: "155 kW / 210 Nm",
    accel: "0-100 km/h in 8.5 seconds",
    topSpeed: "-",
    charging: "DC 18 kW",
    seats: 5,
    fuelType: "Plug-in Hybrid",
    href: "/byd-sealion5dmi",
    highlights: ["Up to 110 km on electric power alone", "Combined range of more than 1,200 km", "Maximum system output of 155 kW", "Supports V2L for off-site use"],
    description: "BYD SEALION 5 DM-i is a plug-in hybrid SUV for drivers who want both city efficiency and the flexibility for long-distance travel. It can run on electric power for daily use and still offers a long combined range without worrying about charging stops."
  },
  {
    slug: "byd-seal-5-dmi",
    name: "BYD SEAL 5 DM-i",
    tagline: "A DM-i Super PHEV sedan that drives efficiently in the city and confidently on the highway",
    body: "Sedan",
    image: seal5Image,
    priceFrom: 599900,
    range: 120,
    rangeLabel: "Pure EV range (Premium grade, NEDC)",
    rangeNote: "The Standard and Dynamic grades offer 85 km on electric power alone",
    battery: "18.3 kWh Blade Battery (Premium grade)",
    power: "160 kW system power / 145 kW motor",
    accel: "0-100 km/h in 7.5 seconds",
    topSpeed: "-",
    charging: "AC Type 2 6.6 kW",
    seats: 5,
    fuelType: "Plug-in Hybrid",
    href: "/byd-seal5dmi",
    highlights: ["Up to 120 km on electric power alone (Premium)", "160 kW total system power", "0-100 km/h in 7.5 seconds", "BYD Blade Battery (LFP)"],
    description: "BYD SEAL 5 DM-i is a plug-in hybrid sedan built on DM-i Super PHEV technology, offering electric-only driving for daily commutes and reserve power for longer trips without range anxiety."
  },
  {
    slug: "byd-sealion6-dmi",
    name: "BYD SEALION 6 DM-i",
    tagline: "A DM-i Super Hybrid SUV with Blade Battery, ready for city and long-distance travel",
    body: "SUV",
    image: sealion6Image,
    priceFrom: 879900,
    range: 110,
    rangeLabel: "Pure EV range",
    battery: "18.3 kWh Blade Battery",
    power: "160 kW system power / 300 Nm",
    accel: "0-100 km/h in 8.5 seconds",
    topSpeed: "-",
    charging: "AC Type 2 6.6 kW / DC CCS2 18 kW",
    seats: 5,
    fuelType: "Plug-in Hybrid",
    href: "/byd-sealion6dmi",
    highlights: ["DM-i Super Hybrid with FWD drive", "160 kW total system power", "BYD Blade Battery (LFP)", "Supports AC Type 2, DC CCS2, and V2L"],
    description: "BYD SEALION 6 DM-i is a plug-in hybrid SUV that combines Blade Battery safety with an intelligent DM-i Super Hybrid system, giving drivers both efficient city driving and confidence on longer journeys."
  }
];
const INSTALLMENT_MODELS = [
  {
    slug: "byd-seal-5-dmi",
    name: "BYD SEAL 5 DM-i",
    body: "Sedan",
    image: seal5Image,
    imageMobile: seal5Mobile,
    priceFrom: 599900,
    href: "/byd-seal5dmi"
  },
  {
    slug: "byd-sealion6-dmi",
    name: "BYD SEALION 6 DM-i",
    body: "SUV",
    image: sealion6Image,
    imageMobile: sealion6Mobile,
    priceFrom: 879900,
    href: "/byd-sealion6dmi"
  },
  {
    slug: "byd-sealion5dmi",
    name: "BYD SEALION 5 DM-i",
    body: "SUV",
    image: sealion5Image,
    imageMobile: sealion5Mobile,
    priceFrom: 759900,
    href: "/byd-sealion5dmi"
  },
  {
    slug: "byd-atto1",
    name: "BYD ATTO 1",
    body: "SUV",
    image: atto1Image,
    imageMobile: atto1Mobile,
    priceFrom: 429900,
    href: "/byd-atto1"
  },
  {
    slug: "byd-atto2",
    name: "BYD ATTO 2",
    body: "SUV",
    image: atto2Image,
    imageMobile: atto2Mobile,
    priceFrom: 629900,
    href: "/byd-atto2"
  },
  {
    slug: "byd-seal6",
    name: "BYD SEAL 6",
    body: "Sedan",
    image: seal6Image,
    imageMobile: seal6Mobile,
    priceFrom: 799900,
    href: "/byd-seal6"
  },
  {
    slug: "byd-sealion7",
    name: "BYD SEALION 7",
    body: "SUV",
    image: sealion7,
    imageMobile: sealion7Mobile,
    priceFrom: 1199e3,
    href: "/byd-sealion7"
  },
  {
    slug: "byd-m6",
    name: "BYD M6",
    body: "MPV",
    image: m6Image,
    imageMobile: m6Mobile,
    priceFrom: 769900,
    href: "/byd-m6"
  },
  {
    slug: "byd-seal",
    name: "BYD SEAL",
    body: "Sedan",
    image: seal,
    imageMobile: sealMobile,
    priceFrom: 989900,
    href: "/byd-seal"
  },
  {
    slug: "byd-atto3",
    name: "BYD ATTO 3",
    body: "SUV",
    image: atto3,
    imageMobile: atto3Mobile,
    priceFrom: 669900,
    href: "/byd-atto3"
  },
  {
    slug: "byd-dolphin",
    name: "BYD DOLPHIN",
    body: "Hatchback",
    image: dolphin,
    imageMobile: dolphinMobile,
    priceFrom: 509900,
    href: "/byd-dolphin"
  }
];
const INSTALLMENT_COVER_IMAGE_BY_SLUG = {
  "byd-dolphin": colorWhite$5,
  "byd-atto3": colorWhite$4,
  "byd-atto1": colorShellWhite,
  "byd-atto2": colorSurgeWhite,
  "byd-seal": colorWhite$3,
  "byd-m6": crystalWhite,
  "byd-sealion7": colorWhite$2,
  "byd-seal6": colorHorizonWhite,
  "byd-sealion5dmi": colorWhite$1,
  "byd-seal-5-dmi": colorWhite,
  "byd-sealion6-dmi": sealion6White
};
function normalizeInstallmentTitle(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/DMI/g, "DMI");
}
function matchInstallmentModelFromTitle(title) {
  const normalizedTitle = normalizeInstallmentTitle(title);
  const sortedModels = [...INSTALLMENT_MODELS].sort((a, b) => b.name.length - a.name.length);
  return sortedModels.find((model) => {
    return normalizedTitle.includes(normalizeInstallmentTitle(model.name));
  });
}
function resolveInstallmentCoverImageFromTitle(title) {
  const model = matchInstallmentModelFromTitle(title);
  if (!model) {
    return null;
  }
  return INSTALLMENT_COVER_IMAGE_BY_SLUG[model.slug] ?? model.image;
}
const getModel = (slug) => MODELS.find((m) => m.slug === slug);
const getInstallmentModel = (slug) => INSTALLMENT_MODELS.find((m) => m.slug === slug);
const formatBaht = (n) => new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(n);
function calcInstallment(price, downPct, years, ratePct) {
  const down = price * (downPct / 100);
  const principal = price - down;
  const months = years * 12;
  const monthlyRate = ratePct / 100 / 12;
  if (monthlyRate === 0) {
    const monthly2 = principal / months;
    return { down, principal, months, monthly: Math.round(monthly2), totalInterest: 0 };
  }
  const growth = (1 + monthlyRate) ** months;
  const monthly = principal * monthlyRate * growth / (growth - 1);
  const totalInterest = monthly * months - principal;
  return { down, principal, months, monthly: Math.round(monthly), totalInterest };
}
export {
  INSTALLMENT_MODELS as I,
  MODELS as M,
  getModel as a,
  colorWhite$2 as b,
  calcInstallment as c,
  colorWhite$1 as d,
  colorHorizonWhite as e,
  formatBaht as f,
  getInstallmentModel as g,
  colorWhite as h,
  colorWhite$3 as i,
  crystalWhite as j,
  colorWhite$5 as k,
  colorWhite$4 as l,
  matchInstallmentModelFromTitle as m,
  colorSurgeWhite as n,
  colorShellWhite as o,
  resolveInstallmentCoverImageFromTitle as r
};
