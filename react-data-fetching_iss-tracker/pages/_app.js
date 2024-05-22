import GlobalStyle from "../styles";
import useSWR from "swr";

// async function fetcher(...args) {
//   const response = await fetch(...args);
//   return await response.json();

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
