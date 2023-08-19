export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? import.meta.env.VITE_BASE_URL_LOCAL
    : import.meta.env.VITE_BASE_URL_PROD;
