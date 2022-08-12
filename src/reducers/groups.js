import { SET_ALL_GROUPS, SET_CURRENT_GROUP, SET_RECIPE_IDS } from "../actions/groups";

const initialState = {
  
  groupList: [],
  currentGroup: {
    id: null,
    userId: '',
    title: '',
    imagePath: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    group_Recipe: []
  },
  recipeData: {
    recipeIds: []
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_GROUPS: {
      return {
        ...state,
        groupList: action.group,
      }
    }
    case SET_CURRENT_GROUP: {
      return {
        ...state,
        currentGroup: action.data,
      }
    }
    case SET_RECIPE_IDS: {
      const newRecipeIds = state.recipeData.recipeIds;
      if(newRecipeIds.includes(action.id)) {
        const index = newRecipeIds.indexOf(action.id);
        newRecipeIds.splice(index, 1);
      } else {
        newRecipeIds.push(action.id);
      }
      return {
        ...state,
        recipeData: {
          ...state.recipeData,
          recipeIds: newRecipeIds,
        }
      }
    }
    default:
      return state;
  }
};

export default reducer;