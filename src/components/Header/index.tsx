import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartRounded, LogoutRounded } from "@mui/icons-material";

import logo from "../../assets/BurguerKenzieLogo.png"

import { StyledHeader } from "./style";
import { StyledInput } from "../../styles/Inputs";
import { tFilterFunc } from "../../interfaces";
import { CartContext } from "../../contexts/CartContext";

interface iHeaderProps{
    filter: tFilterFunc
}

export const Header = ({ filter }: iHeaderProps) => {
    const { setCartVisibility, cartList } = useContext(CartContext)
    const navigate = useNavigate()

    const logoutFunction = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <StyledHeader >
            <div className="container">
                <img 
                    src={logo} 
                    alt="Logo Burguer Kenzie"
                    />
                <div>
                    <StyledInput
                        type="text" 
                        placeholder="Digitar Pesquisa"
                        onChange={(e) => filter(e.target.value)}
                    />
                    <div className="cartIcon">
                        <ShoppingCartRounded color="disabled" onClick={() => setCartVisibility('visible')}/>
                        <p>{cartList.length}</p>
                    </div>
                    <LogoutRounded color="disabled" onClick={logoutFunction} />
                </div>

            </div>
        </StyledHeader>
    )
}