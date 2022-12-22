import React, { createContext } from 'react'
import { iContextProviderProps } from '../CartContext/types'
import { iUserContextProvider } from './types'

export const UserContext = createContext({} as iUserContextProvider)

export const UserContextProvider = ({ children }: iContextProviderProps) => {
    return (
        <UserContext.Provider value={{}} >
            {children}
        </UserContext.Provider>
    )
}