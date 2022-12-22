import styled from "styled-components";

export const StyledRegister = styled.div`
    padding: 40px 18px;

#dots{
    display: none;
}

form{
    border: 1px solid var(--color-grey-3);
    padding: 21px 19px;

    display: flex;
    flex-direction: column;
    
    div{
        display: flex;
        justify-content: space-between;
        /* align-items: center; */

        a{
            text-decoration: underline;
            color: var(--color-grey-2);
            font-size: 14px;
        }
    }

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
        justify-content: space-between;
        align-items: center;
        
        form{
            width: 400px;
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