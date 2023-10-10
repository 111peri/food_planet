import React from 'react';
import {Header} from "./Header/Header";
import Body from "../components/Body";
import NewArrivals from "../components/NewArrivals";


 export function MainPage() {
    return (
        <div>
            <Header/>
            <Body/>
            <NewArrivals/>
        </div>
    );
}

