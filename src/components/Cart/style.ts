import styled from "styled-components";

interface iCartProps {
    display: 'hidden' | 'visible'
}

export const StyledCartCotnainer = styled.div<iCartProps>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.3);

    visibility: ${props => props.display};
    
    svg{
        cursor: pointer;
    }

`

export const StyledCartTop = styled.div`
    width: 40vw;
    height: 4.0625rem;

    padding: 1.25rem;

    background-color: var(--color-primary);
    border-radius: var(--radius-1) var(--radius-1) 0 0;

    color: var(--color-white);

    display: flex;
    justify-content: space-between;


    @media (max-width: 950px){
        width: 90vw;
    }
`

export const StyledCartCard = styled.div`
    width: 40vw;
    height: 6.25rem;
    padding: .625rem;

    background-color: var(--color-grey-4);

    display: flex;
    justify-content: space-between;
    
    & > div{
        display: flex;
        gap: .625rem;
    }

    img{
        width: 5rem;
        height: 5rem;
        border-radius: var(--radius-1);
        background-color: var(--color-grey-3);
    }

    div > h4{
        font-weight: var(--font-weight-1);
        font-size: var(--font-heading-4);
    }

    div > p{
        font-weight: var(--font-weight-3);
        font-size: var(--font-caption);
        color: var(--color-grey-2);
    }

    & > p{
        font-weight: var(--font-weight-2);
        font-size: var(--font-caption);
        color: var(--color-grey-2);

        cursor: pointer;
    }

    @media (max-width: 950px){
        width: 90vw;
    }

`

export const StyledCartTotal = styled.div`
    width: 40vw;
    padding: .625rem;

    background-color: var(--color-grey-4);
    border-top: 2px solid var(--color-grey-3);
    border-radius: 0 0 var(--radius-1) var(--radius-1);

    div{
        display: flex;
        justify-content: space-between;
    }

    button{
        margin: 1.375rem 0 .625rem 0;
        width: 100%;
    }

    @media (max-width: 950px){
        width: 90vw;
    }
`
