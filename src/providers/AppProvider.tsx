import "@assets/css/global.css";
import "@assets/css/fonts.css";

import { BrowserRouter } from "react-router-dom";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@store/index";

interface IAppProviderProps {
  children: ReactNode;
}
export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
}
