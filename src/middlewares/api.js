import axios from 'axios';
import { getAllRecipes, GET_ALL_RECIPES, setAllRecipes, setIsModalOpen, SUBMIT_ADD_RECIPE_MODAL } from '../actions/recipes';

const apiMiddleware = (store) => (next) => (action) => {
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  
  const { token } = store.getState().user;

  const api = axios.create({
    baseURL: 'https://localhost:7262/',
    headers: {
      'authorization': `Bearer ${token}`
    },
  });

  switch (action.type) {
    case SUBMIT_ADD_RECIPE_MODAL: {
      const { newRecipe } = store.getState().addRecipeModal;
      api
        .post('/api/recette',
          newRecipe)
        .then(
          () => {
            store.dispatch(getAllRecipes());
            store.dispatch(setIsModalOpen());
          },
        )
        .catch((error) => {
            console.log(error)
          },
        );

      next(action);
      break;
    }
    case GET_ALL_RECIPES: {
      const { token } = store.getState().user;
      api
        .get('api/recette/')
        .then(
          (response) => {
            store.dispatch(setAllRecipes(response.data));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;