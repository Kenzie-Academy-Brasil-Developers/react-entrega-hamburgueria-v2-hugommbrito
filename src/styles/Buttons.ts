import styled from "styled-components"

interface iStyledButtonProps{
    big?: boolean,
    grey?: boolean,
}

export const StyledButton = styled.button<iStyledButtonProps>`

    height: ${props => props.big ? '3.75rem' : '2.5rem'};
    width: max-content;
    padding: 1.25rem;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: var(--radius-2);
    border: 2px solid;
    border-color: ${props => props.grey ? 'var(--color-grey-3)' : 'var(--color-primary)'};

    background-color: ${props => props.grey ? 'var(--color-grey-3)' : 'var(--color-primary)'};
    color: ${props => props.grey ? 'var(--color-grey-2)' : 'var(--color-white)'};
    font-size: var(--font-headline);
    font-weight: var(--font-weight-2);

    &:hover{
        background-color: ${props => props.grey ? 'var(--color-grey-2)' : 'var(--color-primary-50)'};
        border-color: ${props => props.grey ? 'var(--color-grey-2)' : 'var(--color-primary-50)'};
        color: var(--color-white);
    }

`