import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "pending...",
        message: "Sending cart data",
      })
    );
    fetch("https://angular-course-85ad3.firebaseio.com/redux-mid/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    })
      .then((response) => {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Sucess!",
            message: "Data stored correctly",
          })
        );
      })
      .catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Something wrong happened",
          })
        );
      });
  }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
