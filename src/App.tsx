// import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import ContactProvider from "./context/ContactContext";

import CustomerProvider from "./context/CustomerContext";
import RoutesMain from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle/> 
      <ToastContainer/>
      
          <CustomerProvider>
            <ContactProvider>
              <RoutesMain/>
            </ContactProvider>
          </CustomerProvider>

    </>
    
  );
}

export default App;
