import { createContext,useReducer } from "react";


export const DataContext=createContext()

export const DataProvider=({children})=>{
    const initialState={notify:{},auth:{}}
    const[state,dispatch]=useReducer(reducers,)
    return(
        <DataContext.Provider value={}>
            {children}
        </DataContext.Provider>
    )

}