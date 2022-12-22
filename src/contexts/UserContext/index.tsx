import React, { createContext } from 'react'
import { iContextProviderProps } from '../CartContext/types'
import { iData, iUserContextProvider } from './types'

import { useNavigate } from 'react-router-dom'
import{ SubmitHandler } from 'react-hook-form'



import { api } from "../../services/api";
import { toast } from "react-toastify";



export const UserContext = createContext({} as iUserContextProvider)

export const UserContextProvider = ({ children }: iContextProviderProps) => {

    const navigate = useNavigate()

    const submitFunction: SubmitHandler<iData> = async (data) => {
        console.log('cheguei aqui 1');
        try {
            console.log('cheguei aqui 2');
            const response = await api.post('login', data)
            console.log('cheguei aqui 3');

            toast.success('Login realizado com sucesso!', { position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", })

            if (response.data.accessToken) {
                localStorage.setItem('@TOKEN:', response.data.accessToken)
                navigate('/home')

            } else {
                toast.error(response.data, {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
            }

        } catch (error) {
            console.error(error);
            toast.error(`Algo deu errado com a sua requisição, Tente mais tarde`, {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }
    } 
    
    return (
        <UserContext.Provider value={{ submitFunction}} >
            {children}
        </UserContext.Provider>
    )
}
