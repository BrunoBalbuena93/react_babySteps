import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Using regular syntax with the callback to store the function
  const fetchMovies = useCallback(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        const reshapeMovies = data.results.map((mov) => {
          return {
            id: mov.episode_id,
            title: mov.title,
            openingText: mov.opening_crawl,
            releaseDate: mov.release_date,
          };
        });
        setMovies(reshapeMovies);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {fetchMovies(); }, [fetchMovies])

  // Using Async/Await syntax
  const asyncFetch = async () => {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const reshapeMovies = data.results.map((mov) => {
      return {
        id: mov.episode_id,
        title: mov.title,
        openingText: mov.opening_crawl,
        releaseDate: mov.release_date,
      };
    });
    setMovies(reshapeMovies);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={asyncFetch}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
