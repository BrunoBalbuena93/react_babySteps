import { Route, Switch, Redirect } from "react-router-dom";

import Quotes from "./pages/Quotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <Quotes></Quotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails></QuoteDetails>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
