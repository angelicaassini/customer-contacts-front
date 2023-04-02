import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 16px;
    margin: 0 auto;
`

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100%;

    justify-content: space-around;
    padding: 10px 0;

    background: var(--Grey-3);
    -webkit-box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);
    -moz-box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);
    box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);

    font-family: Arial, Helvetica, sans-serif;

    .title{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
             font-weight: 700;
             font-size: 18px;
             color: var(--Grey-0);

             text-align: center;
        }
 
        h3{
             padding-top: 22px;
             font-weight: 400;
             font-size: 12px;
             color: var(--button-primary);
        }
    }
   
    label{
        width: 90%;
        font-weight: 400;
        font-size: 12px;
        color: var(--Grey-0);
        text-align: left;
        padding: 10px 0 5px 22px;
    }

    input{
        width: 90%;
        height: 40px;
        background: var(--Grey-2);
        border: 1px solid var(--Grey-2);
        border-radius: 4px;

        color: var(--Grey-1);

        margin: 0 auto 15px;

        padding-left: 22px;

        @media screen and (max-width: 375px){
            justify-content: center;
        }
    }

    p{
        font-size: 14px;
        color: red;
        padding-left: 22px;
    }

    button{
        width: 90%;
        height: 40px;
        margin: 20 auto;
        margin: 20px auto 15px;
    
        align-self: center;
        background: var(--button-primary-2);
        border: 1px solid var(--button-primary-2);
        border-radius: 4px;

        font-weight: 500;
        font-size: 16px;
        color: var(--Grey-0);

        @media screen and (max-width: 375px){
            justify-content: center;
        }
    }


`