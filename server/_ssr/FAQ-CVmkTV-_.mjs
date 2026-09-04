import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useI18n } from "./router-dp9q-XuW.mjs";
import "../_libs/seroval.mjs";
import { C as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function FAQ({ items, title = "คำถามที่พบบ่อย" }) {
  const { t } = useI18n();
  const [open, setOpen] = reactExports.useState(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a }
    }))
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "faq-section py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-center mb-3", children: title === "คำถามที่พบบ่อย" ? t("faq.title") : title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground mb-10", children: t("faq.subtitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((it, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              suppressHydrationWarning: true,
              onClick: () => setOpen(isOpen ? null : i),
              className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: it.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 text-foreground transition-transform ${isOpen ? "rotate-180" : ""}` })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-in", children: it.a })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(schema) } })
  ] });
}
export {
  FAQ
};
