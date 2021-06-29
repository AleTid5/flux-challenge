import React from "react";
import Header from "./components/header";
import { AppProvider } from "./contexts/app.context";
import Background from "./components/background";
import Content from "./components/content";
import { SearchProvider } from "./contexts/search.context";

function App() {
  return (
    <AppProvider>
      <SearchProvider>
        <Background>
          <Header />
          <Content />
        </Background>
      </SearchProvider>
    </AppProvider>
  );
}

export default App;
