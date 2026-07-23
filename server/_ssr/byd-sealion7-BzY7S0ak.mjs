import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SLUG$9, P as PageShell } from "./router-yyZJRRTw.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, b as colorWhite$2 } from "./models-DmxA6HI8.mjs";
import { T as TestDriveForm } from "./TestDriveForm-BdpQnTkL.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-qEHCfW-0.mjs";
import { FAQ } from "./FAQ-lPAIqE_v.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, G as Gauge, Z as Zap, j as Battery, S as ShieldCheck, a as Check, k as Minus } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/react-icons.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./server-DCtFaL4q.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "./dialog-CrynPlRS.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-popover.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/date-fns.mjs";
import "../_libs/react-day-picker.mjs";
import "../_libs/date-fns__tz.mjs";
const heroBanner = "/assets/overview-banner-d-CWBK_RJW.jpeg";
const storyLifeInMotionImage = "/assets/overview-img-02-CJoO-7lo.png";
const storyBladeBatteryImage = "/assets/overview-img-03-o2SLEQDz.jpeg";
const storyEPlatformImage = "/assets/overview-img-04-CCqqrxFZ.jpeg";
const exterior1 = "/assets/exterior-img-01-DyQwYHMA.jpeg";
const exterior2 = "/assets/exterior-img-02-DXzXKytc.jpeg";
const exterior3 = "/assets/exterior-img-03-Ds7XO6Jy.jpeg";
const exterior4 = "/assets/exterior-img-04-CXYh9Auu.jpeg";
const exterior5 = "/assets/exterior-img-05-BItcTJSF.jpeg";
const interior1 = "/assets/interior-img-01-DumXB48H.jpeg";
const interior2 = "/assets/interior-img-02-On9KgJ_e.jpeg";
const interior3 = "/assets/interior-img-03-CjdaLUok.jpeg";
const interior4 = "/assets/interior-img-04-DYi_z-zu.jpeg";
const interior5 = "/assets/interior-img-05-cIza9iTO.jpeg";
const colorSharkGrey = "/assets/sealion7-shark-grey-BuxMDNiJ.png";
const colorSpaceGrey = "/assets/sealion7-space-grey-CTKY6lQA.png";
const TRIMS = [
  {
    key: "premium",
    name: "Premium",
    price: 1264900,
    accel: "6.7",
    range: "567",
    power: "230 kW",
    battery: "82.5 kWh",
    charge: "DC 150 kW"
  },
  {
    key: "awd",
    name: "AWD Performance",
    price: 1364900,
    accel: "4.5",
    range: "542",
    power: "390 kW",
    battery: "82.5 kWh",
    charge: "DC 150 kW"
  }
];
const COLORS = [
  {
    name: "Space Grey",
    hex: "#5f6368",
    border: "#5f6368",
    img: colorSpaceGrey,
    note: "Premium and AWD Performance"
  },
  {
    name: "Horizon White",
    hex: "#ececec",
    border: "#d0d0d0",
    img: colorWhite$2,
    note: "Premium and AWD Performance"
  },
  {
    name: "Shark Grey",
    hex: "#696e75",
    border: "#696e75",
    img: colorSharkGrey,
    note: "AWD Performance only"
  }
];
const EXTERIOR_GALLERY = [
  {
    img: exterior1,
    label: "Ocean-X Face",
    desc: "The front is designed with the Ocean-X Face concept to elevate the car's sporty look"
  },
  {
    img: exterior2,
    label: "Aerodynamic Side Profile",
    desc: "The body lines manage airflow and reduce drag with a coefficient of just 0.28 cd"
  },
  {
    img: exterior3,
    label: "Double-U Floating Headlights",
    desc: "Double-U headlights blend seamlessly into the vehicle design"
  },
  {
    img: exterior4,
    label: "Boost Charging Port",
    desc: "The charging port with status lighting makes charging simple in any situation"
  },
  {
    img: exterior5,
    label: "20-inch Alloy Wheels",
    desc: "Large alloy wheels with red brake calipers on the AWD Performance grade"
  }
];
const INTERIOR_GALLERY = [
  {
    img: interior1,
    label: "Panoramic Glass Roof",
    desc: "The 2.1-square-metre panoramic glass roof helps reduce heat and filter UV"
  },
  {
    img: interior2,
    label: "10.25-inch Driver Display",
    desc: "A crisp digital driver display that is easy to read"
  },
  {
    img: interior3,
    label: "Driver Monitoring System",
    desc: "A system that helps warn of risky driving behaviour for greater safety"
  },
  {
    img: interior4,
    label: "15.6-inch Rotating Touchscreen",
    desc: "An electrically rotating centre screen for multimedia and vehicle controls"
  },
  {
    img: interior5,
    label: "Crystal Shifter & 50W Wireless Charge",
    desc: "Crystal Shifter gear control and a wireless charger with up to 50W output"
  }
];
const dimensionsRows = [
  { label: "Seating capacity", premium: "5", awd: "5" },
  { label: "Length (mm)", premium: "4,830", awd: "4,830" },
  { label: "Width (mm)", premium: "1,925", awd: "1,925" },
  { label: "Height (mm)", premium: "1,620", awd: "1,620" },
  { label: "Wheelbase (mm)", premium: "2,930", awd: "2,930" },
  { label: "Front cargo capacity (litres)", premium: "58", awd: "58" },
  { label: "Rear cargo capacity (litres)", premium: "500", awd: "500" },
  { label: "Curb weight (kg)", premium: "2,225", awd: "2,340" }
];
const powertrainRows = [
  { label: "Drivetrain", premium: "Rear-wheel drive", awd: "All-wheel drive" },
  {
    label: "Front motor type",
    premium: "-",
    awd: "Asynchronous motor"
  },
  { label: "Max front motor power (kW)", premium: "-", awd: "160" },
  { label: "Max front motor torque (Nm)", premium: "-", awd: "310" },
  { label: "Max rear motor power (kW)", premium: "230", awd: "230" },
  { label: "Max rear motor torque (Nm)", premium: "380", awd: "380" },
  { label: "Total max power (kW)", premium: "230", awd: "390" },
  { label: "Total max torque (Nm)", premium: "380", awd: "690" },
  { label: "0 - 100 km/h (seconds)", premium: "6.7", awd: "4.5" }
];
const chargingRows = [
  { label: "Battery type", premium: "BYD Blade Battery", awd: "BYD Blade Battery" },
  { label: "Maximum battery capacity (kWh)", premium: "82.5", awd: "82.5" },
  { label: "Maximum range according to NEDC (km)", premium: "567", awd: "542" },
  { label: "AC Type 2 charging support - max power (kW)", premium: "11", awd: "11" },
  { label: "DC CCS2 charging support - max power (kW)", premium: "150", awd: "150" },
  { label: "V2L (Vehicle-to-Load)", premium: "●", awd: "●" },
  { label: "Regenerative braking system", premium: "●", awd: "●" }
];
const safetyRows = [
  { label: "Front airbags", premium: "●", awd: "●" },
  { label: "Side airbags", premium: "●", awd: "●" },
  { label: "Side curtain airbags", premium: "●", awd: "●" },
  { label: "360-degree surround-view camera", premium: "●", awd: "●" },
  { label: "ACC", premium: "●", awd: "●" },
  { label: "AEB", premium: "●", awd: "●" },
  { label: "LDW", premium: "●", awd: "●" },
  { label: "BSD", premium: "●", awd: "●" },
  { label: "DOW", premium: "●", awd: "●" },
  { label: "DMS", premium: "●", awd: "●" }
];
const storySections = [
  {
    image: storyLifeInMotionImage,
    title: "LIFE IN MOTION",
    subtitle: "BYD SEALION 7",
    body: "An electric SUV designed for everyday use, combining performance, charging, and comfort in one package"
  },
  {
    image: storyBladeBatteryImage,
    title: "BLADE BATTERY",
    subtitle: "Safety Technology",
    body: "Battery technology engineered to improve safety, durability, and everyday efficiency"
  },
  {
    image: storyEPlatformImage,
    title: "e-Platform 3.0",
    subtitle: "EV Architecture",
    body: "An EV platform that improves acceleration, range, charging speed, and ride comfort"
  }
];
function toSpecRows(rows) {
  return rows.map((row) => ({
    label: row.label,
    values: [row.premium, row.awd]
  }));
}
function useReveal() {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const { ref, visible } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
      },
      children
    }
  );
}
function BydSealion7Brochure({ model }) {
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const installment = calcInstallment(model.priceFrom, 20, 5, 2.49);
  const currentTrim = TRIMS.find((item) => item.key === trim) ?? TRIMS[1];
  const galleryItems = galleryTab === "exterior" ? EXTERIOR_GALLERY : INTERIOR_GALLERY;
  reactExports.useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setVideoPlaying(true);
  }, []);
  reactExports.useEffect(() => {
    setActiveGallery(0);
  }, [galleryTab]);
  const faqs = [
    {
      q: "How much is the BYD SEALION 7?",
      a: "Premium is THB 1,264,900 and AWD Performance is THB 1,364,900, with promotions available periodically"
    },
    {
      q: "How far can the BYD SEALION 7 travel?",
      a: "The Premium grade can travel up to 567 km and the AWD Performance grade up to 542 km based on NEDC"
    },
    {
      q: "What charging options does the BYD SEALION 7 support?",
      a: "Supports AC Type 2 up to 11 kW and DC CCS2 up to 150 kW, plus V2L"
    },
    {
      q: "What is the monthly payment for the BYD SEALION 7?",
      a: `Monthly payments start at ${formatBaht(installment.monthly)}/month (20% down, 60 installments, 2.49% interest)`
    }
  ];
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: model.name,
    description: model.description,
    vehicleModelDate: "2026",
    bodyType: "SUV",
    fuelType: "Electric",
    seatingCapacity: 5,
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: model.priceFrom,
      availability: "https://schema.org/InStock",
      seller: { "@type": "AutoDealer", name: "BYD Jinlong Srinakarin" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[88vh] w-full items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD SEALION 7", className: "absolute inset-0 h-full w-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 pb-16 pt-32 sm:px-12 lg:px-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-block rounded-full border border-primary/40 bg-background/20 px-3 py-1 text-xs text-primary backdrop-blur-sm", children: "Electric SUV · e-Platform 3.0 · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-black leading-none tracking-normal sm:text-7xl lg:text-8xl", children: "BYD SEALION 7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl font-light tracking-widest text-muted-foreground sm:text-2xl", children: "UPGRADE YOUR EVERY DRIVE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-end gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Starting price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient sm:text-4xl", children: formatBaht(model.priceFrom) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-border pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Starting monthly payment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                formatBaht(installment.monthly),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/month" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "gradient-accent glow inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white", children: [
              "Test Drive ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#installment",
                className: "glass inline-flex items-center gap-2 rounded-full border border-border/60 px-7 py-3 text-sm font-semibold backdrop-blur-sm",
                children: "Calculate payment"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          { label: "Max Range", val: `${currentTrim.range} km` },
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "Max Power", val: currentTrim.power },
          { label: "Battery", val: currentTrim.battery },
          { label: "Fast Charge", val: currentTrim.charge }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl border border-border/40 px-4 py-2 text-center backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-gradient", children: item.val })
        ] }, item.label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Variants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Choose Your Trim" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 flex flex-wrap justify-center gap-3", children: TRIMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setTrim(item.key),
          className: `rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${trim === item.key ? "gradient-accent glow text-white" : "glass border border-border hover:border-primary/40"}`,
          children: item.name
        },
        item.key
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: currentTrim.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-black text-gradient", children: formatBaht(currentTrim.price) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#test-drive",
              className: "gradient-accent inline-flex items-center gap-2 self-start rounded-full px-6 py-3 text-sm font-semibold text-white sm:self-auto",
              children: [
                "Test Drive ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5", children: [
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "NEDC Range", val: `${currentTrim.range} km` },
          { label: "Max Power", val: currentTrim.power },
          { label: "Battery", val: currentTrim.battery },
          { label: "Fast Charge", val: currentTrim.charge }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/40 bg-background/30 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold", children: item.val })
        ] }, item.label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Choose the color that fits you" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "* Shark Grey is exclusive to the AWD Performance grade" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-10 lg:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "w-full flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden rounded-2xl", style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" }, children: COLORS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.img,
            alt: item.name,
            className: "absolute inset-0 h-full w-full object-contain transition-opacity duration-500",
            style: { opacity: activeColor === index ? 1 : 0 }
          },
          item.name
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, className: "flex min-w-[240px] flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs uppercase tracking-widest text-muted-foreground", children: "Exterior Colour" }),
          COLORS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveColor(index),
              className: `flex items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-200 ${activeColor === index ? "border border-primary/60 bg-primary/8" : "glass border border-transparent hover:border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `h-9 w-9 flex-shrink-0 rounded-full transition-all ${activeColor === index ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`,
                    style: { background: item.hex, border: `2px solid ${item.border}` },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: item.note })
                ] })
              ]
            },
            item.name
          ))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Distinctive and uniquely suited to your needs" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center gap-2", children: ["exterior", "interior"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setGalleryTab(tab),
            className: `rounded-full px-8 py-2.5 text-sm font-semibold capitalize transition-all ${galleryTab === tab ? "gradient-accent glow text-white" : "glass border border-border hover:border-primary/40"}`,
            children: tab === "exterior" ? "Exterior" : "Interior"
          },
          tab
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden rounded-2xl bg-surface", style: { aspectRatio: "16/9" }, children: [
        galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.img,
            alt: item.label,
            className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            style: { opacity: activeGallery === index ? 1 : 0 }
          },
          item.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-white", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-white/70", children: galleryItems[activeGallery].desc })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-5 gap-3", children: galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveGallery(index),
          className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === index ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`,
          style: { aspectRatio: "16/9" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "h-full w-full object-cover" })
        },
        item.label
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden border-y border-border", children: storySections.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      FeatureBlock,
      {
        img: item.image,
        imgAlt: item.title,
        reverse: index % 2 === 1,
        title: item.title,
        subtitle: item.subtitle,
        body: item.body
      },
      item.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Technical Specifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Premium · AWD Performance" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "Dimensions & Weight", icon: Gauge, rows: toSpecRows(dimensionsRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "Powertrain", icon: Zap, rows: toSpecRows(powertrainRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "Charging", icon: Battery, rows: toSpecRows(chargingRows) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: "Safety", icon: ShieldCheck, rows: toSpecRows(safetyRows) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "BYD SEALION 7 Payment Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Calculate the payment that suits you instantly" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Test Drive BYD SEALION 7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Free of charge, with our team ready to assist at every step" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: "Frequently Asked Questions About BYD SEALION 7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(vehicleSchema) } })
  ] });
}
function FeatureBlock({
  img,
  imgAlt,
  title,
  subtitle,
  body,
  reverse
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col items-stretch ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: imgAlt, className: "w-full object-cover", style: { height: "clamp(260px, 40vw, 520px)" } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, className: "flex flex-1 items-center bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl px-8 py-12 lg:px-14 lg:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-widest text-primary", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black leading-tight sm:text-3xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-muted-foreground", children: body })
    ] }) })
  ] });
}
function SpecTable({
  title,
  icon: Icon,
  rows
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass overflow-hidden rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border bg-background/40 px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-1/2 px-6 py-3 text-left font-medium", children: "Specification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "Premium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "AWD Performance" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: index % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((value, cellIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value }) }, `${row.label}-${cellIndex}`))
      ] }, row.label)) })
    ] }) })
  ] });
}
function Cell({ value }) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mx-auto h-5 w-5 text-primary", "aria-label": "Included" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": "Not included" });
  if (value === "●") return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mx-auto h-5 w-5 text-primary", "aria-label": "Included" });
  if (value === "-") return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": "Not included" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value });
}
const SplitComponent = () => {
  const m = getModel(SLUG$9);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydSealion7Brochure, { model: m });
};
export {
  SplitComponent as component
};
