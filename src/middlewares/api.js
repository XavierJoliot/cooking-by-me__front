import axios from 'axios';
import { GET_ALL_RECIPES, setAllRecipes, SUBMIT_ADD_RECIPE_MODAL } from '../actions/recipes';

const apiMiddleware = (store) => (next) => (action) => {
  const api = axios.create({
    baseURL: 'https://localhost:7262/api/',
  });

  switch (action.type) {
    case SUBMIT_ADD_RECIPE_MODAL: {
      const { newRecipe } = store.getState().addRecipeModal;

      console.log(newRecipe);
      const { token } = store.getState().user;
      api
        .post('recette',
          newRecipe,
          {
            headers: {
              Autorization: `bearer ${token}`,
            }
          })
        .then(
          () => {
            console.log('ok')
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
    case GET_ALL_RECIPES: {
      const { token } = store.getState().user;
      api
        .get('recette/',
          {
            headers: {
              Autorization: `Bearer ${token}`,
            }
          })
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