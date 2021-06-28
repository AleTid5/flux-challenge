import React from "react";
import Header from "./components/header";
import { AppProvider } from "./contexts/AppContext";
import Background from "./components/Background";

function App() {
  return (
    <AppProvider>
      <Background>
        <Header />
      </Background>
    </AppProvider>
  );
}

export default App;
