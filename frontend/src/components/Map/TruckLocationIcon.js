import L from "leaflet";
import camionLogo from "../../assets/camionLogo.svg";

export const TruckLocationIcon = L.icon({
  iconUrl: camionLogo,
  iconRetinaUrl: camionLogo,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [40, 40],
  className: "leaflet-truck-icon",
});
