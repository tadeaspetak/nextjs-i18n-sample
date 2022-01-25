import "../styles/global.css";
import { AppProps } from "next/app";
import { withTranslateRoutes } from "next-translate-routes";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withTranslateRoutes(MyApp);
