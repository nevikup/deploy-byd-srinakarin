import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SLUG$9, u as useI18n, P as PageShell } from "./router-DVarRGlv.mjs";
import { T as notFound } from "../_libs/tanstack__router-core.mjs";
import { a as getModel, c as calcInstallment, f as formatBaht, b as colorWhite$2 } from "./models-hBzcyjxT.mjs";
import { T as TestDriveForm } from "./TestDriveForm-BQ8EgB0n.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-DeB8-u_V.mjs";
import { FAQ } from "./FAQ-D8zSYxMA.mjs";
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
import "./server-D-pGDZu0.mjs";
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
import "./dialog-o9Z39VlU.mjs";
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
const awdUltimateInterior1 = "/assets/awd-ultimate-interior-01-DPMYAS_d.jpg";
const awdUltimateInterior2 = "/assets/awd-ultimate-interior-02-CMTmAjXd.jpg";
const awdUltimateInterior3 = "/assets/awd-ultimate-interior-03-DNdF1VSz.jpg";
const awdUltimateInterior4 = "/assets/awd-ultimate-interior-04-D2A9heHw.jpg";
const awdUltimateInterior5 = "/assets/awd-ultimate-interior-05-xmdZB-XL.jpg";
const awdUltimateInterior6 = "/assets/awd-ultimate-interior-06-nz02e0vy.jpg";
const awdUltimateInterior7 = "/assets/awd-ultimate-interior-07-C2E8w2gz.jpg";
const awdUltimateInterior8 = "/assets/awd-ultimate-interior-08-TaOgbSt_.jpg";
const colorSharkGrey = "/assets/sealion7-shark-grey-BuxMDNiJ.png";
const colorSpaceGrey = "/assets/sealion7-space-grey-CTKY6lQA.png";
const colorBlack = "/assets/sealion7-black-DIKjA0Lf.webp";
const colorSolarRed = "/assets/solar-red-D1qBAlsf.png";
const colorPulsePurple = "/assets/pulse-purple-CCiPrs1-.png";
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
    hex: "#4a6b8a",
    border: "#4a6b8a",
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
    name: "Quantum Black",
    hex: "#1a1a1a",
    border: "#1a1a1a",
    img: colorBlack,
    note: "Premium and AWD Performance"
  },
  {
    name: "Shark Grey",
    hex: "#696e75",
    border: "#696e75",
    img: colorSharkGrey,
    note: "AWD Performance only"
  },
  {
    name: "Solar Red",
    hex: "#a3272a",
    border: "#a3272a",
    img: colorSolarRed,
    note: "AWD Ultimate only"
  },
  {
    name: "Pulse Purple",
    hex: "#5b3a72",
    border: "#5b3a72",
    img: colorPulsePurple,
    note: "AWD Ultimate only"
  }
];
const EXTERIOR_GALLERY = [
  {
    img: exterior1,
    label: "Ocean-X Face",
    desc: "ด้านหน้าออกแบบด้วยแนวคิด Ocean-X Face เพื่อเสริมความสปอร์ตให้ตัวรถ"
  },
  {
    img: exterior2,
    label: "ทรงตัวถังด้านข้างแบบแอโรไดนามิก",
    desc: "เส้นสายตัวถังช่วยจัดการการไหลของอากาศและลดแรงต้าน ด้วยค่าสัมประสิทธิ์แรงต้านอากาศเพียง 0.28 Cd"
  },
  {
    img: exterior3,
    label: "ไฟหน้าทรง Double-U ลอยตัว",
    desc: "ไฟหน้าทรง Double-U กลมกลืนไปกับดีไซน์ตัวรถอย่างลงตัว"
  },
  {
    img: exterior4,
    label: "ช่องชาร์จ Boost Charging",
    desc: "ช่องชาร์จพร้อมไฟแสดงสถานะ ทำให้การชาร์จง่ายในทุกสถานการณ์"
  },
  {
    img: exterior5,
    label: "ล้ออัลลอยขนาด 20 นิ้ว",
    desc: "ล้ออัลลอยขนาดใหญ่พร้อมคาลิปเปอร์เบรกสีแดงในรุ่น AWD Performance"
  }
];
const EXTERIOR_GALLERY_EN = [
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
    img: awdUltimateInterior1,
    label: "จอแสดงผล Head-Up Display",
    desc: "แสดงความเร็วและข้อมูลการขับขี่สำคัญบนกระจกหน้า ไม่ต้องละสายตาจากถนน (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior2,
    label: "เบาะหนังพร้อมระบบปรับไฟฟ้า",
    desc: "เบาะหนังคุณภาพสูงพร้อมระบบปรับไฟฟ้าและจดจำตำแหน่ง เพิ่มความสะดวกสบายทุกการเดินทาง (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior3,
    label: "เบาะแถวหลังใต้หลังคากระจกพาโนรามา",
    desc: "พื้นที่นั่งด้านหลังกว้างขวาง รับแสงธรรมชาติผ่านหลังคากระจกพาโนรามาพร้อมไฟแอมเบียนต์ (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior4,
    label: "เบาะหลังหนัง Diamond Stitch",
    desc: "ลวดลายเดินตะเข็บ Diamond Stitch พร้อมไฟแอมเบียนต์ที่แผงประตู เพิ่มความหรูหราให้ห้องโดยสาร (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior5,
    label: "คอนโซลกลางและหน้าจอมัลติมีเดีย",
    desc: "คอนโซลกลางดีไซน์หรูหรา พร้อมคันเกียร์ Crystal Shifter และแท่นชาร์จไร้สาย (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior6,
    label: "ระบบเสียง Dynaudio",
    desc: "ลำโพงคุณภาพสูงมอบประสบการณ์เสียงระดับพรีเมียมภายในห้องโดยสาร (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior7,
    label: "พวงมาลัยหุ้มหนังพร้อมปุ่มควบคุมมัลติฟังก์ชัน",
    desc: "พวงมาลัยออกแบบสปอร์ตพร้อมปุ่มควบคุมฟังก์ชันต่าง ๆ ได้อย่างสะดวก (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior8,
    label: "พื้นที่เก็บสัมภาระด้านหลัง",
    desc: "ห้องเก็บสัมภาระด้านหลังกว้างขวาง รองรับการใช้งานได้อย่างเต็มประสิทธิภาพ (AWD Ultimate)"
  },
  {
    img: interior1,
    label: "หลังคากระจกพาโนรามา",
    desc: "หลังคากระจกพาโนรามาขนาด 2.1 ตร.ม. ช่วยลดความร้อนและกรองรังสี UV"
  },
  {
    img: interior2,
    label: "จอแสดงผลคนขับขนาด 10.25 นิ้ว",
    desc: "จอแสดงผลดิจิทัลคมชัด อ่านง่าย"
  },
  {
    img: interior3,
    label: "ระบบเฝ้าระวังพฤติกรรมผู้ขับขี่",
    desc: "ระบบที่ช่วยเตือนพฤติกรรมการขับขี่ที่มีความเสี่ยง เพื่อความปลอดภัยที่มากขึ้น"
  },
  {
    img: interior4,
    label: "หน้าจอสัมผัสหมุนได้ขนาด 15.6 นิ้ว",
    desc: "หน้าจอกลางหมุนได้ด้วยระบบไฟฟ้า สำหรับมัลติมีเดียและควบคุมรถ"
  }
];
const INTERIOR_GALLERY_EN = [
  {
    img: awdUltimateInterior1,
    label: "Head-Up Display",
    desc: "Projects speed and speed-limit information onto the windshield, no need to look away from the road (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior2,
    label: "Ambient Lighting Seats",
    desc: "High-quality seats with ambient lighting and a dedicated storage area for a more comfortable ride (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior3,
    label: "Panoramic Roof Rear Seating",
    desc: "Spacious rear seating illuminated by natural light through the panoramic glass roof with ambient LED accents (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior4,
    label: "Diamond-Stitched Leather Seats",
    desc: "Diamond-stitch leather upholstery with door-panel ambient lighting for an added touch of luxury (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior5,
    label: "Centre Console & Multimedia Display",
    desc: "A refined centre console featuring the Crystal Shifter and a wireless charging pad (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior6,
    label: "Dynaudio Sound System",
    desc: "Premium-grade speakers deliver a concert-like listening experience in the cabin (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior7,
    label: "Leather Steering Wheel with Multifunction Controls",
    desc: "A sport-styled steering wheel with easy access to multifunction controls (AWD Ultimate)"
  },
  {
    img: awdUltimateInterior8,
    label: "Rear Cargo Space",
    desc: "A spacious boot that makes the most of everyday practicality (AWD Ultimate)"
  },
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
  }
];
const dimensionsRows = [
  { label: "จำนวนที่นั่ง", premium: "5", awd: "5" },
  { label: "ความยาว (มม.)", premium: "4,830", awd: "4,830" },
  { label: "ความกว้าง (มม.)", premium: "1,925", awd: "1,925" },
  { label: "ความสูง (มม.)", premium: "1,620", awd: "1,620" },
  { label: "ระยะฐานล้อ (มม.)", premium: "2,930", awd: "2,930" },
  { label: "ความจุห้องเก็บสัมภาระหน้า (ลิตร)", premium: "58", awd: "58" },
  { label: "ความจุห้องเก็บสัมภาระท้าย (ลิตร)", premium: "500", awd: "500" },
  { label: "น้ำหนักรถเปล่า (กก.)", premium: "2,225", awd: "2,340" }
];
const dimensionsRowsEn = [
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
  { label: "ระบบขับเคลื่อน", premium: "ขับเคลื่อนล้อหลัง", awd: "ขับเคลื่อนสี่ล้อ" },
  {
    label: "ประเภทมอเตอร์ไฟฟ้าด้านหน้า",
    premium: "-",
    awd: "มอเตอร์เหนี่ยวนำ (Asynchronous)"
  },
  { label: "กำลังมอเตอร์ด้านหน้าสูงสุด (กิโลวัตต์)", premium: "-", awd: "160" },
  { label: "แรงบิดมอเตอร์ด้านหน้าสูงสุด (นิวตันเมตร)", premium: "-", awd: "310" },
  { label: "กำลังมอเตอร์ด้านหลังสูงสุด (กิโลวัตต์)", premium: "230", awd: "230" },
  { label: "แรงบิดมอเตอร์ด้านหลังสูงสุด (นิวตันเมตร)", premium: "380", awd: "380" },
  { label: "กำลังรวมสูงสุด (กิโลวัตต์)", premium: "230", awd: "390" },
  { label: "แรงบิดรวมสูงสุด (นิวตันเมตร)", premium: "380", awd: "690" },
  { label: "อัตราเร่ง 0-100 กม./ชม. (วินาที)", premium: "6.7", awd: "4.5" }
];
const powertrainRowsEn = [
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
  { label: "ประเภทแบตเตอรี่", premium: "BYD Blade Battery", awd: "BYD Blade Battery" },
  { label: "ความจุแบตเตอรี่สูงสุด (กิโลวัตต์ชั่วโมง)", premium: "82.5", awd: "82.5" },
  { label: "ระยะทางสูงสุดตามมาตรฐาน NEDC (กม.)", premium: "567", awd: "542" },
  { label: "รองรับการชาร์จ AC Type 2 - กำลังสูงสุด (กิโลวัตต์)", premium: "11", awd: "11" },
  { label: "รองรับการชาร์จ DC CCS2 - กำลังสูงสุด (กิโลวัตต์)", premium: "150", awd: "150" },
  { label: "V2L (จ่ายไฟออกจากตัวรถ)", premium: "●", awd: "●" },
  { label: "ระบบหน่วงพลังงานขณะเบรก", premium: "●", awd: "●" }
];
const chargingRowsEn = [
  { label: "Battery type", premium: "BYD Blade Battery", awd: "BYD Blade Battery" },
  { label: "Maximum battery capacity (kWh)", premium: "82.5", awd: "82.5" },
  { label: "Maximum range according to NEDC (km)", premium: "567", awd: "542" },
  { label: "AC Type 2 charging support - max power (kW)", premium: "11", awd: "11" },
  { label: "DC CCS2 charging support - max power (kW)", premium: "150", awd: "150" },
  { label: "V2L (Vehicle-to-Load)", premium: "●", awd: "●" },
  { label: "Regenerative braking system", premium: "●", awd: "●" }
];
const safetyRows = [
  { label: "ถุงลมนิรภัยด้านหน้า", premium: "●", awd: "●" },
  { label: "ถุงลมนิรภัยด้านข้าง", premium: "●", awd: "●" },
  { label: "ถุงลมนิรภัยม่านด้านข้าง", premium: "●", awd: "●" },
  { label: "กล้องมองภาพรอบคัน 360 องศา", premium: "●", awd: "●" },
  { label: "ระบบควบคุมความเร็วอัตโนมัติแปรผัน (ACC)", premium: "●", awd: "●" },
  { label: "ระบบเบรกฉุกเฉินอัตโนมัติ (AEB)", premium: "●", awd: "●" },
  { label: "ระบบเตือนออกนอกเลน (LDW)", premium: "●", awd: "●" },
  { label: "ระบบเตือนจุดอับสายตา (BSD)", premium: "●", awd: "●" },
  { label: "ระบบเตือนเปิดประตู (DOW)", premium: "●", awd: "●" },
  { label: "ระบบเฝ้าระวังพฤติกรรมผู้ขับขี่ (DMS)", premium: "●", awd: "●" }
];
const safetyRowsEn = [
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
const ultimateRows = [
  { label: "แบตเตอรี่ความจุ", value: "91.3 kWh" },
  { label: "ระยะทางขับขี่สูงสุด (NEDC)", value: "600 กม." },
  { label: "รองรับ DC Fast Charging สูงสุด", value: "230 kW" },
  { label: "ระบบขับเคลื่อน", value: "AWD" },
  { label: "ระบบ iTAC (Intelligent Torque Adaptation Control)", value: "●" },
  { label: "สีภายนอก Solar Red และ Pulse Purple", value: "●" },
  { label: "ตัวเลือกห้องโดยสารสีฟ้า (Blue Interior)", value: "●" }
];
const ultimateRowsEn = [
  { label: "Battery capacity", value: "91.3 kWh" },
  { label: "Maximum range (NEDC)", value: "600 km" },
  { label: "Maximum DC fast charging", value: "230 kW" },
  { label: "Drivetrain", value: "AWD" },
  { label: "iTAC (Intelligent Torque Adaptation Control)", value: "●" },
  { label: "Solar Red & Pulse Purple exterior colours", value: "●" },
  { label: "Blue interior option", value: "●" }
];
const storySections = [
  {
    image: storyLifeInMotionImage,
    title: "LIFE IN MOTION",
    subtitle: "BYD SEALION 7",
    body: "SUV ไฟฟ้าที่ออกแบบมาเพื่อการใช้งานในชีวิตประจำวัน ผสานสมรรถนะ การชาร์จ และความสะดวกสบายไว้ในคันเดียว"
  },
  {
    image: storyBladeBatteryImage,
    title: "BLADE BATTERY",
    subtitle: "Safety Technology",
    body: "เทคโนโลยีแบตเตอรี่ที่ออกแบบมาเพื่อยกระดับความปลอดภัย ความทนทาน และประสิทธิภาพในการใช้งานประจำวัน"
  },
  {
    image: storyEPlatformImage,
    title: "e-Platform 3.0",
    subtitle: "EV Architecture",
    body: "แพลตฟอร์มรถยนต์ไฟฟ้าที่ช่วยเพิ่มอัตราเร่ง ระยะทางวิ่ง ความเร็วในการชาร์จ และความสบายในการขับขี่"
  }
];
const storySectionsEn = [
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
    values: row.ultimate !== void 0 ? [row.premium, row.awd, row.ultimate] : [row.premium, row.awd]
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
  const { locale } = useI18n();
  const isEn = locale === "en";
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const installment = calcInstallment(model.priceFrom, 20, 5, 2.49);
  const currentTrim = TRIMS.find((item) => item.key === trim) ?? TRIMS[1];
  const galleryItems = galleryTab === "exterior" ? isEn ? EXTERIOR_GALLERY_EN : EXTERIOR_GALLERY : isEn ? INTERIOR_GALLERY_EN : INTERIOR_GALLERY;
  const currentStorySections = isEn ? storySectionsEn : storySections;
  const currentDimensionsRows = isEn ? dimensionsRowsEn : dimensionsRows;
  const currentPowertrainRows = isEn ? powertrainRowsEn : powertrainRows;
  const currentChargingRows = isEn ? chargingRowsEn : chargingRows;
  const currentSafetyRows = isEn ? safetyRowsEn : safetyRows;
  const currentUltimateRows = isEn ? ultimateRowsEn : ultimateRows;
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
      q: isEn ? "How much is the BYD SEALION 7?" : "BYD SEALION 7 ราคาเท่าไร?",
      a: isEn ? "Premium is THB 1,264,900 and AWD Performance is THB 1,364,900, with promotions available periodically" : "รุ่น Premium ราคา 1,264,900 บาท และรุ่น AWD Performance ราคา 1,364,900 บาท มีโปรโมชันเป็นระยะ"
    },
    {
      q: isEn ? "How far can the BYD SEALION 7 travel?" : "BYD SEALION 7 วิ่งได้ไกลแค่ไหน?",
      a: isEn ? "The Premium grade can travel up to 567 km and the AWD Performance grade up to 542 km based on NEDC" : "รุ่น Premium วิ่งได้ไกลสูงสุด 567 กม. และรุ่น AWD Performance วิ่งได้ไกลสูงสุด 542 กม. ตามมาตรฐาน NEDC"
    },
    {
      q: isEn ? "What charging options does the BYD SEALION 7 support?" : "BYD SEALION 7 รองรับการชาร์จแบบใดบ้าง?",
      a: isEn ? "Supports AC Type 2 up to 11 kW and DC CCS2 up to 150 kW, plus V2L" : "รองรับ AC Type 2 สูงสุด 11 kW และ DC CCS2 สูงสุด 150 kW พร้อมระบบ V2L"
    },
    {
      q: isEn ? "What is the monthly payment for the BYD SEALION 7?" : "ผ่อน BYD SEALION 7 เดือนละเท่าไร?",
      a: isEn ? `Monthly payments start at ${formatBaht(installment.monthly)}/month (20% down, 60 installments, 2.49% interest)` : `ค่างวดเริ่มต้นประมาณ ${formatBaht(installment.monthly)}/เดือน (ดาวน 20% ผ่อน 60 งวด ดอกเบี้ย 2.49%)`
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: isEn ? "Starting price" : "ราคาเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient sm:text-4xl", children: formatBaht(model.priceFrom) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-border pl-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: isEn ? "Starting monthly payment" : "ผ่อนเริ่มต้น" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold", children: [
                formatBaht(installment.monthly),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: isEn ? "/month" : "/เดือน" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#test-drive", className: "gradient-accent glow inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white", children: [
              isEn ? "Test Drive" : "นัดทดลองขับ",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#installment",
                className: "glass inline-flex items-center gap-2 rounded-full border border-border/60 px-7 py-3 text-sm font-semibold backdrop-blur-sm",
                children: isEn ? "Calculate payment" : "คำนวณค่างวด"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          { label: isEn ? "Max Range" : "ระยะทางสูงสุด", val: `${currentTrim.range} km` },
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: isEn ? "Max Power" : "กำลังสูงสุด", val: currentTrim.power },
          { label: isEn ? "Battery" : "แบตเตอรี่", val: currentTrim.battery },
          { label: isEn ? "Fast Charge" : "ชาร์จเร็ว", val: currentTrim.charge }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl border border-border/40 px-4 py-2 text-center backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-gradient", children: item.val })
        ] }, item.label)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Variants" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: isEn ? "Choose Your Trim" : "เลือกรุ่นที่ใช่" })
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
                isEn ? "Test Drive" : "นัดทดลองขับ",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5", children: [
          { label: "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: isEn ? "NEDC Range" : "ระยะทาง NEDC", val: `${currentTrim.range} km` },
          { label: isEn ? "Max Power" : "กำลังสูงสุด", val: currentTrim.power },
          { label: isEn ? "Battery" : "แบตเตอรี่", val: currentTrim.battery },
          { label: isEn ? "Fast Charge" : "ชาร์จเร็ว", val: currentTrim.charge }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/40 bg-background/30 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold", children: item.val })
        ] }, item.label)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: isEn ? "Choose the color that fits you" : "เลือกสีที่ใช่สำหรับคุณ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: isEn ? "* Shark Grey is exclusive to the AWD Performance grade" : "* สี Shark Grey มีเฉพาะรุ่น AWD Performance เท่านั้น" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs uppercase tracking-widest text-muted-foreground", children: isEn ? "Exterior Colour" : "สีภายนอก" }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: isEn ? "Distinctive and uniquely suited to your needs" : "โดดเด่นและตอบโจทย์ทุกความต้องการของคุณ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center gap-2", children: ["exterior", "interior"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setGalleryTab(tab),
            className: `rounded-full px-8 py-2.5 text-sm font-semibold capitalize transition-all ${galleryTab === tab ? "gradient-accent glow text-white" : "glass border border-border hover:border-primary/40"}`,
            children: tab === "exterior" ? isEn ? "Exterior" : "ภายนอก" : isEn ? "Interior" : "ภายใน"
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "overflow-hidden border-y border-border", children: currentStorySections.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: isEn ? "Technical Specifications" : "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Premium · AWD Performance" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Dimensions & Weight" : "ขนาดและน้ำหนัก", icon: Gauge, rows: toSpecRows(currentDimensionsRows), isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Powertrain" : "ระบบส่งกำลัง", icon: Zap, rows: toSpecRows(currentPowertrainRows), isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Charging" : "ระบบการชาร์จ", icon: Battery, rows: toSpecRows(currentChargingRows), isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Safety" : "ระบบความปลอดภัย", icon: ShieldCheck, rows: toSpecRows(currentSafetyRows), isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UltimateSpecTable, { title: isEn ? "AWD Ultimate Only" : "เฉพาะรุ่น AWD Ultimate", rows: currentUltimateRows, isEn }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "border-y border-border bg-surface/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: isEn ? "BYD SEALION 7 Payment Plan" : "ตารางผ่อน BYD SEALION 7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Calculate the payment that suits you instantly" : "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-sm font-semibold text-primary", children: "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: isEn ? "Test Drive BYD SEALION 7" : "นัดทดลองขับ BYD SEALION 7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Free of charge, with our team ready to assist at every step" : "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: isEn ? "Frequently Asked Questions About BYD SEALION 7" : "คำถามที่พบบ่อยเกี่ยวกับ BYD SEALION 7" }),
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
  rows,
  isEn
}) {
  const hasUltimate = rows[0]?.values.length === 3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass overflow-hidden rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border bg-background/40 px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: hasUltimate ? "w-2/5 px-6 py-3 text-left font-medium" : "w-1/2 px-6 py-3 text-left font-medium", children: isEn ? "Specification" : "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "Premium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "AWD Performance" }),
        hasUltimate && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: "AWD Ultimate" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: index % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((value, cellIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value, isEn }) }, `${row.label}-${cellIndex}`))
      ] }, row.label)) })
    ] }) })
  ] });
}
function UltimateSpecTable({ title, rows, isEn }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass overflow-hidden rounded-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border bg-background/40 px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-1/2 px-6 py-3 text-left font-medium", children: isEn ? "Specification" : "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-3 text-center font-medium", children: isEn ? "AWD Ultimate" : "AWD Ultimate" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: index % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: row.value, isEn }) })
      ] }, row.label)) })
    ] }) })
  ] });
}
function Cell({ value, isEn }) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mx-auto h-5 w-5 text-primary", "aria-label": isEn ? "Included" : "มี" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": isEn ? "Not included" : "ไม่มี" });
  if (value === "●") return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mx-auto h-5 w-5 text-primary", "aria-label": isEn ? "Included" : "มี" });
  if (value === "-") return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": isEn ? "Not included" : "ไม่มี" });
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
