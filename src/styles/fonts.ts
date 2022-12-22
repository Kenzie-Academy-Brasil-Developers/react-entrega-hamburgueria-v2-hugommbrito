import styled from "styled-components";

interface iStyledTextProps {
    fs?: number,
    fw?: number,
    fc?: "grey1" | "grey2" | "white" | "primary" 
}

export const StyledText = styled.p<iStyledTextProps>`
    font-family: 'Inter', sans-serif;
    line-height: 150%;

    font-size: ${ props => props.fs ? props.fs : 16}px;
    font-weight: ${ props => props.fw ? props.fw : 700};
    color: 
        ${props => {
            switch(props.fc){
                case "grey1":
                    return 'var(--color-grey-1)';
                case "grey2":
                    return 'var(--color-grey-2)';
                case "white":
                    return 'var(--color-white)';
                case "primary":
                    return 'var(--color-primary)';
            }
        }};
`