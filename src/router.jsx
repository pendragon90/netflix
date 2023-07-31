import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage.jsx";

import TvPage from './pages/TvPage';
// import AllMoviesPage from './pages/AllMoviesPage';
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetail";
import TvDetailPage from "./pages/TvDetail";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/tv/detail/:id" element={<TvDetailPage />} />
          <Route path="/movies/detail/:id" element={<MovieDetailPage />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default App