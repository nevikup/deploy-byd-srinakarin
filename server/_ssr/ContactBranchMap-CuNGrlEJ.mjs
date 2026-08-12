import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L } from "../_libs/leaflet.mjs";
import { u as useI18n } from "./router-DxC53ezz.mjs";
import "../_libs/seroval.mjs";
import { M as MapContainer, T as TileLayer, a as Marker, P as Popup, u as useMap } from "../_libs/react-leaflet.mjs";
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
import "./server-yUQbsOD4.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:http";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
import "../_libs/react-leaflet__core.mjs";
const markerImage = "/assets/marker-google-map-eF0W7zp5.png";
const branchMarkerIcon = L.icon({
  iconUrl: markerImage,
  iconSize: [44, 59],
  iconAnchor: [22, 59],
  popupAnchor: [0, -55]
});
function FitToBranches({ bounds }) {
  const map = useMap();
  reactExports.useEffect(() => {
    map.fitBounds(bounds, { padding: [28, 28], maxZoom: 18 });
  }, [bounds, map]);
  return null;
}
function ContactBranchMap({ branches }) {
  const { t } = useI18n();
  const bounds = reactExports.useMemo(
    () => branches.map((branch) => [branch.position.lat, branch.position.lng]),
    [branches]
  );
  const mapCenter = reactExports.useMemo(() => [13.83, 100.56], []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MapContainer,
    {
      center: mapCenter,
      zoom: 16,
      scrollWheelZoom: false,
      className: "h-[480px] md:h-[560px] w-full",
      "aria-label": t("contact.mapAria"),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TileLayer,
          {
            attribution: '© <a href="https://www.google.com/maps">Google Maps</a>',
            url: "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&scale=2",
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
            maxZoom: 18
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FitToBranches, { bounds }),
        branches.map((branch, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Marker,
          {
            position: [branch.position.lat, branch.position.lng],
            icon: branchMarkerIcon,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Popup, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                t("contact.mapPinLabel"),
                " ",
                index + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: t(branch.titleKey) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: branch.mapUrl, target: "_blank", rel: "noreferrer", className: "text-xs text-primary underline", children: t("contact.openInGoogleMaps") })
            ] }) })
          },
          branch.name
        ))
      ]
    }
  );
}
export {
  ContactBranchMap,
  ContactBranchMap as default
};
