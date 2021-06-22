import React, { Fragment, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetails = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote Found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat">
            Comments
          </Link>
        </div>
      </Route>
      <h1>Quote details</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
