import { createContext, useState } from "react";

const GlobalContext = createContext(null)

const GlobalProvider = ({children}) => {
  const [name, setName] = useState("Vijay")

  return (
    <GlobalContext.Provider value={{
      name, setName
    }}>
      {children}
    </GlobalContext.Provider>

  )
}

export { GlobalContext, GlobalProvider }
