export const SET_IS_ITEM_MODAL_OPEN = 'SET_IS_ITEM_MODAL_OPEN';

export const setIsItemModalOpen = (name, mode) => ({
  type: SET_IS_ITEM_MODAL_OPEN,
  name,
  mode
});
export const ERASE_DATA_ITEM_MODAL = 'ERASE_DATA_ITEM_MODAL';

export const eraseDataItemModal = (item,) => ({
  type: ERASE_DATA_ITEM_MODAL,
  item,
});

export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';

export const setCurrentItem = (item, data) => ({
  type: SET_CURRENT_ITEM,
  item,
  data
});

export const SET_RECIPE_ID_ITEM_MODAL = 'SET_RECIPE_ID_ITEM_MODAL';

export const setRecipeIdItemModal = (id, item) => ({
  type: SET_RECIPE_ID_ITEM_MODAL,
  id,
  item
});


