import { createContext, useState } from "react";

const GlobalContext = createContext(null)

const GlobalProvider = ({children}) => {
  const [datas, setDatas] = useState([])
  const [loggedIn, setLoggedIn] = useState({})

  return (
    <GlobalContext.Provider value={{
      datas, setDatas,
      loggedIn, setLoggedIn
    }}>
      {children}
    </GlobalContext.Provider>

  )
}

export { GlobalContext, GlobalProvider }
