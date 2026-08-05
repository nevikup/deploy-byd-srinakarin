import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useI18n, P as PageShell, c as createSsrRpc } from "./router-BySV9VyT.mjs";
import { c as createServerFn } from "./server-bPo7L6Xp.mjs";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription } from "./dialog-D388LMNu.mjs";
import "../_libs/seroval.mjs";
import { B as Building2, b as MessageCircle, P as Phone, h as Send, i as CircleCheck, W as Wrench, S as ShieldCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
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
import "./models-hBzcyjxT.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
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
const bannerShowroom = "/assets/contact-showroom-B0DPllVU.png";
const contactSchema = objectType({
  name: stringType().trim().min(1),
  phone: stringType().trim().min(1),
  email: stringType().trim().email().or(literalType("")),
  message: stringType().trim().optional()
});
const submitContactMessage = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(createSsrRpc("c7c64ffa115cbd3be824ac084ded6ecefcd0ea987999b51ecfca3bbe03696bea"));
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BRANCHES = [{
  name: "BYD ศรีนครินทร์",
  titleKey: "contact.branchTitle",
  phones: [{
    labelKey: "contact.showroomPhone",
    number: "02 029 9657"
  }, {
    labelKey: "contact.salesPhone",
    number: "061 389 6642"
  }],
  hours: "เปิดทุกวัน 08:30-18:00 น.",
  address: "18 ถนนศรีนครินทร์ แขวงหนองบอน เขตประเวศ กรุงเทพฯ 10250",
  mapUrl: "https://www.google.com/maps/place/AIONIC+Srinakarin+%E0%B9%80%E0%B8%AD%E0%B9%84%E0%B8%AD%E0%B9%82%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B8%84+%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C/@13.7381643,100.5275784,10.96z/data=!4m6!3m5!1s0xa5bb7bbba5f29aed:0x2d8ed97748010100!8m2!3d13.6997012!4d100.6465897!16s%2Fg%2F11l2cpgm8x?authuser=0&entry=tts",
  position: {
    lat: 13.6997012,
    lng: 100.6465897
  },
  facebook: "https://www.facebook.com/bydsrinakarin",
  line: "https://lin.ee/I362QMM",
  tiktok: "https://www.tiktok.com/@bydsrinakarin",
  instagram: "https://www.instagram.com/bydsrinakarin/",
  youtube: "https://www.youtube.com/@BYDSRINAKARIN",
  x: "https://twitter.com/bydsrinakarin"
}];
const ContactBranchMap = reactExports.lazy(() => import("./ContactBranchMap-BYK7MrZo.mjs"));
function ContactPage() {
  const {
    t
  } = useI18n();
  const [isSuccessOpen, setIsSuccessOpen] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState(null);
  const [isClient, setIsClient] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  reactExports.useEffect(() => {
    setIsClient(true);
  }, []);
  const inputCls = "w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bannerShowroom, alt: t("contact.bannerAlt"), width: 1920, height: 1080, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full blur-3xl opacity-30 gradient-accent", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-5 animate-fade-in", children: t("common.contactUs") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal animate-fade-in-up leading-[1.05]", children: [
          t("contact.heroPrefix"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: t("brand.branchName") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up", children: t("contact.subtitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 animate-fade-in-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#branches", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }),
            " ",
            t("contact.viewBranch")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact-form", className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-background/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
            " ",
            t("contact.sendMessage")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 max-w-xl rounded-2xl border border-border/70 bg-background/45 p-4 sm:p-5 backdrop-blur-sm animate-fade-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[6.5rem_1fr] items-center gap-3 sm:grid-cols-[8rem_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: t("contact.showroom") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: t("contact.openingHours") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: t("contact.workdays") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: t("contact.everyday") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-border/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[6.5rem_1fr] items-center gap-3 sm:grid-cols-[8rem_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: t("contact.service") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: t("contact.openingHours") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: t("contact.workdays") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: t("contact.monSat") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full bg-border/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[6.5rem_1fr] gap-3 sm:grid-cols-[8rem_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: t("contact.phoneLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: BRANCHES[0].phones.map((phone) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${phone.number.replace(/[^\d]/g, "")}`, className: "group flex items-center gap-2 rounded-lg border-border/70 bg-background/35 px-3 py-2 text-sm text-foreground/90 transition hover:border-primary/40 hover:bg-background/55", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-tight group-hover:text-foreground", children: [
                t(phone.labelKey),
                ": ",
                phone.number
              ] })
            ] }, phone.number)) })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16", id: "branches", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-3", children: t("contact.branchNetwork") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: t("contact.mapTitle") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-2xl mx-auto", children: t("contact.mapSubtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border overflow-hidden glass shadow-2xl relative z-0", children: isClient ? /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[480px] md:h-[560px] w-full grid place-items-center text-sm text-muted-foreground", children: t("contact.loadingMap") }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactBranchMap, { branches: BRANCHES }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[480px] md:h-[560px] w-full grid place-items-center text-sm text-muted-foreground", children: t("contact.loadingMap") }) }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-surface/30 border-y border-border", id: "contact-form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 grid lg:grid-cols-5 gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-3", children: t("contact.formBadge") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: t("contact.formTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: t("contact.formSubtitle") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${BRANCHES[0].phones[0].number.replace(/[^\d]/g, "")}`, className: "flex items-center gap-4 glass rounded-xl p-4 border border-border hover:border-primary/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t("contact.callUs") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold", children: [
                t(BRANCHES[0].phones[0].labelKey),
                ": ",
                BRANCHES[0].phones[0].number
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: BRANCHES[0].line, target: "_blank", rel: "noreferrer", className: "flex items-center gap-4 glass rounded-xl p-4 border border-border hover:border-primary/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t("contact.lineLabel") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "lin.ee/I362QMM" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { noValidate: true, onSubmit: async (e) => {
          e.preventDefault();
          const trimmedName = form.name.trim();
          const trimmedPhone = form.phone.trim();
          const trimmedEmail = form.email.trim();
          const trimmedMessage = form.message.trim();
          const phoneDigits = trimmedPhone.replace(/\D/g, "");
          if (!trimmedName) {
            setSubmitError(t("form.errorNameRequired"));
            return;
          }
          if (!trimmedPhone) {
            setSubmitError(t("form.errorPhoneRequired"));
            return;
          }
          if (phoneDigits.length < 10) {
            setSubmitError(t("form.errorPhoneInvalid"));
            return;
          }
          if (trimmedEmail && !EMAIL_PATTERN.test(trimmedEmail)) {
            setSubmitError(t("form.errorEmailInvalid"));
            return;
          }
          setSubmitError(null);
          setIsSubmitting(true);
          try {
            await submitContactMessage({
              data: {
                name: trimmedName,
                phone: trimmedPhone,
                email: trimmedEmail,
                message: trimmedMessage
              }
            });
            setForm({
              name: "",
              phone: "",
              email: "",
              message: ""
            });
            setIsSuccessOpen(true);
          } catch (error) {
            setSubmitError(error instanceof Error ? error.message : t("form.errorSubmit"));
          } finally {
            setIsSubmitting(false);
          }
        }, className: "glass rounded-2xl p-6 sm:p-8 space-y-5 border border-border shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: t("contact.formIntroTitle") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t("contact.formIntroSubtitle") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mb-1.5 text-muted-foreground", children: t("form.name") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, maxLength: 80, value: form.name, onChange: (e) => setForm({
                ...form,
                name: e.target.value
              }), className: inputCls })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mb-1.5 text-muted-foreground", children: t("form.phone") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", inputMode: "numeric", minLength: 10, maxLength: 20, value: form.phone, onChange: (e) => setForm({
                ...form,
                phone: e.target.value
              }), className: inputCls })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mb-1.5 text-muted-foreground", children: t("form.email") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", maxLength: 120, value: form.email, onChange: (e) => setForm({
              ...form,
              email: e.target.value
            }), className: inputCls })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs mb-1.5 text-muted-foreground", children: t("form.message") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, maxLength: 1e3, value: form.message, onChange: (e) => setForm({
              ...form,
              message: e.target.value
            }), className: inputCls })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { disabled: isSubmitting, className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
            " ",
            isSubmitting ? t("form.submitting") : t("form.submitContact")
          ] }),
          submitError ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-400 text-center", children: submitError }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: t("form.privacy") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: isSuccessOpen, onOpenChange: setIsSuccessOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-md border-border bg-background/95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-9 w-9" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl", children: t("form.contactSuccessTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-sm leading-relaxed text-muted-foreground", children: t("form.contactSuccessDescription") })
        ] }) }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 max-w-4xl space-y-4 text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-foreground", children: t("contact.articleTitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("contact.articleP1") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: t("contact.articleH2") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("contact.articleP2") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground", children: t("contact.articleH3") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("contact.articleP3") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-7 w-7 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold mt-3 text-foreground", children: t("contact.serviceCenterTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1", children: t("contact.serviceCenterDesc") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-7 w-7 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold mt-3 text-foreground", children: t("contact.afterSalesTitle") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm mt-1", children: t("contact.afterSalesDesc") })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  ContactPage as component
};
