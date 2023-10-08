import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ submitForm, availableTimes = [], dispatch}) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: date });
  }, [date, dispatch]);
  
  const isFormValid = () => date && guests && time;
  
  const clearForm = () => {
    setTime('')
    setDate('')
    setGuests(1)
    setOccasion('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      time,
      date,
      guests,
      occasion
    }
    console.log('submited', date, time)

    if (formData) {
      submitForm(formData)
      clearForm()
      navigate('/booking/confirmation')
    }
  };

    return (
    <form data-testid="booking-form" onSubmit={handleSubmit} aria-label="reseave a table">
      <label htmlFor="date">
        Choose date<sup>*</sup>
      </label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
        }}
        autoFocus
        aria-required="true"
      />
      <span className="error-message"></span>

      <label htmlFor="time">
        Choose time<sup>*</sup>
      </label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        disabled={!date}
        aria-required="true"
      >
        <option defaultValue hidden value=""></option>
        {availableTimes.map(time => (
          <option key={time} value={time}>{time}</option>
        ))
        }
      </select>
      <span className="error-message"></span>

      <label htmlFor="guests">
        Number of guests<sup>*</sup>
      </label>
      <input
        aria-required="true"
        type="number"
        placeholder=""
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value )}
      />
      <span className="error-message"></span>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value=""></option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button data-testid="submit-button" type="submit" className="button-form" disabled={!isFormValid()}>
        Make reservation
      </button>
    </form>
    );
}

export default BookingForm;
