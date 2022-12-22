/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
  const [cartQnt, setCartQnt] = useState<number>(0);
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
      const productIndex = cartList.findIndex(e => e.id === product.id)


    if(productIndex == -1){
      product.qnt = 1

      const newCartList = [...cartList, product]
      setCartList(newCartList)  

      toast.success(`${product.name} adicionado ao carrinho! 😋`,
        { position: "bottom-right", autoClose: 2500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", }
      );

    } else {
      const productInCart = cartList.splice(productIndex, 1)
      productInCart[0].qnt! += 1
      setCartList([...cartList, productInCart[0]])
        
    }

  }
    
  const removeFromCart = (product: iProduct) => {
    const clickedProduct = cartList.find(prodInCart => prodInCart.id == product.id)

    if(clickedProduct!.qnt! <= 1){
        const listWithoutClickedItem = cartList.filter(item => item.id !== product.id)
        setCartList(listWithoutClickedItem)

    } else {
        const clickedProdIndex = cartList.findIndex(prodInCart => prodInCart.id == product.id)

        const reduceQnt = cartList.splice(clickedProdIndex, 1)
        reduceQnt[0].qnt! -= 1

        setCartList([...cartList, reduceQnt[0]])
    }
  }

  useEffect(() => {
    const newTotal = cartList.reduce((acc, curr) => ((acc) + (curr.price * curr.qnt!)), 0)
    const newQntTotal = cartList.reduce((acc, curr) => ((acc) + curr.qnt!), 0)

    setCartTotal(newTotal)
    setCartQnt(newQntTotal)
  }, [cartList])
  
  return (
    <CartContext.Provider value={{productList, filterList, filteredList, addProductoToCart, setCartTotal, setCartList, cartList, cartTotal, cartVisibility, setCartVisibility, removeFromCart, cartQnt }} >
      {children}
    </CartContext.Provider>
  )
}