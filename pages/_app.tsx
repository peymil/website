import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-cmdr-outer-container flex h-full w-full items-center justify-center">
      <div className="bg-cmdr-inner-container flex w-3/5 h-4/6">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
