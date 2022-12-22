import styled from "styled-components";

export const StyledLogin = styled.div`
    padding: 40px 18px;

    #dots{
        display: none;
    }

    form{
        border: 1px solid var(--color-grey-3);
        padding: 21px 19px;

        display: flex;
        flex-direction: column;

        button{
            width: 100%;
            margin: 18px auto;
        }

        p:nth-child(5){
            text-align: center;
        }
    }

    @media (min-width: 900px){
        width: 900px;
        margin: 10vh auto;

        & > div{
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            
            form{
                max-width: 500px;

            }

            div{
                max-width: 380px;

                #dots{
                    display: block;
                }
            }


        }

    }
`