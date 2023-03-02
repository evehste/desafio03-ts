import { createContext, useState, useEffect } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
    isLoggedIn: boolean,
    user: string,
    SetIsLoggedIn: (isLoggedIn: boolean) => void
  }
  
  export const AppContext = createContext({} as IAppContext);
  
  export const AppContextProvider = ({children} : any) => {
    const [ isLoggedIn, SetIsLoggedIn ] = useState<boolean>(false);

    const Storage = getAllLocalStorage();

    useEffect(() => { // indicar que precisar reinderizar a página.
      if(Storage){
        const { login } = JSON.parse(Storage);
        SetIsLoggedIn(login);
      }
    }, [])


    const user = "Eveh";

    return (
      <AppContext.Provider value={{isLoggedIn, user, SetIsLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }