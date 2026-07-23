import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { g as SLUG$5, u as useI18n, P as PageShell, e as heroBanner } from "./router-yyZJRRTw.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, i as colorWhite$3 } from "./models-DmxA6HI8.mjs";
import { T as TestDriveForm } from "./TestDriveForm-BdpQnTkL.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-qEHCfW-0.mjs";
import { FAQ } from "./FAQ-lPAIqE_v.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, l as Play, R as Ruler, Z as Zap, G as Gauge, m as Weight, j as Battery, S as ShieldCheck, o as Sun, p as Sparkles, n as CircuitBoard, U as Users, a as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
const colorBlack = "/assets/seal-quantum-black-BK6raq7D.png";
const colorBlue = "/assets/seal-velocity-blue-BQiZBzM9.png";
const imgBladeBattery = "/assets/blade-battery-KXfMMaFT.jpeg";
const imgEPlatform = "/assets/e-platform3-DhiCHBbK.png";
const imgGlassRoof = "/assets/glassRoof-D7X5XKyJ.png";
const imgSilver = "/assets/silver-platform-DNFcExWR.png";
const extSurge = "/assets/surge-CDUOZ3_5.png";
const extCrystalLed = "/assets/crystalLed-CUrroqwa.png";
const extLedTail = "/assets/ledTailLight-B0W7QGR2.png";
const extWheels = "/assets/wheels-UKLmYxRN.png";
const intDesign = "/assets/dolphinDesign-B4NL0Rs4.png";
const intDriveMode = "/assets/driveMode-mXfVsX5v.png";
const intCharging = "/assets/wirelessCharging-DcGToVPR.png";
const TRIMS = [
  { key: "dynamic", name: "Dynamic RWD", price: 1325e3, accel: "7.5", range: "510", battery: "61.44 kWh", power: "150 kW", torque: "310 Nm", drive: "RWD" },
  { key: "premium", name: "Premium RWD", price: 1449e3, accel: "5.9", range: "650", battery: "82.56 kWh", power: "230 kW", torque: "360 Nm", drive: "RWD" },
  { key: "awd", name: "AWD Performance", price: 1599e3, accel: "3.8", range: "580", battery: "82.56 kWh", power: "390 kW", torque: "670 Nm", drive: "AWD" }
];
const COLORS = [
  { name: "Horizon White", hex: "#EDEEF0", border: "#d0d0d0", img: colorWhite$3, note: "Dynamic · Premium · AWD" },
  { name: "Quantum Black", hex: "#0E0F11", border: "#444", img: colorBlack, note: "Dynamic · Premium · AWD" },
  { name: "Velocity Blue", hex: "#1A4B8A", border: "#1A4B8A", img: colorBlue, note: "AWD Performance only" }
];
const COLORS_EN = COLORS;
const EXTERIOR_GALLERY = [
  { img: extSurge, label: "Fluid Surge Design", desc: "Dynamic sculpted body lines inspired by ocean waves" },
  { img: extCrystalLed, label: "Crystal LED Headlights", desc: "Signature crystal-inspired LED headlamp cluster" },
  { img: extLedTail, label: "LED Tail Lights", desc: "Sequential LED tail light with striking rear presence" },
  { img: extWheels, label: "Alloy Wheels", desc: '18" / 19" aerodynamic alloy wheels' }
];
const EXTERIOR_GALLERY_EN = EXTERIOR_GALLERY;
const INTERIOR_GALLERY = [
  { img: imgGlassRoof, label: "Silver-Plated Panoramic Roof", desc: "1.9 m² panoramic glass with silver-plated UV coating" },
  { img: intDesign, label: "Ocean Aesthetics Interior", desc: "Cockpit-inspired dashboard with premium materials" },
  { img: intDriveMode, label: "DiLink Intelligent System", desc: '15.6" rotating touchscreen with intelligent controls' },
  { img: intCharging, label: "Dual Wireless Charging", desc: "2 wireless charging pads for seamless connectivity" }
];
const INTERIOR_GALLERY_EN = INTERIOR_GALLERY;
const DIMENSIONS = [
  { label: "จำนวนที่นั่ง", values: ["5", "5", "5"] },
  { label: "ความยาว (มม.)", values: ["4,800", "4,800", "4,800"] },
  { label: "ความกว้าง (มม.)", values: ["1,875", "1,875", "1,875"] },
  { label: "ความสูง (มม.)", values: ["1,460", "1,460", "1,460"] },
  { label: "ระยะห่างล้อ หน้า / หลัง (มม.)", values: ["1,620 / 1,625", "1,620 / 1,625", "1,620 / 1,625"] },
  { label: "ระยะฐานล้อ (มม.)", values: ["2,920", "2,920", "2,920"] },
  { label: "รัศมีวงเลี้ยวแคบสุด (ม.)", values: ["5.7", "5.7", "5.7"] },
  { label: "ความสูงใต้ท้องรถ (มม.)", values: ["120", "120", "120"] },
  { label: "ความจุช่องเก็บสัมภาระด้านหน้า (ลิตร)", values: ["50", "50", "50"] },
  { label: "ความจุช่องเก็บสัมภาระด้านหลัง (ลิตร)", values: ["400", "400", "400"] },
  { label: "น้ำหนักรถเปล่า (กก.)", values: ["1,922", "2,055", "2,185"] },
  { label: "น้ำหนักรถรวมสูงสุด (กก.)", values: ["2,344", "2,501", "2,631"] }
];
const DIMENSIONS_EN = [
  { label: "Seating capacity", values: ["5", "5", "5"] },
  { label: "Length (mm)", values: ["4,800", "4,800", "4,800"] },
  { label: "Width (mm)", values: ["1,875", "1,875", "1,875"] },
  { label: "Height (mm)", values: ["1,460", "1,460", "1,460"] },
  { label: "Front / rear track (mm)", values: ["1,620 / 1,625", "1,620 / 1,625", "1,620 / 1,625"] },
  { label: "Wheelbase (mm)", values: ["2,920", "2,920", "2,920"] },
  { label: "Minimum turning radius (m)", values: ["5.7", "5.7", "5.7"] },
  { label: "Ground clearance (mm)", values: ["120", "120", "120"] },
  { label: "Front trunk capacity (L)", values: ["50", "50", "50"] },
  { label: "Rear trunk capacity (L)", values: ["400", "400", "400"] },
  { label: "Curb weight (kg)", values: ["1,922", "2,055", "2,185"] },
  { label: "Gross vehicle weight (kg)", values: ["2,344", "2,501", "2,631"] }
];
const DRIVETRAIN = [
  { label: "ระบบขับเคลื่อน", values: ["RWD: ขับเคลื่อนล้อหลัง", "RWD: ขับเคลื่อนล้อหลัง", "ขับเคลื่อน 4 ล้อ"] },
  { label: "ประเภทมอเตอร์ไฟฟ้าด้านหน้า", values: ["-", "-", "มอเตอร์อะซิงโครนัส"] },
  { label: "กำลังมอเตอร์ไฟฟ้าด้านหน้าสูงสุด (กิโลวัตต์)", values: ["-", "-", "160"] },
  { label: "แรงบิดมอเตอร์ไฟฟ้าด้านหน้าสูงสุด (นิวตันเมตร)", values: ["-", "-", "310"] },
  { label: "ประเภทมอเตอร์ไฟฟ้าด้านหลัง", values: ["มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร", "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร", "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร"] },
  { label: "กำลังมอเตอร์ไฟฟ้าด้านหลังสูงสุด (กิโลวัตต์)", values: ["150", "230", "230"] },
  { label: "แรงบิดมอเตอร์ไฟฟ้าด้านหลังสูงสุด (นิวตันเมตร)", values: ["310", "360", "360"] },
  { label: "กำลังรวมสูงสุด (กิโลวัตต์)", values: ["150", "230", "390"] },
  { label: "แรงบิดรวมสูงสุด (นิวตันเมตร)", values: ["310", "360", "670"] }
];
const DRIVETRAIN_EN = [
  { label: "Drive system", values: ["RWD: Rear-wheel drive", "RWD: Rear-wheel drive", "AWD: All-wheel drive"] },
  { label: "Front electric motor type", values: ["-", "-", "Asynchronous motor"] },
  { label: "Front motor max power (kW)", values: ["-", "-", "160"] },
  { label: "Front motor max torque (Nm)", values: ["-", "-", "310"] },
  { label: "Rear electric motor type", values: ["Permanent Magnet Synchronous Motor", "Permanent Magnet Synchronous Motor", "Permanent Magnet Synchronous Motor"] },
  { label: "Rear motor max power (kW)", values: ["150", "230", "230"] },
  { label: "Rear motor max torque (Nm)", values: ["310", "360", "360"] },
  { label: "Total max power (kW)", values: ["150", "230", "390"] },
  { label: "Total max torque (Nm)", values: ["310", "360", "670"] }
];
const PERFORMANCE = [
  { label: "อัตราเร่ง 0-100 กม./ชม. (วินาที)", values: ["7.5", "5.9", "3.8"] },
  { label: "ระยะทางวิ่ง NEDC (กม.)", values: ["510", "650", "580"] },
  { label: "ประเภทแบตเตอรี่", values: ["BYD Blade Battery (LFP)", "BYD Blade Battery (LFP)", "BYD Blade Battery (LFP)"] },
  { label: "ความจุแบตเตอรี่ (กิโลวัตต์ชั่วโมง)", values: ["61.44", "82.56", "82.56"] }
];
const PERFORMANCE_EN = [
  { label: "0-100 km/h (seconds)", values: ["7.5", "5.9", "3.8"] },
  { label: "NEDC range (km)", values: ["510", "650", "580"] },
  { label: "Battery type", values: ["BYD Blade Battery (LFP)", "BYD Blade Battery (LFP)", "BYD Blade Battery (LFP)"] },
  { label: "Battery capacity (kWh)", values: ["61.44", "82.56", "82.56"] }
];
const CHASSIS = [
  { label: "ระบบกันสะเทือนด้านหน้า", values: ["ดับเบิลวิชโบน", "ดับเบิลวิชโบน", "ดับเบิลวิชโบน"] },
  { label: "ระบบกันสะเทือนด้านหลัง", values: ["มัลติลิงก์", "มัลติลิงก์", "มัลติลิงก์"] },
  { label: "ระบบหน่วงแบบปรับอัตโนมัติ FSD", values: [false, false, "หน้าและหลัง"] },
  { label: "ระบบเบรกด้านหน้า", values: ["ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ+เจาะรู", "ดิสก์เบรกแบบระบายอากาศ+เจาะรู"] },
  { label: "ระบบเบรกด้านหลัง", values: ["ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ"] },
  { label: "คาลิเปอร์เบรกหน้า", values: ["Floating", "Fixed", "Fixed"] },
  { label: "ประเภทล้อ", values: ["อัลลอย", "อัลลอย", "อัลลอย"] },
  { label: "ขนาดยาง", values: ["225/50 R18", "235/45 R19", "235/45 R19"] }
];
const CHASSIS_EN = [
  { label: "Front suspension", values: ["Double wishbone", "Double wishbone", "Double wishbone"] },
  { label: "Rear suspension", values: ["Multi-link", "Multi-link", "Multi-link"] },
  { label: "FSD adaptive damping", values: [false, false, "Front and rear"] },
  { label: "Front brakes", values: ["Ventilated disc brakes", "Ventilated drilled disc brakes", "Ventilated drilled disc brakes"] },
  { label: "Rear brakes", values: ["Ventilated disc brakes", "Ventilated disc brakes", "Ventilated disc brakes"] },
  { label: "Front brake calipers", values: ["Floating", "Fixed", "Fixed"] },
  { label: "Wheel type", values: ["Alloy", "Alloy", "Alloy"] },
  { label: "Tyre size", values: ["225/50 R18", "235/45 R19", "235/45 R19"] }
];
const CHARGING = [
  { label: "รองรับ AC Type 2 (7 kW)", values: [true, true, true] },
  { label: "สายชาร์จพกพา (Mode 2)", values: [true, true, true] },
  { label: "รองรับ DC CCS2 (110 kW)", values: [true, false, false] },
  { label: "รองรับ DC CCS2 (150 kW)", values: [false, true, true] },
  { label: "ระบบจ่ายไฟภายนอก V2L", values: [true, true, true] },
  { label: "อุปกรณ์ V2L Adapter", values: [true, true, true] },
  { label: "ระบบหน่วงพลังงานขณะเบรก", values: [true, true, true] }
];
const CHARGING_EN = [
  { label: "AC Type 2 (7 kW) support", values: [true, true, true] },
  { label: "Portable charging cable (Mode 2)", values: [true, true, true] },
  { label: "DC CCS2 (110 kW) support", values: [true, false, false] },
  { label: "DC CCS2 (150 kW) support", values: [false, true, true] },
  { label: "V2L external power supply", values: [true, true, true] },
  { label: "V2L adapter", values: [true, true, true] },
  { label: "Regenerative braking", values: [true, true, true] }
];
const SAFETY = [
  { label: "ถุงลมนิรภัยคู่หน้า", values: [true, true, true] },
  { label: "ถุงลมนิรภัยด้านข้างคู่หน้า", values: [true, true, true] },
  { label: "ถุงลมนิรภัยม่านหน้าและหลัง", values: [true, true, true] },
  { label: "ถุงลมนิรภัยกลางระหว่างผู้ขับและผู้โดยสาร", values: [true, true, true] },
  { label: "ถุงลมนิรภัยด้านข้างแถวหลัง", values: [true, true, true] },
  { label: "กล้องมองภาพรอบคัน 360 องศา", values: [true, true, true] },
  { label: "เซ็นเซอร์ช่วยจอด หน้า 2 / หลัง 4 จุด", values: [true, true, true] },
  { label: "จุดยึดเบาะนั่งเด็ก ISOFIX", values: [true, true, true] },
  { label: "ระบบล็อกนิรภัยเด็กไฟฟ้า", values: [true, true, true] },
  { label: "ACC ระบบควบคุมความเร็วอัตโนมัติแบบแปรผัน", values: [true, true, true] },
  { label: "AEB ระบบเบรกฉุกเฉินอัตโนมัติ", values: [true, true, true] },
  { label: "LDW / LDP / ELKA", values: [true, true, true] },
  { label: "ICC ระบบควบคุมความเร็วอัจฉริยะ", values: [true, true, true] },
  { label: "RCW ระบบเตือนการชนด้านหลัง", values: [true, true, true] },
  { label: "TSR / ISLI / ISLC", values: [true, true, true] },
  { label: "FCTA / FCTB", values: [true, true, true] },
  { label: "RCTA / RCTB", values: [true, true, true] },
  { label: "BSD ระบบเตือนจุดอับสายตา", values: [true, true, true] },
  { label: "DOW ระบบเตือนก่อนเปิดประตู", values: [true, true, true] },
  { label: "HMA ระบบไฟสูงอัตโนมัติ", values: [true, true, true] },
  { label: "DAW ระบบเตือนอาการเหนื่อยล้าผู้ขับ", values: [true, true, true] },
  { label: "W-HUD จอแสดงผลบนกระจกหน้า", values: [false, true, true] },
  { label: "iTAC ระบบควบคุมแรงบิดอัจฉริยะ", values: [false, false, true] }
];
const SAFETY_EN = [
  { label: "Front airbags", values: [true, true, true] },
  { label: "Front side airbags", values: [true, true, true] },
  { label: "Front and rear curtain airbags", values: [true, true, true] },
  { label: "Center airbag between driver and passenger", values: [true, true, true] },
  { label: "Rear side airbags", values: [true, true, true] },
  { label: "360-degree surround camera", values: [true, true, true] },
  { label: "Parking sensors, front 2 / rear 4 points", values: [true, true, true] },
  { label: "ISOFIX child seat anchors", values: [true, true, true] },
  { label: "Electric child safety lock", values: [true, true, true] },
  { label: "ACC adaptive cruise control", values: [true, true, true] },
  { label: "AEB autonomous emergency braking", values: [true, true, true] },
  { label: "LDW / LDP / ELKA", values: [true, true, true] },
  { label: "ICC intelligent cruise control", values: [true, true, true] },
  { label: "RCW rear collision warning", values: [true, true, true] },
  { label: "TSR / ISLI / ISLC", values: [true, true, true] },
  { label: "FCTA / FCTB", values: [true, true, true] },
  { label: "RCTA / RCTB", values: [true, true, true] },
  { label: "BSD blind spot detection", values: [true, true, true] },
  { label: "DOW door open warning", values: [true, true, true] },
  { label: "HMA automatic high beam", values: [true, true, true] },
  { label: "DAW driver fatigue warning", values: [true, true, true] },
  { label: "W-HUD windshield head-up display", values: [false, true, true] },
  { label: "iTAC intelligent torque control", values: [false, false, true] }
];
const EXTERIOR = [
  { label: "หลังคากระจกพาโนรามาเคลือบซิลเวอร์", values: [true, true, true] },
  { label: "มือจับประตูแบบซ่อนเปิด-ปิดไฟฟ้า", values: [true, true, true] },
  { label: "ประตูท้ายไฟฟ้า", values: [true, true, true] },
  { label: "กระจกมองข้างไฟฟ้าพร้อมระบบไล่ฝ้า", values: [true, true, true] },
  { label: "กระจกมองข้างพับไฟฟ้า", values: [true, true, true] },
  { label: "กระจกมองข้างปรับเอียงอัตโนมัติเมื่อถอยหลัง", values: [false, true, true] },
  { label: "ระบบบันทึกตำแหน่งกระจกมองข้าง", values: [false, true, true] },
  { label: "กระจกไฟฟ้า One-Touch พร้อมระบบกันหนีบ", values: [true, true, true] },
  { label: "กระจกหน้าอะคูสติกแบบลามิเนต", values: [true, true, true] },
  { label: "กระจกบานหลังพร้อมไล่ฝ้า", values: [true, true, true] }
];
const EXTERIOR_EN = [
  { label: "Silver-coated panoramic glass roof", values: [true, true, true] },
  { label: "Hidden electric door handles", values: [true, true, true] },
  { label: "Electric tailgate", values: [true, true, true] },
  { label: "Power-adjustable side mirrors with defogger", values: [true, true, true] },
  { label: "Power-folding side mirrors", values: [true, true, true] },
  { label: "Auto tilt side mirrors when reversing", values: [false, true, true] },
  { label: "Side mirror memory", values: [false, true, true] },
  { label: "One-touch power windows with anti-pinch", values: [true, true, true] },
  { label: "Laminated acoustic front glass", values: [true, true, true] },
  { label: "Rear window defogger", values: [true, true, true] }
];
const INTERIOR = [
  { label: "พวงมาลัยมัลติฟังก์ชัน", values: [true, true, true] },
  { label: "พวงมาลัยหุ้มหนังสังเคราะห์", values: [true, false, false] },
  { label: "พวงมาลัยหุ้มหนังแท้", values: [false, true, true] },
  { label: "หน้าจอผู้ขับขี่ LCD 10.25 นิ้ว", values: [true, true, true] },
  { label: "วัสดุหุ้มเบาะ", values: ["หนังสังเคราะห์", "หนังแท้", "หนังแท้"] },
  { label: "เบาะคนขับปรับไฟฟ้า 8 ทิศทาง", values: [true, true, true] },
  { label: "ดันหลังไฟฟ้าฝั่งคนขับ 4 ทิศทาง", values: [true, true, true] },
  { label: "เบาะผู้โดยสารหน้าปรับไฟฟ้า 6 ทิศทาง", values: [true, true, true] },
  { label: "เบาะคู่หน้าระบายอากาศและอุ่นเบาะ", values: [true, true, true] },
  { label: "ระบบบันทึกตำแหน่งเบาะคนขับ", values: [false, true, true] },
  { label: "เบาะเลื่อนอัตโนมัติเมื่อสตาร์ท/ดับรถ", values: [false, true, true] },
  { label: "กระจกมองหลังตัดแสงอัตโนมัติ", values: [true, true, true] },
  { label: "ที่ปัดน้ำฝนอัตโนมัติแบบไร้กรอบ", values: [true, true, true] },
  { label: "สคัฟเพลทเรืองแสง", values: [true, true, true] }
];
const INTERIOR_EN = [
  { label: "Multi-function steering wheel", values: [true, true, true] },
  { label: "Synthetic leather steering wheel", values: [true, false, false] },
  { label: "Leather steering wheel", values: [false, true, true] },
  { label: "10.25-inch LCD driver display", values: [true, true, true] },
  { label: "Seat upholstery", values: ["Synthetic leather", "Leather", "Leather"] },
  { label: "8-way power driver seat", values: [true, true, true] },
  { label: "4-way power driver lumbar support", values: [true, true, true] },
  { label: "6-way power front passenger seat", values: [true, true, true] },
  { label: "Ventilated and heated front seats", values: [true, true, true] },
  { label: "Driver seat memory", values: [false, true, true] },
  { label: "Automatic slide when starting/stopping", values: [false, true, true] },
  { label: "Auto-dimming rearview mirror", values: [true, true, true] },
  { label: "Frameless automatic wipers", values: [true, true, true] },
  { label: "Illuminated scuff plate", values: [true, true, true] }
];
const MULTIMEDIA = [
  { label: "หน้าจอสัมผัสหมุนไฟฟ้า 15.6 นิ้ว", values: [true, true, true] },
  { label: "ระบบเสียง DYNAUDIO (12 ลำโพง)", values: [true, true, true] },
  { label: "Apple CarPlay (ผ่าน USB)", values: [true, true, true] },
  { label: "Android Auto (ไร้สาย)", values: [true, true, true] },
  { label: "การเชื่อมต่อโทรศัพท์ผ่าน Bluetooth", values: [true, true, true] },
  { label: "สั่งงานด้วยเสียงภาษาไทย", values: [true, true, true] },
  { label: "สตรีมมิงเพลง", values: [true, true, true] },
  { label: "พอร์ต USB ด้านหน้า 2 ช่อง (Type-A และ Type-C)", values: [true, true, true] },
  { label: "พอร์ต USB ด้านหลัง 2 ช่อง (Type-A และ Type-C)", values: [true, true, true] },
  { label: "อัปเดตซอฟต์แวร์ OTA", values: [true, true, true] }
];
const MULTIMEDIA_EN = [
  { label: "15.6-inch power-rotating touchscreen", values: [true, true, true] },
  { label: "DYNAUDIO audio (12 speakers)", values: [true, true, true] },
  { label: "Apple CarPlay (USB)", values: [true, true, true] },
  { label: "Android Auto (wireless)", values: [true, true, true] },
  { label: "Bluetooth phone connectivity", values: [true, true, true] },
  { label: "Thai voice control", values: [true, true, true] },
  { label: "Music streaming", values: [true, true, true] },
  { label: "Front USB ports (2 ports: Type-A and Type-C)", values: [true, true, true] },
  { label: "Rear USB ports (2 ports: Type-A and Type-C)", values: [true, true, true] },
  { label: "OTA software updates", values: [true, true, true] }
];
const COMFORT = [
  { label: "ระบบกุญแจอัจฉริยะและปุ่มสตาร์ท", values: [true, true, true] },
  { label: "NFC Card Key", values: [true, true, true] },
  { label: "แท่นชาร์จไร้สายคู่", values: [true, true, true] },
  { label: "ช่องจ่ายไฟ 12V", values: [true, true, true] },
  { label: "ระบบกรองอากาศ PM2.5", values: [true, true, true] },
  { label: "ไส้กรองอากาศประสิทธิภาพสูง CN95", values: [true, true, true] },
  { label: "ระบบฟอกอากาศไอออนลบ", values: [true, true, true] },
  { label: "ระบบปรับอากาศแยกอุณหภูมิ 2 ฝั่งพร้อมฮีตเตอร์", values: [true, true, true] },
  { label: "ช่องแอร์กลางแถวหลัง", values: [true, true, true] },
  { label: "ชุดซ่อมยางฉุกเฉิน", values: [true, true, true] }
];
const COMFORT_EN = [
  { label: "Smart key system and start button", values: [true, true, true] },
  { label: "NFC Card Key", values: [true, true, true] },
  { label: "Dual wireless charging pads", values: [true, true, true] },
  { label: "12V power outlet", values: [true, true, true] },
  { label: "PM2.5 air filtration", values: [true, true, true] },
  { label: "CN95 high-efficiency cabin filter", values: [true, true, true] },
  { label: "Negative ion air purification", values: [true, true, true] },
  { label: "Dual-zone automatic climate control with heater", values: [true, true, true] },
  { label: "Rear center air vent", values: [true, true, true] },
  { label: "Emergency tyre repair kit", values: [true, true, true] }
];
const LIGHTING = [
  { label: "ไฟหน้า LED", values: [true, true, true] },
  { label: "ไฟส่องสว่างเวลากลางวัน LED (DRL)", values: [true, true, true] },
  { label: "ระบบไฟหน้า Follow Me Home", values: [true, true, true] },
  { label: "ไฟท้าย LED", values: [true, true, true] },
  { label: "ไฟเลี้ยวหลังแบบไล่ระดับ LED", values: [true, true, true] },
  { label: "ไฟตัดหมอกหลัง", values: [true, true, true] },
  { label: "ไฟเบรกดวงที่ 3 แบบ LED", values: [true, true, true] },
  { label: "ไฟสร้างบรรยากาศภายในแบบ RGB", values: [true, true, true] },
  { label: "ไฟอ่านแผนที่ด้านหน้า (LED)", values: [true, true, true] },
  { label: "ไฟอ่านแผนที่ด้านหลัง (LED)", values: [true, true, true] },
  { label: "ไฟส่องสว่างห้องเก็บสัมภาระท้าย", values: [true, true, true] }
];
const LIGHTING_EN = [
  { label: "LED headlights", values: [true, true, true] },
  { label: "LED daytime running lights (DRL)", values: [true, true, true] },
  { label: "Follow Me Home headlights", values: [true, true, true] },
  { label: "LED tail lights", values: [true, true, true] },
  { label: "Sequential LED rear turn signals", values: [true, true, true] },
  { label: "Rear fog lights", values: [true, true, true] },
  { label: "Third brake light (LED)", values: [true, true, true] },
  { label: "RGB ambient lighting", values: [true, true, true] },
  { label: "Front map lights (LED)", values: [true, true, true] },
  { label: "Rear map lights (LED)", values: [true, true, true] },
  { label: "Cargo area light", values: [true, true, true] }
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
function BydSealBrochure({ model }) {
  const { locale } = useI18n();
  const isEn = locale === "en";
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const r = calcInstallment(model.priceFrom, 20, 5, 2.49);
  const currentTrim = TRIMS.find((t) => t.key === trim);
  const colors = isEn ? COLORS_EN : COLORS;
  const galleryItems = galleryTab === "exterior" ? EXTERIOR_GALLERY_EN : INTERIOR_GALLERY_EN;
  const handlePlayVideo = reactExports.useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  }, []);
  reactExports.useEffect(() => {
    setActiveGallery(0);
  }, [galleryTab]);
  const faqs = [
    {
      q: isEn ? "How much is the BYD SEAL?" : "BYD SEAL ราคาเท่าไร?",
      a: isEn ? "Dynamic RWD starts at ฿1,325,000 · Premium RWD at ฿1,449,000 · AWD Performance at ฿1,599,000. Ask our team for the latest offers on every trim." : "Dynamic RWD ฿1,325,000 · Premium RWD ฿1,449,000 · AWD Performance ฿1,599,000 ทีมงานพร้อมแจ้งโปรโมชั่นล่าสุดทุกรุ่น"
    },
    {
      q: isEn ? "How far can the BYD SEAL drive?" : "BYD SEAL วิ่งได้ไกลกี่กิโลเมตร?",
      a: isEn ? "Dynamic RWD 510 km · Premium RWD 650 km · AWD Performance 580 km (NEDC Combined Cycle)" : "Dynamic RWD 510 กม. · Premium RWD 650 กม. · AWD Performance 580 กม. (NEDC Combined Cycle)"
    },
    {
      q: isEn ? "How fast is 0-100 km/h?" : "BYD SEAL เร่ง 0-100 ได้กี่วินาที?",
      a: isEn ? "Dynamic 7.5 sec · Premium 5.9 sec · AWD Performance 3.8 sec with up to 670 Nm of torque" : "Dynamic 7.5 วิ · Premium 5.9 วิ · AWD Performance 3.8 วิ พร้อมแรงบิดสูงสุด 670 Nm"
    },
    {
      q: isEn ? "How does charging work?" : "ระบบชาร์จเป็นอย่างไร?",
      a: isEn ? "Supports AC Type 2 (7 kW) and DC CCS2 up to 150 kW (Premium/AWD) with V2L." : "รองรับ AC Type 2 (7 kW) และ DC CCS2 สูงสุด 150 kW (รุ่น Premium/AWD) พร้อม V2L"
    },
    {
      q: isEn ? "What is the monthly payment?" : `ผ่อน BYD SEAL เดือนละเท่าไร?`,
      a: isEn ? `Monthly payments start from ${formatBaht(r.monthly)}/month (20% down, 60 installments, 2.49% interest)` : `ค่างวดเริ่มต้น ${formatBaht(r.monthly)}/เดือน (ดาวน์ 20% ผ่อน 60 งวด ดอกเบี้ย 2.49%)`
    }
  ];
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: model.name,
    description: model.description,
    vehicleModelDate: "2026",
    bodyType: "Sedan",
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner, alt: "BYD SEAL", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: "Electric Sedan · e-Platform 3.0 · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD SEAL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: "DRIVE INTO THE FUTURE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-6 items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: isEn ? "Starting price" : "ราคาเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl sm:text-4xl font-bold text-gradient", children: formatBaht(model.priceFrom) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-border pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: isEn ? "Starting monthly payment" : "ผ่อนเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                formatBaht(r.monthly),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/เดือน" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "inline-flex items-center gap-2 rounded-full gradient-accent px-7 py-3 text-sm font-semibold text-white glow", children: [
              isEn ? "Book a test drive" : "นัดทดลองขับ",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#installment", className: "inline-flex items-center gap-2 rounded-full glass border border-border/60 px-7 py-3 text-sm font-semibold backdrop-blur-sm", children: isEn ? "Calculate payment" : "คำนวณค่างวด" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          { label: isEn ? "Max Range" : "Max Range", val: "650 km" },
          { label: isEn ? "0-100 km/h" : "0-100 km/h", val: "3.8 sec" },
          { label: isEn ? "Max Power" : "Max Power", val: "390 kW" },
          { label: isEn ? "Max Torque" : "Max Torque", val: "670 Nm" },
          { label: isEn ? "Battery" : "Battery", val: "82.56 kWh" }
        ].map(({ label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass backdrop-blur-sm rounded-xl px-4 py-2 text-center border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-gradient", children: val })
        ] }, label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-y border-border bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Variants" : "Variants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Choose Your Trim" : "เลือกรุ่นที่ใช่" })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: [
          { label: "Drive System", val: currentTrim.drive },
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative w-full bg-black overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full", style: { maxHeight: "80vh", aspectRatio: "16/9" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "video",
        {
          ref: videoRef,
          src: "https://www.reverautomotive.com/videos/model/seal/seal-video.mp4",
          poster: heroBanner,
          controls: videoPlaying,
          playsInline: true,
          className: "w-full h-full object-cover",
          onPlay: () => setVideoPlaying(true),
          style: { display: "block" }
        }
      ),
      !videoPlaying && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute inset-0 flex flex-col items-center justify-center cursor-pointer",
          style: { background: "rgba(0,0,0,0.38)" },
          onClick: handlePlayVideo,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-20 w-20 rounded-full flex items-center justify-center transition-all hover:scale-105",
                style: { background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", backdropFilter: "blur(6px)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-8 w-8 text-white fill-white ml-1" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white text-lg font-semibold tracking-widest uppercase", children: isEn ? "BYD SEAL - Official Film" : "BYD SEAL — Official Film" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/40 border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Design" : "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Choose the color that suits you" : "เลือกสีที่ใช่สำหรับคุณ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: isEn ? "* Dynamic: Horizon White & Quantum Black only · Premium adds Space Gray · AWD includes every color, including Velocity Blue" : "* Dynamic: Horizon White & Quantum Black only · Premium: เพิ่ม Space Gray · AWD: ครบทุกสี รวม Velocity Blue" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden rounded-2xl", style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" }, children: colors.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: c.img,
            alt: c.name,
            className: "absolute inset-0 w-full h-full object-contain transition-opacity duration-500",
            style: { opacity: activeColor === i ? 1 : 0 }
          },
          c.name
        )) }) }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-1", children: galleryItems[activeGallery].desc })
        ] })
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
          body: isEn ? "High-safety battery technology from BYD. World-class innovation that charges fast, goes farther, and drives with confidence." : "เทคโนโลยีแบตเตอรี่ความปลอดภัยสูง สุดยอดนวัตกรรมแบตเตอรี่ระดับโลกจาก BYD ชาร์จไวไปได้ไกลกว่า ขับขี่ได้อย่างมั่นใจในทุกเส้นทาง"
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
          body: isEn ? "A future-focused platform built specifically for electric vehicles, with CTB (Cell-to-Body) engineering for strength and safety." : "ยกระดับการขับขี่สู่อนาคตด้วยนวัตกรรมแพลตฟอร์มที่พัฒนาขึ้นเพื่อรถยนต์พลังงานไฟฟ้าโดยเฉพาะ ด้วยเทคโนโลยี CTB (Cell-to-Body) ที่จัดวางแบตเตอรี่และอุปกรณ์โดยคำนึงถึงความแข็งแรงและปลอดภัย"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: imgGlassRoof,
          imgAlt: "Silver-Plated Panoramic Glass Roof",
          reverse: false,
          title: isEn ? "Silver-Plated Panoramic Glass Roof" : "Silver-Plated Panoramic Glass Roof",
          subtitle: isEn ? "Premium Experience" : "Premium Experience",
          body: isEn ? "A 1.9 square-meter panoramic glass roof with silver-plated coating that reduces glare and helps block UV rays." : "หลังคากระจกพาโนรามิก 2 ชั้น ขนาดใหญ่ถึง 1.9 ตารางเมตร ให้มุมมองที่กว้างกว่า พร้อมการเคลือบด้วย Silver-plated ที่ช่วยลดปริมาณแสงที่ผ่านเข้ามาในห้องโดยสาร พร้อมป้องกัน UV"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeatureBlock,
        {
          img: imgSilver,
          imgAlt: "Chassis Platform",
          reverse: true,
          title: isEn ? "Precision Chassis" : "Precision Chassis",
          subtitle: isEn ? "Handling & Dynamics" : "Handling & Dynamics",
          body: isEn ? "Double Wishbone front suspension and Multi-Link rear suspension deliver exceptional ride comfort and dynamic handling. AWD Performance adds FSD adaptive damping for the ultimate driving balance." : "Double Wishbone front suspension and Multi-Link rear suspension deliver exceptional ride comfort and dynamic handling. AWD Performance adds FSD adaptive damping for the ultimate driving balance."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Tech Spec" : "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Technical specifications" : "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Dynamic RWD · Premium RWD · AWD Performance" : "Dynamic RWD · Premium RWD · AWD Performance" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Dimensions" : "ขนาดและมิติ", icon: Ruler, rows: isEn ? DIMENSIONS_EN : DIMENSIONS, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Powertrain" : "ระบบส่งกำลัง", icon: Zap, rows: isEn ? DRIVETRAIN_EN : DRIVETRAIN, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Performance" : "สมรรถนะ", icon: Gauge, rows: isEn ? PERFORMANCE_EN : PERFORMANCE, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Suspension and brakes" : "ช่วงล่างและเบรก", icon: Weight, rows: isEn ? CHASSIS_EN : CHASSIS, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Charging" : "ระบบการชาร์จ", icon: Battery, rows: isEn ? CHARGING_EN : CHARGING, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Safety" : "ระบบความปลอดภัย", icon: ShieldCheck, rows: isEn ? SAFETY_EN : SAFETY, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Exterior equipment" : "อุปกรณ์ภายนอก", icon: Sun, rows: isEn ? EXTERIOR_EN : EXTERIOR, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Interior equipment" : "อุปกรณ์ภายใน", icon: Sparkles, rows: isEn ? INTERIOR_EN : INTERIOR, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Multimedia and infotainment" : "มัลติมีเดียและอินโฟเทนเมนต์", icon: CircuitBoard, rows: isEn ? MULTIMEDIA_EN : MULTIMEDIA, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Lighting" : "ระบบไฟส่องสว่าง", icon: Zap, rows: isEn ? LIGHTING_EN : LIGHTING, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Convenience" : "ความสะดวกสบาย", icon: Users, rows: isEn ? COMFORT_EN : COMFORT, isEn }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "BYD SEAL installment plan" : "ตารางผ่อน BYD SEAL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Calculate the payment that suits you instantly" : "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Book a BYD SEAL test drive" : "นัดทดลองขับ BYD SEAL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Free service, no charge. Our team is ready to support every step." : "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: isEn ? "Frequently asked questions about BYD SEAL" : "คำถามที่พบบ่อยเกี่ยวกับ BYD SEAL" }),
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
function SpecTable({ title, icon: Icon, rows, isEn }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-border bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 w-1/2 normal-case", children: isEn ? "Item" : "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Dynamic RWD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Premium RWD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "AWD Performance" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: v, isEn }) }, idx))
      ] }, row.label)) })
    ] }) })
  ] });
}
function Cell({ value, isEn }) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-primary mx-auto", "aria-label": isEn ? "Available" : "มี" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4 text-muted-foreground mx-auto", "aria-label": isEn ? "Not available" : "ไม่มี" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value });
}
const SplitComponent = () => {
  const m = getModel(SLUG$5);
  if (!m) throw notFound();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydSealBrochure, { model: m });
};
export {
  SplitComponent as component
};
