import "../styles/globals.css";
import Layout from "../components/Layout";
import WindowContextProvider from "../contexts/WindowContext";
import GlobalContextProvider from "../contexts/GlobalContext";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <WindowContextProvider>
        <Layout>
          <Head>
            <title>CHRISTOS KIPOUROS</title>
            <meta name="CHRISTOS KIPOUROS" content="we/app development - automated trading" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </WindowContextProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
