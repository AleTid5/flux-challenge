import React from "react";
import Header from "./components/header";
import { AppProvider } from "./contexts/app.context";
import Background from "./components/background";

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
