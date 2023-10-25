import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage";
import Banner from "./components/Banner";
import {Header} from "./pages/Header/Header";
import {Menu} from "./components/Menu";
import Burger from "./pages/Burger";
import {Pizza} from "./components/Pizza";
import cartReducer from "./components/reducers/cartReducer";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/menu" element={<Banner />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/burger" element={<Burger />} />
                    <Route path="/pizza" element={<Pizza />} />
                </Routes>
                {/*
                <ProductsList />
                <ShoppingCart />*/}
            </BrowserRouter>
        </Provider>
    );
}

export default App;



