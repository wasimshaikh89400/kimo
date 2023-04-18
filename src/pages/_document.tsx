import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import theme from "@utils/theme";
const cache = createEmotionCache({ key: "css" });

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Greycliff+CF&display=swap"
          />
        </Head>
        <body>
          <CacheProvider value={cache}>
            <Main />
            <NextScript />
          </CacheProvider>
        </body>
      </Html>
    );
  }
}
