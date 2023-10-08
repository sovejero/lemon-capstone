let availableTimesByDate = {
  '2023-09-20': ['10:00', '11:00', '12:00'],
  '2023-09-21': ['10:00', '11:00', '12:00'],
  '2023-09-22': ['14:00', '15:00', '16:00'],
  '2023-09-23': ['10:00', '11:00', '12:00'],
  '2023-09-24': ['14:00', '15:00', '16:00'],
  '2023-09-25': ['10:00', '11:00', '12:00'],
  '2023-09-26': ['14:00', '15:00', '16:00'],
  '2023-09-27': ['10:00', '11:00', '12:00'],
  '2023-09-28': ['14:00', '15:00', '16:00'],
  '2023-09-29': ['10:00', '11:00', '12:00'],
  '2023-09-30': ['14:00', '15:00', '16:00'],
  '2023-10-01': ['10:00', '11:00', '12:00'],
  '2023-10-02': ['14:00', '15:00', '16:00'],
  '2023-10-03': ['10:00', '11:00', '12:00'],
  '2023-10-04': ['14:00', '15:00', '16:00'],
  '2023-10-05': ['10:00', '11:00', '12:00'],
  '2023-10-06': ['14:00', '15:00', '16:00'],
  '2023-10-07': ['10:00', '11:00', '12:00'],
  '2023-10-08': ['14:00', '15:00', '16:00'],
  '2023-10-09': ['10:00', '11:00', '12:00'],
  '2023-10-10': ['14:00', '15:00', '16:00'],
  '2023-10-11': ['14:00', '15:00', '16:00'],
  '2023-10-12': ['14:00', '15:00', '16:00'],
  '2023-10-13': ['10:00', '11:00', '12:00'],
  '2023-10-14': ['14:00', '15:00', '16:00'],
  '2023-10-15': ['14:00', '15:00', '16:00'],
  '2023-10-16': ['14:00', '15:00', '16:00'],
  '2023-10-17': ['10:00', '11:00', '12:00'],
  '2023-10-18': ['14:00', '15:00', '16:00'],
  '2023-10-19': ['10:00', '11:00', '12:00'],
};

export const updateTimes = (state, action) => {
  console.log('updateTimes')
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'INITIALIZE':
      return action.date;
    case 'UPDATE_TIMES':
      console.log(action.date)
      return availableTimesByDate[action.date]
    case 'GET_TIMES':
      return fetchAPI(action.date);
    default:
      return state
  }
}

export const initializeTimes = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return fetchAPI(currentDate);
}

const fetchAPI = (date) => {
  console.log('fetchapi',date)
  console.log('Fetch API availabletimesByDate',availableTimesByDate[date])
  if(availableTimesByDate[date]){
    return availableTimesByDate[date]
  }
  else{
    return 'No available times for the selected date.';
  }
}

export const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);
  
  if (formData) {
    return true
  } else {
    return new Error('Form submission failed.');
  };
};
