import styled from "styled-components";


export const StyledNav = styled.nav`
    width: 90%;
    height: 118px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--Grey-4);

    img{
        width: 100px;
    }

    button{
        width: 80px;
        height: 40px;
        background: var(--Grey-3); 
        border: 1px solid var(--Grey-3);
        border-radius: 4px;
        
        font-weight: 600;
        font-size: 14px;
        color: var(--Grey-0);
        margin-right: -50px;
    }
`

export const ContainerDashboard = styled.div`
    width: 100%;
    height: 90%;
    max-width: 1200px;
    padding: 16px;
    background: var(--Grey-4);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;


    header{
        width: 500px;
        height: 118px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: var(--Grey-4);

        p{
            font-weight: 700;
            font-size: 18px;
            color: var(--Grey-0);
        }

        span{
            font-weight: 400;
            font-size: 14px;
            color: var(--Grey-1);
        }
    }
`


export const StyledContacts = styled.div`
    width: 100%;
    max-width: 780px;
    height: 502px;
    display: flex;
    flex-direction: column;
    font-family: 'Inter';

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;


        h2{
            font-weight: 600;
            font-size: 18px;
            color: var(--Grey-0);
            margin-bottom: 30px;
        }


        button{
            width: 32px;
            height: 32px;

            font-size: 20px;
            font-weight: 600;

            background-color: var(--button-primary-2);
            color: var(--Grey-0);
            border-radius: 50%;
        }

    }

    ul{
        width: 100%;     
        max-height: 416px;      
        padding: 23px 26px 24px 22px;

          
        
        li{
            width: 90%;
            height: 49px;
            
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 20px;

            h2{
                font-weight: 400;
                font-size: 10px;
                color: var(--Grey-1);
            }

            h3{
                font-weight: 400;
                font-size: 10px;
                color: var(--Grey-1); 
            }

            h5{
                font-weight: 300;
                font-size: 10px;
                color: var(--Grey-1); 
            }

            .edit-button{
                width: 80px;
                height: 40px;
                background: var(--button-primary); 
                
                border: 1px solid var(--button-primary);
                border-radius: 4px;
                margin: 10px auto;

                font-weight: 500;
                font-size: 14px;
                color: var(--Grey-0);
  
            }

            .delete-button{
                width: 80px;
                height: 40px;
                background: var(--button-primary-3); 
                
                border: 1px solid var(--button-primary-3);
                border-radius: 4px;
                margin: 10px auto;

                font-weight: 700;
                font-size: 14px;
                color: var(--Grey-0);
            }

        }

    }
`