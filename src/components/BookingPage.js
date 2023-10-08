import React from 'react';
import './BookingPage.css'
import { Outlet } from "react-router-dom";

const BookingPage = () => {
  return (
    <>
    <div className="background-primary">
      <div className="container booking-header">
        <h4>Reservations - Book a Table</h4>
      </div>
    </div>
    <div className="background-secondary">
        <div className="container container--column booking-page">
          <h5>Reserve a Table</h5>
          <p>Please fill in and submit the form to book your reservation at Little Lemon.</p>
          <Outlet />
        </div>
    </div>
    </>
  )
}

export default BookingPage;