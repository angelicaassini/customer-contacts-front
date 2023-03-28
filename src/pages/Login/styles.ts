import styled from "styled-components"
import {Link} from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 16px;
    margin: 0 auto;
`

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 502px;

    justify-content: space-around;
    padding: 10px 0;

    background: var(--Grey-3);
    -webkit-box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);
    -moz-box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);
    box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);

    font-family: Arial, Helvetica, sans-serif;

    h1{
        color: --color-primary;
    }

    label{
        font-weight: 400;
        font-size: 12px;
        color: var(--Grey-0);
        text-align: left;
        padding-left: 22px;
    }

    input, select{

        width: 330px;
        height: 48px;
        background: var(--Grey-2);
        border: 1px solid var(--Grey-2);
        border-radius: 4px;

        color: var(--Grey-1);

        margin: 0 auto;

        padding-left: 22px;

        @media screen and (max-width: 375px){
            width: 80%;
            justify-content: center;
        }
    }

    button{
        width: 326px;
        height: 48px;
        margin: 0 auto;

        background: var(--button-primary-negative);
        border: 1px solid var(--button-primary-negative);
        border-radius: 4px;

        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;

        @media screen and (max-width: 375px){
            width: 80%;
            justify-content: center;
        }
    }

    p{
        font-size: 14px;
        color: red;
        padding-left: 22px;
    }

`