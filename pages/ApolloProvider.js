import React from "react";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import Layout from "../components/Layout";

const httpLink = new HttpLink({
    uri: `http://localhost:5000/`
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default (
    <ApolloProvider client={client}>
        <Layout />
    </ApolloProvider>
)