import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, P as PageShell, i as PageHero } from "./router-dp9q-XuW.mjs";
import { FAQ } from "./FAQ-CVmkTV-_.mjs";
import "../_libs/seroval.mjs";
import { q as Percent, S as ShieldCheck, p as Sparkles, r as BatteryCharging, s as Gift, W as Wrench } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/react-icons.mjs";
import "./models-2MA_lXr_.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./server-B-vU6s86.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/zod.mjs";
function PromoPage() {
  const {
    locale
  } = useI18n();
  const isEn = locale === "en";
  const promos = [{
    icon: Percent,
    title: isEn ? "0% interest" : "ดอกเบี้ย 0%",
    desc: isEn ? "Special 0% interest up to 48 installments" : "ดอกเบี้ยพิเศษ 0% สูงสุด 48 งวด",
    value: "0%"
  }, {
    icon: ShieldCheck,
    title: isEn ? "Free first-class insurance" : "ฟรีประกันชั้น 1",
    desc: isEn ? "First year, up to 30,000 THB value" : "ปีแรก มูลค่าสูงสุด 30,000 บาท",
    value: isEn ? "1st year" : "ปีแรก"
  }, {
    icon: Sparkles,
    title: isEn ? "Free window tint" : "ฟรีฟิล์มกรองแสง",
    desc: isEn ? "Premium ceramic tint for all windows" : "ฟิล์มเซรามิคพรีเมียมรอบคัน",
    value: isEn ? "Full car" : "รอบคัน"
  }, {
    icon: BatteryCharging,
    title: isEn ? "Free Home Charger" : "ฟรี Home Charger",
    desc: isEn ? "7 kW wall box with installation" : "Wall Box 7 kW พร้อมติดตั้ง",
    value: "7 kW"
  }, {
    icon: Gift,
    title: isEn ? "Special gifts" : "ของแถมพิเศษ",
    desc: isEn ? "Front-rear dashcam and floor mats" : "กล้องหน้า-หลัง และพรมปูพื้น",
    value: isEn ? "Free" : "ฟรี"
  }, {
    icon: Wrench,
    title: isEn ? "Free service for 3 years" : "ฟรีค่าบริการ 3 ปี",
    desc: isEn ? "Free maintenance labor for 3 years / 60,000 km" : "ฟรีค่าแรงเช็คระยะ 3 ปี / 60,000 กม.",
    value: isEn ? "3 years" : "3 ปี"
  }];
  const faqs = [{
    q: isEn ? "How long are these promotions valid?" : "โปรโมชั่นนี้ใช้ได้ถึงเมื่อไร?",
    a: isEn ? "Promotions are time-limited. Please contact our team for the latest conditions." : "โปรโมชั่นมีระยะเวลาจำกัด แนะนำให้ติดต่อทีมงานเพื่อรับเงื่อนไขล่าสุด"
  }, {
    q: isEn ? "Can multiple promotions be combined?" : "ใช้โปรหลายอย่างรวมกันได้ไหม?",
    a: isEn ? "Most promotions can be combined. Our team will help calculate the best value package for you." : "โปรโมชั่นส่วนใหญ่สามารถใช้ร่วมกันได้ ทีมงานจะคำนวณข้อเสนอที่คุ้มที่สุดให้ท่าน"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: isEn ? "This Month's Promotion" : "โปรโมชั่นเดือนนี้", title: isEn ? "Latest BYD Promotions" : "โปรโมชั่น BYD ล่าสุด", subtitle: isEn ? "Exclusive offers for BYD Jinlong Srinakarin customers" : "ข้อเสนอพิเศษสำหรับลูกค้า BYD จินหลง ศรีนครินทร์ เท่านั้น" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: promos.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-7 hover-lift relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold gradient-accent text-primary-foreground", children: p.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-10 w-10 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: isEn ? "Get a personalized offer" : "รับข้อเสนอเฉพาะคุณ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Our BYD Jinlong Srinakarin team is ready to provide the best-value offer for you." : "ทีมงาน BYD จินหลง ศรีนครินทร์ พร้อมจัดข้อเสนอที่คุ้มค่าที่สุด" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/test-drive-byd", className: "rounded-full gradient-accent px-6 py-3 font-semibold text-primary-foreground glow", children: isEn ? "Book test drive + get offer" : "นัดทดลองขับ + รับโปร" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "rounded-full glass border border-primary/40 px-6 py-3 font-semibold", children: isEn ? "Consult sales team" : "ปรึกษาทีมขาย" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs })
  ] });
}
export {
  PromoPage as component
};
