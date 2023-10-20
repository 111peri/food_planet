import React from 'react';
import {Header} from "./Header/Header";
import Body from "../components/Body";
import NewArrivals from "../components/NewArrivals";
import {Menu} from "../components/Menu";
import {PizzaContainer} from "../components/PizzaContainer";


export function MainPage() {
    return (
        <div>
            <Header/>
            <Body/>
            <NewArrivals/>
            <Menu/>
            <PizzaContainer/>
        </div>
    );
}

