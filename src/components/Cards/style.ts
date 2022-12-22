import styled from "styled-components";

export const StyledCard = styled.li`
    max-width: 30%;
    width: 24rem;
    height: 21.875rem;
    box-sizing: border-box;

    border: 2px solid var(--color-grey-3);
    border-radius: var(--radius-1);

    img{
        height: 9.375rem;
        max-height: 50%;
        width: 100%;
        
        object-fit: contain;
        background-color: var(--color-grey-3);
    }
    
    div{
        height: 12.5rem;
        max-height: 50%;
    
        display: flex;
        flex-direction: column;
        gap: .8125rem;
        /* justify-content: space-around; */

        padding: 20px;
    }

    h2{
        font-size: var(--font-heading-3);
        font-weight: var(--font-weight-1)
    }

    h3{
        font-size: var(--font-heading-4);
        font-weight: var(--font-weight-3);
    }
    
    h4{
        font-size: var(--font-heading-3);
        font-weight: var(--font-weight-1);
        color: var(--color-primary);

    }

    @media (max-width: 950px){
        max-width: unset;
        width: 18.75rem;
        flex-shrink: 0;
    }
`