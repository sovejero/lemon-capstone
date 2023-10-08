import React from 'react';
import { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';
import { initializeTimes, updateTimes, submitAPI } from "../utilAPI";

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  const [formData, setFormData] = useState({})
  const submitForm = (formData) => {
    submitAPI(formData) 
    setFormData(formData)
  }

    return (
        <div className="home">
          <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/booking" element = {<BookingPage />}>
              <Route index element={<BookingForm submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />} />
            </Route>
           <Route path='/booking/confirmation' element={<BookingConfirmation {...formData} />} />  
          </Routes>
        </div>
    );
}

export default Main;
