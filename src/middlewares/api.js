import axios from 'axios';
import { ADD_DATA_TO_API, DELETE_DATA_FROM_API, GET_DATA_FROM_API, UPDATE_DATA_TO_API } from '../actions/api';
import { setAllGroup } from '../actions/groups';
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
            switch(action.information) {
              case 'myRecipe': {
                document.location.reload();
                break;
              }
              case 'group': {
                document.location.reload();
                break;
              }
              default:
                break;
            }
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
              case 'groupsList': {
                store.dispatch(setAllGroup(response.data));
                break;
              }
              case 'getRecipe': {
                store.dispatch(setCurrentRecipe(response.data));
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
          },
        );

      next(action);
      break;
    }
    case UPDATE_DATA_TO_API: {
      api
        .put(action.endPoint, action.data)
          .then(
            (response) => {
              switch(action.information) {
                case 'editMyRecipe' : {
                  document.location.reload();
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
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;