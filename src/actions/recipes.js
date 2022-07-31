export const SET_IS_MODAL_OPEN = 'SET_IS_MODAL_OPEN';

export const setIsModalOpen = () => ({
  type: SET_IS_MODAL_OPEN,
});

export const SET_ITEM_MODAL_TYPE = 'SET_ITEM_MODAL_TYPE';

export const setItemModalType = (name) => ({
  type: SET_ITEM_MODAL_TYPE,
  name
});

export const SET_IS_ITEM_MODAL_OPEN = 'SET_IS_ITEM_MODAL_OPEN';

export const setIsItemModalOpen = () => ({
  type: SET_IS_ITEM_MODAL_OPEN,
});

export const SET_INGREDIENTS = 'SET_INGREDIENTS';

export const setIngredients = (object) => ({
  type: SET_INGREDIENTS,
  object
});

export const SET_STEPS = 'SET_STEPS';

export const setSteps = (object) => ({
  type: SET_STEPS,
  object
});

export const SUBMIT_ADD_RECIPE_MODAL = 'SUBMIT_ADD_RECIPE_MODAL';

export const submitAddRecipeModal = () => ({
  type: SUBMIT_ADD_RECIPE_MODAL
});

export const SET_USER_TOKEN = 'SET_USER_TOKEN';

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  token
});

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';

export const getAllRecipes = (userId) => ({
  type: GET_ALL_RECIPES,
  userId
});

export const SET_ALL_RECIPES = 'SET_ALL_RECIPES';

export const setAllRecipes = (recipes) => ({
  type: SET_ALL_RECIPES,
  recipes
});
