export const REDIRECT_NOT_FOUND = 'REDIRECT_NOT_FOUND';

export const redirectNotFound = (url) => ({
  type: REDIRECT_NOT_FOUND,
  url
});

export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setIsLoading = (bool) => ({
  type: SET_IS_LOADING,
  bool,
});

export const SET_USER_TOKEN = 'SET_USER_TOKEN';

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  token
});

export const SET_USER_ROLE = 'SET_USER_ROLE';

export const setUserRole = (role) => ({
  type: SET_USER_ROLE,
  role
});
