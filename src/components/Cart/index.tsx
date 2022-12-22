import React, { useContext } from "react";
import { Close, Delete } from "@mui/icons-material";

import { CartContext } from "../../contexts/CartContext";

import { StyledButton } from "../../styles/Buttons";
import { StyledCartCotnainer, StyledCartTop, StyledCartCard, StyledCartTotal } from "./style";


export const Cart = () => {
    const { cartVisibility, setCartVisibility, cartList, cartTotal, setCartList, setCartTotal } = useContext(CartContext)

    const removeFromCart = (id: number | string) => {
        const listWithoutClickedItem = cartList.filter(item => item.id !== +id)
        setCartList(listWithoutClickedItem)

    }

    return (
        <StyledCartCotnainer display={cartVisibility} >
            <StyledCartTop >
                <h4>Carrinho de Comporas</h4>
                <Close onClick={() => setCartVisibility('hidden')} />
            </StyledCartTop>
            {
                cartList.map(product => {
                    return (
                        <StyledCartCard key={product.id}>
                            <div>
                                <img src={product.img} alt="" />
                                <div>
                                    <h4>{product.name}</h4>
                                    <p>{product.category}</p>
                                </div>
                            </div>
                            <Delete id={`${product.id}`} onClick={(e) => removeFromCart((e.currentTarget as SVGSVGElement).id)} color='disabled'/>
                        </StyledCartCard>
                    )
                })
            }
            <StyledCartTotal >
                <div>
                    <h2>Total</h2>
                    <h3>{(cartTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    }
                    ))}
                </h3>
                </div>
                <StyledButton grey big onClick={() => {setCartList([]); setCartTotal(0)}}>Remover Todos</StyledButton>
            </StyledCartTotal>
        </StyledCartCotnainer>
    )
    
}
//CART TOP
//CART CARDS
//CART TOTAL