import axios from 'axios';
import { ADD_DATA_TO_API, DELETE_DATA_FROM_API, GET_DATA_FROM_API, UPDATE_DATA_TO_API } from '../actions/api';
import { redirectNotFound } from '../actions/general';
import { setAllGroup, setCurrentGroup } from '../actions/groups';
import { setCurrentItem, setIsItemModalOpen } from '../actions/modal';
import { setNewRecipe, setAllRecipes, setIsModalOpen, setCurrentRecipe} from '../actions/recipes';

const apiMiddleware = (store) => (next) => (action) => {
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  
  const { token } = store.getState().user;

  const api = axios.create({
    baseURL: 'https://localhost:7262/api/',
    headers: {
      'authorization': `Bearer ${token}`
    },
  });

  switch (action.type) {
    case ADD_DATA_TO_API: {
      api
        .post(action.endPoint,
          action.data)
        .then(
          () => {
            document.location.reload();
          },
        )
        .catch((error) => {
            console.log(error)
          },
        );

      next(action);
      break;
    }
    case GET_DATA_FROM_API: {
      api
        .get(action.endPoint)
        .then(
          (response) => {
            switch(action.information) {
              case 'myRecipesList' : {
                store.dispatch(setAllRecipes(response.data));
                break;
              }
              case 'editMyRecipe' : {
                store.dispatch(setNewRecipe(response.data));
                store.dispatch(setIsModalOpen('edit'));
                break;
              }
              case 'editGroup' : {
                store.dispatch(setCurrentItem('group', response.data));
                store.dispatch(setIsItemModalOpen('groupe', 'edit'));
                break;
              }
              case 'editIngredient' : {
                store.dispatch(setCurrentItem('ingredient', response.data));
                store.dispatch(setIsItemModalOpen('ingredient', 'edit'));
                break;
              }
              case 'editStep' : {
                store.dispatch(setCurrentItem('step', response.data));
                store.dispatch(setIsItemModalOpen('étape', 'edit'));
                break;
              }
              case 'groupsList': {
                store.dispatch(setAllGroup(response.data));
                break;
              }
              case 'getRecipe': {
                store.dispatch(setCurrentRecipe(response.data));
                break;
              }
              case 'getGroup': {
                store.dispatch(setCurrentGroup(response.data));
                break;
              }
              default:
                break;
            }
          },
        )
        .catch(
          (error) => {
            console.log(error);
            if(error.response.status === 404) {
              switch(action.information) {
                default: {
                  store.dispatch(redirectNotFound('/mes-recettes'));
                  break;
                }
              }
            }
            
          },
        );

      next(action);
      break;
    }
    case UPDATE_DATA_TO_API: {
      api
        .put(action.endPoint, action.data)
          .then(
            () => {
              document.location.reload();
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
    case DELETE_DATA_FROM_API: {
      api
        .delete(action.endPoint)
        .then(
          () => {
            switch(action.infromation) {
              case 'fromRecipe': {
                break;
              }
              default: {
                document.location.reload();
                break;
              }
            }
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