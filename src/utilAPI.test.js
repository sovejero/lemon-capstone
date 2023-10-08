import { updateTimes, initializeTimes, submitAPI } from './utilAPI';

describe('utilAPI', () => {
  describe('updateTimes', () => {
    it('should return the correct times for a given date', () => {
      const state = '2023-09-20';
      const action = { type: 'UPDATE_TIMES', date: '2023-09-21' };
      const result = updateTimes(state, action);
      expect(result).toEqual(['10:00', '11:00', '12:00']);
    });
  });

  describe('initializeTimes', () => {
    it('should return the times for the current date', () => {
      const result = initializeTimes();
      expect(result).toEqual(expect.any(Array));
    });
  });

  describe('submitAPI', () => {
    it('should remove the selected time from the available times', () => {
      const formData = { date: '2023-09-20', time: '10:00' };
      submitAPI(formData);
      const result = updateTimes('2023-09-20', { type: 'GET_TIMES', date: '2023-09-20' });
      expect(result).not.toContain('10:00');
    });
  });
});
