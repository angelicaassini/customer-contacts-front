import styled from "styled-components";

export const ContainerDashboard = styled.div`
    width: 70%;
    height: 720px;
    max-width: 1200px;
    padding: 16px;
    background: var(--Grey-4);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;

    header{
        width: 100%;
        height: 118px;
        display: flex;
        flex-direction: row;
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
            font-size: 12px;
            color: var(--Grey-1);
        }
    }
`

export const StyledNav = styled.nav`
    width: 100%;
    height: 118px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: var(--Grey-4);

    img{
        width: 100px;
    }

    button{
        width: 55px;
        height: 32px;
        background: var(--Grey-3); 
        border: 1px solid var(--Grey-3);
        border-radius: 4px;
        
        font-weight: 600;
        font-size: 12px;
        color: var(--Grey-0);
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
            color: var(--Grey-3);
            margin-bottom: 30px;
        }


        button{
            width: 32px;
            height: 32px;
            background-color: var(--Grey-3);
            color: var(--Grey-0);
        }

    }

    ul{
        width: 100%;     
        max-height: 416px;
        /* overflow-y: scroll; */
        
        padding: 23px 26px 24px 22px;

        background: var(--Grey-3);
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;      
        
        li{
            width: 90%;
            height: 49px;
            
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 20px;

            h2{
                font-weight: 700;
                font-size: 18px;
                color: var(--Grey-3);
            }

            h3{
                font-weight: 600;
                font-size: 16px;
                color: var(--Grey-3); 
            }

            h5{
                font-weight: 600;
                font-size: 16px;
                color: var(--Grey-2); 
            }

            button{
                background-color: transparent;
                width: 12px;
                height: 14px;
                position: absolute;
                top: 10px;
                right: -50px;
            }
        }


    }
`