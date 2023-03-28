// import './App.css';
import { CustomerContext } from "./context/CustomerContext";
import RoutesMain from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle> 
        <ToastContainer>
          <CustomerContext>
           <RoutesMain/>
          </CustomerContext>
        </ToastContainer>
      </GlobalStyle>  
    </>
    
  );
}

export default App;
