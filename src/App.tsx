import React from "react";
import "./App.css";
import { Button } from "antd";
import { Route, Routes } from "react-router-dom";
import Continents from "./continents";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Continent from "./continent";

const httpLink = createHttpLink({
  uri: "https://countries.nausicaa.wilders.dev/",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

function Main() {
  return (
    <Routes>
      <Route path="/continents" element={<Continents />} />
      <Route path="/continent/:continentCode" element={<Continent />} />
      <Route path="/" element={<Continents />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </div>
  );
}

export default App;
