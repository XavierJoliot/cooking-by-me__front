export const SET_ALL_GROUPS = 'SET_ALL_GROUPS';

export const setAllGroup = (group) => ({
  type: SET_ALL_GROUPS,
  group
});

export const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';

export const setCurrentGroup = (data) => ({
  type: SET_CURRENT_GROUP,
  data
});

export const SET_RECIPE_IDS = 'SET_RECIPE_IDS';

export const setRecipeId = (id) => ({
  type: SET_RECIPE_IDS,
  id
});


