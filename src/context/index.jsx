import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContext({ children }) {
  const [searchParam, setSearchParam] = useState("");

  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </GlobalContext.Provider>
  );
}
