import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { f as fallbackModel, u as useI18n, P as PageShell, h as heroBanner$3 } from "./router-dp9q-XuW.mjs";
import { InstallmentCalculator } from "./InstallmentCalculator-DzEwJyhe.mjs";
import { T as TestDriveForm } from "./TestDriveForm-jtWF055E.mjs";
import { FAQ } from "./FAQ-CVmkTV-_.mjs";
import { g as getInstallmentModel, c as calcInstallment, f as formatBaht } from "./models-2MA_lXr_.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowRight, l as Play, R as Ruler, Z as Zap, G as Gauge, j as Battery, m as Weight, S as ShieldCheck, a as Check, k as Minus } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "./dialog-BuaJdNz1.mjs";
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
const overviewImage = "/assets/overview-img-02-CJoO-7lo.png";
const bladeBatteryImage = "/assets/overview-img-04-C53a9f28.jpeg";
const exterior1 = "/assets/exterior-img-01-sT28DCF5.jpeg";
const exterior2 = "/assets/exterior-img-02-B2Rij31f.jpeg";
const exterior3 = "/assets/exterior-img-03-Cpn1u1t7.jpeg";
const exterior4 = "/assets/exterior-img-04-B7amLOHk.jpeg";
const exterior5 = "/assets/exterior-img-05-DuEtxk3n.jpeg";
const exterior6 = "/assets/exterior-img-06-CxVrWfkv.jpeg";
const extendedExterior1 = "/assets/extended-exterior-01-J2NeLEei.jpg";
const extendedExterior2 = "/assets/extended-exterior-02-BOoqhRdN.jpg";
const extendedExterior3 = "/assets/extended-exterior-03-BWQUBFIH.jpg";
const extendedExterior4 = "/assets/extended-exterior-04-BLMDM0Z5.jpg";
const extendedExterior5 = "/assets/extended-exterior-05-P53smQzq.jpg";
const extendedExterior6 = "/assets/extended-exterior-06-Cp0ShzUV.jpg";
const interior1 = "/assets/interior-img-01-1EBLTxjy.jpeg";
const interior2 = "/assets/interior-img-02-C8GYBHio.jpeg";
const interior3 = "/assets/interior-img-03-B6j0W-sF.jpeg";
const interior4 = "/assets/interior-img-04-DDZOJ0qX.jpeg";
const interior5 = "/assets/interior-img-05-DwDFtQKs.jpeg";
const colorGrey = "/assets/sealion-grey-CMo9lIhj.png";
const colorWhite = "/assets/sealion-white-BrS8bGTC.png";
const colorBlack = "/assets/sealion-black-mp-hbJUF.png";
const VIDEO_URL = "/videos/home-teaser-desktop.mp4";
const TRIMS = [
  {
    key: "dynamic",
    name: "Dynamic",
    price: 879900,
    accel: "8.5",
    battery: "18.3 kWh",
    range: "104 km",
    power: "160 kW",
    torque: "300 Nm",
    charge: "DC 18 kW",
    drive: "FWD"
  },
  {
    key: "premium",
    name: "Premium",
    price: 999900,
    accel: "8.5",
    battery: "18.3 kWh",
    range: "104 km",
    power: "160 kW",
    torque: "300 Nm",
    charge: "DC 18 kW",
    drive: "FWD"
  },
  {
    key: "extended",
    name: "Extended",
    price: 969900,
    accel: "8.5",
    battery: "26.6 kWh",
    range: "150 km",
    power: "160 kW",
    torque: "300 Nm",
    charge: "DC 55 kW",
    drive: "FWD"
  }
];
const COLORS = [
  { name: "Graphite Grey", hex: "#666B70", border: "#666B70", img: colorGrey, note: "Dynamic · Premium" },
  { name: "Horizon White", hex: "#ECEDEF", border: "#D3D3D3", img: colorWhite, note: "Dynamic · Premium" },
  { name: "Quantum Black", hex: "#0E0F11", border: "#444", img: colorBlack, note: "Dynamic · Premium" }
];
const EXTERIOR_GALLERY = [
  { img: extendedExterior1, label: "กระจกมองข้างพร้อม NFC", desc: "ระบบกุญแจการ์ด NFC ในตัวกระจกมองข้าง รุ่น EXTENDED" },
  { img: extendedExterior2, label: "ไฟท้าย BYD SEALION 6", desc: "ดีไซน์ไฟท้ายเรียบหรู พร้อมโลโก้รุ่น EXTENDED" },
  { img: extendedExterior3, label: "ไฟหน้าและกระจังหน้า", desc: "เส้นสายทรงพลัง สไตล์ BYD OCEAN SERIES รุ่น EXTENDED" },
  { img: extendedExterior4, label: "มุมมองด้านหน้าเต็มคัน", desc: "ดีไซน์กระจังหน้าและไฟหน้า LED รุ่น EXTENDED" },
  { img: extendedExterior5, label: "พื้นที่เก็บสัมภาระท้ายรถ", desc: "ห้องเก็บสัมภาระกว้างขวาง จุของได้หลากหลาย รุ่น EXTENDED" },
  { img: extendedExterior6, label: "ช่องชาร์จไฟฟ้า", desc: "ฝาปิดช่องชาร์จด้านข้างตัวรถ รุ่น EXTENDED" },
  { img: exterior1, label: "กระจังหน้า", desc: "ดีไซน์โฉบเฉี่ยว ภายใต้แนวคิด BYD OCEAN SERIES" },
  { img: exterior2, label: "ดีไซน์ไฟท้ายทรงหยดน้ำ", desc: "พร้อมระบบไฟเลี้ยวด้านหลังแบบ Sequential" },
  { img: exterior3, label: "ระบบกุญแจแบบบัตรอิเล็กทรอนิกส์ NFC", desc: "(NFC Card)" },
  { img: exterior4, label: "แถบอลูมิเนียมด้านข้าง", desc: "เพิ่มความพรีเมียมและมิติให้ตัวรถ" },
  { img: exterior5, label: "ไฟหน้าแบบ LED", desc: "พร้อมไฟส่องสว่างสำหรับการขับขี่ในเวลากลางวันแบบ LED" },
  { img: exterior6, label: "ล้ออัลลอยขนาด 19 นิ้ว", desc: "ดีไซน์สปอร์ตพรีเมียม" }
];
const EXTERIOR_GALLERY_EN = [
  { img: extendedExterior1, label: "Side mirror with NFC key", desc: "Built-in NFC card key sensor on the side mirror, EXTENDED model" },
  { img: extendedExterior2, label: "BYD SEALION 6 tail lights", desc: "Sleek tail light design with rear badging, EXTENDED model" },
  { img: extendedExterior3, label: "Headlight and grille detail", desc: "Bold OCEAN SERIES styling lines, EXTENDED model" },
  { img: extendedExterior4, label: "Front fascia", desc: "Grille and LED headlight design, EXTENDED model" },
  { img: extendedExterior5, label: "Cargo space", desc: "Spacious trunk that fits luggage and gear with ease, EXTENDED model" },
  { img: extendedExterior6, label: "Charging port", desc: "Side-mounted charging port cover, EXTENDED model" },
  { img: exterior1, label: "19-inch alloy wheels", desc: "Premium sporty design that enhances the car's presence" },
  { img: exterior2, label: "OCEAN SERIES grille", desc: "Sharp lines and a distinctive model identity" },
  { img: exterior3, label: "Sequential tail lights", desc: "Drop-shaped tail lights with flowing turn signals" },
  { img: exterior4, label: "NFC Card Key", desc: "Unlock and start the vehicle with an electronic card key" },
  { img: exterior5, label: "Aluminum side trim", desc: "Adds depth and a more premium look to the body" },
  { img: exterior6, label: "LED headlights", desc: "Headlights and DRLs for clear visibility" }
];
const INTERIOR_GALLERY = [
  { img: interior1, label: "ห้องโดยสารสีทูโทน", desc: "โทนสีดำ-น้ำตาล ให้ความพรีเมียมและอบอุ่น" },
  { img: interior2, label: "Panoramic Sunroof", desc: "หลังคากระจกขนาดใหญ่พร้อมม่านบังแดด" },
  { img: interior3, label: "ดีไซน์ช่องลมแอร์", desc: "ออกแบบให้โดดเด่นและใช้งานสะดวก" },
  { img: interior4, label: "พวงมาลัยมัลติฟังก์ชัน", desc: "พวงมาลัย 3 ก้านสไตล์สปอร์ตพรีเมียม" },
  { img: interior5, label: "Crystal Shifter", desc: "คันเกียร์คริสตัลเพิ่มความหรูในห้องโดยสาร" }
];
const INTERIOR_GALLERY_EN = [
  { img: interior1, label: "Two-tone cabin", desc: "Black and brown tones create a premium, welcoming atmosphere" },
  { img: interior2, label: "Panoramic sunroof", desc: "Large glass roof with a sunshade" },
  { img: interior3, label: "Air vent design", desc: "A distinctive design that is also practical" },
  { img: interior4, label: "Multi-function steering wheel", desc: "Three-spoke steering wheel with a premium sporty feel" },
  { img: interior5, label: "Crystal shifter", desc: "Crystal gear selector adds a luxurious touch" }
];
const DIMENSIONS = [
  { label: "จำนวนที่นั่ง", values: ["5", "5", "5"] },
  { label: "ความยาว (มม.)", values: ["4,775", "4,775", "4,775"] },
  { label: "ความกว้าง (มม.)", values: ["1,890", "1,890", "1,890"] },
  { label: "ความสูง (มม.)", values: ["1,670", "1,670", "1,670"] },
  { label: "ระยะห่างของล้อ คู่หน้า / คู่หลัง (มม.)", values: ["1,630 / 1,630", "1,630 / 1,630", "1,630 / 1,630"] },
  { label: "ระยะฐานล้อ (มม.)", values: ["2,765", "2,765", "2,765"] },
  { label: "ความสูงใต้ท้องรถไม่รวมน้ำหนักบรรทุก (มม.)", values: ["180", "180", "180"] },
  { label: "ความสูงใต้ท้องรถรวมน้ำหนักบรรทุกสูงสุด (มม.)", values: ["150", "150", "150"] },
  { label: "รัศมีวงเลี้ยวแคบสุด (เมตร)", values: ["5.5", "5.5", "5.5"] },
  { label: "ความจุพื้นที่เก็บสัมภาระด้านท้าย (ลิตร)", values: ["425", "425", "425"] },
  { label: "น้ำหนักรถเปล่า (กก.)", values: ["1,850", "1,850", "1,930"] },
  { label: "น้ำหนักรถรวมน้ำหนักบรรทุกสูงสุด (กก.)", values: ["2,260", "2,260", "2,340"] }
];
const DIMENSIONS_EN = [
  { label: "Seating capacity", values: ["5", "5", "5"] },
  { label: "Length (mm)", values: ["4,775", "4,775", "4,775"] },
  { label: "Width (mm)", values: ["1,890", "1,890", "1,890"] },
  { label: "Height (mm)", values: ["1,670", "1,670", "1,670"] },
  { label: "Track, front / rear (mm)", values: ["1,630 / 1,630", "1,630 / 1,630", "1,630 / 1,630"] },
  { label: "Wheelbase (mm)", values: ["2,765", "2,765", "2,765"] },
  { label: "Ground clearance without load (mm)", values: ["180", "180", "180"] },
  { label: "Ground clearance at maximum load (mm)", values: ["150", "150", "150"] },
  { label: "Minimum turning radius (m)", values: ["5.5", "5.5", "5.5"] },
  { label: "Rear cargo capacity (L)", values: ["425", "425", "425"] },
  { label: "Curb weight (kg)", values: ["1,850", "1,850", "1,930"] },
  { label: "Gross vehicle weight (kg)", values: ["2,260", "2,260", "2,340"] }
];
const DRIVETRAIN = [
  { label: "ระบบขับเคลื่อน", values: ["ขับเคลื่อนล้อหน้า", "ขับเคลื่อนล้อหน้า", "ขับเคลื่อนล้อหน้า"] },
  { label: "ประเภทชุดมอเตอร์ไฟฟ้าหน้า", values: ["มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)", "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)", "มอเตอร์ซิงโครนัสชนิดแม่เหล็กถาวร (PMS)"] },
  { label: "กำลังสูงสุดชุดมอเตอร์ไฟฟ้าหน้า (กิโลวัตต์)", values: ["145", "145", "145"] },
  { label: "แรงบิดสูงสุดชุดมอเตอร์ไฟฟ้าหน้า (นิวตัน-เมตร)", values: ["300", "300", "300"] },
  { label: "ประเภทเครื่องยนต์", values: ["เครื่องยนต์ Xiao Yun ออกแบบเฉพาะปลั๊กอินไฮบริด 1.5 ลิตร", "เครื่องยนต์ Xiao Yun ออกแบบเฉพาะปลั๊กอินไฮบริด 1.5 ลิตร", "เครื่องยนต์ Xiao Yun ออกแบบเฉพาะปลั๊กอินไฮบริด 1.5 ลิตร"] },
  { label: "กำลังสูงสุดของเครื่องยนต์ (กิโลวัตต์)", values: ["72", "72", "72"] },
  { label: "แรงบิดสูงสุดของเครื่องยนต์ (นิวตัน-เมตร)", values: ["122", "122", "122"] },
  { label: "กำลังรวมสูงสุด (กิโลวัตต์)", values: ["160", "160", "160"] },
  { label: "แรงบิดรวมสูงสุด (นิวตัน-เมตร)", values: ["300", "300", "300"] },
  { label: "ความจุถังน้ำมัน (ลิตร)", values: ["45", "45", "60"] }
];
const DRIVETRAIN_EN = [
  { label: "Drive system", values: ["Front-wheel drive", "Front-wheel drive", "Front-wheel drive"] },
  { label: "Front electric motor type", values: ["Permanent magnet synchronous motor (PMS)", "Permanent magnet synchronous motor (PMS)", "Permanent magnet synchronous motor (PMS)"] },
  { label: "Max front electric motor power (kW)", values: ["145", "145", "145"] },
  { label: "Max front electric motor torque (Nm)", values: ["300", "300", "300"] },
  { label: "Engine type", values: ["Xiao Yun 1.5L engine designed for plug-in hybrid", "Xiao Yun 1.5L engine designed for plug-in hybrid", "Xiao Yun 1.5L engine designed for plug-in hybrid"] },
  { label: "Max engine power (kW)", values: ["72", "72", "72"] },
  { label: "Max engine torque (Nm)", values: ["122", "122", "122"] },
  { label: "Total system power (kW)", values: ["160", "160", "160"] },
  { label: "Total system torque (Nm)", values: ["300", "300", "300"] },
  { label: "Fuel tank capacity (L)", values: ["45", "45", "60"] }
];
const PERFORMANCE = [
  { label: "อัตราเร่ง 0-100 กิโลเมตร/ชั่วโมง (วินาที)", values: ["8.5", "8.5", "8.5"] },
  { label: "ประเภทแบตเตอรี่", values: ["BYD Blade Battery", "BYD Blade Battery", "BYD Blade Battery"] },
  { label: "ความจุแบตเตอรี่สูงสุด (กิโลวัตต์-ชั่วโมง)", values: ["18.3", "18.3", "26.6"] },
  { label: "ระยะทางวิ่งด้วยไฟฟ้าสูงสุด ตามมาตรฐาน NEDC (กิโลเมตร)", values: ["104", "104", "150"] }
];
const PERFORMANCE_EN = [
  { label: "0-100 km/h (sec.)", values: ["8.5", "8.5", "8.5"] },
  { label: "Battery type", values: ["BYD Blade Battery", "BYD Blade Battery", "BYD Blade Battery"] },
  { label: "Maximum battery capacity (kWh)", values: ["18.3", "18.3", "26.6"] },
  { label: "Maximum electric range, NEDC (km)", values: ["104", "104", "150"] }
];
const CHARGING = [
  { label: "สายชาร์จแบบพกพา (Mode 2)", values: [true, true, true] },
  { label: "รองรับหัวชาร์จแบบ AC Type 2 (กำลังสูงสุด 6.6 kW)", values: [true, true, true] },
  { label: "รองรับหัวชาร์จแบบ DC CCS2 (กำลังสูงสุด 18 kW)", values: [true, true, false] },
  { label: "รองรับหัวชาร์จแบบ DC CCS2 (กำลังสูงสุด 55 kW)", values: [false, false, true] },
  { label: "ระบบ V to L (Vehicle to Load)", values: [true, true, true] },
  { label: "อุปกรณ์เสริมสำหรับระบบ V to L (Vehicle to Load)", values: [true, true, true] },
  { label: "ระบบเบรกพร้อมระบบชาร์จพลังงานกลับอัตโนมัติ (Regenerative Braking)", values: [true, true, true] }
];
const CHARGING_EN = [
  { label: "Portable charging cable (Mode 2)", values: [true, true, true] },
  { label: "AC Type 2 charging support (max 6.6 kW)", values: [true, true, true] },
  { label: "DC CCS2 charging support (max 18 kW)", values: [true, true, false] },
  { label: "DC CCS2 charging support (max 55 kW)", values: [false, false, true] },
  { label: "V to L (Vehicle to Load)", values: [true, true, true] },
  { label: "V to L accessory", values: [true, true, true] },
  { label: "Regenerative braking", values: [true, true, true] }
];
const CHASSIS = [
  { label: "ระบบกันสะเทือนด้านหน้า", values: ["แม็คเฟอร์สันสตรัท", "แม็คเฟอร์สันสตรัท", "แม็คเฟอร์สันสตรัท"] },
  { label: "ระบบกันสะเทือนด้านหลัง", values: ["มัลติลิงก์", "มัลติลิงก์", "มัลติลิงก์"] },
  { label: "ระบบเบรกด้านหน้า", values: ["ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ", "ดิสก์เบรกแบบระบายอากาศ"] },
  { label: "ระบบเบรกด้านหลัง", values: ["ดิสก์เบรก", "ดิสก์เบรก", "ดิสก์เบรก"] },
  { label: "ล้ออัลลอย", values: ["19 นิ้ว", "19 นิ้ว", "19 นิ้ว"] },
  { label: "ขนาดยาง", values: ["235/50 R19", "235/50 R19", "235/50 R19"] },
  { label: "ชุดซ่อมยางฉุกเฉิน", values: [true, true, true] },
  { label: "อุปกรณ์ซ่อมรถฉุกเฉิน", values: [true, true, true] }
];
const CHASSIS_EN = [
  { label: "Front suspension", values: ["MacPherson strut", "MacPherson strut", "MacPherson strut"] },
  { label: "Rear suspension", values: ["Multi-link", "Multi-link", "Multi-link"] },
  { label: "Front brakes", values: ["Ventilated disc brakes", "Ventilated disc brakes", "Ventilated disc brakes"] },
  { label: "Rear brakes", values: ["Disc brakes", "Disc brakes", "Disc brakes"] },
  { label: "Alloy wheels", values: ["19 inches", "19 inches", "19 inches"] },
  { label: "Tyre size", values: ["235/50 R19", "235/50 R19", "235/50 R19"] },
  { label: "Emergency tyre repair kit", values: [true, true, true] },
  { label: "Emergency vehicle repair kit", values: [true, true, true] }
];
const EXTERIOR = [
  { label: "ไฟหน้าแบบ LED", values: [true, true, true] },
  { label: "ฟังก์ชันหน่วงเวลาการปิดไฟหน้า Follow-Me-Home", values: [true, true, true] },
  { label: "ไฟส่องสว่างสำหรับการขับขี่ในเวลากลางวันแบบ LED", values: [true, true, true] },
  { label: "ระบบปรับระดับความสูงของไฟหน้าด้วยตนเอง", values: [true, true, true] },
  { label: "ไฟท้ายแบบ LED", values: [true, true, true] },
  { label: "ไฟตัดหมอกด้านหลัง", values: [true, true, true] },
  { label: "ระบบไฟเลี้ยวด้านหลังแบบ Sequential", values: [true, true, true] },
  { label: "ไฟเบรกบนดวงที่ 3 แบบ LED", values: [true, true, true] },
  { label: "หลังคาซันรูฟแบบพาโนรามิก", values: [true, true, true] },
  { label: "ราวหลังคา", values: [true, true, true] },
  { label: "ประตูท้ายไฟฟ้า", values: [true, true, true] },
  { label: "ระบบปัดน้ำฝนด้านหน้าอัตโนมัติ", values: [true, true, true] },
  { label: "ที่ปัดน้ำฝนด้านหลัง", values: [true, true, true] },
  { label: "กระจกมองข้างพับเก็บอัตโนมัติและปรับองศาไฟฟ้า พร้อมระบบทำความร้อนไล่ฝ้า", values: [true, true, true] },
  { label: "ไฟส่องพื้นบริเวณภายนอกกระจกมองข้าง", values: [true, true, true] },
  { label: "ระบบบันทึกตำแหน่งกระจกมองข้าง", values: [false, false, true] },
  { label: "กระจกมองข้างปรับองศาอัตโนมัติเมื่อถอยหลัง", values: [false, false, true] },
  { label: "กระจกหลังพร้อมระบบทำความร้อนไล่ฝ้า", values: [true, true, true] },
  { label: "กระจกเปิดปิดอัตโนมัติแบบสัมผัสสวิตช์ครั้งเดียวพร้อมระบบป้องกันการหนีบ", values: [true, true, true] }
];
const EXTERIOR_EN = [
  { label: "LED headlights", values: [true, true, true] },
  { label: "Follow-Me-Home headlight delay", values: [true, true, true] },
  { label: "LED daytime running lights", values: [true, true, true] },
  { label: "Manual headlight height adjustment", values: [true, true, true] },
  { label: "LED tail lights", values: [true, true, true] },
  { label: "Rear fog lights", values: [true, true, true] },
  { label: "Sequential rear turn indicators", values: [true, true, true] },
  { label: "LED third brake light", values: [true, true, true] },
  { label: "Panoramic sunroof", values: [true, true, true] },
  { label: "Roof rails", values: [true, true, true] },
  { label: "Electric tailgate", values: [true, true, true] },
  { label: "Automatic front wipers", values: [true, true, true] },
  { label: "Rear wiper", values: [true, true, true] },
  { label: "Power-folding and power-adjustable heated side mirrors", values: [true, true, true] },
  { label: "Side mirror puddle lights", values: [true, true, true] },
  { label: "Side mirror position memory", values: [false, false, true] },
  { label: "Side mirrors with reverse auto-tilt", values: [false, false, true] },
  { label: "Rear window defogger", values: [true, true, true] },
  { label: "One-touch power windows with anti-pinch", values: [true, true, true] }
];
const INTERIOR = [
  { label: "พวงมาลัยแบบมัลติฟังก์ชัน", values: [true, true, true] },
  { label: "พวงมาลัยแบบหุ้มหนังสังเคราะห์", values: [true, true, true] },
  { label: "ระบบแสดงผลบนกระจกหน้า (W-HUD)", values: [false, false, true] },
  { label: "หน้าจอเรือนไมล์ผู้ขับขี่แบบ LCD (นิ้ว)", values: ["12.3", "12.3", "12.3"] },
  { label: "กระจกมองหลังตัดแสงอัตโนมัติ", values: [false, true, true] },
  { label: "ช่องเก็บแว่นตา", values: [true, true, true] },
  { label: "เบาะนั่งแบบหุ้มหนังสังเคราะห์", values: [true, true, true] },
  { label: "เบาะนั่งผู้ขับขี่ปรับไฟฟ้า 6 ทิศทาง", values: [true, false, false] },
  { label: "เบาะนั่งผู้ขับขี่ปรับไฟฟ้า 8 ทิศทาง", values: [false, true, true] },
  { label: "เบาะนั่งผู้โดยสารด้านหน้าปรับไฟฟ้า 4 ทิศทาง", values: [true, true, true] },
  { label: "เบาะนั่งคู่หน้าพร้อมระบบระบายอากาศ", values: [false, true, true] },
  { label: "ระบบจดจำตำแหน่งที่นั่งเบาะคนขับ", values: [false, false, true] },
  { label: "พนักพิงศีรษะที่เบาะนั่งโดยสารด้านหลัง ปรับระดับสูง-ต่ำได้", values: [true, true, true] },
  { label: "ระบบปรับองศาพนักพิงเบาะโดยสารตอนหลัง", values: [true, true, true] },
  { label: "คอนโซลกลาง พร้อมที่วางแก้ว 2 ช่อง", values: [true, true, true] },
  { label: "ที่พักแขนด้านหลัง พร้อมที่วางแก้ว 2 ช่อง", values: [true, true, true] },
  { label: "ชายบันไดเหล็กกันรอยขีดข่วน", values: [false, true, true] },
  { label: "ที่บังแดดด้านหน้าพร้อมกระจกและไฟส่องสว่าง", values: [true, true, true] },
  { label: "ระบบแสงไฟในห้องโดยสารปรับตามจังหวะ (RGB Dynamic Mood Lights)", values: [false, true, true] },
  { label: "ไฟส่องแผนที่ด้านหน้า แบบ LED", values: [true, true, true] },
  { label: "ไฟส่องแผนที่ด้านข้างสำหรับผู้โดยสารตอนหลัง แบบ LED", values: [true, true, true] },
  { label: "ไฟส่องสว่างในพื้นที่เก็บสัมภาระ", values: [true, true, true] },
  { label: "จุดยึดเบาะนั่งเด็กแบบ ISOFIX", values: [true, true, true] }
];
const INTERIOR_EN = [
  { label: "Multifunction steering wheel", values: [true, true, true] },
  { label: "Synthetic leather steering wheel", values: [true, true, true] },
  { label: "Windshield head-up display (W-HUD)", values: [false, false, true] },
  { label: "LCD driver instrument display (inches)", values: ["12.3", "12.3", "12.3"] },
  { label: "Auto-dimming rear-view mirror", values: [false, true, true] },
  { label: "Sunglasses holder", values: [true, true, true] },
  { label: "Synthetic leather seats", values: [true, true, true] },
  { label: "6-way power-adjustable driver seat", values: [true, false, false] },
  { label: "8-way power-adjustable driver seat", values: [false, true, true] },
  { label: "4-way power-adjustable front passenger seat", values: [true, true, true] },
  { label: "Ventilated front seats", values: [false, true, true] },
  { label: "Driver seat memory", values: [false, false, true] },
  { label: "Height-adjustable rear-seat headrests", values: [true, true, true] },
  { label: "Rear seatback angle adjustment", values: [true, true, true] },
  { label: "Centre console with two cup holders", values: [true, true, true] },
  { label: "Rear armrest with two cup holders", values: [true, true, true] },
  { label: "Metal scuff plates", values: [false, true, true] },
  { label: "Front sun visors with vanity mirrors and lights", values: [true, true, true] },
  { label: "RGB Dynamic Mood Lights", values: [false, true, true] },
  { label: "Front LED map lights", values: [true, true, true] },
  { label: "Rear passenger side LED map lights", values: [true, true, true] },
  { label: "Cargo area light", values: [true, true, true] },
  { label: "ISOFIX child-seat anchors", values: [true, true, true] }
];
const MULTIMEDIA = [
  { label: "หน้าจอสัมผัสระบบมัลติมีเดีย 12.8 นิ้ว", values: [true, false, false] },
  { label: "หน้าจอสัมผัสระบบมัลติมีเดีย 15.6 นิ้ว", values: [false, true, true] },
  { label: "รองรับการเชื่อมต่อโทรศัพท์มือถือผ่านบลูทูธ", values: [true, true, true] },
  { label: "รองรับ Apple CarPlay และ Android Auto", values: [true, true, true] },
  { label: "วิทยุ FM", values: [true, true, true] },
  { label: "ลำโพง 9 ตำแหน่ง", values: [true, false, false] },
  { label: "ระบบเครื่องเสียง Infinity พร้อมลำโพง 10 ตำแหน่ง", values: [false, true, true] },
  { label: "ระบบสั่งงานด้วยเสียงภาษาไทย / ภาษาอังกฤษ", values: [true, true, true] },
  { label: "มิวสิคสตรีมมิ่ง", values: [true, true, true] },
  { label: "BYD Store", values: [true, true, true] },
  { label: "ช่อง USB-C และ USB-A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารด้านหน้า", values: [true, true, true] },
  { label: "ช่อง USB-C และ USB-A อย่างละ 1 ตำแหน่ง สำหรับผู้โดยสารด้านหลัง", values: [true, true, true] },
  { label: "ช่องจ่ายไฟ 12V", values: [true, true, true] },
  { label: "รองรับการอัปเดตซอฟต์แวร์ผ่านสัญญาณอินเทอร์เน็ต (OTA)", values: [true, true, true] },
  { label: "ระบบ Keyless Entry และ Keyless Start", values: [true, true, true] },
  { label: "ระบบกุญแจแบบบัตรอิเล็กทรอนิกส์ NFC (NFC Card)", values: [true, true, true] },
  { label: "BYD Digital Key", values: [true, true, true] },
  { label: "ที่ชาร์จโทรศัพท์มือถือแบบไร้สาย 2 ตำแหน่ง (กำลังสูงสุด 15W)", values: [true, true, false] },
  { label: "ที่ชาร์จโทรศัพท์มือถือแบบไร้สาย (กำลังสูงสุด 50W)", values: [false, false, true] },
  { label: "ระบบปรับอากาศแบบ 2 โซน", values: [true, true, true] },
  { label: "ช่องระบายอากาศด้านหลัง", values: [true, true, true] },
  { label: "ระบบกรองฝุ่น PM2.5 แบบประสิทธิภาพสูง (CN95)", values: [true, true, true] }
];
const MULTIMEDIA_EN = [
  { label: "12.8-inch multimedia touchscreen", values: [true, false, false] },
  { label: "15.6-inch multimedia touchscreen", values: [false, true, true] },
  { label: "Bluetooth mobile phone connectivity", values: [true, true, true] },
  { label: "Apple CarPlay and Android Auto", values: [true, true, true] },
  { label: "FM radio", values: [true, true, true] },
  { label: "9-speaker system", values: [true, false, false] },
  { label: "Infinity audio system with 10 speakers", values: [false, true, true] },
  { label: "Thai / English voice command", values: [true, true, true] },
  { label: "Music streaming", values: [true, true, true] },
  { label: "BYD Store", values: [true, true, true] },
  { label: "One USB-C and one USB-A port for front passengers", values: [true, true, true] },
  { label: "One USB-C and one USB-A port for rear passengers", values: [true, true, true] },
  { label: "12V power outlet", values: [true, true, true] },
  { label: "Over-the-air software updates (OTA)", values: [true, true, true] },
  { label: "Keyless Entry and Keyless Start", values: [true, true, true] },
  { label: "NFC Card key", values: [true, true, true] },
  { label: "BYD Digital Key", values: [true, true, true] },
  { label: "Dual wireless phone chargers (max 15W)", values: [true, true, false] },
  { label: "Wireless phone charger (max 50W)", values: [false, false, true] },
  { label: "Dual-zone air conditioning", values: [true, true, true] },
  { label: "Rear air vents", values: [true, true, true] },
  { label: "High-efficiency PM2.5 filter (CN95)", values: [true, true, true] }
];
const SAFETY = [
  { label: "ถุงลมนิรภัยคู่หน้า - ฝั่งคนขับและผู้โดยสารตอนหน้า", values: [true, true, true] },
  { label: "ถุงลมนิรภัยด้านข้าง - ฝั่งคนขับและผู้โดยสารตอนหน้า", values: [true, true, true] },
  { label: "ม่านถุงลมนิรภัยด้านข้าง ด้านหน้าและด้านหลัง", values: [true, true, true] },
  { label: "เข็มขัดนิรภัยคู่หน้าแบบผ่อนแรง และดึงกลับอัตโนมัติ", values: [true, true, true] },
  { label: "เข็มขัดนิรภัยด้านหลังแบบผ่อนแรง และดึงกลับอัตโนมัติ", values: [true, true, true] },
  { label: "ระบบเตือนคาดเข็มขัดนิรภัย ด้านหน้าและด้านหลัง", values: [true, true, true] },
  { label: "กล้องมองภาพรอบคัน 360 องศา", values: [true, true, true] },
  { label: "ระบบตรวจสอบแรงดันลมยาง (TPMS)", values: [true, true, true] },
  { label: "เซนเซอร์ช่วยตรวจจับวัตถุด้านหน้า 2 ตำแหน่ง", values: [true, true, true] },
  { label: "เซนเซอร์ช่วยตรวจจับวัตถุด้านหลัง 4 ตำแหน่ง", values: [true, true, true] },
  { label: "ตัวล็อคเพื่อป้องกันเด็กเปิดประตู", values: [true, true, true] },
  { label: "ระบบช่วยเบรกอัจฉริยะ", values: [true, true, true] },
  { label: "ระบบช่วยเสริมแรงเบรกอัจฉริยะ (HBB)", values: [true, true, true] },
  { label: "ระบบช่วยกระจายแรงเบรกอัจฉริยะ (HBA)", values: [true, true, true] },
  { label: "ระบบควบคุมการกระจายแรงเบรก (EBD)", values: [true, true, true] },
  { label: "ระบบควบคุมการทรงตัวบนทางลาดชัน (HHC)", values: [true, true, true] },
  { label: "ระบบช่วยควบคุมการไหลของรถอัตโนมัติ (AVH)", values: [true, true, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติ (CC)", values: [true, false, false] },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผัน (ACC)", values: [false, true, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัตโนมัติแบบแปรผันอัจฉริยะ (ICC)", values: [false, true, true] },
  { label: "ระบบแจ้งเตือนจำกัดความเร็วอัจฉริยะ (ISLW)", values: [false, true, true] },
  { label: "ระบบช่วยควบคุมความเร็วอัจฉริยะ (ISLC)", values: [false, true, true] },
  { label: "ระบบช่วยเบรกฉุกเฉินอัตโนมัติ (AEB)", values: [false, true, true] },
  { label: "ระบบช่วยเตือนเมื่อรถออกนอกเลน (LDW)", values: [false, true, true] },
  { label: "ระบบช่วยควบคุมรถไม่ให้ออกนอกช่องทางเดินรถ (LDP)", values: [false, true, true] },
  { label: "ระบบช่วยรักษาช่องทางเดินรถฉุกเฉิน (ELKA)", values: [false, false, true] },
  { label: "ระบบช่วยเตือนการชนด้านหน้า (FCW)", values: [false, true, true] },
  { label: "ระบบช่วยเตือนการชนด้านหลัง (RCW)", values: [false, true, true] },
  { label: "ระบบจดจำป้ายสัญญาณจราจร (TSR)", values: [false, true, true] },
  { label: "ระบบช่วยเตือนเมื่อมีรถผ่านในจุดอับสายตาขณะถอยหลัง (RCTA)", values: [false, true, true] },
  { label: "ระบบช่วยเบรกเมื่อมีรถผ่านในจุดอับสายตาขณะถอยหลัง (RCTB)", values: [false, true, true] },
  { label: "ระบบช่วยเตือนจุดอับสายตา (BSD)", values: [false, true, true] },
  { label: "ระบบช่วยเตือนวัตถุเคลื่อนผ่านขณะเปิดประตู (DOW)", values: [false, true, true] },
  { label: "ระบบช่วยเปิดไฟสูงอัตโนมัติ (HMA)", values: [false, true, true] }
];
const SAFETY_EN = [
  { label: "Front airbags - driver and front passenger", values: [true, true, true] },
  { label: "Side airbags - driver and front passenger", values: [true, true, true] },
  { label: "Side curtain airbags - front and rear", values: [true, true, true] },
  { label: "Front seat belts with force limiter and pretensioner", values: [true, true, true] },
  { label: "Rear seat belts with force limiter and pretensioner", values: [true, true, true] },
  { label: "Front and rear seat-belt reminder", values: [true, true, true] },
  { label: "360-degree surround-view camera", values: [true, true, true] },
  { label: "Tyre pressure monitoring system (TPMS)", values: [true, true, true] },
  { label: "Front parking sensors, 2 positions", values: [true, true, true] },
  { label: "Rear parking sensors, 4 positions", values: [true, true, true] },
  { label: "Child door lock", values: [true, true, true] },
  { label: "Intelligent brake assist", values: [true, true, true] },
  { label: "Hydraulic brake boost (HBB)", values: [true, true, true] },
  { label: "Hydraulic brake assist (HBA)", values: [true, true, true] },
  { label: "Electronic brakeforce distribution (EBD)", values: [true, true, true] },
  { label: "Hill hold control (HHC)", values: [true, true, true] },
  { label: "Automatic vehicle hold (AVH)", values: [true, true, true] },
  { label: "Cruise control (CC)", values: [true, false, false] },
  { label: "Adaptive cruise control (ACC)", values: [false, true, true] },
  { label: "Intelligent cruise control (ICC)", values: [false, true, true] },
  { label: "Intelligent speed limit warning (ISLW)", values: [false, true, true] },
  { label: "Intelligent speed limit control (ISLC)", values: [false, true, true] },
  { label: "Autonomous emergency braking (AEB)", values: [false, true, true] },
  { label: "Lane departure warning (LDW)", values: [false, true, true] },
  { label: "Lane departure prevention (LDP)", values: [false, true, true] },
  { label: "Emergency lane keeping assist (ELKA)", values: [false, false, true] },
  { label: "Forward collision warning (FCW)", values: [false, true, true] },
  { label: "Rear collision warning (RCW)", values: [false, true, true] },
  { label: "Traffic sign recognition (TSR)", values: [false, true, true] },
  { label: "Rear cross traffic alert (RCTA)", values: [false, true, true] },
  { label: "Rear cross traffic braking (RCTB)", values: [false, true, true] },
  { label: "Blind spot detection (BSD)", values: [false, true, true] },
  { label: "Door open warning (DOW)", values: [false, true, true] },
  { label: "High beam assist (HMA)", values: [false, true, true] }
];
const COLORS_SPEC = [
  { label: "สีเทา Harbour Grey", values: [false, false, true] },
  { label: "สีขาว Horizon White", values: [true, true, false] },
  { label: "สีดำ Quantum Black", values: [true, true, false] },
  { label: "สีภายใน สีดำ / สีน้ำตาล", values: [true, true, false] },
  { label: "สีภายใน สีดำ", values: [false, false, true] }
];
const COLORS_SPEC_EN = [
  { label: "Harbour Grey exterior", values: [false, false, true] },
  { label: "Horizon White exterior", values: [true, true, false] },
  { label: "Quantum Black exterior", values: [true, true, false] },
  { label: "Black / brown interior", values: [true, true, false] },
  { label: "Black interior", values: [false, false, true] }
];
const STORY_SECTIONS_EN = [
  {
    image: overviewImage,
    title: "BLADE BATTERY",
    subtitle: "Safety Technology",
    body: "BYD's exclusive battery innovation prioritizes safety and durability while staying confident for everyday driving."
  },
  {
    image: bladeBatteryImage,
    title: "SMART CONNECTED CABIN",
    subtitle: "Premium Experience",
    body: "A large display, rich entertainment features, and driving assistance that elevate comfort in both city and long-distance travel."
  },
  {
    image: heroBanner$3,
    title: "OCEAN SERIES DESIGN",
    subtitle: "Exterior & Interior",
    body: "The OCEAN SERIES identity is expressed through sharp exterior lines and a cabin focused on premium feel, ease of use, and modern lifestyle needs."
  }
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
function BydSealion6DmiBrochure({ model }) {
  const { locale } = useI18n();
  const isEn = locale === "en";
  const [trim, setTrim] = reactExports.useState("premium");
  const [activeColor, setActiveColor] = reactExports.useState(0);
  const [galleryTab, setGalleryTab] = reactExports.useState("exterior");
  const [activeGallery, setActiveGallery] = reactExports.useState(0);
  const [videoPlaying, setVideoPlaying] = reactExports.useState(false);
  const videoRef = reactExports.useRef(null);
  const r = calcInstallment(model.priceFrom, 25, 6, 2.69);
  const currentTrim = TRIMS.find((t) => t.key === trim);
  const galleryItems = galleryTab === "exterior" ? isEn ? EXTERIOR_GALLERY_EN : EXTERIOR_GALLERY : isEn ? INTERIOR_GALLERY_EN : INTERIOR_GALLERY;
  const storySections = isEn ? STORY_SECTIONS_EN : [
    {
      image: overviewImage,
      title: "BLADE BATTERY",
      subtitle: "Safety Technology",
      body: "นวัตกรรมแบตเตอรี่เอกสิทธิ์เฉพาะของ BYD ที่ให้ความสำคัญกับความปลอดภัยและความทนทาน พร้อมรองรับการใช้งานทุกวันอย่างมั่นใจ"
    },
    {
      image: bladeBatteryImage,
      title: "SMART CONNECTED CABIN",
      subtitle: "Premium Experience",
      body: "หน้าจอขนาดใหญ่ ระบบความบันเทิงครบ และฟีเจอร์ช่วยขับที่ยกระดับความสะดวกสบายในการเดินทางทั้งในเมืองและนอกเมือง"
    },
    {
      image: heroBanner$3,
      title: "OCEAN SERIES DESIGN",
      subtitle: "Exterior & Interior",
      body: "ถ่ายทอดเอกลักษณ์ดีไซน์ OCEAN SERIES ผ่านเส้นสายภายนอกที่โฉบเฉี่ยวและห้องโดยสารที่เน้นความพรีเมียม ใช้งานง่าย และรองรับไลฟ์สไตล์ยุคใหม่"
    }
  ];
  const dimensions = isEn ? DIMENSIONS_EN : DIMENSIONS;
  const drivetrain = isEn ? DRIVETRAIN_EN : DRIVETRAIN;
  const performance = isEn ? PERFORMANCE_EN : PERFORMANCE;
  const charging = isEn ? CHARGING_EN : CHARGING;
  const chassis = isEn ? CHASSIS_EN : CHASSIS;
  const exterior = isEn ? EXTERIOR_EN : EXTERIOR;
  const interior = isEn ? INTERIOR_EN : INTERIOR;
  const multimedia = isEn ? MULTIMEDIA_EN : MULTIMEDIA;
  const safety = isEn ? SAFETY_EN : SAFETY;
  const colorsSpec = isEn ? COLORS_SPEC_EN : COLORS_SPEC;
  const handlePlayVideo = reactExports.useCallback(() => {
    if (videoRef.current) {
      void videoRef.current.play();
      setVideoPlaying(true);
    }
  }, []);
  reactExports.useEffect(() => {
    setActiveGallery(0);
  }, [galleryTab]);
  const faqs = [
    {
      q: isEn ? "How much is the BYD SEALION 6 DM-i?" : "BYD SEALION 6 DM-i ราคาเท่าไร?",
      a: isEn ? "Dynamic starts at ฿879,900, Extended at ฿969,900, and Premium at ฿999,900, with the latest promotions from our advisors" : "Dynamic 879,900 บาท · Extended 969,900 บาท · Premium 999,900 บาท พร้อมโปรโมชันล่าสุดจากทีมที่ปรึกษา"
    },
    {
      q: isEn ? "What kind of powertrain does it use?" : "ระบบขับเคลื่อนเป็นแบบไหน?",
      a: isEn ? "DM-i Super Hybrid plug-in hybrid with front-wheel drive (FWD)" : "ปลั๊กอินไฮบริด DM-i Super Hybrid ขับเคลื่อนล้อหน้า (FWD)"
    },
    {
      q: isEn ? "What charging does it support?" : "รองรับการชาร์จแบบใดบ้าง?",
      a: isEn ? "Supports AC Type 2 up to 6.6 kW, DC CCS2 up to 18 kW on Dynamic and Premium, DC CCS2 up to 55 kW on Extended, and V2L" : "รองรับ AC Type 2 สูงสุด 6.6 kW, DC CCS2 สูงสุด 18 kW ในรุ่น Dynamic และ Premium, DC CCS2 สูงสุด 55 kW ในรุ่น Extended และรองรับ V2L"
    },
    {
      q: isEn ? "What is the total system output?" : "SEALION 6 DM-i กำลังรวมเท่าไร?",
      a: isEn ? "Total system output is 160 kW with 300 Nm of torque" : "กำลังรวมสูงสุด 160 kW และแรงบิดรวมสูงสุด 300 Nm"
    },
    {
      q: isEn ? "What is the starting monthly payment?" : "ผ่อนเริ่มต้นเดือนละเท่าไร?",
      a: isEn ? `Monthly payments start from approximately ${formatBaht(r.monthly)}/month (25% down, 72 installments, 2.69% interest)` : `ค่างวดเริ่มต้นประมาณ ${formatBaht(r.monthly)}/เดือน (ดาวน์ 25% ผ่อน 72 งวด ดอกเบี้ย 2.69%)`
    }
  ];
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: model.name,
    description: "BYD SEALION 6 DM-i รถยนต์ Plug-in Hybrid พร้อมเทคโนโลยี DM-i Super Hybrid",
    vehicleModelDate: "2026",
    bodyType: "SUV",
    fuelType: "Plug-in Hybrid",
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBanner$3, alt: "BYD SEALION 6 DM-i", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full px-6 sm:px-12 lg:px-20 pb-16 pt-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full border border-primary/40 px-3 py-1 text-xs text-primary mb-4 backdrop-blur-sm bg-background/20", children: isEn ? "DM-i Super Hybrid SUV · Blade Battery · 2026" : "DM-i Super Hybrid SUV · Blade Battery · 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl sm:text-7xl lg:text-8xl font-black tracking-normal leading-none", children: "BYD SEALION 6 DM-i" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xl sm:text-2xl text-muted-foreground font-light tracking-widest", children: isEn ? "EFFICIENCY UNLEASHED" : "EFFICIENCY UNLEASHED" })
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
          { label: isEn ? "System Power" : "System Power", val: "160 kW" },
          { label: isEn ? "Max Torque" : "Max Torque", val: "300 Nm" },
          { label: isEn ? "Battery" : "Battery", val: "18.3 kWh" },
          { label: isEn ? "AC Charging" : "AC Charging", val: "6.6 kW" },
          { label: isEn ? "DC Charging" : "DC Charging", val: "18 kW" }
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
          { label: isEn ? "Drive System" : "ระบบขับเคลื่อน", val: currentTrim.drive },
          { label: isEn ? "0-100 km/h" : "0-100 km/h", val: `${currentTrim.accel} sec` },
          { label: isEn ? "NEDC EV Range" : "ระยะทาง NEDC", val: currentTrim.range },
          { label: isEn ? "System Power" : "กำลังรวมสูงสุด", val: currentTrim.power },
          { label: isEn ? "Battery" : "แบตเตอรี่", val: currentTrim.battery },
          { label: isEn ? "Fast Charge" : "ชาร์จเร็ว", val: currentTrim.charge }
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
          src: VIDEO_URL,
          poster: heroBanner$3,
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white text-lg font-semibold tracking-widest uppercase", children: isEn ? "BYD SEALION 6 DM-i - Official Film" : "BYD SEALION 6 DM-i - Official Film" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-surface/40 border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Design" : "Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Choose the color that suits you" : "เลือกสีที่ใช่สำหรับคุณ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "flex-1 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden rounded-2xl", style: { background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)", aspectRatio: "16/9" }, children: COLORS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          COLORS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
          item.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg", children: galleryItems[activeGallery].label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-1", children: galleryItems[activeGallery].desc })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-6 gap-3 mt-4", children: galleryItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActiveGallery(i),
          className: `relative overflow-hidden rounded-xl transition-all ${activeGallery === i ? "ring-2 ring-primary opacity-100" : "opacity-55 hover:opacity-85"}`,
          style: { aspectRatio: "16/9" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.label, className: "w-full h-full object-cover" })
        },
        item.label
      )) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border overflow-hidden", children: storySections.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Tech Spec" : "Tech Spec" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Technical specifications" : "ข้อมูลเทคนิค" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Dynamic · Premium · Extended" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Dimensions" : "ขนาดและมิติ", icon: Ruler, rows: dimensions, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Powertrain" : "ระบบส่งกำลัง", icon: Zap, rows: drivetrain, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Performance" : "สมรรถนะ", icon: Gauge, rows: performance, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Charging" : "ระบบการชาร์จ", icon: Battery, rows: charging, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Chassis & equipment" : "ช่วงล่างและอุปกรณ์", icon: Weight, rows: chassis, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Exterior equipment" : "อุปกรณ์มาตรฐานภายนอก", icon: ShieldCheck, rows: exterior, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Interior equipment" : "อุปกรณ์มาตรฐานภายใน", icon: ShieldCheck, rows: interior, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Multimedia & comfort" : "มัลติมีเดียและความสะดวกสบาย", icon: Zap, rows: multimedia, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Safety" : "ระบบความปลอดภัย", icon: ShieldCheck, rows: safety, isEn }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpecTable, { title: isEn ? "Exterior & interior colours" : "สีภายนอกและสีภายใน", icon: ShieldCheck, rows: colorsSpec, isEn }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "installment", className: "py-20 bg-surface/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Finance" : "Finance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "BYD SEALION 6 DM-i installment plan" : "ตารางผ่อน BYD SEALION 6 DM-i" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Calculate the monthly payment that fits you instantly" : "คำนวณค่างวดที่เหมาะกับคุณได้ทันที" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstallmentCalculator, { defaultSlug: model.slug }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "test-drive", className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-sm font-semibold mb-2", children: isEn ? "Test Drive" : "Test Drive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: isEn ? "Book a BYD SEALION 6 DM-i test drive" : "นัดทดลองขับ BYD SEALION 6 DM-i" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: isEn ? "Free service with no charge. Our team is ready to help every step of the way." : "บริการฟรี ไม่มีค่าใช้จ่าย ทีมงานพร้อมดูแลทุกขั้นตอน" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestDriveForm, { defaultModel: model.name }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: faqs, title: isEn ? "Frequently asked questions about BYD SEALION 6 DM-i" : "คำถามที่พบบ่อยเกี่ยวกับ BYD SEALION 6 DM-i" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-medium px-6 py-3 w-2/5 normal-case", children: isEn ? "Item" : "รายการ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Dynamic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Premium" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center font-medium px-3 py-3", children: "Extended" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-background/20" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/90", children: row.label }),
        row.values.map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: v, isEn }) }, idx))
      ] }, row.label)) })
    ] }) })
  ] });
}
function Cell({ value, isEn }) {
  if (value === true) return /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-primary mx-auto", "aria-label": isEn ? "Yes" : "มี" });
  if (value === false) return /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4 text-muted-foreground mx-auto", "aria-label": isEn ? "No" : "ไม่มี" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value });
}
function Sealion6DmiRoute() {
  const model = getInstallmentModel("byd-sealion6-dmi") ?? fallbackModel;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BydSealion6DmiBrochure, { model });
}
export {
  Sealion6DmiRoute as component
};
