import './App.css';
import {useState, createContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import NavBar from "./Components/NavBar/NavBar";
import GamesPage from "./Pages/GamesPage/GamesPage";


export const AppContext = createContext();


function App() {

    const [API, setAPI] = useState("");

  return (
      <AppContext.Provider value={{API, setAPI}}>
        <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <NavBar /> <FrontPage /> </>} />
            <Route path="/games" element={<> <NavBar /> <GamesPage /> </>} />
        </Routes>
      </BrowserRouter>
        </div>
      </AppContext.Provider>
  );
}

export default App;
