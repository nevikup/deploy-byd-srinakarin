import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useLocation } from "../_libs/tanstack__react-router.mjs";
import { S as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as FaFacebookF, a as FaTiktok, b as FaInstagram, c as FaYoutube, d as FaXTwitter } from "../_libs/react-icons.mjs";
import { M as MODELS, g as getInstallmentModel, a as getModel, I as INSTALLMENT_MODELS } from "./models-DmxA6HI8.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DNhIUa20.mjs";
import { C as ChevronDown, a as Check, X, M as Menu, b as MessageCircle, P as Phone } from "../_libs/lucide-react.mjs";
import { o as objectType, n as numberType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
const appCss = "/assets/styles-Bk4I3jpR.css";
const faviconPng = "/assets/logo_jinlong-B8Tv5iRB.png";
const fontUrl = "/assets/DB-Heavent-Now-Ext-Med-v4-CZZ7TJsR.woff2";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const menuLogoBydWhite = "/assets/logo-byd-white-BnNf_KpA.png";
const menuLogoBydRed = "/assets/logo-byd-black-CUmeFk7q.png";
const STORAGE_KEY = "site-language";
const translations = {
  th: {
    "brand.branchName": "BYD จินหลง ศรีนครินทร์",
    "common.th": "TH",
    "common.en": "EN",
    "common.loading": "กำลังโหลด...",
    "common.readMore": "อ่านต่อ →",
    "common.latestUpdate": "อัปเดตล่าสุด",
    "common.details": "รายละเอียด",
    "common.search": "ค้นหา",
    "common.searchClear": "ล้างการค้นหา",
    "common.retry": "ลองอีกครั้ง",
    "common.goHome": "กลับหน้าแรก",
    "common.contactUs": "ติดต่อเรา",
    "nav.home": "หน้าแรก",
    "nav.models": "รถทุกรุ่น",
    "nav.installment": "ตารางผ่อน",
    "nav.news": "ข่าวสาร",
    "nav.contact": "ติดต่อ",
    "nav.bookTestDrive": "นัดทดลองขับ",
    "lang.switchAria": "เลือกภาษา",
    "footer.companyDesc": "ตัวแทนจำหน่ายรถยนต์ไฟฟ้า BYD โชว์รูมและศูนย์บริการมาตรฐาน BYD",
    "footer.openingHours": "ฝ่ายขายและบริการเปิดทำการทุกวัน เวลา 8:30 - 17:30 น.",
    "footer.logoAlt": "โลโก้ JINLONG Motor",
    "footer.models": "รถยนต์ทุกรุ่น",
    "footer.customerService": "บริการลูกค้า",
    "footer.showroomPhone": "โชว์รูม",
    "footer.salesPhone": "ฝ่ายขาย",
    "footer.contact": "ติดต่อเรา",
    "footer.address": "18 ถนนศรีนครินทร์ แขวงหนองบอน เขตประเวศ กรุงเทพฯ 10250",
    "footer.copyright": "© 2026 JINLONG MOTOR. ตัวแทนจำหน่ายอย่างเป็นทางการ",
    "footer.policy": "นโยบายความเป็นส่วนตัว • เงื่อนไขการใช้งาน",
    "floating.lineAria": "ติดต่อทาง LINE",
    "floating.phoneAria": "โทร 02 029 9657",
    "faq.title": "คำถามที่พบบ่อย",
    "faq.subtitle": "รวมคำถามที่ลูกค้าสอบถามบ่อยที่สุดเกี่ยวกับรถยนต์ไฟฟ้า BYD",
    "form.name": "ชื่อ-นามสกุล *",
    "form.phone": "เบอร์โทรศัพท์ *",
    "form.email": "อีเมล",
    "form.model": "รุ่นที่สนใจ",
    "form.date": "วันที่นัดหมาย",
    "form.datePlaceholder": "เลือกวันที่นัดหมาย",
    "form.message": "ข้อความเพิ่มเติม",
    "form.submitting": "กำลังส่งข้อมูล...",
    "form.submitTestDrive": "ยืนยันนัดทดลองขับฟรี",
    "form.submitContact": "ส่งข้อความ",
    "form.successTitle": "ได้รับข้อมูลแล้ว",
    "form.successDescription": "ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง เพื่อยืนยันนัดทดลองขับ",
    "form.contactSuccessTitle": "ส่งข้อความเรียบร้อย",
    "form.contactSuccessDescription": "ทีมงานจะติดต่อกลับโดยเร็วที่สุด",
    "form.privacy": "เราเก็บข้อมูลของท่านเพื่อการติดต่อกลับเท่านั้น",
    "form.errorSubmit": "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
    "form.errorNameRequired": "กรุณากรอกชื่อ-นามสกุล",
    "form.errorPhoneRequired": "กรุณากรอกเบอร์โทรศัพท์",
    "form.errorPhoneInvalid": "เบอร์โทรต้องมีตัวเลขอย่างน้อย 10 ตัว",
    "form.errorEmailInvalid": "กรุณากรอกอีเมลให้ถูกต้องตามรูปแบบ",
    "contact.bannerAlt": "โชว์รูม BYD จินหลง มอเตอร์",
    "contact.heroPrefix": "ติดต่อ",
    "contact.title": "ติดต่อ BYD จินหลง ศรีนครินทร์",
    "contact.subtitle": "รวมข้อมูลโชว์รูมและศูนย์บริการสาขาศรีนครินทร์ พร้อมแผนที่และเส้นทางนำทางในหน้าเดียว",
    "contact.viewBranch": "ดูข้อมูลสาขา",
    "contact.sendMessage": "ส่งข้อความถึงเรา",
    "contact.showroom": "โชว์รูม",
    "contact.service": "ฝ่ายบริการ",
    "contact.openingHours": "08.30 น. - 17.30 น.",
    "contact.workdays": "วันทำการ",
    "contact.everyday": "จันทร์ - อาทิตย์",
    "contact.monSat": "จันทร์ - เสาร์",
    "contact.phoneLabel": "เบอร์ติดต่อ",
    "contact.lineLabel": "LINE OA",
    "contact.branchNetwork": "เครือข่ายโชว์รูม",
    "contact.mapTitle": "แผนที่บีวายดี จินหลง มอเตอร์ สาขา ศรีนครินทร์",
    "contact.mapSubtitle": "ดูตำแหน่งสาขาศรีนครินทร์และคลิกเพื่อนำทางได้ทันที",
    "contact.loadingMap": "กำลังโหลดแผนที่...",
    "contact.formBadge": "ส่งข้อความ",
    "contact.formTitle": "พร้อมตอบทุกคำถาม",
    "contact.formSubtitle": "สอบถามรุ่นรถ ราคา โปรโมชั่น หรือนัดทดลองขับได้ทุกช่องทาง ทีมงานยินดีให้คำแนะนำ",
    "contact.callUs": "โทรหาเรา",
    "contact.formIntroTitle": "กรอกแบบฟอร์ม",
    "contact.formIntroSubtitle": "ระบุสาขาที่สะดวกในข้อความ ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง",
    "contact.articleTitle": "โชว์รูมและศูนย์บริการ BYD จินหลง มอเตอร์ สาขาศรีนครินทร์",
    "contact.articleP1": "เราพร้อมให้บริการที่สาขาศรีนครินทร์ เพื่อให้ลูกค้าเข้าถึงบริการได้สะดวกมากยิ่งขึ้น",
    "contact.articleH2": "บริการครบวงจรในที่เดียว",
    "contact.articleP2": "ตั้งแต่ให้คำปรึกษา ทดลองขับฟรี แนะนำสินเชื่อ ส่งมอบรถ ไปจนถึงงานบริการหลังการขายและงานซ่อมบำรุงด้วยมาตรฐานศูนย์บริการ BYD",
    "contact.articleH3": "แนะนำให้ตรวจสอบเวลาทำการก่อนเข้ารับบริการ",
    "contact.articleP3": "เพื่อความสะดวกรวดเร็ว ทีมงานแนะนำให้โทรนัดหมายล่วงหน้าก่อนเข้ารับบริการ",
    "contact.serviceCenterTitle": "ศูนย์บริการมาตรฐาน BYD",
    "contact.serviceCenterDesc": "ช่างเทคนิคผ่านการรับรอง",
    "contact.afterSalesTitle": "ดูแลหลังการขายอย่างมั่นใจ",
    "contact.afterSalesDesc": "ครบทั้งการนัดหมายและคำแนะนำการใช้งาน",
    "models.badge": "รถยนต์ทุกรุ่น",
    "models.title": "รถ BYD ทุกรุ่น",
    "models.subtitle": "Bring Innovation to life เป็นมากกว่าแค่รถยนต์ไฟฟ้า รวมรถ BYD ทุกรุ่นทั้ง EV และ Plug-in Hybrid พร้อมราคา สเปก และตารางผ่อนอัพเดตล่าสุดในที่เดียว",
    "models.startFrom": "เริ่มต้น",
    "models.baht": "บาท",
    "models.viewDetail": "ดูรายละเอียด",
    "testDrive.badge": "ทดลองขับฟรี ไม่มีค่าใช้จ่าย",
    "testDrive.title": "นัดทดลองขับ BYD",
    "testDrive.subtitle": "สัมผัสประสบการณ์ขับรถยนต์ไฟฟ้าและ Plug-in Hybrid ด้วยตัวคุณเอง พร้อมที่ปรึกษามืออาชีพดูแลทุกขั้นตอน",
    "testDrive.bookNow": "จองทดลองขับเลย",
    "testDrive.viewBenefits": "ดูสิทธิประโยชน์",
    "testDrive.noCost": "ไม่มีค่าใช้จ่าย",
    "testDrive.only30Min": "ใช้เวลาเพียง 30 นาที",
    "testDrive.nearby": "หลายสาขาใกล้บ้านท่าน",
    "testDrive.whyTitle": "ทำไมต้องทดลองขับ BYD ที่นี่",
    "testDrive.whySubtitle": "ทีมงานมืออาชีพพร้อมดูแลทุกขั้นตอน",
    "blog.badge": "ข่าวสาร & บทความ",
    "blog.title": "ข่าวสาร บทความรถไฟฟ้า BYD",
    "blog.subtitle": "ความรู้ ข่าวสาร และเทคนิคการใช้งานรถ EV",
    "blog.searchPlaceholder": "ค้นหาบทความ...",
    "blog.searching": "กำลังค้นหา...",
    "blog.searchFound": 'พบ {{count}} บทความ สำหรับ "{{query}}"',
    "blog.searchNotFound": 'ไม่พบบทความสำหรับ "{{query}}"',
    "blog.loadMore": "ดูข้อมูลเพิ่มเติม",
    "blog.notFoundArticle": "Article not found | บีวายดี จินหลง มอเตอร์ สาขา ศรีนครินทร์",
    "blog.backToAll": "← กลับสู่บทความทั้งหมด",
    "blog.related": "บทความที่เกี่ยวข้อง",
    "installment.badge": "ตารางผ่อน",
    "installment.title": "ตารางผ่อนรถ BYD 2026",
    "installment.subtitle": "คำนวณค่างวดและดูตัวอย่างตารางผ่อนของรถ BYD ทุกรุ่น พร้อมข้อมูลเงินดาวน์และดอกเบี้ยล่าสุด",
    "installment.sectionTitle": "ตารางผ่อน BYD ทุกรุ่น",
    "installment.sectionSubtitle": "รวมอัปเดตโปรโมชันและข้อมูลตารางผ่อนครบจบในที่เดียว",
    "installment.empty": "ยังไม่มีตารางผ่อนในขณะนี้",
    "installment.learnTitle": "รู้จักตารางผ่อนรถ BYD ก่อนตัดสินใจซื้อ",
    "installment.learnP1": "การวางแผนการผ่อนรถยนต์ไฟฟ้า BYD ให้เหมาะสมกับรายได้เป็นสิ่งสำคัญที่จะช่วยให้การเป็นเจ้าของรถ EV เป็นเรื่องง่าย ปัจจัยหลักประกอบด้วย ราคารถ จำนวนเงินดาวน์ ระยะเวลาผ่อน และอัตราดอกเบี้ย",
    "installment.learnH2": "เงินดาวน์ที่เหมาะสม",
    "installment.learnP2": "การดาวน์ 20-30% ถือเป็นจุดสมดุล เพราะช่วยลดค่างวดและไม่เก็บเงินสดน้อยเกินไป ลูกค้าหลายท่านนิยมดาวน์ 25% เพื่อรับเงื่อนไขดอกเบี้ยที่ดีที่สุด",
    "installment.learnH3": "ระยะเวลาผ่อนที่เหมาะกับ EV",
    "installment.learnP3": "เนื่องจากรถ EV มีค่าบำรุงรักษาต่ำกว่ารถน้ำมัน การผ่อน 5-6 ปีเป็นช่วงเวลาเหมาะสม ช่วยให้ค่างวดต่อเดือนไม่สูงเกินไป",
    "installment.learnH4": "โปรโมชั่นดอกเบี้ยพิเศษ",
    "installment.learnP4": "BYD จินหลง ศรีนครินทร์ ร่วมมือกับสถาบันการเงินชั้นนำเพื่อมอบโปรโมชั่นดอกเบี้ยพิเศษ เริ่มต้นที่ 0% สูงสุด 48 งวด สำหรับลูกค้าที่จองภายในระยะเวลาแคมเปญ",
    "installment.cardDetail": "รายละเอียด",
    "installment.backToInstallment": "กลับไปหน้าตารางผ่อน",
    "installment.backToArticle": "กลับไปหน้าบทความ",
    "calc.title": "คำนวณค่างวดผ่อนรถ BYD",
    "calc.subtitle": "ประมาณการแบบลดต้นลดดอก อัตราดอกเบี้ยจริงขึ้นอยู่กับสถาบันการเงินและเงื่อนไขอนุมัติ",
    "calc.selectModel": "เลือกรุ่น",
    "calc.down": "ดาวน์ {{value}}% ({{amount}})",
    "calc.years": "ระยะเวลาผ่อน {{value}} ปี",
    "calc.rate": "ดอกเบี้ย {{value}}% ต่อปี",
    "calc.monthlyTitle": "ค่างวดต่อเดือนโดยประมาณ",
    "calc.price": "ราคารถ",
    "calc.downAmount": "เงินดาวน์",
    "calc.principal": "ยอดจัด",
    "calc.months": "จำนวนงวด",
    "calc.interest": "ดอกเบี้ยรวม",
    "calc.period": "{{value}} งวด",
    "notFound.pageTitle": "404 ไม่พบหน้าที่ต้องการ | บีวายดี จินหลง มอเตอร์ สาขา ศรีนครินทร์",
    "notFound.title": "ไม่พบหน้าที่คุณมองหา",
    "notFound.desc": "ไม่พบหน้าที่คุณมองหา หรือหน้าดังกล่าวถูกลบไปแล้ว",
    "notFound.allModels": "รุ่นรถทั้งหมด",
    "error.title": "ไม่สามารถโหลดหน้าได้",
    "error.desc": "เกิดข้อผิดพลาดที่ระบบของเรา ลองรีเฟรชหรือกลับไปหน้าแรก"
  },
  en: {
    "brand.branchName": "BYD Jinlong Srinakarin",
    "common.th": "TH",
    "common.en": "EN",
    "common.loading": "Loading...",
    "common.readMore": "Read more →",
    "common.latestUpdate": "Latest update",
    "common.details": "Details",
    "common.search": "Search",
    "common.searchClear": "Clear search",
    "common.retry": "Try again",
    "common.goHome": "Go home",
    "common.contactUs": "Contact",
    "nav.home": "Home",
    "nav.models": "Vehicles",
    "nav.installment": "Installment",
    "nav.news": "Last updates",
    "nav.contact": "Contact",
    "nav.bookTestDrive": "Test Drive",
    "lang.switchAria": "Choose language",
    "footer.companyDesc": "Official BYD EV dealer with showroom and certified service center.",
    "footer.openingHours": "Sales and service open daily, 8:30 AM - 5:30 PM.",
    "footer.logoAlt": "JINLONG Motor logo",
    "footer.models": "All Models",
    "footer.customerService": "Customer Service",
    "footer.showroomPhone": "Showroom",
    "footer.salesPhone": "Sales",
    "footer.contact": "Contact Us",
    "footer.address": "18 Srinakarin Road, Nong Bon, Prawet, Bangkok 10250",
    "footer.copyright": "© 2026 JINLONG MOTOR. Official dealer",
    "footer.policy": "Privacy Policy • Terms of Use",
    "floating.lineAria": "Contact via LINE",
    "floating.phoneAria": "Call 02 029 9657",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "The most common customer questions about BYD electric vehicles",
    "form.name": "Full name *",
    "form.phone": "Phone number *",
    "form.email": "Email",
    "form.model": "Interested model",
    "form.date": "Preferred date",
    "form.datePlaceholder": "Select date",
    "form.message": "Additional message",
    "form.submitting": "Submitting...",
    "form.submitTestDrive": "Confirm Free Test Drive",
    "form.submitContact": "Send message",
    "form.successTitle": "We received your request",
    "form.successDescription": "Our team will contact you within 24 hours to confirm your test drive.",
    "form.contactSuccessTitle": "Message sent",
    "form.contactSuccessDescription": "Our team will contact you as soon as possible.",
    "form.privacy": "We use your information only to contact you back.",
    "form.errorSubmit": "Unable to submit. Please try again.",
    "form.errorNameRequired": "Please enter your full name.",
    "form.errorPhoneRequired": "Please enter your phone number.",
    "form.errorPhoneInvalid": "Phone number must contain at least 10 digits.",
    "form.errorEmailInvalid": "Please enter a valid email address.",
    "contact.bannerAlt": "BYD Jinlong Motor showroom",
    "contact.heroPrefix": "Contact",
    "contact.title": "Contact BYD Jinlong Srinakarin",
    "contact.subtitle": "Showroom and service center details with map and navigation in one page.",
    "contact.viewBranch": "View branch",
    "contact.sendMessage": "Send us a message",
    "contact.showroom": "Showroom",
    "contact.service": "Service",
    "contact.openingHours": "8:30 AM - 5:30 PM",
    "contact.workdays": "Working days",
    "contact.everyday": "Monday - Sunday",
    "contact.monSat": "Monday - Saturday",
    "contact.phoneLabel": "Phone",
    "contact.lineLabel": "LINE OA",
    "contact.branchNetwork": "Showroom Network",
    "contact.mapTitle": "BYD Jinlong Srinakarin Branch Map",
    "contact.mapSubtitle": "See our branch location and start navigation instantly.",
    "contact.loadingMap": "Loading map...",
    "contact.formBadge": "Message",
    "contact.formTitle": "Ready to help",
    "contact.formSubtitle": "Ask about models, pricing, promotions, or test drives through any channel.",
    "contact.callUs": "Call us",
    "contact.formIntroTitle": "Fill out the form",
    "contact.formIntroSubtitle": "Tell us your preferred branch and we will contact you within 24 hours.",
    "contact.articleTitle": "BYD Jinlong Motor Srinakarin Showroom & Service Center",
    "contact.articleP1": "We are ready to serve you at our Srinakarin branch for easier access.",
    "contact.articleH2": "Complete services in one place",
    "contact.articleP2": "From consultation and free test drives to financing advice, delivery, and after-sales service.",
    "contact.articleH3": "Please check opening hours before visiting",
    "contact.articleP3": "For faster service, we recommend making an appointment before your visit.",
    "contact.serviceCenterTitle": "Certified BYD Service Center",
    "contact.serviceCenterDesc": "Technicians certified by BYD",
    "contact.afterSalesTitle": "Confident after-sales care",
    "contact.afterSalesDesc": "Support for appointments and vehicle usage guidance",
    "models.badge": "All Vehicles",
    "models.title": "All BYD Models",
    "models.subtitle": "Bring Innovation to life. Explore all BYD EV and Plug-in Hybrid models with latest prices, specs, and installment info in one place.",
    "models.startFrom": "Starting from",
    "models.baht": "THB",
    "models.viewDetail": "View details",
    "testDrive.badge": "Free test drive, no cost",
    "testDrive.title": "Book a BYD Test Drive",
    "testDrive.subtitle": "Experience BYD EV and Plug-in Hybrid firsthand with professional guidance.",
    "testDrive.bookNow": "Book now",
    "testDrive.viewBenefits": "View benefits",
    "testDrive.noCost": "No charge",
    "testDrive.only30Min": "Only 30 minutes",
    "testDrive.nearby": "Branches near you",
    "testDrive.whyTitle": "Why test drive with us",
    "testDrive.whySubtitle": "Our team supports you through every step",
    "blog.badge": "News & Articles",
    "blog.title": "BYD EV News & Articles",
    "blog.subtitle": "Knowledge, updates, and practical EV tips",
    "blog.searchPlaceholder": "Search articles...",
    "blog.searching": "Searching...",
    "blog.searchFound": 'Found {{count}} articles for "{{query}}"',
    "blog.searchNotFound": 'No articles found for "{{query}}"',
    "blog.loadMore": "Load more",
    "blog.notFoundArticle": "Article not found | BYD Jinlong Motor Srinakarin",
    "blog.backToAll": "← Back to all articles",
    "blog.related": "Related Articles",
    "installment.badge": "Installment",
    "installment.title": "BYD Installment Plans 2026",
    "installment.subtitle": "Estimate monthly payment and explore installment examples for all BYD models.",
    "installment.sectionTitle": "BYD Installment Plans",
    "installment.sectionSubtitle": "Latest promotions and installment information in one place.",
    "installment.empty": "No installment plans available right now.",
    "installment.learnTitle": "Understand BYD Installments Before You Buy",
    "installment.learnP1": "Planning your BYD EV installment around your income helps make ownership easier. Key factors include vehicle price, down payment, term, and interest rate.",
    "installment.learnH2": "Ideal down payment",
    "installment.learnP2": "A 20-30% down payment is often a good balance. Many buyers choose 25% to get favorable rates.",
    "installment.learnH3": "Recommended loan term for EV",
    "installment.learnP3": "Since EV maintenance is generally lower, a 5-6 year term can balance monthly payments and flexibility.",
    "installment.learnH4": "Special interest promotions",
    "installment.learnP4": "BYD Jinlong Srinakarin partners with leading financial institutions for special offers, starting at 0% up to 48 months during campaign periods.",
    "installment.cardDetail": "Details",
    "installment.backToInstallment": "Back to installment page",
    "installment.backToArticle": "Back to articles",
    "calc.title": "BYD Installment Calculator",
    "calc.subtitle": "Estimated reducing-balance calculation. Actual rates depend on lender approval and terms.",
    "calc.selectModel": "Select model",
    "calc.down": "Down payment {{value}}% ({{amount}})",
    "calc.years": "Loan term {{value}} years",
    "calc.rate": "Interest {{value}}% per year",
    "calc.monthlyTitle": "Estimated monthly payment",
    "calc.price": "Vehicle price",
    "calc.downAmount": "Down payment",
    "calc.principal": "Loan principal",
    "calc.months": "Installments",
    "calc.interest": "Total interest",
    "calc.period": "{{value}} months",
    "notFound.pageTitle": "404 Page Not Found | BYD Jinlong Motor Srinakarin",
    "notFound.title": "Page not found",
    "notFound.desc": "The page you are looking for does not exist or has been removed.",
    "notFound.allModels": "All models",
    "error.title": "This page did not load",
    "error.desc": "Something went wrong on our end. Try refreshing or go back home."
  }
};
const fallbackI18nContext = {
  locale: "th",
  setLocale: () => {
  },
  t: (key) => key
};
const I18nContext = reactExports.createContext(null);
function interpolate(template, params) {
  if (!params) return template;
  return template.replace(/{{\s*([\w.]+)\s*}}/g, (_, key) => {
    const value = params[key];
    return value === void 0 ? "" : String(value);
  });
}
function I18nProvider({ children }) {
  const [locale, setLocaleState] = reactExports.useState("th");
  reactExports.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "th" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);
  const setLocale = reactExports.useCallback((nextLocale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  }, []);
  reactExports.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  const t = reactExports.useCallback((key, params) => {
    const raw = translations[locale][key] ?? translations.th[key] ?? key;
    return interpolate(raw, params);
  }, [locale]);
  const value = reactExports.useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nContext.Provider, { value, children });
}
function useI18n() {
  const context = reactExports.useContext(I18nContext);
  return context ?? fallbackI18nContext;
}
const NAV = [
  { to: "/", labelKey: "nav.home" },
  { to: "/models", labelKey: "nav.models" },
  { to: "/byd-installment", labelKey: "nav.installment" },
  { to: "/blog", labelKey: "nav.news" },
  { to: "/contact", labelKey: "nav.contact" }
];
const LANG_OPTIONS = [
  { value: "th", labelKey: "common.th" },
  { value: "en", labelKey: "common.en" }
];
const MODEL_DETAIL_ROUTES$1 = /* @__PURE__ */ new Set([
  "/byd-atto1",
  "/byd-atto2",
  "/byd-atto3",
  "/byd-dolphin",
  "/byd-m6",
  "/byd-seal",
  "/byd-seal5dmi",
  "/byd-seal6",
  "/byd-sealion5dmi",
  "/byd-sealion6dmi",
  "/byd-sealion7"
]);
function Header() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const { pathname } = useLocation();
  const isModelDetailPage = MODEL_DETAIL_ROUTES$1.has(pathname);
  const isOverlayHeaderPage = pathname === "/" || pathname === "/models" || isModelDetailPage;
  const isTransparentHeader = isOverlayHeaderPage && !isScrolled;
  const logoSrc = isTransparentHeader ? menuLogoBydWhite : menuLogoBydRed;
  const mobileLogoSrc = open || !isOverlayHeaderPage || isScrolled ? menuLogoBydRed : menuLogoBydWhite;
  const isDesktopTransparent = isTransparentHeader && !open;
  const languageTriggerClass = isDesktopTransparent ? "border-white/35 bg-white/10 text-white backdrop-blur-sm" : "border-border bg-background/80 text-foreground";
  const languageMenuClass = isDesktopTransparent ? "border-white/30 bg-[#111827]/90 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : "border-border bg-background text-foreground shadow-lg";
  const languageOptionHoverClass = isDesktopTransparent ? "hover:bg-white/10" : "hover:bg-muted";
  reactExports.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const isNavActive = (to) => {
    if (to === "/") return pathname === "/";
    if (to === "/models") {
      return pathname === "/models" || /^\/byd-/.test(pathname) && !pathname.startsWith("/byd-installment") && !pathname.startsWith("/byd-promotion");
    }
    if (to === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    return pathname === to || pathname.startsWith(`${to}/`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isOverlayHeaderPage ? isScrolled ? "bg-white border-b border-border lg:bg-background/92 lg:backdrop-blur-sm" : open ? "bg-white border-b border-border lg:bg-transparent lg:backdrop-blur-0 lg:border-b-0" : "bg-transparent border-b-0 lg:bg-transparent lg:backdrop-blur-0 lg:border-b-0" : "bg-white border-b border-border lg:bg-background/92 lg:backdrop-blur-md"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mobileLogoSrc, alt: "JINLONG Motor logo", className: "h-6 w-auto object-contain lg:hidden" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSrc, alt: "JINLONG Motor logo", className: "hidden h-6 w-auto object-contain lg:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-tight" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              className: `px-3 py-2 text-sm transition-colors rounded-md ${isNavActive(n.to) ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
              children: t(n.labelKey)
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "relative group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "summary",
                {
                  className: `flex list-none cursor-pointer items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold tracking-wide transition [&::-webkit-details-marker]:hidden ${languageTriggerClass}`,
                  "aria-label": t("lang.switchAria"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "lucide lucide-globe",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12h20" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: locale.toUpperCase() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 transition-transform group-open:rotate-180" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-[calc(100%+0.5rem)] z-20 min-w-[140px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl border p-1 ${languageMenuClass}`, children: LANG_OPTIONS.map((option) => {
                const isSelected = option.value === locale;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: (event) => {
                      setLocale(option.value);
                      const details = event.currentTarget.closest("details");
                      if (details) details.removeAttribute("open");
                    },
                    className: `flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${isSelected ? "font-medium" : languageOptionHoverClass}`,
                    "aria-current": isSelected ? "true" : void 0,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(option.labelKey) }),
                      isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-[#8b0000]" }) : null
                    ]
                  },
                  option.value
                );
              }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/test-drive-byd",
                className: "light-header-test-drive-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8b0000] via-[#b10814] to-[#d70c19] px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110",
                children: t("nav.bookTestDrive")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "lg:hidden p-2", "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden pb-4 animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "relative mb-1 self-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "summary",
              {
                className: "flex list-none cursor-pointer items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold tracking-wide text-foreground [&::-webkit-details-marker]:hidden",
                "aria-label": t("lang.switchAria"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      className: "lucide lucide-globe",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12h20" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: locale.toUpperCase() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 w-[150px] rounded-xl border border-border bg-background p-1 shadow-lg", children: LANG_OPTIONS.map((option) => {
              const isSelected = option.value === locale;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: (event) => {
                    setLocale(option.value);
                    const details = event.currentTarget.closest("details");
                    if (details) details.removeAttribute("open");
                  },
                  className: `flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${isSelected ? "font-medium" : "text-muted-foreground hover:bg-muted"}`,
                  "aria-current": isSelected ? "true" : void 0,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(option.labelKey) }),
                    isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-[#8b0000]" }) : null
                  ]
                },
                option.value
              );
            }) })
          ] }),
          NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: `px-3 py-2 text-sm rounded-md transition-colors ${isNavActive(n.to) ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
              children: t(n.labelKey)
            },
            n.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/test-drive-byd",
              onClick: () => setOpen(false),
              className: "light-header-test-drive-btn mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8b0000] via-[#b10814] to-[#d70c19] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110",
              children: t("nav.bookTestDrive")
            }
          )
        ] }) })
      ] })
    }
  );
}
const FOOTER_MODELS = [
  ...MODELS,
  ...INSTALLMENT_MODELS.filter(
    (installmentModel) => !MODELS.some((model2) => model2.href === installmentModel.href)
  )
];
function Footer() {
  const { t } = useI18n();
  const logoSrc = menuLogoBydRed;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-32 border-t border-border bg-surface/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logoSrc,
            alt: t("footer.logoAlt"),
            className: "h-5 w-auto object-contain"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t("brand.branchName") }),
          " ",
          t("footer.companyDesc"),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          t("footer.openingHours")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-bold", children: t("footer.models") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: FOOTER_MODELS.map((model2) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: model2.href, className: "hover:text-foreground", children: model2.name }) }, model2.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-bold", children: t("footer.customerService") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:020299657", className: "hover:text-foreground", children: [
            t("footer.showroomPhone"),
            ": 02 029 9657"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:0613896642", className: "hover:text-foreground", children: [
            t("footer.salesPhone"),
            ": 061 389 6642"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-sm font-bold", children: t("footer.contact") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground", children: t("footer.address") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaFacebookF, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.facebook.com/bydsrinakarin",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "bydsrinakarin"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://lin.ee/I362QMM",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "lin.ee/I362QMM"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTiktok, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.tiktok.com/@bydsrinakarin",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "@bydsrinakarin"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.instagram.com/bydsrinakarin/",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "@bydsrinakarin"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaYoutube, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.youtube.com/@BYDSRINAKARIN",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "@bydsrinakarin"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaXTwitter, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://twitter.com/bydsrinakarin",
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground",
                children: "@bydsrinakarin"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("footer.copyright") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("footer.policy") })
    ] })
  ] }) });
}
function FloatingCTAs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://lin.ee/I362QMM",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "ติดต่อทาง LINE",
        className: "flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755] text-white shadow-elevated hover-lift animate-glow-pulse",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", className: "h-7 w-7", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "tel:020299657",
        "aria-label": "โทร 02 029 9657",
        className: "flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-elevated hover-lift",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-7 w-7", "aria-hidden": "true" })
      }
    )
  ] }) });
}
const MODEL_DETAIL_ROUTES = /* @__PURE__ */ new Set([
  "/byd-atto1",
  "/byd-atto2",
  "/byd-atto3",
  "/byd-dolphin",
  "/byd-m6",
  "/byd-seal",
  "/byd-seal5dmi",
  "/byd-seal6",
  "/byd-sealion5dmi",
  "/byd-sealion6dmi",
  "/byd-sealion7"
]);
function PageShell({
  children,
  mainClassName,
  rootClassName
}) {
  const { pathname } = useLocation();
  const isModelDetailPage = MODEL_DETAIL_ROUTES.has(pathname);
  const isOverlayHeaderPage = pathname === "/" || pathname === "/models" || pathname === "/blog" || pathname === "/byd-installment" || isModelDetailPage;
  const defaultMainClassName = isOverlayHeaderPage ? "pt-0" : "pt-16";
  const mergedRootClassName = ["site-light-theme", rootClassName].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-h-screen flex flex-col ${mergedRootClassName}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: `flex-1 ${mainClassName ?? defaultMainClassName}`, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCTAs, {})
  ] });
}
function PageHero({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero opacity-80", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full blur-3xl opacity-30 gradient-accent", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-5 animate-fade-in", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal animate-fade-in-up", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up", children: subtitle })
    ] })
  ] });
}
const GA_MEASUREMENT_ID = "G-ZBDNE6KEYT";
function NotFoundComponent() {
  const { t } = useI18n();
  reactExports.useEffect(() => {
    document.title = t("notFound.pageTitle");
  }, [t]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center bg-background px-4 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-red-500", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: t("notFound.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 pb-6 text-sm text-muted-foreground border-b border-muted-foreground/50", children: t("notFound.desc") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm font-medium text-primary hover:underline", children: t("nav.home") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/models", className: "text-sm font-medium text-primary hover:underline", children: t("notFound.allModels") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/byd-installment", className: "text-sm font-medium text-primary hover:underline", children: t("nav.installment") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/test-drive-byd", className: "text-sm font-medium text-primary hover:underline", children: t("nav.bookTestDrive") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-sm font-medium text-primary hover:underline", children: t("nav.news") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-sm font-medium text-primary hover:underline", children: t("common.contactUs") })
    ] })
  ] }) }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-normal text-foreground", children: t("error.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t("error.desc") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: t("common.retry")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: t("common.goHome")
        }
      )
    ] })
  ] }) });
}
const Route$o = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "qGEe7aTkAd1-ljKR5NoMbY0wI7HW-DDjD-LFznLqDFI"
      },
      { title: "BYD Jinlong Srinakarin | Official BYD Showroom and Service Center" },
      { name: "description", content: "Official BYD dealer in Bangkok for EV and Plug-in Hybrid models with promotions, installment plans, and free test drive booking." },
      { property: "og:site_name", content: "BYD Jinlong Srinakarin" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "th_TH" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FFFFFF" }
    ],
    links: [
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: fontUrl,
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "icon",
        type: "image/png",
        href: faviconPng
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDealer",
          name: "BYD Jinlong Srinakarin",
          description: "Official BYD electric vehicle dealer in Bangkok",
          areaServed: "Bangkok, Thailand",
          telephone: "+66-2-XXX-XXXX",
          address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "bg-background text-foreground", children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] }) });
}
function RootComponent() {
  const { queryClient } = Route$o.useRouteContext();
  reactExports.useEffect(() => {
    const w = window;
    let idleHandle = null;
    let timeoutHandle = null;
    const loadAnalytics = () => {
      if (w.__gaLoaded) return;
      w.__gaLoaded = true;
      w.dataLayer = w.dataLayer || [];
      w.gtag = (...args) => {
        w.dataLayer?.push(args);
      };
      w.gtag("js", /* @__PURE__ */ new Date());
      w.gtag("config", GA_MEASUREMENT_ID);
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    };
    const onFirstInteraction = () => {
      loadAnalytics();
      cleanupListeners();
    };
    const listenerOptions = { once: true, passive: true };
    const cleanupListeners = () => {
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
    };
    window.addEventListener("pointerdown", onFirstInteraction, listenerOptions);
    window.addEventListener("keydown", onFirstInteraction, listenerOptions);
    window.addEventListener("scroll", onFirstInteraction, listenerOptions);
    window.addEventListener("touchstart", onFirstInteraction, listenerOptions);
    if (typeof w.requestIdleCallback === "function") {
      idleHandle = w.requestIdleCallback(loadAnalytics, { timeout: 4500 });
    } else {
      timeoutHandle = window.setTimeout(loadAnalytics, 3e3);
    }
    return () => {
      cleanupListeners();
      if (idleHandle !== null && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const SITE_URL = "https://bydsrinakarin.com";
function buildCanonicalUrl(path) {
  if (!path || path === "/") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
const $$splitComponentImporter$m = () => import("./test-drive-byd-DK6f8w7j.mjs");
const Route$n = createFileRoute("/test-drive-byd")({
  head: () => ({
    meta: [{
      title: "ทดลองขับ BYD ฟรี | บีวายดี จินหลง มอเตอร์ สาขา ศรีนครินทร์"
    }, {
      name: "description",
      content: "นัดทดลองขับรถ BYD ทุกรุ่นฟรี ที่โชว์รูม BYD จินหลง ศรีนครินทร์ พร้อมทีมที่ปรึกษามืออาชีพ จองออนไลน์ทันที"
    }, {
      property: "og:title",
      content: "ทดลองขับ BYD ฟรี | BYD จินหลง ศรีนครินทร์"
    }, {
      property: "og:description",
      content: "นัดทดลองขับรถยนต์ไฟฟ้า BYD ฟรี"
    }, {
      property: "og:url",
      content: "/test-drive-byd"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/test-drive-byd")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const ARTICLES = [
  {
    slug: "byd-ev-worth-it",
    title: "Is a BYD EV worth it in 2026?",
    excerpt: "A complete look at the pros, cons, and overall value of BYD electric vehicles before you buy.",
    category: "BYD Reviews",
    readTime: "8 min",
    date: "2026-05-12",
    body: [
      "BYD electric vehicles have grown rapidly in popularity in Thailand thanks to Blade Battery technology, affordable pricing, and an expanding service network.",
      "In terms of value, monthly charging costs average around THB 800-1,500, which can be 70-80% cheaper than a conventional combustion car.",
      "BYD also offers battery coverage of up to 8 years or 160,000 kilometres, giving owners long-term peace of mind."
    ]
  },
  {
    slug: "byd-dolphin-for-whom",
    title: "Who is the BYD Dolphin for? A comparison with rivals",
    excerpt: "A closer look at who the BYD Dolphin suits best, plus a comparison with rivals in its class.",
    category: "Comparisons",
    readTime: "6 min",
    date: "2026-05-05",
    body: [
      "The BYD Dolphin is a City EV designed specifically for urban drivers. It is ideal for people in Bangkok and surrounding areas who want an affordable first car.",
      "Its compact size and tight turning radius make it easy to drive in the city, while the battery delivers up to 410 kilometres on a single charge."
    ]
  },
  {
    slug: "byd-atto3-vs-competitors",
    title: "BYD Atto 3 vs rivals in the electric SUV segment",
    excerpt: "Compare the BYD Atto 3 with popular electric SUVs in Thailand across specs, price, and value.",
    category: "Comparisons",
    readTime: "10 min",
    date: "2026-04-28",
    body: [
      "The BYD Atto 3 sits in the fast-growing Compact SUV EV segment in Thailand, with strong space, technology, and accessible pricing.",
      "Against direct rivals, the Atto 3 stands out for its Blade Battery and a real-world driving range of 480 kilometres."
    ]
  },
  {
    slug: "ev-monthly-cost",
    title: "Monthly EV costs compared with petrol cars",
    excerpt: "Calculate the real monthly cost of owning an EV, including charging, maintenance, and insurance.",
    category: "EV Knowledge",
    readTime: "7 min",
    date: "2026-04-20",
    body: [
      "Using an EV usually costs significantly less per month than a petrol car, with typical savings of THB 5,000-8,000 for everyday use.",
      "Home charging with a 7 kW charger typically costs around THB 1.20-2.50 per unit, depending on TOU tariff periods."
    ]
  },
  {
    slug: "ev-charging-tips",
    title: "How to charge an EV efficiently and extend battery life",
    excerpt: "Practical charging tips that save electricity costs and help extend battery life.",
    category: "EV Technology",
    readTime: "5 min",
    date: "2026-04-15",
    body: [
      "Charging an EV properly can significantly extend battery life. Aim to keep charging between 20-80% and avoid frequent DC fast charging.",
      "Using a home charger during off-peak hours (22:00-09:00) can reduce electricity costs by up to 50%."
    ]
  },
  {
    slug: "10-things-before-buying-ev",
    title: "10 things to know before buying a BYD EV",
    excerpt: "A must-read checklist for EV buyers covering specs, charging, and maintenance.",
    category: "Buying Guides",
    readTime: "12 min",
    date: "2026-04-08",
    body: [
      "Before buying an EV, consider factors such as driving habits, daily distance, home charger installation, and charging stations along your regular routes.",
      "It is also important to review warranty terms, after-sales support, and future resale value."
    ]
  }
];
const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);
const Route$m = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = Array.from(
          /* @__PURE__ */ new Set([
            "/",
            "/models",
            "/byd-installment",
            "/byd-promotion",
            "/test-drive-byd",
            "/blog",
            "/category/news",
            "/category/byd-price",
            "/contact",
            ...MODELS.map((m) => m.href),
            ...ARTICLES.map((a) => `/blog/${a.slug}`)
          ])
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${SITE_URL}${p === "/" ? "" : p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      }
    }
  }
});
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
const $$splitComponentImporter$l = () => import("./models-C35rVQUT.mjs");
const Route$l = createFileRoute("/models")({
  pendingMs: 150,
  pendingComponent: ModelsPagePending,
  head: () => ({
    meta: [{
      title: "All BYD Models & Prices | BYD Jinlong Srinakarin"
    }, {
      name: "description",
      content: "Explore all BYD models and prices in Thailand, including EV and Plug-in Hybrid options with latest specs and promotions."
    }, {
      name: "keywords",
      content: "BYD price, BYD EV Thailand, BYD Atto 1, BYD Atto 2, BYD Atto 3, BYD Dolphin, BYD Seal, BYD Seal 5 DM-i, BYD Seal 6, BYD Sealion 5 DM-i, BYD Sealion 6 DM-i, BYD Sealion 7, BYD M6"
    }, {
      property: "og:title",
      content: "All BYD Models & Prices | JINLONG Motor"
    }, {
      property: "og:description",
      content: "Compare all BYD EV and Plug-in Hybrid models in one place"
    }, {
      property: "og:url",
      content: "/models"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/models")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
function ModelsPagePending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[56vh] overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-28 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-5 h-12 w-[min(100%,34rem)] rounded-xl sm:h-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-5 h-6 w-[min(100%,42rem)] rounded-xl" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: Array.from({
      length: 6
    }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border/70 bg-surface/45 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[4/3] w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-4/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-5 h-4 w-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-6 w-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-border/60 pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded-full" })
        ] })
      ] })
    ] }, index)) }) }) })
  ] });
}
const $$splitComponentImporter$k = () => import("./contact-8nScRRhE.mjs");
const Route$k = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "ติดต่อเรา | บีวายดี จินหลง มอเตอร์ สาขา ศรีนครินทร์"
    }, {
      name: "description",
      content: "ติดต่อ BYD จินหลง ศรีนครินทร์ พร้อมข้อมูลโชว์รูม BYD กรุงเทพ พื้นที่บริการ เวลาทำการ แผนที่ และช่องทาง LINE/Facebook ครบในหน้าเดียว"
    }, {
      property: "og:title",
      content: "ติดต่อและข้อมูลโชว์รูม | BYD จินหลง ศรีนครินทร์"
    }, {
      property: "og:description",
      content: "รวมข้อมูลติดต่อและข้อมูล BYD กรุงเทพในหน้าเดียว"
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/contact")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const SLUG$9 = "byd-sealion7";
const $$splitComponentImporter$j = () => import("./byd-sealion7-lms3VWEB.mjs");
const model$8 = getModel(SLUG$9);
const Route$j = createFileRoute("/byd-sealion7")({
  head: () => ({
    meta: [{
      title: `${model$8.name} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model$8.name} ${model$8.tagline}. Starting from ${model$8.priceFrom.toLocaleString()} THB, range up to ${model$8.range} km with latest promotions and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Sealion 7 price, BYD Sealion 7 specs, BYD EV Thailand"
    }, {
      property: "og:title",
      content: `${model$8.name} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: model$8.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$9}`
    }, {
      property: "og:image",
      content: model$8.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$9}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const fallbackModel = {
  slug: "byd-sealion6-dmi",
  name: "BYD SEALION 6 DM-i",
  priceFrom: 879900
};
const heroBanner$3 = "/assets/overview-banner-d-DbTqjYBW.jpeg";
const $$splitComponentImporter$i = () => import("./byd-sealion6dmi-Bq9X5ScP.mjs");
const Route$i = createFileRoute("/byd-sealion6dmi")({
  head: () => {
    const model2 = getInstallmentModel("byd-sealion6-dmi") ?? fallbackModel;
    return {
      meta: [{
        title: `${model2.name} | BYD Jinlong Srinakarin`
      }, {
        name: "description",
        content: `${model2.name} Dynamic and Premium variants with performance, charging, equipment, and technical details.`
      }, {
        name: "keywords",
        content: "BYD Sealion 6 DM-i price, BYD Sealion 6 DM-i specs, BYD PHEV Thailand"
      }, {
        property: "og:title",
        content: `${model2.name} | JINLONG Motor`
      }, {
        property: "og:description",
        content: `Price, specs, technical data, and highlights of ${model2.name}`
      }, {
        property: "og:type",
        content: "product"
      }, {
        property: "og:url",
        content: "/byd-sealion6dmi"
      }, {
        property: "og:image",
        content: heroBanner$3
      }],
      links: [{
        rel: "canonical",
        href: buildCanonicalUrl("/byd-sealion6dmi")
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const SLUG$8 = "byd-sealion5dmi";
const $$splitComponentImporter$h = () => import("./byd-sealion5dmi-CTFaGUJo.mjs");
const model$7 = getModel(SLUG$8);
const Route$h = createFileRoute("/byd-sealion5dmi")({
  head: () => ({
    meta: [{
      title: `${model$7.name} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model$7.name} ${model$7.tagline}. Starting from ${model$7.priceFrom.toLocaleString()} THB, EV-only range up to ${model$7.range} km with latest promotions and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Sealion 5 DM-i price, BYD Sealion 5 DM-i specs, BYD PHEV Thailand"
    }, {
      property: "og:title",
      content: `${model$7.name} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: model$7.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$8}`
    }, {
      property: "og:image",
      content: model$7.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$8}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./byd-sealion-6-dm-i-BTU5dmpx.mjs");
const Route$g = createFileRoute("/byd-sealion-6-dm-i")({
  beforeLoad: () => {
    throw redirect({
      to: "/byd-sealion6dmi",
      statusCode: 301
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const SLUG$7 = "byd-seal6";
const $$splitComponentImporter$f = () => import("./byd-seal6-dJ6FbVDa.mjs");
const model$6 = getModel(SLUG$7);
const Route$f = createFileRoute("/byd-seal6")({
  head: () => ({
    meta: [{
      title: `${model$6.name} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model$6.name} ${model$6.tagline}. Starting from ${model$6.priceFrom.toLocaleString()} THB, range up to ${model$6.range} km with latest promotions and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Seal 6 price, BYD Seal 6 specs, BYD EV Thailand"
    }, {
      property: "og:title",
      content: `${model$6.name} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: model$6.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$7}`
    }, {
      property: "og:image",
      content: model$6.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$7}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const SLUG$6 = "byd-seal-5-dmi";
const $$splitComponentImporter$e = () => import("./byd-seal5dmi-CWRVDdQN.mjs");
const model$5 = getInstallmentModel(SLUG$6);
const Route$e = createFileRoute("/byd-seal5dmi")({
  head: () => ({
    meta: [{
      title: `${model$5?.name ?? "BYD SEAL 5 DM-i"} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model$5?.name ?? "BYD SEAL 5 DM-i"} starting from ${(model$5?.priceFrom ?? 599900).toLocaleString()} THB with specs, charging, installment details, and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Seal 5 DM-i price, BYD Seal 5 DM-i specs, BYD PHEV Thailand"
    }, {
      property: "og:title",
      content: `${model$5?.name ?? "BYD SEAL 5 DM-i"} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: "BYD SEAL 5 DM-i pricing, specs, and technical details"
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: "/byd-seal5dmi"
    }, {
      property: "og:image",
      content: model$5?.image ?? "/assets/byd-seal-5.png"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/byd-seal5dmi")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const SLUG$5 = "byd-seal";
const $$splitComponentImporter$d = () => import("./byd-seal-DAanp_7A.mjs");
const model$4 = getModel(SLUG$5);
const Route$d = createFileRoute("/byd-seal")({
  head: () => ({
    meta: [{
      title: `${model$4.name} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model$4.name} ${model$4.tagline}. Starting from ${model$4.priceFrom.toLocaleString()} THB, range up to ${model$4.range} km with latest promotions and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Seal price, BYD Seal specs, BYD Seal Thailand, BYD EV"
    }, {
      property: "og:title",
      content: `${model$4.name} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: model$4.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$5}`
    }, {
      property: "og:image",
      content: model$4.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$5}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./byd-promotion-DjMezz9N.mjs");
const Route$c = createFileRoute("/byd-promotion")({
  head: () => ({
    meta: [{
      title: "Latest BYD Promotions 2026 | BYD Jinlong Srinakarin"
    }, {
      name: "description",
      content: "Latest BYD promotions including 0% interest, free first-class insurance, premium tint, and exclusive offers for BYD Jinlong customers."
    }, {
      property: "og:title",
      content: "BYD Promotions | BYD Jinlong Srinakarin"
    }, {
      property: "og:description",
      content: "Special BYD EV offers this month"
    }, {
      property: "og:url",
      content: "/byd-promotion"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/byd-promotion")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const SLUG$4 = "byd-m6";
const $$splitComponentImporter$b = () => import("./byd-m6-8P2CRje2.mjs");
const Route$b = createFileRoute("/byd-m6")({
  head: () => {
    const model2 = getModel(SLUG$4);
    if (!model2) {
      return {
        meta: [{
          title: "BYD M6 | BYD Jinlong Srinakarin"
        }, {
          name: "description",
          content: "BYD M6 pricing, specs, and installment plans with promotions and free test drive booking in Bangkok."
        }, {
          name: "keywords",
          content: "BYD M6 price, BYD M6 specs, BYD MPV Thailand"
        }, {
          property: "og:title",
          content: "BYD M6 | BYD Jinlong Srinakarin"
        }, {
          property: "og:description",
          content: "BYD M6 pricing, specs, and promotions"
        }, {
          property: "og:type",
          content: "product"
        }, {
          property: "og:url",
          content: `/${SLUG$4}`
        }],
        links: [{
          rel: "canonical",
          href: buildCanonicalUrl(`/${SLUG$4}`)
        }]
      };
    }
    return {
      meta: [{
        title: `${model2.name} | BYD Jinlong Srinakarin`
      }, {
        name: "description",
        content: `${model2.name} ${model2.tagline}. Starting from ${model2.priceFrom.toLocaleString()} THB, range up to ${model2.range} km with latest promotions and free test drive in Bangkok.`
      }, {
        name: "keywords",
        content: "BYD M6 price, BYD M6 specs, BYD MPV Thailand"
      }, {
        property: "og:title",
        content: `${model2.name} | BYD Jinlong Srinakarin`
      }, {
        property: "og:description",
        content: model2.tagline
      }, {
        property: "og:type",
        content: "product"
      }, {
        property: "og:url",
        content: `/${SLUG$4}`
      }, {
        property: "og:image",
        content: model2.image
      }],
      links: [{
        rel: "canonical",
        href: buildCanonicalUrl(`/${SLUG$4}`)
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getHomeWpPosts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("e124dd0647cb0a4a7fb8437819b19ffd575c7cb636e9a909a1d62876ec8765e9"));
const getHomeWpInstallmentPosts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("143032dbd33c3cc14833000d3c1dffb802490bd6babd9c8f4c4e34da9a7133fc"));
const getHomeWpInstallmentPostsPage = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  page: numberType().int().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(createSsrRpc("ad8de6597b94aa111ef122563d3cea6c1a56601a4a9c24f1a6ebf601edc73c29"));
const getHomeWpPostsPage = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  page: numberType().int().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(createSsrRpc("e18264ef70fc3e3fba92c9a9ec07ed978c80717e202d821725653d3bdb80e882"));
const searchWpPosts = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  query: stringType().min(1),
  perPage: numberType().int().min(1).max(20).optional()
})).handler(createSsrRpc("32272a7df9813618d4837e8892702eddb0cd0d56903bd26f422d8fd873dac00e"));
const getWpPostBySlug = createServerFn({
  method: "GET"
}).inputValidator(objectType({
  slug: stringType().min(1)
})).handler(createSsrRpc("ba8692a4505e9669ca8c394ed763368bd0a967597d786cff262860006d1bd73f"));
const heroBanner$2 = "/assets/new-atto3-banner-desktop-p6ASZS5k.jpeg";
const heroBanner$1 = "/assets/overview-banner-desktop-6elnSXqY.jpeg";
const heroBanner = "/assets/overview-banner-desktop-DViUGHbu.png";
const $$splitComponentImporter$a = () => import("./byd-installment-CfwYMWSW.mjs");
const INSTALLMENT_HERO_IMAGES = [heroBanner$2, heroBanner$1, heroBanner];
function getMonthKey(dateText) {
  const date = new Date(dateText);
  if (Number.isNaN(date.getTime())) return "";
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}
const Route$a = createFileRoute("/byd-installment")({
  pendingMs: 150,
  pendingComponent: InstallmentPagePending,
  loader: async () => {
    const heroImage = INSTALLMENT_HERO_IMAGES[Math.floor(Math.random() * INSTALLMENT_HERO_IMAGES.length)];
    try {
      const initialInstallmentPage = await getHomeWpInstallmentPostsPage({
        data: {
          page: 1,
          perPage: 20
        }
      });
      const firstMonthKey = getMonthKey(initialInstallmentPage.posts[0]?.date ?? "");
      const latestMonthPosts = firstMonthKey.length > 0 ? initialInstallmentPage.posts.filter((post) => getMonthKey(post.date) === firstMonthKey) : initialInstallmentPage.posts;
      const renderedPosts = latestMonthPosts.length > 0 ? latestMonthPosts : initialInstallmentPage.posts;
      return {
        renderedPosts,
        heroImage
      };
    } catch {
      return {
        renderedPosts: [],
        heroImage
      };
    }
  },
  head: () => ({
    meta: [{
      title: "BYD Installment Plans 2026 | BYD Jinlong Srinakarin"
    }, {
      name: "description",
      content: "BYD installment plans for all models, including EV and Plug-in Hybrid, with payment calculator, down payment examples, and special rates."
    }, {
      property: "og:title",
      content: "BYD Installment Plans | BYD Jinlong Srinakarin"
    }, {
      property: "og:description",
      content: "Estimate your BYD monthly payment instantly."
    }, {
      property: "og:url",
      content: "/byd-installment"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/byd-installment")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
function InstallmentPagePending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { mainClassName: "pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto h-6 w-28 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-5 h-12 w-[min(100%,34rem)] rounded-xl sm:h-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-5 h-6 w-[min(100%,42rem)] rounded-xl" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto h-10 w-[min(100%,24rem)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-3 h-5 w-[min(100%,30rem)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: Array.from({
        length: 6
      }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-surface/45 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full rounded-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-4 h-6 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-6 w-4/5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-4 h-4 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-4 w-11/12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded-full" })
          ] })
        ] })
      ] }, index)) })
    ] }) })
  ] });
}
const SLUG$3 = "byd-dolphin";
const $$splitComponentImporter$9 = () => import("./byd-dolphin-BhnUynH9.mjs");
const model$3 = getModel(SLUG$3);
const Route$9 = createFileRoute("/byd-dolphin")({
  head: () => ({
    meta: [{
      title: `${model$3.name} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model$3.name} ${model$3.tagline}. Starting from ${model$3.priceFrom.toLocaleString()} THB, range up to ${model$3.range} km with latest promotions and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Dolphin price, BYD Dolphin specs, BYD Dolphin Thailand, BYD EV"
    }, {
      property: "og:title",
      content: `${model$3.name} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: model$3.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$3}`
    }, {
      property: "og:image",
      content: model$3.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$3}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const SLUG$2 = "byd-atto3";
const $$splitComponentImporter$8 = () => import("./byd-atto3-DjbNxnBd.mjs");
const model$2 = getModel(SLUG$2);
const Route$8 = createFileRoute("/byd-atto3")({
  head: () => ({
    meta: [{
      title: `${model$2.name} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model$2.name} ${model$2.tagline}. Starting from ${model$2.priceFrom.toLocaleString()} THB, range up to ${model$2.range} km with latest promotions and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Atto 3 price, BYD Atto 3 specs, BYD Atto 3 Thailand, BYD EV"
    }, {
      property: "og:title",
      content: `${model$2.name} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: model$2.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$2}`
    }, {
      property: "og:image",
      content: model$2.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$2}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const SLUG$1 = "byd-atto2";
const $$splitComponentImporter$7 = () => import("./byd-atto2-snOnL3Tm.mjs");
const model$1 = getModel(SLUG$1);
const Route$7 = createFileRoute("/byd-atto2")({
  head: () => ({
    meta: [{
      title: `${model$1.name} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model$1.name} ${model$1.tagline}. Starting from ${model$1.priceFrom.toLocaleString()} THB, range up to ${model$1.range} km with latest promotions and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Atto 2 price, BYD Atto 2 specs, BYD Atto 2 Thailand, BYD EV"
    }, {
      property: "og:title",
      content: `${model$1.name} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: model$1.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG$1}`
    }, {
      property: "og:image",
      content: model$1.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG$1}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const SLUG = "byd-atto1";
const $$splitComponentImporter$6 = () => import("./byd-atto1-D14PpecC.mjs");
const model = getModel(SLUG);
const Route$6 = createFileRoute("/byd-atto1")({
  head: () => ({
    meta: [{
      title: `${model.name} | BYD Jinlong Srinakarin`
    }, {
      name: "description",
      content: `${model.name} ${model.tagline}. Starting from ${model.priceFrom.toLocaleString()} THB, range up to ${model.range} km with latest promotions and free test drive in Bangkok.`
    }, {
      name: "keywords",
      content: "BYD Atto 1 price, BYD Atto 1 specs, BYD Atto 1 Thailand, BYD EV"
    }, {
      property: "og:title",
      content: `${model.name} | BYD Jinlong Srinakarin`
    }, {
      property: "og:description",
      content: model.tagline
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `/${SLUG}`
    }, {
      property: "og:image",
      content: model.image
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl(`/${SLUG}`)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("../_slug-DYps4PIM.mjs");
const Route$5 = createFileRoute("/$slug")({
  pendingMs: 120,
  pendingComponent: ArticleDetailPending,
  loader: async ({
    params
  }) => {
    const post = await getWpPostBySlug({
      data: {
        slug: params.slug
      }
    });
    return {
      post
    };
  },
  head: ({
    loaderData
  }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{
          title: "Article not found | BYD Jinlong Srinakarin"
        }]
      };
    }
    return {
      meta: [{
        title: `${post.title} | BYD Jinlong Srinakarin`
      }, {
        name: "description",
        content: post.excerpt || post.title
      }, {
        property: "og:title",
        content: post.title
      }, {
        property: "og:description",
        content: post.excerpt || post.title
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/${post.slug}`
      }, ...post.image ? [{
        property: "og:image",
        content: post.image
      }] : []],
      links: [{
        rel: "canonical",
        href: buildCanonicalUrl(`/${post.slug}`)
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt || post.title,
          datePublished: post.date,
          image: post.image || void 0,
          author: {
            "@type": "Organization",
            name: "BYD Srinakarin"
          }
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
function ArticleDetailPending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { mainClassName: "pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[54vh] overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/20 via-background/65 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/88 via-background/52 to-background/24" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-48 rounded-full bg-white/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-6 h-5 w-32 rounded-full bg-white/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-4 h-12 w-[min(100%,48rem)] rounded-xl bg-white/85 sm:h-16" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-3 h-12 w-[min(100%,38rem)] rounded-xl bg-white/75 sm:h-16" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-6 h-5 w-56 rounded-full bg-white/70" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "py-14 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-11/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-10/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-9/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-11/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-8/12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-full" })
    ] }) })
  ] });
}
const HOME_SLIDES_ENDPOINT = "https://cms.jinlongmotors.co.th/wp-json/wp/v2/posts?slug=slide-nakorn-in";
function normalizeImageUrl(url) {
  if (!url) {
    return null;
  }
  if (url.startsWith("//")) {
    return `https:${url}`;
  }
  return url;
}
function extractLargestSrcsetUrl(imgTag) {
  const srcsetMatch = imgTag.match(/srcset=["']([^"']+)["']/i);
  if (!srcsetMatch) {
    return null;
  }
  let bestUrl = "";
  let bestWidth = 0;
  for (const entry of srcsetMatch[1].split(",")) {
    const parts = entry.trim().split(/\s+/);
    if (parts.length < 2) {
      continue;
    }
    const w = parseInt(parts[1] ?? "0", 10);
    if (w > bestWidth && parts[0]) {
      bestWidth = w;
      bestUrl = parts[0];
    }
  }
  return bestUrl ? normalizeImageUrl(bestUrl) : null;
}
function extractSlideImageUrls(payload) {
  if (!Array.isArray(payload) || payload.length === 0) {
    return [];
  }
  const imageUrls = [];
  const seenUrls = /* @__PURE__ */ new Set();
  for (const item of payload) {
    const renderedContent = item.content?.rendered;
    if (typeof renderedContent !== "string") {
      continue;
    }
    const imgTagMatches = renderedContent.matchAll(/<img[^>]+>/gi);
    for (const imgTagMatch of imgTagMatches) {
      const imgTag = imgTagMatch[0];
      const imageUrl = extractLargestSrcsetUrl(imgTag) ?? normalizeImageUrl(imgTag.match(/src=["']([^"']+)["']/i)?.[1]?.trim() ?? "");
      if (!imageUrl || seenUrls.has(imageUrl)) {
        continue;
      }
      seenUrls.add(imageUrl);
      imageUrls.push(imageUrl);
    }
  }
  return imageUrls;
}
const heroImg = "/assets/byd-bg-hero-3vFXOVUH.webp";
const $$splitComponentImporter$4 = () => import("./index-BRnKxPD1.mjs");
reactExports.lazy(() => import("./InstallmentCalculator-DWtdOexZ.mjs").then((module) => ({
  default: module.InstallmentCalculator
})));
const HOME_LOADER_TIMEOUT_MS = 2200;
function withTimeout(promise, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    promise.then((value) => {
      clearTimeout(timeoutId);
      resolve(value);
    }).catch((error) => {
      clearTimeout(timeoutId);
      reject(error);
    });
  });
}
async function fetchSlideImageUrlsWithTimeout(timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(HOME_SLIDES_ENDPOINT, {
      signal: controller.signal
    });
    if (!response.ok) {
      return [];
    }
    const payload = await response.json();
    return extractSlideImageUrls(payload);
  } catch {
    return [];
  } finally {
    clearTimeout(timeoutId);
  }
}
const Route$4 = createFileRoute("/")({
  loader: async () => {
    const [wpPostsResult, installmentWpPostsResult, slideImageUrlsResult] = await Promise.allSettled([withTimeout(getHomeWpPosts(), HOME_LOADER_TIMEOUT_MS), withTimeout(getHomeWpInstallmentPosts(), HOME_LOADER_TIMEOUT_MS), fetchSlideImageUrlsWithTimeout(HOME_LOADER_TIMEOUT_MS)]);
    return {
      wpPosts: wpPostsResult.status === "fulfilled" ? wpPostsResult.value : [],
      installmentWpPosts: installmentWpPostsResult.status === "fulfilled" ? installmentWpPostsResult.value : [],
      slideImageUrls: slideImageUrlsResult.status === "fulfilled" ? slideImageUrlsResult.value : []
    };
  },
  head: () => ({
    meta: [{
      title: "บีวายดี จินหลง มอเตอร์ สาขา ศรีนครินทร์ | โชว์รูมและศูนย์บริการมาตรฐาน BYD บีวายดี จินหลง มอเตอร์"
    }, {
      name: "description",
      content: "ตัวแทนจำหน่ายรถยนต์ BYD ในกรุงเทพ ครอบคลุมทั้ง EV และ Plug-in Hybrid พร้อมโปรโมชั่นล่าสุด ตารางผ่อนคุ้มค่า และทดลองขับฟรี"
    }, {
      name: "keywords",
      content: "byd, byd thailand, รถ byd, ศูนย์ byd, รถยนต์ไฟฟ้า byd, byd กรุงเทพ, byd jinlong, โชว์รูม byd, ตัวแทน byd"
    }, {
      property: "og:title",
      content: "BYD จินหลง มอเตอร์ ศรีนครินทร์ — รถไฟฟ้า BYD กรุงเทพ"
    }, {
      property: "og:description",
      content: "รวมรถ BYD ทุกรุ่นทั้ง EV และ Plug-in Hybrid พร้อมโปรโมชั่นและทดลองขับฟรี"
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/")
    }, {
      rel: "preload",
      as: "image",
      href: heroImg,
      type: "image/webp",
      fetchPriority: "high"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-GGSoHmla.mjs");
const BLOG_HERO_IMAGES = [heroBanner$2, heroBanner$1, heroBanner];
const Route$3 = createFileRoute("/blog/")({
  pendingMs: 150,
  pendingComponent: BlogIndexPending,
  loader: async () => {
    const heroImage = BLOG_HERO_IMAGES[Math.floor(Math.random() * BLOG_HERO_IMAGES.length)];
    try {
      const initialBlogPage = await getHomeWpPostsPage({
        data: {
          page: 1,
          perPage: 12
        }
      });
      return {
        initialBlogPage,
        heroImage
      };
    } catch {
      return {
        initialBlogPage: {
          posts: [],
          page: 1,
          totalPages: 1
        },
        heroImage
      };
    }
  },
  head: () => ({
    meta: [{
      title: "BYD EV Articles & Insights | BYD Jinlong Srinakarin"
    }, {
      name: "description",
      content: "Articles, reviews, comparisons, and practical guidance on BYD electric vehicles and EV technology in Thailand."
    }, {
      property: "og:title",
      content: "BYD Articles | BYD Jinlong Srinakarin"
    }, {
      property: "og:description",
      content: "Knowledge and articles about EVs"
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: buildCanonicalUrl("/blog")
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
function BlogIndexPending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { mainClassName: "pt-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "absolute inset-0 h-full w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/72 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-background/85", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto h-6 w-32 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-5 h-12 w-[min(100%,34rem)] rounded-xl sm:h-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mx-auto mt-5 h-6 w-[min(100%,42rem)] rounded-xl" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: Array.from({
      length: 6
    }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-44 w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-3 h-6 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-6 w-5/6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-4 h-4 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-4 w-11/12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "mt-2 h-4 w-4/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-16" })
        ] })
      ] })
    ] }, index)) }) })
  ] });
}
const $$splitComponentImporter$2 = () => import("../_slug-VpyTME7z.mjs");
const Route$2 = createFileRoute("/blog/$slug")({
  head: ({
    params
  }) => {
    const a = getArticle(params.slug);
    if (!a) return {
      meta: [{
        title: "Article not found | BYD Jinlong Srinakarin"
      }]
    };
    return {
      meta: [{
        title: `${a.title} | BYD Jinlong Srinakarin`
      }, {
        name: "description",
        content: a.excerpt
      }, {
        property: "og:title",
        content: a.title
      }, {
        property: "og:description",
        content: a.excerpt
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `/blog/${a.slug}`
      }],
      links: [{
        rel: "canonical",
        href: buildCanonicalUrl(`/blog/${a.slug}`)
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          author: {
            "@type": "Organization",
            name: "BYD Jinlong Srinakarin"
          }
        })
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BTU5dmpx.mjs");
const Route$1 = createFileRoute("/category/news/")({
  beforeLoad: () => {
    throw redirect({
      to: "/blog",
      statusCode: 301
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dwsdb6Kz.mjs");
const Route = createFileRoute("/category/byd-price/")({
  beforeLoad: () => {
    throw redirect({
      to: "/byd-installment",
      statusCode: 301
    });
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestDriveBydRoute = Route$n.update({
  id: "/test-drive-byd",
  path: "/test-drive-byd",
  getParentRoute: () => Route$o
});
const SitemapDotxmlRoute = Route$m.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$o
});
const ModelsRoute = Route$l.update({
  id: "/models",
  path: "/models",
  getParentRoute: () => Route$o
});
const ContactRoute = Route$k.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$o
});
const BydSealion7Route = Route$j.update({
  id: "/byd-sealion7",
  path: "/byd-sealion7",
  getParentRoute: () => Route$o
});
const BydSealion6dmiRoute = Route$i.update({
  id: "/byd-sealion6dmi",
  path: "/byd-sealion6dmi",
  getParentRoute: () => Route$o
});
const BydSealion5dmiRoute = Route$h.update({
  id: "/byd-sealion5dmi",
  path: "/byd-sealion5dmi",
  getParentRoute: () => Route$o
});
const BydSealion6DmIRoute = Route$g.update({
  id: "/byd-sealion-6-dm-i",
  path: "/byd-sealion-6-dm-i",
  getParentRoute: () => Route$o
});
const BydSeal6Route = Route$f.update({
  id: "/byd-seal6",
  path: "/byd-seal6",
  getParentRoute: () => Route$o
});
const BydSeal5dmiRoute = Route$e.update({
  id: "/byd-seal5dmi",
  path: "/byd-seal5dmi",
  getParentRoute: () => Route$o
});
const BydSealRoute = Route$d.update({
  id: "/byd-seal",
  path: "/byd-seal",
  getParentRoute: () => Route$o
});
const BydPromotionRoute = Route$c.update({
  id: "/byd-promotion",
  path: "/byd-promotion",
  getParentRoute: () => Route$o
});
const BydM6Route = Route$b.update({
  id: "/byd-m6",
  path: "/byd-m6",
  getParentRoute: () => Route$o
});
const BydInstallmentRoute = Route$a.update({
  id: "/byd-installment",
  path: "/byd-installment",
  getParentRoute: () => Route$o
});
const BydDolphinRoute = Route$9.update({
  id: "/byd-dolphin",
  path: "/byd-dolphin",
  getParentRoute: () => Route$o
});
const BydAtto3Route = Route$8.update({
  id: "/byd-atto3",
  path: "/byd-atto3",
  getParentRoute: () => Route$o
});
const BydAtto2Route = Route$7.update({
  id: "/byd-atto2",
  path: "/byd-atto2",
  getParentRoute: () => Route$o
});
const BydAtto1Route = Route$6.update({
  id: "/byd-atto1",
  path: "/byd-atto1",
  getParentRoute: () => Route$o
});
const SlugRoute = Route$5.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => Route$o
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$o
});
const BlogIndexRoute = Route$3.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$o
});
const BlogSlugRoute = Route$2.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$o
});
const CategoryNewsIndexRoute = Route$1.update({
  id: "/category/news/",
  path: "/category/news/",
  getParentRoute: () => Route$o
});
const CategoryBydPriceIndexRoute = Route.update({
  id: "/category/byd-price/",
  path: "/category/byd-price/",
  getParentRoute: () => Route$o
});
const rootRouteChildren = {
  IndexRoute,
  SlugRoute,
  BydAtto1Route,
  BydAtto2Route,
  BydAtto3Route,
  BydDolphinRoute,
  BydInstallmentRoute,
  BydM6Route,
  BydPromotionRoute,
  BydSealRoute,
  BydSeal5dmiRoute,
  BydSeal6Route,
  BydSealion6DmIRoute,
  BydSealion5dmiRoute,
  BydSealion6dmiRoute,
  BydSealion7Route,
  ContactRoute,
  ModelsRoute,
  SitemapDotxmlRoute,
  TestDriveBydRoute,
  BlogSlugRoute,
  BlogIndexRoute,
  CategoryBydPriceIndexRoute,
  CategoryNewsIndexRoute
};
const routeTree = Route$o._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ARTICLES as A,
  getHomeWpPostsPage as B,
  Route$2 as C,
  getArticle as D,
  router as E,
  HOME_SLIDES_ENDPOINT as H,
  PageShell as P,
  Route$a as R,
  SLUG$9 as S,
  SLUG$8 as a,
  SLUG$7 as b,
  createSsrRpc as c,
  SLUG$6 as d,
  heroBanner as e,
  fallbackModel as f,
  SLUG$5 as g,
  heroBanner$3 as h,
  PageHero as i,
  SLUG$4 as j,
  heroBanner$1 as k,
  SLUG$3 as l,
  heroBanner$2 as m,
  SLUG$2 as n,
  SLUG$1 as o,
  SLUG as p,
  cn as q,
  Route$5 as r,
  Route$4 as s,
  heroImg as t,
  useI18n as u,
  extractSlideImageUrls as v,
  extractLargestSrcsetUrl as w,
  normalizeImageUrl as x,
  Route$3 as y,
  searchWpPosts as z
};
