import { SET_INPUT_ITEM_INGREDIENT_MODAL, SET_INPUT_ITEM_STEP_MODAL, SET_INPUT_ITEM_GROUP_MODAL } from "../actions/input";
import { ERASE_DATA_ITEM_MODAL, SET_CURRENT_ITEM, SET_IS_ITEM_MODAL_OPEN, SET_RECIPE_ID_ITEM_MODAL } from "../actions/modal";

const initialState = {
  isItemModalOpen: false,
  modalName: '',
  mode: '',
  ingredient: {
    recipeId: 0,
    id: 0,
    name: '',
    quantity: 0,
    unit: '',
  },
  step: {
    recipeId: 0,
    id: 0,
    order: 0,
    description: '',
  },
  unitList: [
    'mg',
    'g',
    'Kg',
    'ml',
    'cl',
    'L',
    'càc',
    'càs',
    'gousse(s)',
    'item'
  ],
  group: {
    id: 0,
    title: '',
    description: '',
  }
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_IS_ITEM_MODAL_OPEN: {
      return {
        ...state,
        isItemModalOpen: !state.isItemModalOpen,
        modalName: action.name,
        mode: action.mode
      }
    }
    case SET_INPUT_ITEM_INGREDIENT_MODAL: {
      return {
        ...state,
        ingredient: {
          ...state.ingredient,
          [action.name]: action.value,
        }
      }
    }
    case SET_INPUT_ITEM_STEP_MODAL: {
      return {
        ...state,
        step: {
          ...state.step,
          [action.name]: action.value,
        }
      }
    }
    case SET_INPUT_ITEM_GROUP_MODAL: {
      return {
        ...state,
        group: {
          ...state.group,
          [action.name]: action.value,
        }
      }
    }
    case SET_CURRENT_ITEM: {
      return {
        ...state,
        [action.item]: action.data,
      }
    }
    case SET_RECIPE_ID_ITEM_MODAL: {
      return {
        ...state,
        [action.item]: {
          ...state[action.item],
          recipeId: action.id,
        }
      }
    }
    case ERASE_DATA_ITEM_MODAL: {
      return {
        ...state,
        ingredient: {
          id: '',
          name: '',
          quantity: 0,
          unit: ''
        },
        step: {
          id: '',
          order: 0,
          description: '',
        },
        group: {
          title: '',
          description: '',
        },
      }
    }
    default:
      return state;
  }
};

export default reducer;