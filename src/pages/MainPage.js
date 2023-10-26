import React from 'react';
import {Header} from "./Header/Header";
import Banner from "../components/Banner";
import {Menu} from "../components/Menu";
import Pizza from "../components/Pizza";
import Burger from "../pages/Burger";
import Reviews from "./Reviews";
import AboutAs from "./AboutAs";
import Footer from "./Footer";



export function MainPage() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Menu/>
            <Burger/>
            <Menu/>
            <Pizza/>
            <AboutAs/>
            <Reviews/>
            <Footer/>
        </div>
    );
}

export default MainPage
