import "./../styles/styles.scss";
import "./../styles/custom.css";
import { AppProps } from "next/app";
import { Lato } from "next/font/google";

// unfortunately, for static deployment, we need to specify our Bootswatch theme font here again :/
// google font config retrieved from https://github.com/thomaspark/bootswatch/blob/v5/dist/superhero/_bootswatch.scss
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}
