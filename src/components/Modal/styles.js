import styled from 'styled-components';  

    export const Modal =  styled.div`
        width: 400px;
        height: 350px;

        display: flex;
        flex-direction: column;

        background-color: var(--Grey-3);

        margin: 200px 200px;
        z-index: 1000;
        position: absolute;  
        
        align-items: center;
        justify-content: space-around;
    
    .h1-button{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;

        background-color: var(--Grey-2);
       
        h1{
            font-size: 14px;
            font-weight: 700;
            color: var(--Grey-1);  
        }

        button{
            width:  11px;
            height: 11px;
            color: var(--Grey-1);
            position: relative;

            margin-top: -5px;
            margin-right: 10px;       
        }
    }

    .div-inputs{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin-top: 20px;

        label{
            width: 50px;
            font-weight: 400;
            font-size: 12px;
            color: var(--Grey-0);
                
        }
        
        input{
            width: 100%;
            height: 48px;
            background: var(--Grey-2);
            border: 1px solid var(--Grey-2);
            border-radius: 4px;
    
            color: var(--Grey-1);
    
            margin: 10px;
            padding-left: 22px;
    
            @media screen and (max-width: 375px){
                width: 90%;
                justify-content: center;
            }
        }
    
        p{
            color: red;
        }
    }

    
        

    button{
        width: 326px;
        height: 48px;
        background: var(--button-primary-negative); 
        
        border: 1px solid var(--button-primary);
        border-radius: 4px;
        margin: 10px auto;

        font-weight: 500;
        font-size: 16px;
        color: #FFFFFF;

        @media screen and (max-width: 375px){
            width: 90%;
            justify-content: center;
        }
    }

    `
    