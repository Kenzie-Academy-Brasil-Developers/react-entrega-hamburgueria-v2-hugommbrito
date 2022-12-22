import React from "react"
import { StyledLoginMessageTAg } from "./style"
import { StyledText } from "../../styles/fonts"
import shoppingBag from '../../../src/assets/shoppingBag.svg'

export const LoginMessageDiv = () => {
    return(
        <StyledLoginMessageTAg>
            <div>
               <img src={shoppingBag} alt="" />
            </div>
           <StyledText fw={400} fs={14} >A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</StyledText>
        </StyledLoginMessageTAg>
    )
}