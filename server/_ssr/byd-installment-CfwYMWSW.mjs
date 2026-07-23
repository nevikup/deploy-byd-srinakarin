import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, R as Route$a, P as PageShell } from "./router-_Dkbm58u.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-DWtdOexZ.mjs";
import { FAQ } from "./FAQ-D-JUNdeh.mjs";
import { m as matchInstallmentModelFromTitle } from "./models-DmxA6HI8.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./server-DNhIUa20.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/zod.mjs";
function InstallmentPage() {
  const {
    locale,
    t
  } = useI18n();
  const isEn = locale === "en";
  const {
    renderedPosts,
    heroImage
  } = Route$a.useLoaderData();
  const faqs = [{
    q: isEn ? "What is the minimum BYD down payment?" : "ดาวน์รถ BYD ขั้นต่ำกี่เปอร์เซ็นต์?",
    a: isEn ? "Financial institutions commonly require around 10-20% down payment, depending on campaigns and credit profile." : "โดยทั่วไปสถาบันการเงินกำหนดดาวน์ขั้นต่ำ 10-20% ของราคารถ ขึ้นอยู่กับแคมเปญและประวัติเครดิตของผู้กู้"
  }, {
    q: isEn ? "What is the maximum BYD loan term?" : "ผ่อนรถ BYD ได้สูงสุดกี่ปี?",
    a: isEn ? "Up to 84 installments (7 years) for individual customers, subject to lender conditions." : "สูงสุด 84 งวด หรือ 7 ปี สำหรับลูกค้าบุคคลธรรมดา ขึ้นอยู่กับเงื่อนไขสถาบันการเงิน"
  }, {
    q: isEn ? "What is the BYD interest rate?" : "ดอกเบี้ยรถ BYD เท่าไร?",
    a: isEn ? "Current rates generally start around 1.99-2.99% per year. Values on this page are reducing-balance estimates for reference." : "ดอกเบี้ยปัจจุบันเริ่มต้นประมาณ 1.99-2.99% ต่อปี โดยค่างวดในหน้านี้คำนวณแบบลดต้นลดดอกเพื่อใช้เป็นประมาณการเบื้องต้น"
  }, {
    q: isEn ? "What documents are required?" : "ต้องเตรียมเอกสารอะไรบ้าง?",
    a: isEn ? "National ID, house registration, last 3 months salary slips, 6 months bank statements, and proof of income." : "บัตรประชาชน, ทะเบียนบ้าน, สลิปเงินเดือนย้อนหลัง 3 เดือน, Statement บัญชี 6 เดือน และเอกสารแสดงรายได้"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImage, alt: "BYD installment promotion banner", className: "absolute inset-0 h-full w-full object-cover", loading: "eager" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-5 animate-fade-in", children: t("installment.badge") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal animate-fade-in-up", children: t("installment.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up", children: t("installment.subtitle") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-3", children: t("installment.sectionTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: t("installment.sectionSubtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: renderedPosts.length > 0 ? renderedPosts.map((post) => {
        const matchedModel = matchInstallmentModelFromTitle(post.title) ?? matchInstallmentModelFromTitle(post.slug);
        const cardImage = matchedModel?.image ?? post.image;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/$slug", params: {
          slug: post.slug
        }, className: "group relative overflow-hidden rounded-2xl border border-border/70 bg-surface/45 hover-lift flex flex-col focus:outline-none focus:ring-2 focus:ring-primary/60 animate-fade-in-up", children: [
          cardImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-44 overflow-hidden bg-gradient-to-br from-surface-elevated via-surface to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cardImage, alt: post.title, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 flex flex-1 flex-col min-h-[292px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "line-clamp-3 text-xl font-bold leading-snug text-foreground", children: post.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3", children: post.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-5 border-t border-border/50 flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: t("installment.cardDetail") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-[#d70c19] group-hover:text-white group-hover:translate-x-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] }, `installment-${post.id}`);
      }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 lg:col-span-3 rounded-2xl border border-border/70 bg-surface/45 p-8 text-center text-muted-foreground", children: t("installment.empty") }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 space-y-4 text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-foreground", children: t("installment.learnTitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("installment.learnP1") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: t("installment.learnH2") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("installment.learnP2") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: t("installment.learnH3") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("installment.learnP3") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: t("installment.learnH4") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("installment.learnP4") })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs })
  ] });
}
export {
  InstallmentPage as component
};
