import { createContext } from "react";

export const ThemeCtx = createContext();

export default function ThemeContextProvider({ children }) {
  return (
    <ThemeCtx.Provider value={{ myColor: "yellow" }}>{children}</ThemeCtx.Provider>
  );
}
