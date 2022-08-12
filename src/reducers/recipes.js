import { SET_ALL_RECIPES, SET_COOKING_RECIPES, SET_CURRENT_RECIPE, SET_GROUP_IDS } from '../actions/recipes';

const initialState = {
  myRecipes: [],
  cookingRecipes: [
  ], 
  currentRecipe: {
    id: 0,
    userId: '',
    title: '',
    duration: 0,
    quantity: 0,
    imagePath: '',
    note: '',
    stepsList: [
    ],
    ingredientsList: [
    ],
    group_Recipe: [
    ]
  },
  groupData: {
    groupIds: [],
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_RECIPES: {
      return {
        ...state,
        isMyRecipesLoaded: true,
        myRecipes: action.recipes
      }
    }
    case SET_CURRENT_RECIPE: {
      const groupIdsList = [];

      action.data.group_Recipe.forEach(groupRecipe => {
        groupIdsList.push(groupRecipe.groupId);
      });
      return {
        ...state,
        currentRecipe: action.data,
      }
    }
    case SET_COOKING_RECIPES: {
      return {
        ...state,
        cookingRecipes: action.data
      }
    }
    case SET_GROUP_IDS: {
      const newGroupIds = state.groupData.groupIds;
      if(newGroupIds.includes(action.id)) {
        const index = newGroupIds.indexOf(action.id);
        newGroupIds.splice(index, 1);
      } else {
        newGroupIds.push(action.id);
      }
      return {
        ...state,
        groupData: {
          ...state.groupData,
          groupIds: newGroupIds,
        }
      }
    }
    default:
      return state;
  }
};

export default reducer;