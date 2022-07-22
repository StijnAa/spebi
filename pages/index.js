import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Hero from "../components/hero.component";
import Ticker from "../components/ticker.component";

export default function Home() {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Spebi.nl</title>
        </Head>
        <main>
          <Ticker />
          <Hero />
        </main>
      </ThemeProvider>
    </SSRProvider>
  );
}
