import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../presentation/mui-theme/mui-theme";
import "../styles/globals.css";
import Layout from "../components/Layout";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import { AuthProvider } from "../context/authContext";
import { setContext } from "@apollo/client/link/context";
import cookie from 'js-cookie'

const progress = new ProgressBar({
  size: 6,
  color: "#ffffff",
  className: "z-index",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const httpLink = new HttpLink({
    uri: `https://glacial-fortress-42423.herokuapp.com/`,
  });

  const authLink = setContext(() =>{
    const token = cookie.get('jwtToken')

    return{
      headers: {Authorization: token ? `Bearer ${token}` : ''}
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <Provider store={store}> */}

        <ApolloProvider client={client}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ApolloProvider>

        {/* </Provider> */}
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
