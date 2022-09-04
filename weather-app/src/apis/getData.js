import axios from "axios";

export const getData = {
  method: "GET",
  url: "/cities",
  headers: {
    "X-RapidAPI-Key": "469543b702mshc46a8883a299cafp1075b9jsn1c9a014d32cf",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
