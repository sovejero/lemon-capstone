import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import BookingPage from './BookingPage';
import About from './Home/About';

const Main = () => {

    return (
        <div className="home">
          <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/booking" element = {<BookingPage />}/>
          </Routes>
        </div>
    );
}

export default Main;
