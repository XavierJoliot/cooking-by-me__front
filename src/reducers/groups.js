import { SET_ALL_GROUPS } from "../actions/groups";

const initialState = {
  
  groupList: [],
  currentGroup: {}
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_GROUPS: {
      return {
        ...state,
        groupList: action.group,
      }
    }
    default:
      return state;
  }
};

export default reducer;