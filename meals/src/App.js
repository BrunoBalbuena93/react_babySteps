import Header from './components/Layout/Header';
import React, { useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => { setCartShown(true); }
  const hideCartHandler = () => { setCartShown(false); }
  return (
    // CartProvider agrega el contexto del carrito en toda la aplicación
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}>
      </Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
