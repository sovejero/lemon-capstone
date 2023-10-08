/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<BookingForm />);
    expect(getByTestId('booking-form')).toBeInTheDocument();
  });

  it('allows the user to fill the form', () => {
    const { getByLabelText } = render(<BookingForm />);
    fireEvent.change(getByLabelText(/Choose date/i), { target: { value: '2023-09-20' } });
    fireEvent.change(getByLabelText(/Choose time/i), { target: { value: '10:00' } });
    fireEvent.change(getByLabelText(/Number of guests/i), { target: { value: '2' } });
    fireEvent.change(getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    expect(getByLabelText(/Choose date/i).value).toBe('2023-09-20');
    expect(getByLabelText(/Choose time/i).value).toBe('10:00');
    expect(getByLabelText(/Number of guests/i).value).toBe('2');
    expect(getByLabelText(/Occasion/i).value).toBe('Birthday');
  });

  it('disables the submit button if the form is invalid', () => {
    const { getByTestId } = render(<BookingForm />);
    expect(getByTestId('submit-button')).toBeDisabled();
  });

  it('enables the submit button if the form is valid', () => {
    const { getByTestId, getByLabelText } = render(<BookingForm />);
    fireEvent.change(getByLabelText(/Choose date/i), { target: { value: '2023-09-20' } });
    fireEvent.change(getByLabelText(/Choose time/i), { target: { value: '10:00' } });
    fireEvent.change(getByLabelText(/Number of guests/i), { target: { value: '2' } });
    expect(getByTestId('submit-button')).not.toBeDisabled();
  });
});
