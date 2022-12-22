import styled from "styled-components"

export const StyledMain = styled.main`
    max-width: var(--container-1);
    margin: 0 auto;

    margin-top: 2rem;

    display: flex;
    justify-content: space-between;

    @media (max-width: 950px){
        flex-direction: column;
        justify-content: flex-start;
        gap: 30px;
    }
`

export const StyledCardContainer = styled.ul`
  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    
    @media (max-width: 950px){
        width: 90%;
        margin: 0 auto;

        flex-wrap: nowrap;
        flex-shrink: 0;

        overflow-x: auto;
    }
`