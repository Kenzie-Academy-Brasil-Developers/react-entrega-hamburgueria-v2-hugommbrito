import React from "react"

import { StyledCard } from "./style"
import { StyledButton } from "../../styles/Buttons";
import { iProduct } from "../../contexts/CartContext/types";

interface iCardProps{
    myKey: number,
    info: iProduct,
    addToCart: (product: iProduct) => void,
}

export const Card = ({ myKey, info, addToCart }: iCardProps) => {
    
      return (
        <StyledCard id={'crd-'+myKey}>
            <img src={info.img} alt={info.name} />
            <div className="cardInfo">
                <h2>{info.name}</h2>
                <h3>{info.category}</h3>
                <h4>{(info.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }
                ))}</h4>
                <StyledButton onClick={() => addToCart(info)}>Adicionar</StyledButton>
            </div>
        </StyledCard>
    )
}