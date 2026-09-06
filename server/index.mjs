globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { H as HTTPError, d as defineHandler, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/google239fe4228e210e22.html": {
    "type": "text/html; charset=utf-8",
    "etag": '"35-Qunq71oJVuTn8WmYznbdFLX9qdk"',
    "mtime": "2026-09-06T01:38:38.573Z",
    "size": 53,
    "path": "../public/google239fe4228e210e22.html"
  },
  "/llms.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"34e-2/22e7OazsD/39HmQdwu3G28Q+c"',
    "mtime": "2026-09-06T01:38:38.574Z",
    "size": 846,
    "path": "../public/llms.txt"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"46-ga4Q627Q/MiW256MsOYGwMGPEMo"',
    "mtime": "2026-09-06T01:38:38.573Z",
    "size": 70,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"be4-SSGJL0c7/qR9gpRkuskiUi3FSRs"',
    "mtime": "2026-09-06T01:38:38.573Z",
    "size": 3044,
    "path": "../public/sitemap.xml"
  },
  "/assets/BYD-แจ้งวัฒนะ-1536x556-Cj-LAAmg.jpg": {
    "type": "image/jpeg",
    "etag": '"24f7c-Za/ibR7f+MET0xSWOZ7njaFBS40"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 151420,
    "path": "../public/assets/BYD-แจ้งวัฒนะ-1536x556-Cj-LAAmg.jpg"
  },
  "/assets/ContactBranchMap-CGoz3Q9q.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"3af4-DwNuVYap9sNCFe2ywhL3F4eGYuU"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 15092,
    "path": "../public/assets/ContactBranchMap-CGoz3Q9q.css"
  },
  "/assets/DB-Heavent-Now-Ext-Med-v4-CZZ7TJsR.woff2": {
    "type": "font/woff2",
    "etag": '"72a8-l+jyh+1AMt+ftV3y63GUPdDnjEc"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 29352,
    "path": "../public/assets/DB-Heavent-Now-Ext-Med-v4-CZZ7TJsR.woff2"
  },
  "/assets/FAQ-9oq2GxN2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"567-ECNM26WHlSstMzI3YOERj1erkJA"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 1383,
    "path": "../public/assets/FAQ-9oq2GxN2.js"
  },
  "/assets/InstallmentCalculator-CnwFWtae.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bc2-c4aYmmp+JN+pasfsrgnAwHXFg2Q"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 3010,
    "path": "../public/assets/InstallmentCalculator-CnwFWtae.js"
  },
  "/assets/ModelsScroller-Gk2oa8T0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1cdb-Uv8FmWHnRTG0YHlvXhX0pAn1V6k"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 7387,
    "path": "../public/assets/ModelsScroller-Gk2oa8T0.js"
  },
  "/assets/ContactBranchMap-CEvdCCe9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"25e32-pUcHw8XLu7URLgEu/4GTJJ/Xe9s"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 155186,
    "path": "../public/assets/ContactBranchMap-CEvdCCe9.js"
  },
  "/assets/New-BYD-ATTO-3-Black-hND6Lj9l.webp": {
    "type": "image/webp",
    "etag": '"24370-UycAsyaLwPwfPbW32Xgo2LReKs8"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 148336,
    "path": "../public/assets/New-BYD-ATTO-3-Black-hND6Lj9l.webp"
  },
  "/assets/_slug-CqGVu0yB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"873-TbYUj/lKz4jwq1isGGc61CQ5GPI"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 2163,
    "path": "../public/assets/_slug-CqGVu0yB.js"
  },
  "/assets/_slug-SLJ91t0M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4ee-CSubE4o90u833c5AuMTJoE9yays"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 1262,
    "path": "../public/assets/_slug-SLJ91t0M.js"
  },
  "/assets/alloy-wheel-JTGMFX99.jpeg": {
    "type": "image/jpeg",
    "etag": '"c4fa-xMnf8nvMfOXq5xNn8wk1d0JdHTY"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 50426,
    "path": "../public/assets/alloy-wheel-JTGMFX99.jpeg"
  },
  "/assets/aluminum-side-sill-oGM2UTH-.jpeg": {
    "type": "image/jpeg",
    "etag": '"1606e-OCetZSO/yHoyOkEpMGZVZxGDYhs"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 90222,
    "path": "../public/assets/aluminum-side-sill-oGM2UTH-.jpeg"
  },
  "/assets/armrest-CDLdZJh3.webp": {
    "type": "image/webp",
    "etag": '"126fc-+ylaQefpRtI1pGjyQFzFeBl3Eu4"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 75516,
    "path": "../public/assets/armrest-CDLdZJh3.webp"
  },
  "/assets/arrow-left-MtYHLkhy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-4Xw0y+5jNrQYs7/3Puom9OQzR7s"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 166,
    "path": "../public/assets/arrow-left-MtYHLkhy.js"
  },
  "/assets/arrow-right-_214-Kau.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-9iOoNM7DTrxWcVJXmDwf6Wmu9PI"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 166,
    "path": "../public/assets/arrow-right-_214-Kau.js"
  },
  "/assets/TestDriveForm-Cegr0vYk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e8f1-1BKGoOexlAa7rKkbaM8cQB5Ew1M"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 125169,
    "path": "../public/assets/TestDriveForm-Cegr0vYk.js"
  },
  "/assets/alloy-wheels-bMkJ1gx8.jpeg": {
    "type": "image/jpeg",
    "etag": '"20108-EIaco3GrOKUi862cdwRPc9TFkZA"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 131336,
    "path": "../public/assets/alloy-wheels-bMkJ1gx8.jpeg"
  },
  "/assets/BYD-ATTO3-VtoL-Vehicle-to-Load-CLq1uBAe.jpg": {
    "type": "image/jpeg",
    "etag": '"a8d4d-ojl9CdeZJTadf783NOcCiMgsozc"',
    "mtime": "2026-09-06T01:38:36.401Z",
    "size": 691533,
    "path": "../public/assets/BYD-ATTO3-VtoL-Vehicle-to-Load-CLq1uBAe.jpg"
  },
  "/assets/atto1-banner-desktop-DaakPOb4.jpeg": {
    "type": "image/jpeg",
    "etag": '"8191e-RIDhRazBL46MobOI/gmEky7jAr0"',
    "mtime": "2026-09-06T01:38:36.406Z",
    "size": 530718,
    "path": "../public/assets/atto1-banner-desktop-DaakPOb4.jpeg"
  },
  "/assets/SpaceGrey-CRoj_Hfu.png": {
    "type": "image/png",
    "etag": '"9ac23-6Qca70MMLelFxOxM91iy1PJkFQY"',
    "mtime": "2026-09-06T01:38:36.418Z",
    "size": 633891,
    "path": "../public/assets/SpaceGrey-CRoj_Hfu.png"
  },
  "/assets/atto1-description-2-Do-R3dXR.jpeg": {
    "type": "image/jpeg",
    "etag": '"3f29-6dnedSkgAidyUISsSqU/3q6HLJM"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 16169,
    "path": "../public/assets/atto1-description-2-Do-R3dXR.jpeg"
  },
  "/assets/atto1-quantum-black-model-kH_4bcl8.png": {
    "type": "image/png",
    "etag": '"3334c-il3NQRjPlSm1nwaQUrnSidph3b4"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 209740,
    "path": "../public/assets/atto1-quantum-black-model-kH_4bcl8.png"
  },
  "/assets/atto1-description-1-w4KfBWs3.jpeg": {
    "type": "image/jpeg",
    "etag": '"3b029-4lJtFX4DCKJ/Uzlw2LLkSCc2Zfk"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 241705,
    "path": "../public/assets/atto1-description-1-w4KfBWs3.jpeg"
  },
  "/assets/atto1-pop-green-model-2GJyyGtp.png": {
    "type": "image/png",
    "etag": '"3f812-NhC8NELjCNSzsyjGOBUECwXj6ic"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 260114,
    "path": "../public/assets/atto1-pop-green-model-2GJyyGtp.png"
  },
  "/assets/atto1-shell-white-model-RjKdg_T1.png": {
    "type": "image/png",
    "etag": '"3ec8d-V7vn/fprXKViiZXdAETJxVAf7Ws"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 257165,
    "path": "../public/assets/atto1-shell-white-model-RjKdg_T1.png"
  },
  "/assets/atto2-description-1-BAAPfgXx.webp": {
    "type": "image/webp",
    "etag": '"a56a-/sHKe9Y8yAe/3Z3fc6AjnWxPo70"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 42346,
    "path": "../public/assets/atto2-description-1-BAAPfgXx.webp"
  },
  "/assets/atto2-description-2-CF3cjXDj.jpeg": {
    "type": "image/jpeg",
    "etag": '"13e1d-Ey1lhSr0gjlbud67w5arESK7h6o"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 81437,
    "path": "../public/assets/atto2-description-2-CF3cjXDj.jpeg"
  },
  "/assets/atto1-velocity-blue-model-DODycsY7.png": {
    "type": "image/png",
    "etag": '"450b9-Ya7I4avKW8WRmlSlG2tIMnt1odc"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 282809,
    "path": "../public/assets/atto1-velocity-blue-model-DODycsY7.png"
  },
  "/assets/atto2-description-compact-suv-Czi8QWBs.jpeg": {
    "type": "image/jpeg",
    "etag": '"79680-MkWiNPHWw/WMiJ3w+/0ITNtT7/A"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 497280,
    "path": "../public/assets/atto2-description-compact-suv-Czi8QWBs.jpeg"
  },
  "/assets/atto2-harbour-grey-model-B_LSKQNv.png": {
    "type": "image/png",
    "etag": '"d7075-xwPdCj1t9OqJHjVcD3gX+R5M7HI"',
    "mtime": "2026-09-06T01:38:36.406Z",
    "size": 880757,
    "path": "../public/assets/atto2-harbour-grey-model-B_LSKQNv.png"
  },
  "/assets/atto2-quantum-black-D0qNkSFn.png": {
    "type": "image/png",
    "etag": '"dd6dd-lovb5N4jEk/kbeHwWG9Zh5+mtwQ"',
    "mtime": "2026-09-06T01:38:36.406Z",
    "size": 906973,
    "path": "../public/assets/atto2-quantum-black-D0qNkSFn.png"
  },
  "/assets/atto2-surge-white-model-DjF2MMF8.png": {
    "type": "image/png",
    "etag": '"e702f-w1nZsaVkvmYK7ACIoKFxG0XcbtI"',
    "mtime": "2026-09-06T01:38:36.401Z",
    "size": 946223,
    "path": "../public/assets/atto2-surge-white-model-DjF2MMF8.png"
  },
  "/assets/battery-blade-Ad1EQDWe.jpeg": {
    "type": "image/jpeg",
    "etag": '"16adf-fIPqbCuVKUsitHj4Yx/jO5St6g4"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 92895,
    "path": "../public/assets/battery-blade-Ad1EQDWe.jpeg"
  },
  "/assets/atto2-minimal-green-model-Cw1seS3h.png": {
    "type": "image/png",
    "etag": '"104b1e-jVvY7G/PFRNN5XLfwoE+EsWgMCY"',
    "mtime": "2026-09-06T01:38:36.442Z",
    "size": 1067806,
    "path": "../public/assets/atto2-minimal-green-model-Cw1seS3h.png"
  },
  "/assets/awd-ultimate-interior-01-DPMYAS_d.jpg": {
    "type": "image/jpeg",
    "etag": '"129e56-qAFYMkndhcE6dQZlhvl3PLqm5Eg"',
    "mtime": "2026-09-06T01:38:36.442Z",
    "size": 1220182,
    "path": "../public/assets/awd-ultimate-interior-01-DPMYAS_d.jpg"
  },
  "/assets/blade-battery-KXfMMaFT.jpeg": {
    "type": "image/jpeg",
    "etag": '"90c93-6/l1QSWP7CgqmRG4lGJanpt8HwY"',
    "mtime": "2026-09-06T01:38:36.408Z",
    "size": 593043,
    "path": "../public/assets/blade-battery-KXfMMaFT.jpeg"
  },
  "/assets/atto2-banner-desktop-BjuWDwJy.png": {
    "type": "image/png",
    "etag": '"1a5ad2-lSSDDNZVS/1Nc4+e/Zzjh2X7kwg"',
    "mtime": "2026-09-06T01:38:36.446Z",
    "size": 1727186,
    "path": "../public/assets/atto2-banner-desktop-BjuWDwJy.png"
  },
  "/assets/byd-atto1-DNimh_cH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a600-TjmFt7PK5LZtA5XucyeSvkKKsbw"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 42496,
    "path": "../public/assets/byd-atto1-DNimh_cH.js"
  },
  "/assets/byd-atto3-D_Gkw5DD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"960a-u2+DP5YbRrHS8VTxCusQO3VzrcE"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 38410,
    "path": "../public/assets/byd-atto3-D_Gkw5DD.js"
  },
  "/assets/byd-atto2-DurCVwwp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7c8b-M3Ri6tHAWmGjkw5TyrjBJG8NDg0"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 31883,
    "path": "../public/assets/byd-atto2-DurCVwwp.js"
  },
  "/assets/byd-atto3-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 41,
    "path": "../public/assets/byd-atto3-DtqBFgK5.js"
  },
  "/assets/byd-promotion-DjLBkeIs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"144e-9zY6SRPZpP+0d5tUvQigjCf1k1I"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 5198,
    "path": "../public/assets/byd-promotion-DjLBkeIs.js"
  },
  "/assets/byd-installment-sicL56o2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18dc-3jOG6webvoLqxDIz2e5MwdHOQVk"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 6364,
    "path": "../public/assets/byd-installment-sicL56o2.js"
  },
  "/assets/byd-m6-BJojkgsq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b04a-NdL6Ew3GyNnlZorJg+1Y3SVdobQ"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 45130,
    "path": "../public/assets/byd-m6-BJojkgsq.js"
  },
  "/assets/byd-dolphin-6G0tKZZN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a277-PTEQ2gdyNEwTgto8Ju/SWYz0Gcc"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 41591,
    "path": "../public/assets/byd-dolphin-6G0tKZZN.js"
  },
  "/assets/byd-bg-hero-3vFXOVUH.webp": {
    "type": "image/webp",
    "etag": '"1ad52-I2dS4A2Gc8PyKVZjkPIzXiM8gPg"',
    "mtime": "2026-09-06T01:38:36.377Z",
    "size": 109906,
    "path": "../public/assets/byd-bg-hero-3vFXOVUH.webp"
  },
  "/assets/awd-ultimate-interior-03-DNdF1VSz.jpg": {
    "type": "image/jpeg",
    "etag": '"265826-tP+7QErQPndG9NhvN5uDYxy0D68"',
    "mtime": "2026-09-06T01:38:36.447Z",
    "size": 2512934,
    "path": "../public/assets/awd-ultimate-interior-03-DNdF1VSz.jpg"
  },
  "/assets/awd-ultimate-interior-05-xmdZB-XL.jpg": {
    "type": "image/jpeg",
    "etag": '"21dfed-yPH9n89v4WK7E/s4b4iOx4FwHlI"',
    "mtime": "2026-09-06T01:38:36.447Z",
    "size": 2220013,
    "path": "../public/assets/awd-ultimate-interior-05-xmdZB-XL.jpg"
  },
  "/assets/awd-ultimate-interior-04-D2A9heHw.jpg": {
    "type": "image/jpeg",
    "etag": '"271b82-FwI+Axm9Bj9uRf7tq3QwEwPR0x4"',
    "mtime": "2026-09-06T01:38:36.447Z",
    "size": 2562946,
    "path": "../public/assets/awd-ultimate-interior-04-D2A9heHw.jpg"
  },
  "/videos/home-teaser-desktop.mp4": {
    "type": "video/mp4",
    "etag": '"476d5e-KQeJSByeTHx7UEQW3P+/Lak/7wI"',
    "mtime": "2026-09-06T01:38:38.581Z",
    "size": 4681054,
    "path": "../public/videos/home-teaser-desktop.mp4"
  },
  "/assets/byd-seal-5-dm-i-content-desktop-BTQB4_n3.jpeg": {
    "type": "image/jpeg",
    "etag": '"5a717-jkYQCbaoeDxcGPpnsD0EWNUmqJc"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 370455,
    "path": "../public/assets/byd-seal-5-dm-i-content-desktop-BTQB4_n3.jpeg"
  },
  "/assets/byd-seal-5-dm-i-banner-overview-desktop2-DPBl97ky.jpeg": {
    "type": "image/jpeg",
    "etag": '"4918f-zWAtteHmXsKuV93FwNvUA7Z+usA"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 299407,
    "path": "../public/assets/byd-seal-5-dm-i-banner-overview-desktop2-DPBl97ky.jpeg"
  },
  "/assets/byd-seal-DupzdcD4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ad9c-T51zz6fTJd2AC8JMbscCZFq3AP8"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 44444,
    "path": "../public/assets/byd-seal-DupzdcD4.js"
  },
  "/assets/awd-ultimate-interior-06-nz02e0vy.jpg": {
    "type": "image/jpeg",
    "etag": '"29f132-ieUXp1Ile2HNsTCISOit2fyXY+4"',
    "mtime": "2026-09-06T01:38:36.450Z",
    "size": 2748722,
    "path": "../public/assets/awd-ultimate-interior-06-nz02e0vy.jpg"
  },
  "/assets/byd-seal5dmi-BbZ7fC2u.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7880-JcoLZGbb1vnYbOHf+YuRARo1/jY"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 30848,
    "path": "../public/assets/byd-seal5dmi-BbZ7fC2u.js"
  },
  "/assets/byd-seal6-T5eQT4s1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"73e8-CmsEfcaw7cjGAx5ZE1uBIXLJKaM"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 29672,
    "path": "../public/assets/byd-seal6-T5eQT4s1.js"
  },
  "/assets/byd-sealion-6-dm-i-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 41,
    "path": "../public/assets/byd-sealion-6-dm-i-DtqBFgK5.js"
  },
  "/assets/awd-ultimate-interior-08-TaOgbSt_.jpg": {
    "type": "image/jpeg",
    "etag": '"2b7914-uMcIfbpAzz8jzt/vIc3LhI1p+j8"',
    "mtime": "2026-09-06T01:38:36.450Z",
    "size": 2849044,
    "path": "../public/assets/awd-ultimate-interior-08-TaOgbSt_.jpg"
  },
  "/assets/byd-seal-5-dm-i-content-desktop-CxPLvsBH.jpeg": {
    "type": "image/jpeg",
    "etag": '"9ad5b-7WQq84rB5XOjfW8RxClxOZjFFdo"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 634203,
    "path": "../public/assets/byd-seal-5-dm-i-content-desktop-CxPLvsBH.jpeg"
  },
  "/assets/byd-sealion5dmi-2YpbWGBv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"88b2-sDRU6jCaqiOh1dQjhJwKcZtUh50"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 34994,
    "path": "../public/assets/byd-sealion5dmi-2YpbWGBv.js"
  },
  "/assets/awd-ultimate-interior-02-CMTmAjXd.jpg": {
    "type": "image/jpeg",
    "etag": '"3bcb12-DL/K6enc5ERAScgKl1PLSyW1PXc"',
    "mtime": "2026-09-06T01:38:36.451Z",
    "size": 3918610,
    "path": "../public/assets/awd-ultimate-interior-02-CMTmAjXd.jpg"
  },
  "/assets/awd-ultimate-interior-07-C2E8w2gz.jpg": {
    "type": "image/jpeg",
    "etag": '"3f892a-ENheG18KFgEz/m9o9+TnlyDj410"',
    "mtime": "2026-09-06T01:38:36.451Z",
    "size": 4163882,
    "path": "../public/assets/awd-ultimate-interior-07-C2E8w2gz.jpg"
  },
  "/assets/calendar-days-CdSKFqC7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ef-0zPsL+b1ewRMbufkXyQjd6JuC7c"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 495,
    "path": "../public/assets/calendar-days-CdSKFqC7.js"
  },
  "/assets/byd-sealion6dmi-XlGbEyfc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"dac0-efPHJUgkwAxJ5/eZk86Xh+OrRoU"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 56e3,
    "path": "../public/assets/byd-sealion6dmi-XlGbEyfc.js"
  },
  "/assets/byd-sealion7-BsCO_zzx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fed0-LFRsfKGy78WH3ed/9ailNNH/lws"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 65232,
    "path": "../public/assets/byd-sealion7-BsCO_zzx.js"
  },
  "/assets/charging-port-CrUkxwHm.jpeg": {
    "type": "image/jpeg",
    "etag": '"17030-NgvAXrGoeE7yCRiU64MW49Jyc7s"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 94256,
    "path": "../public/assets/charging-port-CrUkxwHm.jpeg"
  },
  "/assets/chevron-right-CQpsbzRe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"83-4C0E+QRZxHXvjf4nGftzcJ6spiE"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 131,
    "path": "../public/assets/chevron-right-CQpsbzRe.js"
  },
  "/assets/charging-Y86UxWfd.jpg": {
    "type": "image/jpeg",
    "etag": '"f315-2I1crms+rwKg0KqS+FYfzEkvxbc"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 62229,
    "path": "../public/assets/charging-Y86UxWfd.jpg"
  },
  "/assets/chargingPort-DoOXSh4E.webp": {
    "type": "image/webp",
    "etag": '"107dc-8i5zxvcly2BLZ+HERXV/SD3sAi8"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 67548,
    "path": "../public/assets/chargingPort-DoOXSh4E.webp"
  },
  "/assets/circuit-board-C2WaNkod.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15d-reDxTZW+m7Oc1pWF51QD/h/7Xj0"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 349,
    "path": "../public/assets/circuit-board-C2WaNkod.js"
  },
  "/assets/chargingTool-DResPu20.webp": {
    "type": "image/webp",
    "etag": '"12f60-cQfwwSGXzwA+EOaB0FI50cRGuTk"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 77664,
    "path": "../public/assets/chargingTool-DResPu20.webp"
  },
  "/assets/contact-LQs4eNjc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"358f-LDJgaN1oWB+xWAZZ2afcKrFvMbY"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 13711,
    "path": "../public/assets/contact-LQs4eNjc.js"
  },
  "/assets/console-B-ZbUhRx.webp": {
    "type": "image/webp",
    "etag": '"1ee92-kpa+MU1LXEY5pNfDvuWG53mDvrE"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 126610,
    "path": "../public/assets/console-B-ZbUhRx.webp"
  },
  "/assets/crystalLed-CUrroqwa.png": {
    "type": "image/png",
    "etag": '"2809f-F8SukxXbeSJQdfHReWN64+HlK/I"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 163999,
    "path": "../public/assets/crystalLed-CUrroqwa.png"
  },
  "/assets/dialog-C4QIMh33.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"89fc-fpH8DOM1QJ0QkR4g54d68lQx5X8"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 35324,
    "path": "../public/assets/dialog-C4QIMh33.js"
  },
  "/assets/dolphin-design-B2X_mIuQ.jpeg": {
    "type": "image/jpeg",
    "etag": '"9636-CKOCSturabOW+iK/nzX6RoEWUMI"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 38454,
    "path": "../public/assets/dolphin-design-B2X_mIuQ.jpeg"
  },
  "/assets/dolphinDesign-B4NL0Rs4.png": {
    "type": "image/png",
    "etag": '"33fa1-YVWVH887PGx7nbUGpXtAvA6pzA0"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 212897,
    "path": "../public/assets/dolphinDesign-B4NL0Rs4.png"
  },
  "/assets/drive-mode-CB3fcz_f.jpeg": {
    "type": "image/jpeg",
    "etag": '"7637-03b4rfwVHIaMzb+MN2nk5Cb6h4A"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 30263,
    "path": "../public/assets/drive-mode-CB3fcz_f.jpeg"
  },
  "/assets/e-platform-BOB1_FZQ.png": {
    "type": "image/png",
    "etag": '"4feb5-AnP8pLvTOUV2Xyn7/2wTCu0Mg3o"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 327349,
    "path": "../public/assets/e-platform-BOB1_FZQ.png"
  },
  "/assets/driveMode-mXfVsX5v.png": {
    "type": "image/png",
    "etag": '"31f3b-wKqRt4nrlT/k0+S40aXV2DP2F9I"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 204603,
    "path": "../public/assets/driveMode-mXfVsX5v.png"
  },
  "/assets/e-platform-CJLPn7K3.jpeg": {
    "type": "image/jpeg",
    "etag": '"10e15-iS2N2l8xIj1AIh2OcxCXkBMbEYQ"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 69141,
    "path": "../public/assets/e-platform-CJLPn7K3.jpeg"
  },
  "/assets/e-platform3-DhiCHBbK.png": {
    "type": "image/png",
    "etag": '"31f0b-xvmf33se+yFgxz7ecQ5/tr9LmWI"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 204555,
    "path": "../public/assets/e-platform3-DhiCHBbK.png"
  },
  "/assets/extended-exterior-01-J2NeLEei.jpg": {
    "type": "image/jpeg",
    "etag": '"1d6fd-dR/ryoOqzysU1+OT9vGPHDbdCH4"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 120573,
    "path": "../public/assets/extended-exterior-01-J2NeLEei.jpg"
  },
  "/assets/extended-exterior-02-BOoqhRdN.jpg": {
    "type": "image/jpeg",
    "etag": '"28599-QxTc4BtkYnTPxFiZismWX1k0ztA"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 165273,
    "path": "../public/assets/extended-exterior-02-BOoqhRdN.jpg"
  },
  "/assets/ePlatform-VvKMSec1.jpeg": {
    "type": "image/jpeg",
    "etag": '"935c0-EKWZyDfQLeMAYPEc1a+3FBc0TLg"',
    "mtime": "2026-09-06T01:38:36.408Z",
    "size": 603584,
    "path": "../public/assets/ePlatform-VvKMSec1.jpeg"
  },
  "/assets/contact-showroom-B0DPllVU.png": {
    "type": "image/png",
    "etag": '"1b8a0e-ToK/3w7T+wlVAqYrLSK+zSc7FIM"',
    "mtime": "2026-09-06T01:38:36.446Z",
    "size": 1804814,
    "path": "../public/assets/contact-showroom-B0DPllVU.png"
  },
  "/assets/extended-exterior-03-BWQUBFIH.jpg": {
    "type": "image/jpeg",
    "etag": '"231d7-Og1WcvYos6kQ6sOr9x3eyf1fr7s"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 143831,
    "path": "../public/assets/extended-exterior-03-BWQUBFIH.jpg"
  },
  "/assets/extended-exterior-04-BLMDM0Z5.jpg": {
    "type": "image/jpeg",
    "etag": '"20748-thVHKGQzIZJAi5M/YpM2svyEkvg"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 132936,
    "path": "../public/assets/extended-exterior-04-BLMDM0Z5.jpg"
  },
  "/assets/extended-exterior-05-P53smQzq.jpg": {
    "type": "image/jpeg",
    "etag": '"25766-SEDM/kuuqfVKdkBmTjhoNQT3voA"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 153446,
    "path": "../public/assets/extended-exterior-05-P53smQzq.jpg"
  },
  "/assets/extended-exterior-06-Cp0ShzUV.jpg": {
    "type": "image/jpeg",
    "etag": '"1f10a-oAugp1NQIoz98evwNjngMNQC41U"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 127242,
    "path": "../public/assets/extended-exterior-06-Cp0ShzUV.jpg"
  },
  "/assets/exterior-2-Ba3tlgRi.png": {
    "type": "image/png",
    "etag": '"5ee5a-NHADu4/couHM9+Nd5CnhAbhWzMk"',
    "mtime": "2026-09-06T01:38:36.395Z",
    "size": 388698,
    "path": "../public/assets/exterior-2-Ba3tlgRi.png"
  },
  "/assets/exterior-5-BeDCwqyD.png": {
    "type": "image/png",
    "etag": '"6e198-KJXKUlx5BRGfVyhOn3c0Gc5iGFc"',
    "mtime": "2026-09-06T01:38:36.395Z",
    "size": 450968,
    "path": "../public/assets/exterior-5-BeDCwqyD.png"
  },
  "/assets/exterior-alloyWheels-FSO7R1Yy.png": {
    "type": "image/png",
    "etag": '"2bbb3-P71+MtwEgvb7l5vfjH6rkxSH6b8"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 179123,
    "path": "../public/assets/exterior-alloyWheels-FSO7R1Yy.png"
  },
  "/assets/exterior-1-Cz4eQmQx.png": {
    "type": "image/png",
    "etag": '"f2c48-5B/Vaufbh2r8mWVVAFoGjykYOjM"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 994376,
    "path": "../public/assets/exterior-1-Cz4eQmQx.png"
  },
  "/assets/exterior-3-nugb7qIU.png": {
    "type": "image/png",
    "etag": '"d6513-qm6B+NphGhR1Akji00t3IVbo5xc"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 877843,
    "path": "../public/assets/exterior-3-nugb7qIU.png"
  },
  "/assets/exterior-dragonFace-Ch95_KDc.png": {
    "type": "image/png",
    "etag": '"2c4f5-ne8uHUi201Sccs1m/kaXjnEZQHs"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 181493,
    "path": "../public/assets/exterior-dragonFace-Ch95_KDc.png"
  },
  "/assets/exterior-4-CNiot3CL.png": {
    "type": "image/png",
    "etag": '"fe9e9-cmFH1EFUFSutSYNrAcGr7b8KkuU"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 1042921,
    "path": "../public/assets/exterior-4-CNiot3CL.png"
  },
  "/assets/exterior-6-3PMFLVwp.png": {
    "type": "image/png",
    "etag": '"dd616-nT4BOwM2/T/axz3Syrq36sxY84U"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 906774,
    "path": "../public/assets/exterior-6-3PMFLVwp.png"
  },
  "/assets/exterior-allowWheel-B5MGZfSq.png": {
    "type": "image/png",
    "etag": '"9b693-pvdPnauJb2Fr7GsbgOed+QTT9is"',
    "mtime": "2026-09-06T01:38:36.406Z",
    "size": 636563,
    "path": "../public/assets/exterior-allowWheel-B5MGZfSq.png"
  },
  "/assets/exterior-bodyDesign-WR04DKbS.png": {
    "type": "image/png",
    "etag": '"938b2-G45EQny16P6V5DUmDs/tdbBQ+kw"',
    "mtime": "2026-09-06T01:38:36.406Z",
    "size": 604338,
    "path": "../public/assets/exterior-bodyDesign-WR04DKbS.png"
  },
  "/assets/exterior-headLight-Dz5_tZt_.png": {
    "type": "image/png",
    "etag": '"2b74e-DIyatTMKimejMxrX6JzfzxjKdmQ"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 177998,
    "path": "../public/assets/exterior-headLight-Dz5_tZt_.png"
  },
  "/assets/exterior-img-01-C8NubC8n.webp": {
    "type": "image/webp",
    "etag": '"c724-4Db7zm0ta3HSiUN9eHblBWzGie8"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 50980,
    "path": "../public/assets/exterior-img-01-C8NubC8n.webp"
  },
  "/assets/exterior-img-01-sT28DCF5.jpeg": {
    "type": "image/jpeg",
    "etag": '"13c1b-NpyqfzKnQInRoEGKXJbn++sWEYE"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 80923,
    "path": "../public/assets/exterior-img-01-sT28DCF5.jpeg"
  },
  "/assets/exterior-img-01-B535LPoG.png": {
    "type": "image/png",
    "etag": '"3205a-366NSMARFlfsBDzDeMRpFvevZc0"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 204890,
    "path": "../public/assets/exterior-img-01-B535LPoG.png"
  },
  "/assets/exterior-img-02-B2Rij31f.jpeg": {
    "type": "image/jpeg",
    "etag": '"c816-/cAOZV3jR1z5arlH4YUIA0WVndY"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 51222,
    "path": "../public/assets/exterior-img-02-B2Rij31f.jpeg"
  },
  "/assets/exterior-digitalKey-Cy_6V8Mr.png": {
    "type": "image/png",
    "etag": '"d0f2c-hAwRy6VelGZyVw67zdgjGYiMOGg"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 855852,
    "path": "../public/assets/exterior-digitalKey-Cy_6V8Mr.png"
  },
  "/assets/exterior-headLight-BXodUyV8.png": {
    "type": "image/png",
    "etag": '"d0a1c-XzxD6saLt/vVJaxHcNxVsrbQKmo"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 854556,
    "path": "../public/assets/exterior-headLight-BXodUyV8.png"
  },
  "/assets/exterior-img-02-BogPWmGe.png": {
    "type": "image/png",
    "etag": '"3fc7e-ci39K9xYRgz2y+qvi5TS7Yhpurg"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 261246,
    "path": "../public/assets/exterior-img-02-BogPWmGe.png"
  },
  "/assets/exterior-img-02-D9IOdWBa.webp": {
    "type": "image/webp",
    "etag": '"b964-E0b+ia2sZw0EJoHUu/jALo/woRc"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 47460,
    "path": "../public/assets/exterior-img-02-D9IOdWBa.webp"
  },
  "/assets/exterior-img-03-C4Lsk0lZ.webp": {
    "type": "image/webp",
    "etag": '"c468-qeF9eiQqpWh9QaZfLElTqCFKpg8"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 50280,
    "path": "../public/assets/exterior-img-03-C4Lsk0lZ.webp"
  },
  "/assets/exterior-img-03-COT4XEIy.png": {
    "type": "image/png",
    "etag": '"3e122-76iTHE5ijkazSpkaYJKFluBfrHg"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 254242,
    "path": "../public/assets/exterior-img-03-COT4XEIy.png"
  },
  "/assets/exterior-img-03-Cpn1u1t7.jpeg": {
    "type": "image/jpeg",
    "etag": '"c351-edH6LEVdTLDvi6537ueRHSTfClo"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 50001,
    "path": "../public/assets/exterior-img-03-Cpn1u1t7.jpeg"
  },
  "/assets/exterior-img-04-B7amLOHk.jpeg": {
    "type": "image/jpeg",
    "etag": '"b08c-1j60u5C6MuGLkWjMWesR/m9rYx8"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 45196,
    "path": "../public/assets/exterior-img-04-B7amLOHk.jpeg"
  },
  "/assets/exterior-img-04-H7PhNR23.jpeg": {
    "type": "image/jpeg",
    "etag": '"1186c-NZIQQqByFcaQUvvUs8UpriptN9A"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 71788,
    "path": "../public/assets/exterior-img-04-H7PhNR23.jpeg"
  },
  "/assets/exterior-img-04-Ceopa2-W.webp": {
    "type": "image/webp",
    "etag": '"1a1c0-WZ3PwXyTs/3rhkM17VMO+QRh8dU"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 106944,
    "path": "../public/assets/exterior-img-04-Ceopa2-W.webp"
  },
  "/assets/exterior-img-05-DuEtxk3n.jpeg": {
    "type": "image/jpeg",
    "etag": '"d138-iq8RohCCb1+3nwZBtyYgz0xvQDE"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 53560,
    "path": "../public/assets/exterior-img-05-DuEtxk3n.jpeg"
  },
  "/assets/exterior-img-05-BRxMQI1K.webp": {
    "type": "image/webp",
    "etag": '"193c6-OdzlJksP1rn3TEVh8m+ZEP4Brd8"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 103366,
    "path": "../public/assets/exterior-img-05-BRxMQI1K.webp"
  },
  "/assets/exterior-img-06-CxVrWfkv.jpeg": {
    "type": "image/jpeg",
    "etag": '"101fb-rCM4BU3zKG51Y9cggx8fGR080G4"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 66043,
    "path": "../public/assets/exterior-img-06-CxVrWfkv.jpeg"
  },
  "/assets/finger-touched-electronic-shifter-DqCABEAz.jpeg": {
    "type": "image/jpeg",
    "etag": '"21934-9QJ/5XVOviXyN3IcUZvTH3ijX9M"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 137524,
    "path": "../public/assets/finger-touched-electronic-shifter-DqCABEAz.jpeg"
  },
  "/assets/front-grille-9N5CwTS1.jpeg": {
    "type": "image/jpeg",
    "etag": '"14a64-h2DWHLHzUSlpbmeDz6Or2S+JPE0"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 84580,
    "path": "../public/assets/front-grille-9N5CwTS1.jpeg"
  },
  "/assets/exterior-tailLight-C_KdX3fz.png": {
    "type": "image/png",
    "etag": '"32091-5skMWzpxlcJvgGYOVnVg2lponic"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 204945,
    "path": "../public/assets/exterior-tailLight-C_KdX3fz.png"
  },
  "/assets/frontGrille-i6wDUetd.webp": {
    "type": "image/webp",
    "etag": '"19dea-3QrNgw8Syt0wDwMJqQfxKlZndXs"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 105962,
    "path": "../public/assets/frontGrille-i6wDUetd.webp"
  },
  "/assets/gift-Cf62ZWMX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15e-QzKgATs3Iaq4DfDjCuCPdx+PbGs"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 350,
    "path": "../public/assets/gift-Cf62ZWMX.js"
  },
  "/assets/glass-roof-B3hTR7Dx.jpeg": {
    "type": "image/jpeg",
    "etag": '"14b9c-bO1R982pGE5UbE7PgLes42mP4iY"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 84892,
    "path": "../public/assets/glass-roof-B3hTR7Dx.jpeg"
  },
  "/assets/index-DtqBFgK5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 41,
    "path": "../public/assets/index-DtqBFgK5.js"
  },
  "/assets/index-DV_EgOZN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"9829-GACaACJPaZCDUujopvtPOGtIFt0"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 38953,
    "path": "../public/assets/index-DV_EgOZN.js"
  },
  "/assets/glassRoof-D7X5XKyJ.png": {
    "type": "image/png",
    "etag": '"2e754-NyfjrFpbVtU/JY+bLQNERsPIzqE"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 190292,
    "path": "../public/assets/glassRoof-D7X5XKyJ.png"
  },
  "/assets/index-rrnUF981.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"29-crG9x4dYeQi7xsfEfaRvCOejUcg"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 41,
    "path": "../public/assets/index-rrnUF981.js"
  },
  "/assets/index-nxXpEdWH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"143e-IifJ6UHAS5MmNEl1YJIsbcitGQ4"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 5182,
    "path": "../public/assets/index-nxXpEdWH.js"
  },
  "/assets/infotainment-C2_Swx6c.jpeg": {
    "type": "image/jpeg",
    "etag": '"1b392-QEkbC5YNQIX8Y3UMNE62K+v0P9w"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 111506,
    "path": "../public/assets/infotainment-C2_Swx6c.jpeg"
  },
  "/assets/index-DwGxgXwZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"750bd-P5RGI5QQEtfSTc50+cg5BaPudBE"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 479421,
    "path": "../public/assets/index-DwGxgXwZ.js"
  },
  "/assets/interior-1-BOypjxYM.png": {
    "type": "image/png",
    "etag": '"60962-dlwSMjTuZckiZET9yfxfUyQ1/FE"',
    "mtime": "2026-09-06T01:38:36.395Z",
    "size": 395618,
    "path": "../public/assets/interior-1-BOypjxYM.png"
  },
  "/assets/instrumentDisplay-gM1ZC40e.jpeg": {
    "type": "image/jpeg",
    "etag": '"c3768-1Ah92C+YDmYpt6+btyPi9nRzwHs"',
    "mtime": "2026-09-06T01:38:36.408Z",
    "size": 800616,
    "path": "../public/assets/instrumentDisplay-gM1ZC40e.jpeg"
  },
  "/assets/interior-frontSeats-CLIjETUW.png": {
    "type": "image/png",
    "etag": '"29bee-TBMBuLLYe2FkUuRBaHK/8uqBqqU"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 170990,
    "path": "../public/assets/interior-frontSeats-CLIjETUW.png"
  },
  "/assets/interior-img-01-1EBLTxjy.jpeg": {
    "type": "image/jpeg",
    "etag": '"1e957-rLxGwpn79ZGYwCMfy1L3PSrtOdE"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 125271,
    "path": "../public/assets/interior-img-01-1EBLTxjy.jpeg"
  },
  "/assets/interior-img-01-CbKWI9zA.png": {
    "type": "image/png",
    "etag": '"371b0-jYbVTZtIRQDonqLvU9kc6c9aHyY"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 225712,
    "path": "../public/assets/interior-img-01-CbKWI9zA.png"
  },
  "/assets/interior-img-01-DumXB48H.jpeg": {
    "type": "image/jpeg",
    "etag": '"978e-R192yEvGT9W0BhruS0zqa18kf/E"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 38798,
    "path": "../public/assets/interior-img-01-DumXB48H.jpeg"
  },
  "/assets/interior-2-0WO0HXKo.png": {
    "type": "image/png",
    "etag": '"d5c58-vzAe6UlpGMDT2LZhEswfWhQ61vg"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 875608,
    "path": "../public/assets/interior-2-0WO0HXKo.png"
  },
  "/assets/interior-3-BPFVLoWy.png": {
    "type": "image/png",
    "etag": '"84112-4JTzA408qSmXXL5ae322NqecNMU"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 540946,
    "path": "../public/assets/interior-3-BPFVLoWy.png"
  },
  "/assets/interior-4-DcWcB92w.png": {
    "type": "image/png",
    "etag": '"8df6d-rgo42kovADFt8B33bbQGAmKuJDQ"',
    "mtime": "2026-09-06T01:38:36.418Z",
    "size": 581485,
    "path": "../public/assets/interior-4-DcWcB92w.png"
  },
  "/assets/interior-5-BS9xIxNI.png": {
    "type": "image/png",
    "etag": '"ed827-u95FjYktqpioR4QjnNcIKabQErg"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 972839,
    "path": "../public/assets/interior-5-BS9xIxNI.png"
  },
  "/assets/interior-img-02-C8GYBHio.jpeg": {
    "type": "image/jpeg",
    "etag": '"1f6b8-CHBCFTWlw26uCeMy2HsrJH0cKDo"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 128696,
    "path": "../public/assets/interior-img-02-C8GYBHio.jpeg"
  },
  "/assets/interior-consoleDesign-BsE-ngJ4.png": {
    "type": "image/png",
    "etag": '"bb422-UUKfcJzKeYaq59piIWyZSoCyQaI"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 767010,
    "path": "../public/assets/interior-consoleDesign-BsE-ngJ4.png"
  },
  "/assets/interior-img-02-DdJhUP3V.png": {
    "type": "image/png",
    "etag": '"41a0a-fCQDLitotK4VuJ4sTj+b1LbktM4"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 268810,
    "path": "../public/assets/interior-img-02-DdJhUP3V.png"
  },
  "/assets/interior-6-CHKEjfde.png": {
    "type": "image/png",
    "etag": '"828d2-BsetxdPWDo+6rmB643p/FbleWC0"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 534738,
    "path": "../public/assets/interior-6-CHKEjfde.png"
  },
  "/assets/interior-img-02-On9KgJ_e.jpeg": {
    "type": "image/jpeg",
    "etag": '"db2e-ncIot+hjEZ2Qr9tTZBMNmyAztys"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 56110,
    "path": "../public/assets/interior-img-02-On9KgJ_e.jpeg"
  },
  "/assets/interior-img-03-CjdaLUok.jpeg": {
    "type": "image/jpeg",
    "etag": '"f803-xyU4zTmgm9p9I2QrqeqJyiLjTUQ"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 63491,
    "path": "../public/assets/interior-img-03-CjdaLUok.jpeg"
  },
  "/assets/interior-img-03-B6j0W-sF.jpeg": {
    "type": "image/jpeg",
    "etag": '"1ecf4-O08MpVXorehl1pe4GeDW2co6mj0"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 126196,
    "path": "../public/assets/interior-img-03-B6j0W-sF.jpeg"
  },
  "/assets/interior-img-03-DcW7RmWq.png": {
    "type": "image/png",
    "etag": '"499a7-+OvdDtotVd8wzHsMIMxOp7HHzII"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 301479,
    "path": "../public/assets/interior-img-03-DcW7RmWq.png"
  },
  "/assets/interior-img-04-DYi_z-zu.jpeg": {
    "type": "image/jpeg",
    "etag": '"e588-vIib0sQZJT3+Teh61zEK3RGn65s"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 58760,
    "path": "../public/assets/interior-img-04-DYi_z-zu.jpeg"
  },
  "/assets/interior-img-04-ChEx7n8Z.png": {
    "type": "image/png",
    "etag": '"4e3f3-HcnBAXhAGH1Y1OzszclMTrP+oNI"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 320499,
    "path": "../public/assets/interior-img-04-ChEx7n8Z.png"
  },
  "/assets/interior-img-04-DDZOJ0qX.jpeg": {
    "type": "image/jpeg",
    "etag": '"1e0b7-OqbMqgP1uGG79k6IkJdjXy3fvYQ"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 123063,
    "path": "../public/assets/interior-img-04-DDZOJ0qX.jpeg"
  },
  "/assets/interior-img-05-DwDFtQKs.jpeg": {
    "type": "image/jpeg",
    "etag": '"27140-eEXjVl49/AHtjWaV/C2MPsiV9ME"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 160064,
    "path": "../public/assets/interior-img-05-DwDFtQKs.jpeg"
  },
  "/assets/interior-lcdDigital-GsUlscte.png": {
    "type": "image/png",
    "etag": '"2d814-GKwHA6SAI3VkuXHBFB16SLG+oH0"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 186388,
    "path": "../public/assets/interior-lcdDigital-GsUlscte.png"
  },
  "/assets/interior-multimediaScreen-vshdQRU_.png": {
    "type": "image/png",
    "etag": '"2e714-VX0jNIEGPztvb9BZqCTH5Egrsbc"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 190228,
    "path": "../public/assets/interior-multimediaScreen-vshdQRU_.png"
  },
  "/assets/interior-rearPassengerSpace-DJ2PeuM5.jpeg": {
    "type": "image/jpeg",
    "etag": '"8906-025/i90gsMGkcR8qw3JCrRMho90"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 35078,
    "path": "../public/assets/interior-rearPassengerSpace-DJ2PeuM5.jpeg"
  },
  "/assets/interior-multimediaScreen-DKYTJDgq.png": {
    "type": "image/png",
    "etag": '"be770-8gEkTGWqPmjfACDOmx1iLFowqsA"',
    "mtime": "2026-09-06T01:38:36.406Z",
    "size": 780144,
    "path": "../public/assets/interior-multimediaScreen-DKYTJDgq.png"
  },
  "/assets/interior-rearSeats-sIm-4Ju6.png": {
    "type": "image/png",
    "etag": '"346d9-z8Z/sy1LfatsZKTxsDFIz1nZc0k"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 214745,
    "path": "../public/assets/interior-rearSeats-sIm-4Ju6.png"
  },
  "/assets/interior-wirelessCharger-DbUVRcjs.jpeg": {
    "type": "image/jpeg",
    "etag": '"7dff-RFi17lvJ8tSt0IVG74r/VDkI7Ok"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 32255,
    "path": "../public/assets/interior-wirelessCharger-DbUVRcjs.jpeg"
  },
  "/assets/led-headlights-C5XY9Z1_.jpeg": {
    "type": "image/jpeg",
    "etag": '"1a307-BJFBKK9AQrn+WtWMw3mjZyGK8us"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 107271,
    "path": "../public/assets/led-headlights-C5XY9Z1_.jpeg"
  },
  "/assets/led-tail-light-CCob7nkP.jpeg": {
    "type": "image/jpeg",
    "etag": '"9f96-nHHxEvl2K/Xr/6ddomVDdNe67tw"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 40854,
    "path": "../public/assets/led-tail-light-CCob7nkP.jpeg"
  },
  "/assets/ledBack-BslXNJ6g.webp": {
    "type": "image/webp",
    "etag": '"c19c-TnbJQviPhFHfR6FZ8B9Hh8DF7go"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 49564,
    "path": "../public/assets/ledBack-BslXNJ6g.webp"
  },
  "/assets/ledFront-DkBD0Q5L.webp": {
    "type": "image/webp",
    "etag": '"11a9a-YU/XEAoSweGk9eWX7F0On+G1XcE"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 72346,
    "path": "../public/assets/ledFront-DkBD0Q5L.webp"
  },
  "/assets/logo-byd-black-CUmeFk7q.png": {
    "type": "image/png",
    "etag": '"1ebd-Mgn9PRx5WUj+EzQ8pB5iSIdx9OA"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 7869,
    "path": "../public/assets/logo-byd-black-CUmeFk7q.png"
  },
  "/assets/logo-byd-white-BnNf_KpA.png": {
    "type": "image/png",
    "etag": '"1641-F3LimYp2ouul1Rr7X8eNYcZfH3k"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 5697,
    "path": "../public/assets/logo-byd-white-BnNf_KpA.png"
  },
  "/assets/logo_jinlong-B8Tv5iRB.png": {
    "type": "image/png",
    "etag": '"4127-FcT4EpoPfkPkiVz55abU28jZ8S4"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 16679,
    "path": "../public/assets/logo_jinlong-B8Tv5iRB.png"
  },
  "/assets/ledTailLight-B0W7QGR2.png": {
    "type": "image/png",
    "etag": '"282c9-D7rMPSZVC0ZT3zUgTawcgqW/el0"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 164553,
    "path": "../public/assets/ledTailLight-B0W7QGR2.png"
  },
  "/assets/map-pin-CvsuKPmr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ff-XfF5FWMu3c4fbu7UvzoV/F4786Q"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 255,
    "path": "../public/assets/map-pin-CvsuKPmr.js"
  },
  "/assets/marker-google-map-eF0W7zp5.png": {
    "type": "image/png",
    "etag": '"7789-8kZMOkr4jvK0UnYTUFWahJHeYJc"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 30601,
    "path": "../public/assets/marker-google-map-eF0W7zp5.png"
  },
  "/assets/minus-BwS5ZofP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"186-XEdXBARd8BStyRO3iypes+7N1qQ"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 390,
    "path": "../public/assets/minus-BwS5ZofP.js"
  },
  "/assets/model-2RbGPzJz.webp": {
    "type": "image/webp",
    "etag": '"13c0a-pCdpKijpo/t7eYfIUttCSv/zSS8"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 80906,
    "path": "../public/assets/model-2RbGPzJz.webp"
  },
  "/assets/model-BkPZronI.webp": {
    "type": "image/webp",
    "etag": '"def2-E2yObNug2+smfesj0Zbhb5D6yTU"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 57074,
    "path": "../public/assets/model-BkPZronI.webp"
  },
  "/assets/model-DPxt2v-5.webp": {
    "type": "image/webp",
    "etag": '"ce94-IejurDz06MjPl33tNt/MzCtNLpo"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 52884,
    "path": "../public/assets/model-DPxt2v-5.webp"
  },
  "/assets/model-DVVeWV9a.webp": {
    "type": "image/webp",
    "etag": '"1b5f0-jK7LZNh7YV76ihBuvzudlRbcqp4"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 112112,
    "path": "../public/assets/model-DVVeWV9a.webp"
  },
  "/assets/model-DRwQ7dEf.webp": {
    "type": "image/webp",
    "etag": '"25210-T3C2Mfo3595cIe3RdvqvPwPXcIU"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 152080,
    "path": "../public/assets/model-DRwQ7dEf.webp"
  },
  "/assets/model-D_1gWX9C.webp": {
    "type": "image/webp",
    "etag": '"2f6ba-eDWN6+8RuQsDaPmjHqcsgxpd9/4"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 194234,
    "path": "../public/assets/model-D_1gWX9C.webp"
  },
  "/assets/m6-crystal-white-C50DqGgO.png": {
    "type": "image/png",
    "etag": '"d0a13-LhNtYAPmkvzl/5OKpDHdJXw8y9U"',
    "mtime": "2026-09-06T01:38:36.401Z",
    "size": 854547,
    "path": "../public/assets/m6-crystal-white-C50DqGgO.png"
  },
  "/assets/m6-harbour-grey-BNQEPWiM.png": {
    "type": "image/png",
    "etag": '"cac08-TVW62XoQ633R3v2vjWRzaFnQ2Rw"',
    "mtime": "2026-09-06T01:38:36.409Z",
    "size": 830472,
    "path": "../public/assets/m6-harbour-grey-BNQEPWiM.png"
  },
  "/assets/m6-quartz-blue-DLb-nQ18.png": {
    "type": "image/png",
    "etag": '"dc35e-MQRlkpBOUHmF1VPg5tajr+Jvvs4"',
    "mtime": "2026-09-06T01:38:36.412Z",
    "size": 901982,
    "path": "../public/assets/m6-quartz-blue-DLb-nQ18.png"
  },
  "/assets/m6-quantum-black-bLZC1Vsz.png": {
    "type": "image/png",
    "etag": '"d21e4-HpidIJxj0kpgJdaZhvU0JdztPPo"',
    "mtime": "2026-09-06T01:38:36.412Z",
    "size": 860644,
    "path": "../public/assets/m6-quantum-black-bLZC1Vsz.png"
  },
  "/assets/model-DmqurozH.webp": {
    "type": "image/webp",
    "etag": '"1237a-Qsg9XMPJprD582sLdTGSIMZPLjQ"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 74618,
    "path": "../public/assets/model-DmqurozH.webp"
  },
  "/assets/model-Do6RdNLA.webp": {
    "type": "image/webp",
    "etag": '"10438-QEE++DeMUVDuH07zneOekxLfZRQ"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 66616,
    "path": "../public/assets/model-Do6RdNLA.webp"
  },
  "/assets/model-m08bbN43.webp": {
    "type": "image/webp",
    "etag": '"1ffac-jD5AKv7Ua9MKzD6lAGJ/iYSt2Fw"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 130988,
    "path": "../public/assets/model-m08bbN43.webp"
  },
  "/assets/model-OnDecc3W.webp": {
    "type": "image/webp",
    "etag": '"26152-h/jW87Hmlic8b0V+Zzk/kdE2nCI"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 155986,
    "path": "../public/assets/model-OnDecc3W.webp"
  },
  "/assets/model-DzLZmS7T.webp": {
    "type": "image/webp",
    "etag": '"5928c-RrlePD2SJru6rYGlIPn3uiHpt9I"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 365196,
    "path": "../public/assets/model-DzLZmS7T.webp"
  },
  "/assets/model-mobile-CqVawhIB.webp": {
    "type": "image/webp",
    "etag": '"109b8-clcEEGm5peoQutqLBbJhumOSuec"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 68024,
    "path": "../public/assets/model-mobile-CqVawhIB.webp"
  },
  "/assets/model-mobile-DZr7by6S.webp": {
    "type": "image/webp",
    "etag": '"e72c-/Q+xvGC4kmJoYeEM7NIA9vAHWZ8"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 59180,
    "path": "../public/assets/model-mobile-DZr7by6S.webp"
  },
  "/assets/model-mobile-DqNXWSyQ.webp": {
    "type": "image/webp",
    "etag": '"ba7c-27rJfrpRi8UGqi9R/2xHjHZrVJ8"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 47740,
    "path": "../public/assets/model-mobile-DqNXWSyQ.webp"
  },
  "/assets/model-mobile-DvYNKJKf.webp": {
    "type": "image/webp",
    "etag": '"de4a-bHRzm+uC65BBpyreuvxJsfsFTW0"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 56906,
    "path": "../public/assets/model-mobile-DvYNKJKf.webp"
  },
  "/assets/model-mobile-Db4O9-du.webp": {
    "type": "image/webp",
    "etag": '"3d03a-+Ut4hz4ndKGidbBdkuQFyJJIFnk"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 249914,
    "path": "../public/assets/model-mobile-Db4O9-du.webp"
  },
  "/assets/model-mobile-DyuEQHjt.webp": {
    "type": "image/webp",
    "etag": '"1a8e6-iUQ9fgn0zpKRgKpAgqC8ZirZUqo"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 108774,
    "path": "../public/assets/model-mobile-DyuEQHjt.webp"
  },
  "/assets/model-mobile-DyVhe1RH.webp": {
    "type": "image/webp",
    "etag": '"24380-cmi/3k8inEg41JiUdOOHfRw1zH4"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 148352,
    "path": "../public/assets/model-mobile-DyVhe1RH.webp"
  },
  "/assets/model-mobile-o3Hdymir.webp": {
    "type": "image/webp",
    "etag": '"9310-34ePpE5vJp1IyjjzxjcebnUeC4w"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 37648,
    "path": "../public/assets/model-mobile-o3Hdymir.webp"
  },
  "/assets/model-mobile-UQcU9iiq.webp": {
    "type": "image/webp",
    "etag": '"51626-hfpz9IlGfH83bGzIjm450qBrl94"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 333350,
    "path": "../public/assets/model-mobile-UQcU9iiq.webp"
  },
  "/assets/models-DZMse00o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"145f-4z7tIwES1a0AhYJSWgChLudhRSo"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 5215,
    "path": "../public/assets/models-DZMse00o.js"
  },
  "/assets/model-mobile-rCR27Bxx.webp": {
    "type": "image/webp",
    "etag": '"1c3a4-GCXVkLlT2f8HOQo3+4n7x+OmnUc"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 115620,
    "path": "../public/assets/model-mobile-rCR27Bxx.webp"
  },
  "/assets/monitor-DvyVx9__.webp": {
    "type": "image/webp",
    "etag": '"1b586-d7wETU7fE5SKMJJRTpegbypSow8"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 112006,
    "path": "../public/assets/monitor-DvyVx9__.webp"
  },
  "/assets/model-mobile-z-DnI3Xb.webp": {
    "type": "image/webp",
    "etag": '"386f4-IYRcL3OOwgHR+To8gpEdpQLc9Bw"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 231156,
    "path": "../public/assets/model-mobile-z-DnI3Xb.webp"
  },
  "/assets/multifunction-steering-wheel-BiuT7guD.png": {
    "type": "image/png",
    "etag": '"3b740-d9QX6yLLGN0iY2yN116GcY7CXh8"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 243520,
    "path": "../public/assets/multifunction-steering-wheel-BiuT7guD.png"
  },
  "/assets/new-atto3-banner-desktop-p6ASZS5k.jpeg": {
    "type": "image/jpeg",
    "etag": '"633b3-0uJijf8Qv5bbxS/8G5HtIeVQf9U"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 406451,
    "path": "../public/assets/new-atto3-banner-desktop-p6ASZS5k.jpeg"
  },
  "/assets/new-byd-atto3-grey-CqdX1a3C.webp": {
    "type": "image/webp",
    "etag": '"27f88-q5/63027UXHt/Uti4IpRxFpdrXc"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 163720,
    "path": "../public/assets/new-byd-atto3-grey-CqdX1a3C.webp"
  },
  "/assets/new-byd-atto3-frost-white-BcF9jf1u.webp": {
    "type": "image/webp",
    "etag": '"22e8e-u0PRkIVMYDvjDh+6gVAgiLY+pv4"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 142990,
    "path": "../public/assets/new-byd-atto3-frost-white-BcF9jf1u.webp"
  },
  "/assets/multimediaTouchScreen-D-gDbtIM.png": {
    "type": "image/png",
    "etag": '"c4b44-L2pQvJbcXtkexf3lMWRKIw4ifv8"',
    "mtime": "2026-09-06T01:38:36.408Z",
    "size": 805700,
    "path": "../public/assets/multimediaTouchScreen-D-gDbtIM.png"
  },
  "/assets/new-atto3-description-3-Dpiba0tl.png": {
    "type": "image/png",
    "etag": '"95fbf-9DpwkLphGDEe4jIqnXTTSD7FiDE"',
    "mtime": "2026-09-06T01:38:36.418Z",
    "size": 614335,
    "path": "../public/assets/new-atto3-description-3-Dpiba0tl.png"
  },
  "/assets/newcar-DhURfDfX.webp": {
    "type": "image/webp",
    "etag": '"1c128-KaExTawkBlVPKUUad+o8bwiObwo"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 114984,
    "path": "../public/assets/newcar-DhURfDfX.webp"
  },
  "/assets/nfc-DBJlo8kg.jpeg": {
    "type": "image/jpeg",
    "etag": '"96c9-FuKfQLcncawuDeR1HK/ACiG68hU"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 38601,
    "path": "../public/assets/nfc-DBJlo8kg.jpeg"
  },
  "/assets/overview-banner-d-CWBK_RJW.jpeg": {
    "type": "image/jpeg",
    "etag": '"60c0e-hx4uN85Kvd0lS/R0DLBDwEWiYUs"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 396302,
    "path": "../public/assets/overview-banner-d-CWBK_RJW.jpeg"
  },
  "/assets/new-dolphin-frost-white-hJzZkvcX.png": {
    "type": "image/png",
    "etag": '"87807-Msztfs+rg2igYC94+GE9TLeqwMM"',
    "mtime": "2026-09-06T01:38:36.401Z",
    "size": 555015,
    "path": "../public/assets/new-dolphin-frost-white-hJzZkvcX.png"
  },
  "/assets/new-dolphin-graphite-grey-SqRpyQvc.png": {
    "type": "image/png",
    "etag": '"9d990-CrlSRd8F7wI18ijHAyJV4GrIQ74"',
    "mtime": "2026-09-06T01:38:36.418Z",
    "size": 645520,
    "path": "../public/assets/new-dolphin-graphite-grey-SqRpyQvc.png"
  },
  "/assets/overview-banner-desktop-6elnSXqY.jpeg": {
    "type": "image/jpeg",
    "etag": '"79a83-CQmPEdSKVCqYdcu+as1m/46oPms"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 498307,
    "path": "../public/assets/overview-banner-desktop-6elnSXqY.jpeg"
  },
  "/assets/newmotor-DDkMhaO4.webp": {
    "type": "image/webp",
    "etag": '"b54f8-QfVXy81aAB8dDYkZh+U6beEiw9c"',
    "mtime": "2026-09-06T01:38:36.412Z",
    "size": 742648,
    "path": "../public/assets/newmotor-DDkMhaO4.webp"
  },
  "/assets/overview-img-01-CyJdfDVp.webp": {
    "type": "image/webp",
    "etag": '"144ae-W9oE7+STOVcGP1poIhwu84WuyJI"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 83118,
    "path": "../public/assets/overview-img-01-CyJdfDVp.webp"
  },
  "/assets/overview-img-02-CJoO-7lo.png": {
    "type": "image/png",
    "etag": '"5e2ce-+CradOIfIFvECNBpzvXitVKAOS0"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 385742,
    "path": "../public/assets/overview-img-02-CJoO-7lo.png"
  },
  "/assets/overview-img-03-BD0m-5yl.webp": {
    "type": "image/webp",
    "etag": '"c48a-DuhFnfrRQ5skzuTWTABT+LwGsXQ"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 50314,
    "path": "../public/assets/overview-img-03-BD0m-5yl.webp"
  },
  "/assets/overview-banner-d-DbTqjYBW.jpeg": {
    "type": "image/jpeg",
    "etag": '"bfab7-I5IVSr9mP6X+C9lGYjxAZLXgCk0"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 785079,
    "path": "../public/assets/overview-banner-d-DbTqjYBW.jpeg"
  },
  "/assets/overview-img-04-83byOKaC.webp": {
    "type": "image/webp",
    "etag": '"12650-gN7Hx82NKXaQ39xELgKR5vx5xrc"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 75344,
    "path": "../public/assets/overview-img-04-83byOKaC.webp"
  },
  "/assets/play-BVNgXA1D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bf-iXMFSU6Pk0YAmcEOmpFpZxm4UiE"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 191,
    "path": "../public/assets/play-BVNgXA1D.js"
  },
  "/assets/overview-img-04-C53a9f28.jpeg": {
    "type": "image/jpeg",
    "etag": '"23ddd-FeSceTO+TODBVONmrF93EkNrUkQ"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 146909,
    "path": "../public/assets/overview-img-04-C53a9f28.jpeg"
  },
  "/assets/premiumDesign-CXB-s_pz.webp": {
    "type": "image/webp",
    "etag": '"10e1c-7EEKPP8w651mTdj6Z4kGyuVxCeM"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 69148,
    "path": "../public/assets/premiumDesign-CXB-s_pz.webp"
  },
  "/assets/new-atto3-space-grey-B8s-77PI.png": {
    "type": "image/png",
    "etag": '"1fecbc-LagaJzE3X8oWVYA4lcU5QP9kPyg"',
    "mtime": "2026-09-06T01:38:36.447Z",
    "size": 2092220,
    "path": "../public/assets/new-atto3-space-grey-B8s-77PI.png"
  },
  "/assets/pulse-purple-CCiPrs1-.png": {
    "type": "image/png",
    "etag": '"4980a-8uEPl5Ql0tN0WNT7fYmmRAjjVaA"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 301066,
    "path": "../public/assets/pulse-purple-CCiPrs1-.png"
  },
  "/assets/ruler-BXHjGZNr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18f-6imVt8zt3HBv6HRO2QmqfTjY2Aw"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 399,
    "path": "../public/assets/ruler-BXHjGZNr.js"
  },
  "/assets/seal-horizon-white-Dkzsnqe1.png": {
    "type": "image/png",
    "etag": '"321f7-ZHt5ccrzUPKNmRjBsIKf4oDYlto"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 205303,
    "path": "../public/assets/seal-horizon-white-Dkzsnqe1.png"
  },
  "/assets/seal-quantum-black-BK6raq7D.png": {
    "type": "image/png",
    "etag": '"31c5e-kV1abOPCOhehACSgnRApvOv8U+s"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 203870,
    "path": "../public/assets/seal-quantum-black-BK6raq7D.png"
  },
  "/assets/quantum-black-G8cGZ2A0.png": {
    "type": "image/png",
    "etag": '"a5671-N1SbcAumzBt5+84rx/dT2qINmZ8"',
    "mtime": "2026-09-06T01:38:36.418Z",
    "size": 677489,
    "path": "../public/assets/quantum-black-G8cGZ2A0.png"
  },
  "/assets/seal-velocity-blue-BQiZBzM9.png": {
    "type": "image/png",
    "etag": '"34284-qE7/GVbGk4w/VwUcS9BFO/I8P9E"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 213636,
    "path": "../public/assets/seal-velocity-blue-BQiZBzM9.png"
  },
  "/assets/overview-banner-desktop-QklIY6bF.jpeg": {
    "type": "image/jpeg",
    "etag": '"13a45f-chlovAzOQZHytHBN48SFRPYWha8"',
    "mtime": "2026-09-06T01:38:36.442Z",
    "size": 1287263,
    "path": "../public/assets/overview-banner-desktop-QklIY6bF.jpeg"
  },
  "/assets/seal6-ash-green-model-DIFXweTc.png": {
    "type": "image/png",
    "etag": '"3e242-iF4SOp1oLzD3uOYyJtX3FzEDsWY"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 254530,
    "path": "../public/assets/seal6-ash-green-model-DIFXweTc.png"
  },
  "/assets/seal5-dm-i-graphite-grey-D9ta7olx.png": {
    "type": "image/png",
    "etag": '"9a3ca-Tbl2g9peuEkyk1X21UhAyT9eB/A"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 631754,
    "path": "../public/assets/seal5-dm-i-graphite-grey-D9ta7olx.png"
  },
  "/assets/seal6-exterior-alloyWheel-p664gzZD.png": {
    "type": "image/png",
    "etag": '"25553-7wwMR8GhqDuOr1EkBWBA6Cz1sJo"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 152915,
    "path": "../public/assets/seal6-exterior-alloyWheel-p664gzZD.png"
  },
  "/assets/seal5-dm-i-quantum-black-DM2OVear.png": {
    "type": "image/png",
    "etag": '"a827e-ChjJuca6yzXmG+RBoe6xyXjrk8k"',
    "mtime": "2026-09-06T01:38:36.412Z",
    "size": 688766,
    "path": "../public/assets/seal5-dm-i-quantum-black-DM2OVear.png"
  },
  "/assets/seal5-dm-i-horizon-white-cXJ8YKkz.png": {
    "type": "image/png",
    "etag": '"8a887-b4569roqGzK+7mls2OK/lyuusCk"',
    "mtime": "2026-09-06T01:38:36.401Z",
    "size": 567431,
    "path": "../public/assets/seal5-dm-i-horizon-white-cXJ8YKkz.png"
  },
  "/assets/seal6-exterior-led-Br86Cmiq.jpeg": {
    "type": "image/jpeg",
    "etag": '"6bb5f-t/re51nLhrtrRW2vHcTQmJTvQN8"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 441183,
    "path": "../public/assets/seal6-exterior-led-Br86Cmiq.jpeg"
  },
  "/assets/seal6-habour-grey-model-Cg1_kOEm.png": {
    "type": "image/png",
    "etag": '"52566-XddiTmIVx0ru/gDF6LnJYcpjJQ8"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 337254,
    "path": "../public/assets/seal6-habour-grey-model-Cg1_kOEm.png"
  },
  "/assets/seal6-white-model-CJZ1Jpy8.png": {
    "type": "image/png",
    "etag": '"50205-+8KHIuJAnq/o0GlJH6DDAL3ow8E"',
    "mtime": "2026-09-06T01:38:36.389Z",
    "size": 328197,
    "path": "../public/assets/seal6-white-model-CJZ1Jpy8.png"
  },
  "/assets/seal6-quantum-black-model-DdByK7fv.png": {
    "type": "image/png",
    "etag": '"4fdbd-NrHpDFxQs6CBu9X/SRydmYynlQ4"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 327101,
    "path": "../public/assets/seal6-quantum-black-model-DdByK7fv.png"
  },
  "/assets/overview-banner-desktop-DViUGHbu.png": {
    "type": "image/png",
    "etag": '"229e98-LcEwLuyPE8k1W+b8/m9CR2e1lHc"',
    "mtime": "2026-09-06T01:38:36.447Z",
    "size": 2268824,
    "path": "../public/assets/overview-banner-desktop-DViUGHbu.png"
  },
  "/assets/sealion5-description-1-DTt8WE3B.jpeg": {
    "type": "image/jpeg",
    "etag": '"424e8-yfmVjrnRqo3znJptglu9hLhNMUs"',
    "mtime": "2026-09-06T01:38:36.395Z",
    "size": 271592,
    "path": "../public/assets/sealion5-description-1-DTt8WE3B.jpeg"
  },
  "/assets/seal6-banner-CEWY6Mfq.jpeg": {
    "type": "image/jpeg",
    "etag": '"ea35d-ybRyguotqKJtX4z5ComlHZInp5U"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 959325,
    "path": "../public/assets/seal6-banner-CEWY6Mfq.jpeg"
  },
  "/assets/seal6-exterior-digitalKey-oQlsbRJy.png": {
    "type": "image/png",
    "etag": '"e8c90-R4r2Kc5s4Zv2d8OQ6+iq5ltQII4"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 953488,
    "path": "../public/assets/seal6-exterior-digitalKey-oQlsbRJy.png"
  },
  "/assets/sealion5dmi-horizon-white-model-C_tWN7AL.png": {
    "type": "image/png",
    "etag": '"3c9d4-OfaS5qqoNXX/YHpTiH0i78gaOPI"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 248276,
    "path": "../public/assets/sealion5dmi-horizon-white-model-C_tWN7AL.png"
  },
  "/assets/seal6-exterior-frontTrunk-CS3y5-9e.png": {
    "type": "image/png",
    "etag": '"b0405-SUvBtfyFn4xH9tUWm2jWZjJIHcI"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 721925,
    "path": "../public/assets/seal6-exterior-frontTrunk-CS3y5-9e.png"
  },
  "/assets/seal6-exterior-vtol-Cz36Dm8d.png": {
    "type": "image/png",
    "etag": '"d228a-wMqbyqijs538vsNhO505zEGfSJg"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 860810,
    "path": "../public/assets/seal6-exterior-vtol-Cz36Dm8d.png"
  },
  "/assets/sealion-black-mp-hbJUF.png": {
    "type": "image/png",
    "etag": '"ca1f1-fa2/HjF+asMErJBMYukw8M8XNAc"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 827889,
    "path": "../public/assets/sealion-black-mp-hbJUF.png"
  },
  "/assets/sealion-grey-CMo9lIhj.png": {
    "type": "image/png",
    "etag": '"c3cec-rFifdN3T6NOdsjBQV1LmmHPQ/xk"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 802028,
    "path": "../public/assets/sealion-grey-CMo9lIhj.png"
  },
  "/assets/sealion-white-BrS8bGTC.png": {
    "type": "image/png",
    "etag": '"c4902-lvKLId9IAhZMJjukjd1u4MWZtUQ"',
    "mtime": "2026-09-06T01:38:36.407Z",
    "size": 805122,
    "path": "../public/assets/sealion-white-BrS8bGTC.png"
  },
  "/assets/sealion5dmi-quantum-black-model-BI2Ptn6V.png": {
    "type": "image/png",
    "etag": '"4dbaa-/hX3qpoDwlbye+Th81FrDVpePy8"',
    "mtime": "2026-09-06T01:38:36.395Z",
    "size": 318378,
    "path": "../public/assets/sealion5dmi-quantum-black-model-BI2Ptn6V.png"
  },
  "/assets/sealion5-description-2-CpIlN3UT.png": {
    "type": "image/png",
    "etag": '"ac552-TUt0CyNM9ewu0Pr3xjPb2g7T1XM"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 705874,
    "path": "../public/assets/sealion5-description-2-CpIlN3UT.png"
  },
  "/assets/sealion7-black-DIKjA0Lf.webp": {
    "type": "image/webp",
    "etag": '"1fda4-qyOJRbAeBxNa+PmywIPzchwUVsE"',
    "mtime": "2026-09-06T01:38:36.390Z",
    "size": 130468,
    "path": "../public/assets/sealion7-black-DIKjA0Lf.webp"
  },
  "/assets/sealion7-shark-grey-BuxMDNiJ.png": {
    "type": "image/png",
    "etag": '"74790-taPj5Qdzlt58FIpB/kKYxHDGsw4"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 477072,
    "path": "../public/assets/sealion7-shark-grey-BuxMDNiJ.png"
  },
  "/assets/sealion5-techInfo-desktop-BLBqwsW6.png": {
    "type": "image/png",
    "etag": '"102b10-5R730PQTUTorPHTLThly8YbymJs"',
    "mtime": "2026-09-06T01:38:36.445Z",
    "size": 1059600,
    "path": "../public/assets/sealion5-techInfo-desktop-BLBqwsW6.png"
  },
  "/assets/sealion6-dm-i-white-DhL_c18F.png": {
    "type": "image/png",
    "etag": '"9ae04-3r4gozP6j3TBE8Na9p87OJFKJeI"',
    "mtime": "2026-09-06T01:38:36.401Z",
    "size": 634372,
    "path": "../public/assets/sealion6-dm-i-white-DhL_c18F.png"
  },
  "/assets/sealion5dmi-space-grey-model-BMON6_4z.png": {
    "type": "image/png",
    "etag": '"f47e1-WVE6AD6Cwmxkvt/IF2nt4k663aQ"',
    "mtime": "2026-09-06T01:38:36.413Z",
    "size": 1001441,
    "path": "../public/assets/sealion5dmi-space-grey-model-BMON6_4z.png"
  },
  "/assets/sealion5dmi-overview-banner-desktop-CPIB1ewo.jpeg": {
    "type": "image/jpeg",
    "etag": '"101a88-50we+O8CSTtRJ1Xi4ufBLY71Yj4"',
    "mtime": "2026-09-06T01:38:36.445Z",
    "size": 1055368,
    "path": "../public/assets/sealion5dmi-overview-banner-desktop-CPIB1ewo.jpeg"
  },
  "/assets/seat-DSTCU6dD.webp": {
    "type": "image/webp",
    "etag": '"433ac-/iJPUNRpcaaqf9iA9zj7OfKIFcg"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 275372,
    "path": "../public/assets/seat-DSTCU6dD.webp"
  },
  "/assets/shield-check-lAbgoEx6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-bXdGWMp6dwWJNHqxIiowhZmDnBg"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 316,
    "path": "../public/assets/shield-check-lAbgoEx6.js"
  },
  "/assets/sparkles-CAXin4u9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1ef-Is+DaGsL8xH1jUZlTmoLOKyOFdg"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 495,
    "path": "../public/assets/sparkles-CAXin4u9.js"
  },
  "/assets/silver-platform-DNFcExWR.png": {
    "type": "image/png",
    "etag": '"2d478-BH1ih3M6yQH9DAu/qF1RnPfdbZc"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 185464,
    "path": "../public/assets/silver-platform-DNFcExWR.png"
  },
  "/assets/storage-72T9kTR-.webp": {
    "type": "image/webp",
    "etag": '"e4aa-A8kMb9iK2BICw5XU4e+vc3vB+AE"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 58538,
    "path": "../public/assets/storage-72T9kTR-.webp"
  },
  "/assets/solar-red-D1qBAlsf.png": {
    "type": "image/png",
    "etag": '"4dbed-okECw6CpxFV1xVlhRBaoiS91AfU"',
    "mtime": "2026-09-06T01:38:36.391Z",
    "size": 318445,
    "path": "../public/assets/solar-red-D1qBAlsf.png"
  },
  "/assets/sealion7-white-bXleeqDO.png": {
    "type": "image/png",
    "etag": '"9e02b-y1GWasb2SzsQeZ5lJQiMiSkeYkM"',
    "mtime": "2026-09-06T01:38:36.401Z",
    "size": 647211,
    "path": "../public/assets/sealion7-white-bXleeqDO.png"
  },
  "/assets/sun-BlVnH5yj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1d9-FcetETrtKnOl4mJkKZddK8ec+Ms"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 473,
    "path": "../public/assets/sun-BlVnH5yj.js"
  },
  "/assets/styles-CSevOfDo.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"20d5a-6GPr9Z7/lvr19EV9zwfr9l5/9Q4"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 134490,
    "path": "../public/assets/styles-CSevOfDo.css"
  },
  "/assets/sealion7-space-grey-CTKY6lQA.png": {
    "type": "image/png",
    "etag": '"a40b9-LT+pNNdhytTExRVxgOwoQzSaB+8"',
    "mtime": "2026-09-06T01:38:36.406Z",
    "size": 671929,
    "path": "../public/assets/sealion7-space-grey-CTKY6lQA.png"
  },
  "/assets/surge-CDUOZ3_5.png": {
    "type": "image/png",
    "etag": '"29aad-HufMqWxYAqmgRHLtfXZs+CWYi3o"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 170669,
    "path": "../public/assets/surge-CDUOZ3_5.png"
  },
  "/assets/surge-CtGZlkNK.jpeg": {
    "type": "image/jpeg",
    "etag": '"1222d-NdJXul0EBtZEJFpPeIGGpKWvFAA"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 74285,
    "path": "../public/assets/surge-CtGZlkNK.jpeg"
  },
  "/assets/test-drive-byd-B427-SgK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"138c-+8Hr5aEUk4Ndijs3Noh/1kiUe7U"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 5004,
    "path": "../public/assets/test-drive-byd-B427-SgK.js"
  },
  "/assets/use-mobile-DIAA0F2q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"145-QVcSbbh3AC6ppx+llBec2zRGB8E"',
    "mtime": "2026-09-06T01:38:36.400Z",
    "size": 325,
    "path": "../public/assets/use-mobile-DIAA0F2q.js"
  },
  "/assets/test-drive-hero-Bg57GLht.jpg": {
    "type": "image/jpeg",
    "etag": '"233a5-/M4RgYliTvgrXFG8wNK2l4qm00g"',
    "mtime": "2026-09-06T01:38:36.388Z",
    "size": 144293,
    "path": "../public/assets/test-drive-hero-Bg57GLht.jpg"
  },
  "/assets/two-tone-interior-cabin-BKWPNiG8.jpeg": {
    "type": "image/jpeg",
    "etag": '"200d4-/kvgsNKB1t4Hp7PredW78fOtJ/A"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 131284,
    "path": "../public/assets/two-tone-interior-cabin-BKWPNiG8.jpeg"
  },
  "/assets/users-DmgMD8Wc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"133-E+P6WCbUxL8AgHpOrGsBYyxB4jw"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 307,
    "path": "../public/assets/users-DmgMD8Wc.js"
  },
  "/assets/v2l-CjzRS34v.jpeg": {
    "type": "image/jpeg",
    "etag": '"2698f-EmZflV0bMlqo6KItDOt+fTdjD00"',
    "mtime": "2026-09-06T01:38:36.397Z",
    "size": 158095,
    "path": "../public/assets/v2l-CjzRS34v.jpeg"
  },
  "/assets/v2l-O6v5ovEE.png": {
    "type": "image/png",
    "etag": '"3d21d-SaJGodprxUQfqBKrgSFroT2P+Zg"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 250397,
    "path": "../public/assets/v2l-O6v5ovEE.png"
  },
  "/assets/ventilatedFrontSeats-ChJziLku.webp": {
    "type": "image/webp",
    "etag": '"41dc8-wimMwmPLLm7tPpOlEV7bmDLrkls"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 269768,
    "path": "../public/assets/ventilatedFrontSeats-ChJziLku.webp"
  },
  "/assets/weight-DfY4Qakb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"100-qQHYrP6v9O0G5PYpiDHvixkY9Dw"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 256,
    "path": "../public/assets/weight-DfY4Qakb.js"
  },
  "/assets/wheels-qkg3W4dk.webp": {
    "type": "image/webp",
    "etag": '"120a8-/9GVfPnPXCPcW2JyFFWAZtC4iaw"',
    "mtime": "2026-09-06T01:38:36.394Z",
    "size": 73896,
    "path": "../public/assets/wheels-qkg3W4dk.webp"
  },
  "/assets/wheels-UKLmYxRN.png": {
    "type": "image/png",
    "etag": '"28c90-n3iMTvX29JXglXlRqCDeGP+zRtE"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 167056,
    "path": "../public/assets/wheels-UKLmYxRN.png"
  },
  "/assets/wireless-charger-D6Ip_v8i.jpeg": {
    "type": "image/jpeg",
    "etag": '"1d08a-XboiAR/jFwA1CtQBdgZE1YvmXDA"',
    "mtime": "2026-09-06T01:38:36.392Z",
    "size": 118922,
    "path": "../public/assets/wireless-charger-D6Ip_v8i.jpeg"
  },
  "/assets/wrench-BxImwl_q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"12b-UZZ19mwQmOTLclVO/bPTKNhX5Ew"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 299,
    "path": "../public/assets/wrench-BxImwl_q.js"
  },
  "/assets/wireless-charging-BnBEF1HH.jpeg": {
    "type": "image/jpeg",
    "etag": '"d1cf-C9o0ONaR81IaScQN3quP8doY5XI"',
    "mtime": "2026-09-06T01:38:36.398Z",
    "size": 53711,
    "path": "../public/assets/wireless-charging-BnBEF1HH.jpeg"
  },
  "/assets/zap-DMuUbOXs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"107-XCrR4jacwnGCQnZycXC/RYx2zRU"',
    "mtime": "2026-09-06T01:38:36.399Z",
    "size": 263,
    "path": "../public/assets/zap-DMuUbOXs.js"
  },
  "/assets/wirelessCharging-DcGToVPR.png": {
    "type": "image/png",
    "etag": '"21ef1-/v37rfv13bF2zdvDLgNLTGsO7bw"',
    "mtime": "2026-09-06T01:38:36.396Z",
    "size": 138993,
    "path": "../public/assets/wirelessCharging-DcGToVPR.png"
  },
  "/assets/wirelessCharger-Qqch_P6L.jpeg": {
    "type": "image/jpeg",
    "etag": '"d2602-Q2mZhjWJgc/mIbUrnRFTRVjMJCc"',
    "mtime": "2026-09-06T01:38:36.408Z",
    "size": 861698,
    "path": "../public/assets/wirelessCharger-Qqch_P6L.jpeg"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _PVZqBN = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_MbbW5d = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_MbbW5d };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_PVZqBN)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
