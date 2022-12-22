import styled from 'styled-components'

export const StyledHeader = styled.div`
    width: 100vw;
    padding: 10px 0;
    background-color: var(--color-grey-4);

    
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;

        svg{
            cursor: pointer;
        }

        .cartIcon{
            position: relative;

            p{
                font-size: 11px;
                color: var(--color-white);

                height: 15px;
                width: 13px;
                padding: 1px;
                border-radius: 3px;
                background-color: var(--color-primary);
                text-align: center;
                line-height: 100%;

                position: absolute;
                top: -6px;
                right: -6px;
            }
        }
    }


    @media (max-width: 950px){
        .container{
            flex-direction: column;
            gap: 20px;
        }

        .nav{
            width: 100vw;
            display: flex;
            flex-direction: column;
        }

        input{
            width: 90%;
            max-width: 90%;
        }

    }

`