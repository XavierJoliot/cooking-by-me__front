import { SET_INPUT_ITEM_INGREDIENT_MODAL } from "../actions/input";
import { SET_IS_ITEM_MODAL_OPEN, SET_ITEM_MODAL_TYPE } from "../actions/recipes";

const initialState = {
  isItemModalOpen: false,
  modalName: '',
  ingredient: {
    name: '',
    quantity: 0,
    unit: '',
  },
  steps: {
    order: 0,
    description: 'Test',
  },
  unitList: [
    'Sélectionner...',
    'mg',
    'g',
    'Kg',
    'ml',
    'L',
    'càc',
    'càs',
  ]
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
    default:
      return state;
  }
};

export default reducer;