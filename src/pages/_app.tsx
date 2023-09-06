import SectionProvider from "@/context/section-provider";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" themes={["dark", "light"]}>
      <SectionProvider>
        <Component {...pageProps} />
      </SectionProvider>
    </ThemeProvider>
  );
}
