import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <FrontPage /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
