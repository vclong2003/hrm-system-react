import "@assets/css/global.css";
import "@assets/css/fonts.css";

import { BrowserRouter } from "react-router-dom";

import { ReactNode } from "react";

interface IAppProviderProps {
  children: ReactNode;
}
export default function AppProvider({ children }: IAppProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
