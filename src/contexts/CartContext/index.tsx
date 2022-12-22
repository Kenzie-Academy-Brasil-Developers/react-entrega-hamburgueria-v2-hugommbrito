import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { iCartProviderValue, iContextProviderProps, iProduct } from "./types";

export const CartContext = createContext({} as iCartProviderValue)

export const CartContextProvider = ({ children }: iContextProviderProps) => {
  const [productList, setProductList] = useState([] as iProduct[]);
  const [filteredList, setFilteredList] = useState([] as iProduct[]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartList, setCartList] = useState([] as iProduct[]);
  const [cartVisibility, setCartVisibility] = useState<'hidden' | 'visible'>('hidden');
  const navigate = useNavigate()

  const token = localStorage.getItem('@TOKEN:')

  useEffect(() => {
    if(token){
      const getProducts = async () => {
        try{
          
          const response = await api.get('products',{
            headers: {
                Authorization: `Bearer ${token}`
            }
              
          })

          setProductList(response.data)
          setFilteredList(response.data)

        } catch {
          toast.error(`Tivemos algum problema ao carregar os produtos, tente novamente mais tarde.`,
            { position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",}
          );

        }
      }

      getProducts()
    } else {
      navigate('/login')

    }
  }, [token])

      

  const filterList = (value: string) => {
    if (value === "") {
      setFilteredList([...productList]);

    } else {
      setFilteredList(
        productList.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );

    }
  };

  const addProductoToCart = (product: iProduct) => {
      const isProductNew = cartList.find(e => e.id === product.id)

    if(!isProductNew){
      const newCartList = [...cartList, product]
      setCartList(newCartList)  

      toast.success(`${product.name} adicionado ao carrinho! 😋`,
        { position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", }
      );

    } else {
      toast.error(`Vá com calma, guloso! ${product.name} já está no carrinho! 😋`,
        {position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", }
      );
        
    }

  }
    
  useEffect(() => {
    const newTotal = cartList.reduce((acc, curr) => ((acc) + curr.price), 0)

    setCartTotal(newTotal)
  }, [cartList])
  
  return (
    <CartContext.Provider value={{productList, filterList, filteredList, addProductoToCart, setCartTotal, setCartList, cartList, cartTotal, cartVisibility, setCartVisibility }} >
      {children}
    </CartContext.Provider>
  )
}