import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { l as SLUG$3, u as useI18n, P as PageShell, k as heroBanner$1 } from "./router-DqBUpUFD.mjs";
import { T as TestDriveForm } from "./TestDriveForm-B-lvBru9.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-C6n43tCB.mjs";
import { FAQ } from "./FAQ-Dl50AwaB.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, k as colorWhite$5 } from "./models-hBzcyjxT.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, R as Ruler, G as Gauge, j as Battery, p as Sun, n as Sparkles, S as ShieldCheck, o as CircuitBoard, a as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
import "./server-DqL_uTuA.mjs";
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
import "./dialog-CKGzACgW.mjs";
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
const colorGrey = "/assets/new-dolphin-graphite-grey-SqRpyQvc.png";
const colorBlack = "/assets/quantum-black-G8cGZ2A0.png";
const colorSpaceGrey = "/assets/SpaceGrey-CRoj_Hfu.png";
const imgBladeBattery = "/assets/blade-battery-KXfMMaFT.jpeg";
const imgEPlatform = "/assets/e-platform-CJLPn7K3.jpeg";
const imgV2L = "/assets/v2l-CjzRS34v.jpeg";
const extSurge = "/assets/surge-CtGZlkNK.jpeg";
const extLedTail = "/assets/led-tail-light-CCob7nkP.jpeg";
const extNfc = "/assets/nfc-DBJlo8kg.jpeg";
const extWheel = "/assets/alloy-wheel-JTGMFX99.jpeg";
const intGlassRoof = "/assets/glass-roof-B3hTR7Dx.jpeg";
const intDesign = "/assets/dolphin-design-B2X_mIuQ.jpeg";
const intDriveMode = "/assets/drive-mode-CB3fcz_f.jpeg";
const intWireless = "/assets/wireless-charging-BnBEF1HH.jpeg";
const TRIMS = [
  { key: "standard", name: "Standard Range", price: 509900, accel: "12.5", range: "435", battery: "50.25 kWh", power: "70 kW (95 hp)", torque: "180 Nm" },
  { key: "extended", name: "Extended Range", price: 719900, accel: "7", range: "490", battery: "60.48 kWh", power: "150 kW (204 hp)", torque: "310 Nm" }
];
const COLORS = [
  { name: "Frost White", hex: "#F5F5F2", border: "#d0d0d0", img: colorWhite$5, note: "Standard · Extended" },
  { name: "Graphite Grey", hex: "#6B6E74", border: "#6B6E74", img: colorGrey, note: "Standard · Extended" },
  { name: "Quantum Black", hex: "#0E0F11", border: "#444", img: colorBlack, note: "Extended" },
  { name: "Space Grey", hex: "#4E5157", border: "#4E5157", img: colorSpaceGrey, note: "Extended" }
];
const COLORS_EN = COLORS;
const EXTERIOR_GALLERY = [
  { img: extSurge, label: "Exterior Surge", desc: "Dolphin-inspired aerodynamic form — playful yet purposeful" },
  { img: extLedTail, label: "Geometric Polyline LED Tail Light", desc: "Bold geometric LED tail lights for a striking rear presence" },
  { img: extNfc, label: "NFC / Keyless Card", desc: "Convenient NFC card key with Keyless Entry & Keyless Start" },
  { img: extWheel, label: "Sport Alloy Wheels", desc: "Distinctive two-tone alloy wheels for style and efficiency" }
];
const EXTERIOR_GALLERY_EN = EXTERIOR_GALLERY;
const INTERIOR_GALLERY = [
  { img: intGlassRoof, label: "Electric Panoramic Glass Roof", desc: "Wide panoramic glass roof spanning the entire cabin (Extended)" },
  { img: intDesign, label: "Dolphin Design", desc: "Ocean-inspired interior details and door handles" },
  { img: intDriveMode, label: "Innovation Drive Mode", desc: "Finger-touched electronic shift with stylish controls" },
  { img: intWireless, label: "Wireless Phone Charger", desc: "Wireless charging pad for effortless device top-ups (Extended)" }
];
const INTERIOR_GALLERY_EN = INTERIOR_GALLERY;
const DIMENSIONS = [
  { label: "จำนวนที่นั่ง", values: ["5", "5"] },
  { label: "ความยาว (มิลลิเมตร)", values: ["4,290", "4,290"] },
  { label: "ความกว้าง (มิลลิเมตร)", values: ["1,770", "1,770"] },
  { label: "ความสูง (มิลลิเมตร)", values: ["1,570", "1,570"] },
  { label: "ระยะห่างของล้อ คู่หน้า / คู่หลัง (มิลลิเมตร)", values: ["1,530/1,530", "1,530/1,530"] },
  { label: "ระยะฐานล้อ (มิลลิเมตร)", values: ["2,700", "2,700"] },
  { label: "ความสูงใต้ท้องรถไม่รวมน้ำหนักบรรทุก (มิลลิเมตร)", values: ["155", "155"] },
  { label: "ความสูงใต้ท้องรถรวมน้ำหนักบรรทุกสูงสุด (มิลลิเมตร)", values: ["130", "130"] },
  { label: "รัศมีวงเลี้ยวแคบสุด (เมตร)", values: ["5.25", "5.25"] },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านท้าย (ลิตร)", values: ["345", "345"] },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านท้ายสูงสุด (ลิตร)", values: ["1,310", "1,310"] },
  { label: "น้ำหนักรถเปล่า (กิโลกรัม)", values: ["1,520", "1,658"] },
  { label: "น้ำหนักรถรวมน้ำหนักบรรทุกสูงสุด (กิโลกรัม)", values: ["1,930", "2,068"] }
];
const DIMENSIONS_EN = [
  { label: "Seating capacity", values: ["5", "5"] },
  { label: "Length (mm)", values: ["4,290", "4,290"] },
  { label: "Width (mm)", values: ["1,770", "1,770"] },
  { label: "Height (mm)", values: ["1,570", "1,570"] },
  { label: "Front / rear track (mm)", values: ["1,530/1,530", "1,530/1,530"] },
  { label: "Wheelbase (mm)", values: ["2,700", "2,700"] },
  { label: "Unladen ground clearance (mm)", values: ["155", "155"] },
  { label: "Loaded ground clearance, max (mm)", values: ["130", "130"] },
  { label: "Minimum turning radius (m)", values: ["5.25", "5.25"] },
  { label: "Rear cargo volume (L)", values: ["345", "345"] },
  { label: "Rear cargo volume, max (L)", values: ["1,310", "1,310"] },
  { label: "Curb weight (kg)", values: ["1,520", "1,658"] },
  { label: "Gross vehicle weight (kg)", values: ["1,930", "2,068"] }
];
const PERFORMANCE = [
  { label: "ประเภทมอเตอร์ไฟฟ้า", values: ["Permanent Magnet Synchronous Motor", "Permanent Magnet Synchronous Motor"] },
  { label: "กำลังสูงสุด กิโลวัตต์ (แรงม้า)", values: ["70 (95)", "150 (204)"] },
  { label: "แรงบิดสูงสุด (นิวตัน-เมตร)", values: ["180", "310"] },
  { label: "อัตราเร่ง 0 - 100 กิโลเมตร / ชั่วโมง (วินาที)", values: ["12.5", "7"] },
  { label: "ระยะทางวิ่งด้วยไฟฟ้าสูงสุด ตามมาตรฐาน NEDC (กิโลเมตร)", values: ["435", "490"] },
  { label: "ประเภทแบตเตอรี่", values: ["BYD Blade Battery", "BYD Blade Battery"] },
  { label: "ความจุแบตเตอรี่สูงสุด (กิโลวัตต์ - ชั่วโมง)", values: ["50.25", "60.48"] },
  { label: "ระบบกันสะเทือนด้านหน้า", values: ["แม็คเฟอร์สันสตรัท", "แม็คเฟอร์สันสตรัท"] },
  { label: "ระบบกันสะเทือนด้านหลัง", values: ["ทอร์ชั่นบีม", "มัลติลิงก์"] },
  { label: "ระบบเบรกด้านหน้า", values: ["ดิสก์เบรกแบบมีช่องระบายความร้อน", "ดิสก์เบรกแบบมีช่องระบายความร้อน"] },
  { label: "ระบบเบรกด้านหลัง", values: ["ดิสก์เบรก", "ดิสก์เบรก"] },
  { label: "ล้ออัลลอย", values: ["16 นิ้ว", "17 นิ้ว"] },
  { label: "ขนาดยาง", values: ["195/60 R16", "205/50 R17"] },
  { label: "ชุดซ่อมยางฉุกเฉิน", values: [true, true] }
];
const PERFORMANCE_EN = [
  { label: "Electric motor type", values: ["Permanent Magnet Synchronous Motor", "Permanent Magnet Synchronous Motor"] },
  { label: "Maximum power kW (hp)", values: ["70 (95)", "150 (204)"] },
  { label: "Maximum torque (Nm)", values: ["180", "310"] },
  { label: "0-100 km/h (seconds)", values: ["12.5", "7"] },
  { label: "Maximum electric driving range, NEDC (km)", values: ["435", "490"] },
  { label: "Battery type", values: ["BYD Blade Battery", "BYD Blade Battery"] },
  { label: "Maximum battery capacity (kWh)", values: ["50.25", "60.48"] },
  { label: "Front suspension", values: ["MacPherson strut", "MacPherson strut"] },
  { label: "Rear suspension", values: ["Torsion beam", "Multi-link"] },
  { label: "Front brakes", values: ["Ventilated disc brakes", "Ventilated disc brakes"] },
  { label: "Rear brakes", values: ["Disc brakes", "Disc brakes"] },
  { label: "Alloy wheels", values: ["16 inch", "17 inch"] },
  { label: "Tyre size", values: ["195/60 R16", "205/50 R17"] },
  { label: "Emergency tyre repair kit", values: [true, true] }
];
const CHARGING = [
  { label: "สายชาร์จแบบพกพา (Mode 2)", values: [true, true] },
  { label: "รองรับหัวชาร์จแบบ AC Type 2 (7 kW)", values: [true, true] },
  { label: "รองรับหัวชาร์จแบบ DC CCS2 (kW)", values: ["60", "80"] },
  { label: "ระบบ VtoL (Vehicle to Load)", values: [true, true] },
  { label: "อุปกรณ์เสริมสำหรับระบบ VtoL", values: [true, true] },
  { label: "ระบบเบรกพร้อมระบบชาร์จพลังงานกลับอัตโนมัติ (Regenerative Braking)", values: [true, true] }
];
const CHARGING_EN = [
  { label: "Portable charging cable (Mode 2)", values: [true, true] },
  { label: "Supports AC Type 2 charger (7 kW)", values: [true, true] },
  { label: "Supports DC CCS2 charger (kW)", values: ["60", "80"] },
  { label: "VtoL (Vehicle to Load)", values: [true, true] },
  { label: "VtoL accessories", values: [true, true] },
  { label: "Regenerative braking system", values: [true, true] }
];
const EXTERIOR_SPEC = [
  { label: "ไฟหน้าแบบ LED", values: [true, true] },
  { label: "ฟังก์ชันหน่วงเวลาการปิดไฟหน้า Follow-Me-Home", values: [true, true] },
  { label: "ไฟส่องสว่างสำหรับการขับขี่ในเวลากลางวันแบบ LED", values: [true, true] },
  { label: "ระบบช่วยเปิด-ปิดไฟหน้าอัตโนมัติ", values: [true, true] },
  { label: "ไฟท้ายแบบ LED", values: [true, true] },
  { label: "หลังคากระจกแบบพาโนรามิก (Panoramic Glass Roof)", values: [false, true] },
  { label: "กระจกมองข้างปรับและพับไฟฟ้าพร้อมระบบทำความร้อนไล่ฝ้า", values: [true, true] },
  { label: "ที่ปัดน้ำฝนด้านหน้าแบบไร้โครงเหล็ก", values: [true, true] },
  { label: "ที่ปัดน้ำฝนด้านหลัง", values: [true, true] }
];
const EXTERIOR_SPEC_EN = [
  { label: "LED headlights", values: [true, true] },
  { label: "Follow-Me-Home delay function", values: [true, true] },
  { label: "LED daytime running lights", values: [true, true] },
  { label: "Automatic headlight control", values: [true, true] },
  { label: "LED tail lights", values: [true, true] },
  { label: "Panoramic glass roof", values: [false, true] },
  { label: "Power-folding, heated, anti-fog side mirrors", values: [true, true] },
  { label: "Frameless front wipers", values: [true, true] },
  { label: "Rear wiper", values: [true, true] }
];
const INTERIOR_SPEC = [
  { label: "พวงมาลัยมัลติฟังก์ชัน", values: [true, true] },
  { label: "ระบบพวงมาลัยไฟฟ้า EPS", values: [true, true] },
  { label: "พวงมาลัยทรงสปอร์ต 3 ก้าน", values: [true, true] },
  { label: "หน้าจอเรือนไมล์ผู้ขับขี่แบบ LCD ขนาด 5 นิ้ว", values: [true, true] },
  { label: "วัสดุหุ้มเบาะนั่งแบบหนังสังเคราะห์", values: [true, true] },
  { label: "เบาะนั่งผู้ขับขี่ปรับไฟฟ้า 6 ทิศทาง", values: [true, true] },
  { label: "เบาะนั่งผู้โดยสารด้านหน้าปรับไฟฟ้า 4 ทิศทาง", values: [false, true] },
  { label: "เบาะนั่งด้านหน้าพร้อมระบบระบายอากาศ", values: [false, true] },
  { label: "พนักพิงเบาะโดยสารด้านหลังพับแบบ 60:40", values: [true, true] },
  { label: "พนักพิงศรีษะที่เบาะนั่งโดยสารด้านหลัง ปรับระดับสูง-ต่ำได้", values: [true, true] },
  { label: "กระจกด้านคนขับเปิด-ปิดอัตโนมัติแบบสัมผัสสวิตช์ครั้งเดียวพร้อมระบบป้องกันการหนีบ", values: [true, false] },
  { label: "กระจก 4 บานเปิด-ปิดอัตโนมัติแบบสัมผัสสวิตช์ครั้งเดียวพร้อมระบบป้องกันการหนีบ", values: [false, true] },
  { label: "ช่องเก็บของคอนโซลกลาง", values: [true, true] },
  { label: "ไฟส่องแผนที่", values: ["ด้านหน้าและด้านหลัง", "ด้านหน้า"] },
  { label: "ไฟส่องแผนที่ด้านข้างสำหรับผู้โดยสารด้านหลัง", values: [false, true] },
  { label: "ไฟส่องสว่างในพื้นที่เก็บสัมภาระ", values: [true, true] },
  { label: "จุดยึดเบาะนั่งเด็กแบบ ISOFIX", values: [true, true] }
];
const INTERIOR_SPEC_EN = [
  { label: "Multi-function steering wheel", values: [true, true] },
  { label: "EPS power steering", values: [true, true] },
  { label: "3-spoke sport steering wheel", values: [true, true] },
  { label: "5-inch LCD driver instrument cluster", values: [true, true] },
  { label: "Synthetic leather seats", values: [true, true] },
  { label: "6-way power driver seat", values: [true, true] },
  { label: "4-way power front passenger seat", values: [false, true] },
  { label: "Ventilated front seats", values: [false, true] },
  { label: "60:40 split-fold rear seatbacks", values: [true, true] },
  { label: "Rear headrests with height adjustment", values: [true, true] },
  { label: "One-touch auto up/down driver window with pinch protection", values: [true, false] },
  { label: "One-touch auto up/down all windows with pinch protection", values: [false, true] },
  { label: "Center console storage", values: [true, true] },
  { label: "Map lights", values: ["Front and rear", "Front"] },
  { label: "Rear passenger side reading light", values: [false, true] },
  { label: "Cargo area light", values: [true, true] },
  { label: "ISOFIX child seat anchors", values: [true, true] }
];
const SAFETY = [
  { label: "ถุงลมนิรภัยคู่หน้า - ฝั่งคนขับและผู้โดยสารตอนหน้า", values: [true, true] },
  { label: "ถุงลมนิรภัยด้านข้าง - ฝั่งคนขับและผู้โดยสารตอนหน้า", values: [true, true] },
  { label: "ม่านถุงลมนิรภัยด้านข้าง ด้านหน้าและด้านหลัง", values: [true, true] },
  { label: "เข็มขัดนิรภัยคู่หน้าแบบดึงกลับอัตโนมัติ", values: [true, true] },
  { label: "เข็มขัดนิรภัยด้านหลังแบบดึงกลับ และผ่อนแรงอัตโนมัติ", values: [true, true] },
  { label: "ระบบเตือนคาดเข็มขัดนิรภัย ด้านหน้าและด้านหลัง", values: [true, true] },
  { label: "กล้องมองภาพรอบคัน 360 องศา", values: [true, true] },
  { label: "ระบบตรวจสอบแรงดันลมยาง (TPMS)", values: [true, true] },
  { label: "เซนเซอร์ช่วยตรวจจับวัตถุด้านหน้า 2 ตำแหน่ง", values: [true, true] },
  { label: "เซนเซอร์ช่วยตรวจจับวัตถุด้านหลัง 3 ตำแหน่ง", values: [true, true] },
  { label: "ระบบช่วยควบคุมการไหลของรถอัตโนมัติ (AVH)", values: [true, true] },
  { label: "ระบบเบรกมือไฟฟ้า (EPB)", values: [true, true] },
  { label: "ระบบช่วยเบรกป้องกันล้อล็อก (ABS)", values: [true, true] },
  { label: "ระบบช่วยเบรกอัจฉริยะ", values: [true, true] },
  { label: "ระบบช่วยควบคุมเสถียรภาพการทรงตัวของรถ (ESC)", values: [true, true] },
  { label: "ระบบช่วยป้องกันการลื่นไถลขณะขับขี่ (TCS)", values: [true, true] },
  { label: "ระบบช่วยควบคุมการกระจายแรงเบรก (EBD)", values: [true, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผัน พร้อมฟังก์ชัน Stop and Go (ACC-S&G)", values: [true, true] },
  { label: "ระบบช่วยเบรกฉุกเฉินอัตโนมัติ (AEB)", values: [true, true] },
  { label: "ระบบช่วยเตือนการชนด้านหน้า (FCW)", values: [true, true] },
  { label: "ระบบช่วยเตือนการชนด้านหลัง (RCW)", values: [true, true] },
  { label: "ระบบช่วยเตือนจุดอับสายตา (BSD)", values: [true, true] },
  { label: "ระบบช่วยเตือนวัตถุเคลื่อนผ่านขณะเปิดประตู (DOW)", values: [true, true] },
  { label: "ระบบช่วยเตือนเมื่อรถออกนอกเลน (LDW)", values: [true, true] },
  { label: "ระบบช่วยควบคุมรถให้อยู่ในช่องทางเดินรถ (LKA)", values: [true, true] },
  { label: "ระบบช่วยรักษาช่องทางเดินรถฉุกเฉิน (ELKA)", values: [true, true] },
  { label: "ระบบช่วยเตือนเมื่อมีรถผ่านในจุดอับสายตาขณะถอยหลัง (RCTA)", values: [true, true] },
  { label: "ระบบช่วยเบรกเมื่อมีรถผ่านในจุดอับสายตาขณะถอยหลัง (RCTB)", values: [true, true] }
];
const SAFETY_EN = [
  { label: "Front airbags - driver & front passenger", values: [true, true] },
  { label: "Side airbags - driver & front passenger", values: [true, true] },
  { label: "Side curtain airbags, front and rear", values: [true, true] },
  { label: "Front seat belt pretensioners", values: [true, true] },
  { label: "Rear seat belts with pretensioners and force limiters", values: [true, true] },
  { label: "Seat belt reminder, front and rear", values: [true, true] },
  { label: "360-degree surround-view camera", values: [true, true] },
  { label: "Tire Pressure Monitoring System (TPMS)", values: [true, true] },
  { label: "Front parking sensors, 2 points", values: [true, true] },
  { label: "Rear parking sensors, 3 points", values: [true, true] },
  { label: "Auto Vehicle Hold (AVH)", values: [true, true] },
  { label: "Electric Parking Brake (EPB)", values: [true, true] },
  { label: "Anti-lock Braking System (ABS)", values: [true, true] },
  { label: "Brake Assist System", values: [true, true] },
  { label: "Electronic Stability Control (ESC)", values: [true, true] },
  { label: "Traction Control System (TCS)", values: [true, true] },
  { label: "Electronic Brakeforce Distribution (EBD)", values: [true, true] },
  { label: "Adaptive Cruise Control with Stop and Go (ACC-S&G)", values: [true, true] },
  { label: "Autonomous Emergency Braking (AEB)", values: [true, true] },
  { label: "Forward Collision Warning (FCW)", values: [true, true] },
  { label: "Rear Collision Warning (RCW)", values: [true, true] },
  { label: "Blind Spot Detection (BSD)", values: [true, true] },
  { label: "Door Open Warning (DOW)", values: [true, true] },
  { label: "Lane Departure Warning (LDW)", values: [true, true] },
  { label: "Lane Keeping Assist (LKA)", values: [true, true] },
  { label: "Emergency Lane Keeping Assist (ELKA)", values: [true, true] },
  { label: "Rear Cross Traffic Alert (RCTA)", values: [true, true] },
  { label: "Rear Cross Traffic Braking (RCTB)", values: [true, true] }
];
const MULTIMEDIA = [
  { label: "วิทยุ FM", values: [true, true] },
  { label: "*รองรับการเชื่อมต่อโทรศัพท์มือถือผ่านบลูทูธ", values: [true, true] },
  { label: "หน้าจอสัมผัสระบบมัลติมีเดียขนาดใหญ่ 12.8 นิ้ว ปรับหมุนด้วยไฟฟ้า", values: [true, true] },
  { label: "ลำโพง 6 ตำแหน่ง", values: [true, true] },
  { label: "*รองรับ Apple CarPlay® และ Android Auto™", values: [true, true] },
  { label: "ระบบสั่งงานด้วยเสียงภาษาไทย / ภาษาอังกฤษ", values: [true, true] },
  { label: "*แผนที่พร้อมระบบนำทาง", values: [true, true] },
  { label: "*มิวสิคสตรีมมิ่ง", values: [true, true] },
  { label: "ที่ชาร์จโทรศัพท์มือถือแบบไร้สาย", values: [false, true] },
  { label: "ช่อง USB - C และ USB - A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารด้านหน้า", values: [true, true] },
  { label: "ช่อง USB - C และ USB - A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารด้านหลัง", values: [true, true] },
  { label: "ช่องจ่ายไฟ 12V", values: [true, true] },
  { label: "ระบบ Keyless Entry และ Keyless Start", values: [true, true] },
  { label: "ระบบกุญแจแบบบัตรอิเล็กทรอนิกส์ NFC (NFC Card)", values: [true, true] },
  { label: "ระบบปรับอากาศอัตโนมัติ", values: [true, true] },
  { label: "ฮีตเตอร์", values: [true, true] },
  { label: "ระบบกรองฝุ่น PM 2.5 แบบประสิทธิภาพสูง (CN95)", values: [true, true] }
];
const MULTIMEDIA_EN = [
  { label: "FM radio", values: [true, true] },
  { label: "Bluetooth phone connectivity", values: [true, true] },
  { label: "12.8-inch rotating touchscreen multimedia display", values: [true, true] },
  { label: "6 speakers", values: [true, true] },
  { label: "Apple CarPlay® and Android Auto™ support", values: [true, true] },
  { label: "Thai / English voice control", values: [true, true] },
  { label: "Navigation map", values: [true, true] },
  { label: "Music streaming", values: [true, true] },
  { label: "Wireless phone charger", values: [false, true] },
  { label: "1 USB-C and 1 USB-A for front passengers", values: [true, true] },
  { label: "1 USB-C and 1 USB-A for rear passengers", values: [true, true] },
  { label: "12V power outlet", values: [true, true] },
  { label: "Keyless Entry and Keyless Start", values: [true, true] },
  { label: "NFC card key system", values: [true, true] },
  { label: "Automatic air conditioning", values: [true, true] },
  { label: "Heater", values: [true, true] },
  { label: "High-efficiency PM2.5 cabin filter (CN95)", values: [true, true] }
];
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
function Reveal({ children, delay = 0, className = "" }) {
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
function BydDolphinBrochure({ model }) {
  const { locale } = useI18n();
  const isEn = locale === "en";
  const [trim, setTrim] = reactExports.useState("extended");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  reactExports.useRef(null);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const r = calcInstallment(model.priceFrom, 20, 5, 2.49);
  const currentTrim = TRIMS.find((t) => t.key === trim);
  const colors = isEn ? COLORS_EN : COLORS;
  const galleryItems = galleryTab === "exterior" ? isEn ? EXTERIOR_GALLERY_EN : EXTERIOR_GALLERY : isEn ? INTERIOR_GALLERY_EN : INTERIOR_GALLERY;
  const dimensionsRows = isEn ? DIMENSIONS_EN : DIMENSIONS;
  const performanceRows = isEn ? PERFORMANCE_EN : PERFORMANCE;
  const chargingRows = isEn ? CHARGING_EN : CHARGING;
  const exteriorRows = isEn ? EXTERIOR_SPEC_EN : EXTERIOR_SPEC;
  const interiorRows = isEn ? INTERIOR_SPEC_EN : INTERIOR_SPEC;
  const safetyRows = isEn ? SAFETY_EN : SAFETY;
  const multimediaRows = isEn ? MULTIMEDIA_EN : MULTIMEDIA;
  const heroStats = isEn ? [
    { label: "Max Range", val: "490 km" },
    { label: "0-100 km/h", val: "7 sec" },
    { label: "Max Power", val: "150 kW" },
    { label: "Max Torque", val: "310 Nm" },
    { label: "Battery", val: "60.48 kWh" }
  ] : [
    { label: "Max Range", val: "490 km" },
    { label: "0-100 km/h", val: "7 sec" },
    { label: "Max Power", val: "150 kW" },
    { label: "Max Torque", val: "310 Nm" },
    { label: "Battery", val: "60.48 kWh" }
  ];
  reactExports.useEffect(() => {
    setActiveGallery(0);
  }, [galleryTab]);
  const faqs = isEn ? [
    { q: "How much is the BYD Dolphin?", a: "Standard Range starts at ฿509,900 · Extended Range starts at ฿719,900, with the latest promotions available from our team." },
    { q: "How far can the BYD Dolphin go?", a: "Standard Range up to 435 km · Extended Range up to 490 km (NEDC range)." },
    { q: "How fast is 0-100 km/h?", a: "Standard Range 12.5 sec · Extended Range 7 sec, with 150 kW and 310 Nm on the Extended Range." },
    { q: "What charging systems does it support?", a: "Supports AC Type 2 (7 kW) · DC CCS2 60 kW (Standard) / 80 kW (Extended) with VtoL." },
    { q: `What is the monthly payment for BYD Dolphin?`, a: `Estimated installment starts from ${formatBaht(r.monthly)}/month (20% down, 60 months, 2.49% interest).` }
  ] : [
    { q: "BYD Dolphin ราคาเท่าไร?", a: "Standard Range ฿509,900 · Extended Range ฿719,900 ทีมงานพร้อมแจ้งโปรโมชั่นล่าสุด" },
    { q: "BYD Dolphin วิ่งได้ไกลกี่กิโลเมตร?", a: "Standard Range 435 กม. · Extended Range 490 กม. (NEDC Range)" },
    { q: "BYD Dolphin เร่ง 0-100 ได้กี่วินาที?", a: "Standard Range 12.5 วิ · Extended Range 7 วิ กำลัง 150 kW แรงบิด 310 Nm" },
    { q: "ระบบชาร์จเป็นอย่างไร?", a: "รองรับ AC Type 2 (7 kW) · DC CCS2 60 kW (Standard) / 80 kW (Extended) พร้อม VtoL" },
    { q: `ผ่อน BYD Dolphin เดือนละเท่าไร?`, a: `ค่างวดเริ่มต้น ${formatBaht(r.monthly)}/เดือน (ดาวน์ 20% ผ่อน 60 งวด ดอกเบี้ย 2.49%)` }
  ];
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: model.name,
    description: model.description,
    vehicleModelDate: "2026",
    bodyType: "Hatchback",
    fuelType: "Electric",
    seatingCapacity: 5,
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: model.priceFrom,
      availability: "https://schema.org/InStock",
      seller: { "@type": "AutoDealer", name: "BYD จินหลง ศรีนครินทร์" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full min-h-[88vh] flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner$1, alt: "BYD DOLPHIN", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: isEn ? "Electric Hatchback · e-Platform 3.0 · 2026" : "Electric Hatchback · e-Platform 3.0 · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD DOLPHIN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: isEn ? "SURGE OF INNOVATION" : "SURGE OF INNOVATION" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-6 items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: isEn ? "Starting price" : "ราคาเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl sm:text-4xl font-bold text-gradient", children: formatBaht(model.priceFrom) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-border pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: isEn ? "Starting installment" : "ผ่อนเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                formatBaht(r.monthly),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: isEn ? "/month" : "/เดือน" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "inline-flex items-center gap-2 rounded-full gradient-accent px-7 py-3 text-sm font-semibold text-white glow", children: [
              isEn ? "Book a test drive" : "นัดทดลองขับ",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#installment", className: "inline-flex items-center gap-2 rounded-full glass border border-border/60 px-7 py-3 text-sm font-semibold backdrop-blur-sm", children: isEn ? "Calculate installment" : "คำนวณค่างวด" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: heroStats.map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass backdrop-blur-sm rounded-xl px-4 py-2 text-center border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-gradient", children: val })
        ] }, label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-y border-border bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Variants" : "Variants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Choose Your Trim" : "เลือกชุดรุ่นที่ใช่" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-10", children: TRIMS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setTrim(t.key),
          className: `rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${trim === t.key ? "gradient-accent text-white glow" : "glass border border-border hover:border-primary/40"}`,
          children: t.name
        },
        t.key
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl p-6 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold", children: currentTrim.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-black text-gradient mt-1", children: formatBaht(currentTrim.price) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3 text-sm font-semibold text-white self-start sm:self-auto", children: [
            isEn ? "Book a test drive" : "นัดทดลองขับ",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: [
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: "NEDC Range", val: `${currentTrim.range} km` },
          { label: "Max Power", val: currentTrim.power },
          { label: "Max Torque", val: currentTrim.torque },
          { label: "Battery", val: currentTrim.battery }
        ].map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/30 rounded-xl p-4 text-center border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold", children: val })
        ] }, label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/40 border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Design" : "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Choose the color that suits you" : "เลือกสีที่ใช่สำหรับคุณ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: isEn ? "* Quantum Black & Space Grey are available on the Extended Range only" : "* Quantum Black &amp; Space Grey มีเฉพาะรุ่น Extended เท่านั้น" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative w-full overflow-hidden rounded-2xl",
            style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" },
            children: COLORS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: c.img,
                alt: c.name,
                className: "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
                style: { opacity: activeColor === i ? 1 : 0 }
              },
              c.name
            ))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, className: "flex flex-col gap-3 min-w-[240px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-2", children: isEn ? "Exterior Colour" : "Exterior Colour" }),
          colors.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveColor(i),
              className: `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 text-left ${activeColor === i ? "border border-primary/60 bg-primary/8" : "glass border border-transparent hover:border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `h-9 w-9 rounded-full flex-shrink-0 transition-all ${activeColor === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`,
                    style: { background: c.hex, border: `2px solid ${c.border}` },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: c.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.note })
                ] })
              ]
            },
            c.name
          ))
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Gallery" : "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Distinctive in every detail" : "ตอบโจทย์โดดเด่นไม่เหมือนใคร" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mb-8", children: ["exterior", "interior"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setGalleryTab(tab),
            className: `rounded-full px-8 py-2.5 text-sm font-semibold capitalize transition-all ${galleryTab === tab ? "gradient-accent text-white glow" : "glass border border-border hover:border-primary/40"}`,
            children: tab === "exterior" ? isEn ? "Exterior" : "ภายนอก" : isEn ? "Interior" : "ภายใน"
          },
          tab
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden rounded-2xl bg-surface", style: { aspectRatio: "16/9" }, children: [
        galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.img,
            alt: item.label,
            className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            style: { opacity: activeGallery === i ? 1 : 0 }
          },
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 p-6",
            style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg", children: galleryItems[activeGallery].label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-1", children: galleryItems[activeGallery].desc })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3 mt-4", children: galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveGallery(i),
          className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === i ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`,
          style: { aspectRatio: "16/9" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "w-full h-full object-cover" })
        },
        i
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: imgBladeBattery,
          imgAlt: "BYD Blade Battery",
          reverse: false,
          title: isEn ? "BLADE BATTERY" : "BLADE BATTERY",
          subtitle: isEn ? "Safety Technology" : "Safety Technology",
          body: isEn ? "High-safety battery technology from BYD. World-class innovation for faster charging, longer range, and more confidence on every journey." : "เทคโนโลยีแบตเตอรี่ความปลอดภัยสูง สุดยอดนวัตกรรมแบตเตอรี่ระดับโลกจาก BYD ชาร์จไวไปได้ไกลกว่า ขับขี่ได้อย่างมั่นใจในทุกเส้นทาง"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: imgEPlatform,
          imgAlt: "e-Platform 3.0",
          reverse: true,
          title: isEn ? "e-PLATFORM 3.0" : "e-PLATFORM 3.0",
          subtitle: isEn ? "Next-Gen EV Architecture" : "Next-Gen EV Architecture",
          body: isEn ? "BYD's exclusive platform creates a balanced driving experience and takes performance to the next level with a permanent magnet synchronous motor for smooth, responsive acceleration." : "แพลตฟอร์มเอกสิทธิ์เฉพาะจาก BYD เพื่อความสมดุลที่ช่วยยกระดับการขับขี่ไปอีกขั้น ด้วยมอเตอร์แบบซิงโครนัสชนิดแม่เหล็กถาวรให้ความนุ่มนวลในการขับขี่ อัตราเร่งที่แรงดั่งใจ"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: imgV2L,
          imgAlt: "VtoL Vehicle to Load",
          reverse: false,
          title: isEn ? "VtoL (VEHICLE TO LOAD)" : "VtoL (VEHICLE TO LOAD)",
          subtitle: isEn ? "Smart Energy" : "Smart Energy",
          body: isEn ? "Make every trip more convenient with VtoL, which lets you power electrical devices directly from the car battery and match every lifestyle." : "รองรับทุกการเดินทางให้สะดวกสบายยิ่งขึ้น ด้วยระบบ VtoL การต่อไฟจากแบตเตอรี่รถยนต์กับเครื่องใช้ไฟฟ้า พร้อมรับทุกไลฟ์สไตล์"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Tech Spec" : "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Technical specifications" : "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Extended Range · Standard Range" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: isEn ? "Dimensions and weight" : "ขนาดและน้ำหนัก", icon: Ruler, rows: dimensionsRows, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: isEn ? "Drivetrain and performance" : "ระบบส่งกำลังและสมรรถนะ", icon: Gauge, rows: performanceRows, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: isEn ? "Energy" : "พลังงานใหม่", icon: Battery, rows: chargingRows, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: isEn ? "Exterior standard equipment" : "อุปกรณ์มาตรฐานภายนอก", icon: Sun, rows: exteriorRows, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: isEn ? "Interior standard equipment" : "อุปกรณ์มาตรฐานภายใน", icon: Sparkles, rows: interiorRows, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: isEn ? "Safety systems" : "ระบบความปลอดภัย", icon: ShieldCheck, rows: safetyRows, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable2, { title: isEn ? "Multimedia and convenience" : "ระบบมัลติมีเดียและความสะดวกสบาย", icon: CircuitBoard, rows: multimediaRows, isEn }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "BYD Dolphin installment plan" : "ตารางผ่อน BYD DOLPHIN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Estimate the payment that fits you instantly" : "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Book a BYD Dolphin test drive" : "นัดทดลองขับ BYD DOLPHIN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Free service, no charge. Our team is ready to support every step." : "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: isEn ? "Frequently asked questions about BYD Dolphin" : "คำถามที่พบบ่อยเกี่ยวกับ BYD DOLPHIN" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(vehicleSchema) } })
  ] });
}
function FeatureBlock({ img, imgAlt, title, subtitle, body, reverse }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: imgAlt, className: "w-full object-cover", style: { height: "clamp(260px, 40vw, 520px)" } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, className: "flex-1 flex items-center bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-12 lg:px-14 lg:py-16 max-w-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xs font-semibold uppercase tracking-widest mb-3", children: subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-black leading-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: body })
    ] }) })
  ] });
}
function SpecTable2({ title, icon: Icon, rows, isEn }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-border bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 w-1/2", children: isEn ? "Item" : "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Standard Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Extended Range" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CellD, { value: v, isEn }) }, idx))
      ] }, row.label)) })
    ] }) })
  ] });
}
function CellD({ value, isEn }) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-primary mx-auto", "aria-label": isEn ? "Available" : "มี" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4 text-muted-foreground mx-auto", "aria-label": isEn ? "Not available" : "ไม่มี" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value });
}
const SplitComponent = () => {
  const m = getModel(SLUG$3);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydDolphinBrochure, { model: m });
};
export {
  SplitComponent as component
};
