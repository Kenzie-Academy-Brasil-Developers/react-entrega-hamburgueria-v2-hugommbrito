import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from "./contexts/CartContext";
import { UserContextProvider } from "./contexts/UserContext";
import { RoutsMain } from "./routes/index.js";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {

  return (
    <>
      <GlobalStyles />

      <UserContextProvider >
        <CartContextProvider >
          <RoutsMain />
        </CartContextProvider>
      </UserContextProvider>

      <ToastContainer />
    </>
  );
}

export default App;
