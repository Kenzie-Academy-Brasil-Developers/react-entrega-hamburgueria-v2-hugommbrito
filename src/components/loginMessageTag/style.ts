import styled from "styled-components";

export const StyledLoginMessageTAg = styled.div`
    margin: 21px auto;
        padding: 16px 14px;
        
        display: flex;
        gap: 20px;

        border: 1px solid var(--color-grey-3);
        box-shadow: 0 4px 40px -20px rgba(0, 0, 0, 0.25);

        div{
            flex-shrink: 0;
            width: 60px;
            height: 60px;
            background-color: rgba(39, 174, 96, 0.1);
            border-radius: 5px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
`