export const API_URL =
  process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_URL : process.env.NEXT_PUBLIC_PROD_URL
