import { createContext, useState } from "react";
import { IChildren, IPokeContext } from "./@types";


export const PokeContext = createContext({} as IPokeContext)

export const PokeProvider = ({children}:IChildren) => {
    const [wordToSearch,setWordToSearch] = useState<string>("")

    return (
        <PokeContext.Provider value={{wordToSearch,setWordToSearch}}>
            {children}
        </PokeContext.Provider>
    )
}