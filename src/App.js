import './App.css';
import {useState, createContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import NavBar from "./Components/NavBar/NavBar";


export const AppContext = createContext();


function App() {
  return (
      <AppContext.Provider value={{}}>
        <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <NavBar /> <FrontPage /> </>} />
        </Routes>
      </BrowserRouter>
        </div>
      </AppContext.Provider>
  );
}

export default App;
