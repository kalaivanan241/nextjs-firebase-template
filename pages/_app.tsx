import "../styles/globals.css";
import type { AppProps } from "next/app";
import FirebaseClientProvider from "../FirebaseClientProvider";
import AuthProvider from "../AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseClientProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </FirebaseClientProvider>
  );
}

export default MyApp;
