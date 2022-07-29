import './App.css';
import {useState, createContext, useEffect} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import NavBar from "./Components/NavBar/NavBar";
import GamesPage from "./Pages/GamesPage/GamesPage";
import PacmanLoader from "react-spinners/PacmanLoader";
import React from "react";
import {css} from "@emotion/react";
import GameInfo from "./Pages/GameInfo/GameInfo";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import NoResultsPage from "./Pages/NoResultsPage/NoResultsPage";
import Footer from "./Components/Footer/Footer";


export const AppContext = createContext();


function App() {

    const [loading, setLoading] = useState(false);

    const [theme, setTheme] = useState("light");

    const [userWidth, setUserWidth] = useState(0);

    useEffect(() => {
        setUserWidth(window.innerWidth);
        console.log("hey")
    }, []);

    useEffect(() => {

        function handleWindowResize() {
            setUserWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

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
      <AppContext.Provider value={{loading, activateLoader, deActiveLoader, theme, toggleTheme, userWidth}}>
        <div className="App" id={theme}>
            <PacmanLoader color={theme === "light" ? "#05386B" : "white"} loading={loading} css={override} height="100" size={50} />
        <HashRouter>
        <Routes>
            <Route path="/" element={<> <NavBar /> <FrontPage /> </>} />
            <Route path="/games/:apiUrl" element={<> <NavBar /> <GamesPage /> <Footer /> </>} />
            <Route path="/gameinfo/:gameID" element={<> <NavBar /> <GameInfo /> <Footer /> </>} />
            <Route path="/favorites" element={<> <NavBar /> <FavoritesPage /> <Footer /> </>} />
            <Route path="/noresults" element={<> <NavBar /> <NoResultsPage /> </>} />
        </Routes>
      </HashRouter>
        </div>
      </AppContext.Provider>
  );
}

export default App;
