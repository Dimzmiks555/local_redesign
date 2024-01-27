import NoSsr from "@/components/NoSsr/NoSsr";
import "@/styles/globals.css";
import 'react-virtualized/styles.css'; // only needs to be imported once

export default function App({ Component, pageProps }) {
  return (
    <NoSsr>
      <Component {...pageProps} />
    </NoSsr>
  );
}
