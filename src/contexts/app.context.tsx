import { createContext, useContext, useState } from "react";
import {
  AppContextInterface,
  AppProviderInterface,
} from "../interfaces/app-context.interface";

const AppContext = createContext({
  isBackgroundInverted: false,
  invertBackground: () => {},
} as AppContextInterface);

const { Provider } = AppContext;

export const AppProvider = ({ children }: AppProviderInterface) => {
  const [isBackgroundInverted, setIsBackgroundInverted] =
    useState<boolean>(false);

  const invertBackground = () => setIsBackgroundInverted(!isBackgroundInverted);

  return (
    <Provider value={{ isBackgroundInverted, invertBackground }}>
      {children}
    </Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return context;
};
