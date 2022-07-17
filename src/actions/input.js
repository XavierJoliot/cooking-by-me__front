export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValue = (name, value) => ({
  type: SET_INPUT_VALUE,
  name, 
  value
});

export const SET_INPUT_ADD_RECIPE_VALUE = 'SET_INPUT_ADD_RECIPE_VALUE';

export const setInputAddRecipeValue = (name, value) => ({
  type: SET_INPUT_ADD_RECIPE_VALUE,
  name, 
  value
});

export const SET_INPUT_ITEM_INGREDIENT_MODAL = 'SET_INPUT_ITEM_INGREDIENT_MODAL';

export const setInputItemIngredientModal = (name, value) => ({
  type: SET_INPUT_ITEM_INGREDIENT_MODAL,
  name, 
  value
});

export const SET_INPUT_ITEM_STEP_MODAL = 'SET_INPUT_ITEM_STEP_MODAL';

export const setInputItemStepModal = (name, value) => ({
  type: SET_INPUT_ITEM_STEP_MODAL,
  name, 
  value
});