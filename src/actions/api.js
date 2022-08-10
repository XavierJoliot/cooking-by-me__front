export const ADD_DATA_TO_API = 'ADD_DATA_TO_API';

export const addDataToApi = (endPoint, data, image) => ({
  type: ADD_DATA_TO_API,
  endPoint, 
  data,
  image
});

export const UPDATE_DATA_TO_API = 'UPDATE_DATA_TO_API';

export const updateDataToApi = (endPoint, data, image) => ({
  type: UPDATE_DATA_TO_API,
  endPoint, 
  data,
  image
});


export const GET_DATA_FROM_API = 'GET_DATA_FROM_API';

export const getDataFromApi = (endPoint, information) => ({
  type: GET_DATA_FROM_API,
  endPoint,
  information
});

export const DELETE_DATA_FROM_API = 'DELETE_DATA_FROM_API';

export const deleteDataFromAPI = (endPoint, information) => ({
  type: DELETE_DATA_FROM_API,
  endPoint,
  information
});
