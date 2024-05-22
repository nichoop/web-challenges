import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [light, setLight] = useState();

  function handleLightToggle() {
    setLight(false);
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} light={light} onAddLight={handleAddLight} />
    </Layout>
  );
}
