// import '@/styles/globals.css'
import { PokeProvider } from "@/context/PokeContext";
import "@/styles/global.scss";
import type { AppProps } from "next/app";
import "@/styles/index.scss";
import "@/styles/pokemonCard.scss"
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokeProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </PokeProvider>
  );
}
