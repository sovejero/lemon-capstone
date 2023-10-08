import { screen, render, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { BrowserRouter } from "react-router-dom";

describe('BookingForm', () => {

  const MockBookingForm = () => {
    const availableTimes = ['10:00', '11:00', '12:00'];
    return(
    <BrowserRouter> 
      <BookingForm availableTimes={availableTimes} dispatch={()=>{}} />
    </BrowserRouter>
    )
  }

  it('renders correctly', () => {
    render(<MockBookingForm/>);
    expect(screen.getByTestId('booking-form')).toBeInTheDocument();
  });

  it('allows the user to fill the form', () => {
    render(<MockBookingForm/>);
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2023-09-20' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '10:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    expect(screen.getByLabelText(/Choose date/i).value).toBe('2023-09-20');
    expect(screen.getByLabelText(/Choose time/i).value).toBe('10:00');
    expect(screen.getByLabelText(/Number of guests/i).value).toBe('2');
    expect(screen.getByLabelText(/Occasion/i).value).toBe('Birthday');
  });

  it('disables the submit button if the form is invalid', () => {
    render(<MockBookingForm/>);
    expect(screen.getByTestId('submit-button')).toBeDisabled();
  });

  it('enables the submit button if the form is valid', () => {
    render(<MockBookingForm/>);
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2023-09-20' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '10:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
    expect(screen.getByTestId('submit-button')).not.toBeDisabled();
  });
});
