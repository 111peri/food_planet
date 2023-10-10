import './App.css';
import React from "react";
import {BrowserRouter,  Route, Routes} from "react-router-dom"
import {MainPage} from "./pages/MainPage";



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route></Route>
        </Routes>

<MainPage/>

    </BrowserRouter>
  );
}

export default App;
