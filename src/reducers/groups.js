import { SET_ALL_GROUPS, SET_CURRENT_GROUP } from "../actions/groups";

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
    default:
      return state;
  }
};

export default reducer;