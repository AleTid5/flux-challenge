import { ReactNode } from "react";

export interface AppProviderInterface {
  children: ReactNode;
}

export interface AppContextInterface {
  isBackgroundInverted: boolean;
  invertBackground: () => void;
}
