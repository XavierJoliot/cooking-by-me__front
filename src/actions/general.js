export const REDIRECT_NOT_FOUND = 'REDIRECT_NOT_FOUND';

export const redirectNotFound = (url) => ({
  type: REDIRECT_NOT_FOUND,
  url
});
