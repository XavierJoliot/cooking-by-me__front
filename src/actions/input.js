export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValue = (name, value) => ({
  type: SET_INPUT_VALUE,
  name, 
  value
});
