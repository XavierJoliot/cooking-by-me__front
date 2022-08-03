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

