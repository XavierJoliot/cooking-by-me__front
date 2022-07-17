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


