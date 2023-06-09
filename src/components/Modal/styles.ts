import styled from 'styled-components';  

    export const Modal =  styled.div`
        width: 468px;
        height: 500px;

        display: flex;
        flex-direction: column;

        background-color: var(--Grey-3);

        margin: 150px;
        z-index: 1000;
        position: absolute;  
        
        align-items: center;
        justify-content: space-around;

        background: var(--Grey-3);
        -webkit-box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);
        -moz-box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);
        box-shadow: 17px 24px 28px 3px rgba(102,97,102,1);
    

        
    .h1-button{
        width: 300px;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        /* padding: 0 10px; */

        
       
        h1{
            font-size: 14px;
            font-weight: 700;
            color: var(--Grey-1);  
        }

        button{
            width:  25px;
            height: 25px;
            border-radius: 50%;
            background: var(--button-primary-2);
            color: var(--Grey-0);
            position: relative;

            /* margin-top: -5px; */
            margin-right: 10px;       
        }
    }

    .h2-h3-button{
        width: 300px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        h2{
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--Grey-0);  
        }
       
        h3{
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 15px;
            color: var(--Grey-1);  
        }

        .cancel-button{
            width:  30%;
            height: 40px;
            margin: 10px 0;
            border-radius: 4px;
            background: var(--button-primary-2);
            color: var(--Grey-0);
            position: relative;               
        }
    }

    .div-inputs{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-content: center;
       

        label{
            width: 90%;
            height: 40px;
            font-weight: 400;
            font-size: 12px;
            color: var(--Grey-0);   
            margin-bottom: -25px;
            
        }
        
        input{
            width: 90%;
            height: 40px;
            background: var(--Grey-2);
            border: 1px solid var(--Grey-2);
            border-radius: 4px;
    
            color: var(--Grey-1);
    
            margin: 10px  0 25px 0 ;
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
        

    .internal-edit-button{
        width: 90%;
        height: 40px;
        background: var(--button-primary-2); 
        
        border: 1px solid var(--button-primary-2);
        border-radius: 4px;
        margin: 10px auto;

        font-weight: 500;
        font-size: 16px;
        color: var(--Grey-0);
        align-self: center;
    
        

        @media screen and (max-width: 375px){
            width: 90%;
            justify-content: center;
        }
        
    }

    .delete-button{
        width: 50%;
        height: 40px;
        background: var(--button-primary-2); 
        
        border: 1px solid var(--button-primary-2);
        border-radius: 4px;
        margin: 10px auto;

        font-weight: 500;
        font-size: 16px;
        color: var(--Grey-0);

    }

    .add-button{
        width: 90%;
        height: 40px;
        background: var(--button-primary-2); 
        
        border: 1px solid var(--button-primary-2);
        border-radius: 4px;
        margin: 10px auto;

        font-weight: 500;
        font-size: 16px;
        color: var(--Grey-0);
        align-self: center;
    
        

        @media screen and (max-width: 375px){
            width: 90%;
            justify-content: center;
        }
        
    }

    
`
    