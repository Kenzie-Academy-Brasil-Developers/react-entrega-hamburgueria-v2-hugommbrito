import React, { useContext } from 'react'
import { StyledMain, StyledCardContainer } from './style'
import { Card } from '../../components/Cards'
import { Cart } from '../../components/Cart'
import { Header } from '../../components/Header'
import { CartContext } from '../../contexts/CartContext'

export const Home = () => {
    const { filterList, filteredList, addProductoToCart } = useContext(CartContext)
    

    return (
        <>
        <Header filter={filterList} />
        <StyledMain >
          <StyledCardContainer>
            {filteredList.map((card, key) => {
              return (
              <Card key={key} myKey={key} info={card} addToCart={addProductoToCart}/>
            )})}
          </StyledCardContainer>
          <Cart />
        </StyledMain>
        </>
    )
}