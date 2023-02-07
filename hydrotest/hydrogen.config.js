import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'JP',
    defaultLanguageCode: 'JA',
    storeDomain:
      // @ts-ignore
      process?.env.PUBLIC_STORE_DOMAIN || 'splatoonserizawa.myshopify.com',
    storefrontToken:
      // @ts-ignore
      process?.env.PUBLIC_STOREFRONT_API_TOKEN ||
      '5a423cb62c8c06a39a2704c6da379d96',
    privateStorefrontToken:
      // @ts-ignore
      process?.env.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    // @ts-ignore
    storefrontId: process?.env.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
