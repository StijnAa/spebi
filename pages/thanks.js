import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Ticker from "../components/ticker.component";
import RandomText from "../components/randomText.component";
import Thanks from "../components/thanks.component";

export default function Home() {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Spebi.nl</title>
        </Head>
        <main>
        <RandomText/>
          <Thanks />
        </main>
        <Ticker />
      </ThemeProvider>
    </SSRProvider>
  );
}
