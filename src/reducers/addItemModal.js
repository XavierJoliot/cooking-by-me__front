import { SET_INPUT_ITEM_INGREDIENT_MODAL, SET_INPUT_ITEM_STEP_MODAL, SET_INPUT_ITEM_GROUP_MODAL } from "../actions/input";
import { SET_IS_ITEM_MODAL_OPEN, SET_ITEM_MODAL_TYPE } from "../actions/recipes";

const initialState = {
  isItemModalOpen: false,
  modalName: '',
  ingredient: {
    name: '',
    quantity: 0,
    unit: '',
  },
  step: {
    order: 0,
    description: '',
  },
  unitList: [
    'mg',
    'g',
    'Kg',
    'ml',
    'L',
    'càc',
    'càs',
  ],
  group: {
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
      }
    }
    case SET_ITEM_MODAL_TYPE: {
      return {
        ...state,
        modalName: action.name,
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
    default:
      return state;
  }
};

export default reducer;