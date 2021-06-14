import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header></Header>
      {auth ? <UserProfile /> : <Auth></Auth>}
      <Counter />
    </Fragment>
  );
}

export default App;
