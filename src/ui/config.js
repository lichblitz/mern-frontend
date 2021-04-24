import { providers } from "@data-provider/core";

console.log(process.env.REACT_APP_BASE_URL);
providers.getByTag("axios").config({
  baseUrl: process.env.REACT_APP_BASE_URL,
});
