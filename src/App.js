import './App.css';
import {useState, createContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import NavBar from "./Components/NavBar/NavBar";
import GamesPage from "./Pages/GamesPage/GamesPage";
import PacmanLoader from "react-spinners/PacmanLoader";
import React from "react";
import {css} from "@emotion/react";
import GameInfo from "./Pages/GameInfo/GameInfo";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import NoResultsPage from "./Pages/NoResultsPage/NoResultsPage";


export const AppContext = createContext();


function App() {

    const [loading, setLoading] = useState(false);

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    const activateLoader = () => {
        setLoading(true);
    };

    const deActiveLoader = () => {
        setLoading(false);
    };

    const override = css` // css for the loader
      left: 45vw;
      top: 30vh;
`;


    return (
      <AppContext.Provider value={{loading, activateLoader, deActiveLoader, theme, toggleTheme}}>
        <div className="App" id={theme}>
            <PacmanLoader color={theme === "light" ? "#05386B" : "white"} loading={loading} css={override} height="100" size={50} />
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<> <NavBar /> <FrontPage /> </>} />
            <Route path="/games/:apiUrl" element={<> <NavBar /> <GamesPage /> </>} />
            <Route path="/gameinfo/:gameID" element={<> <NavBar /> <GameInfo /> </>} />
            <Route path="/favorites" element={<> <NavBar /> <FavoritesPage /> </>} />
            <Route path="/noresults" element={<> <NavBar /> <NoResultsPage /> </>} />
        </Routes>
      </BrowserRouter>
        </div>
      </AppContext.Provider>
  );
}

export default App;
