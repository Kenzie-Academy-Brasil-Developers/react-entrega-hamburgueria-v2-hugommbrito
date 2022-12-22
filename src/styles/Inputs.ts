import styled from 'styled-components'

export const StyledInput = styled.input`
    height: 3.75rem;
    width: 365px;
    max-width: 30vw;
    padding: 0 .625rem 0 .9375rem;

    border: .125rem solid var(--color-grey-3);
    border-radius: var(--radius-2);
    
    color: var(--color-grey-3);
    font-size: var(--font-headline);
    font-weight: var(--font-weight-3);
    
    &:focus-visible{
        outline: none;
        border: .125rem solid var(--color-primary);

    }

    @media (max-width: 950px){
        width: 90vw;
    }
`