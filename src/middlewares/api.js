import axios from 'axios';
import { ADD_DATA_TO_API, DELETE_DATA_FROM_API, GET_DATA_FROM_API, GET_USER_ROLE, UPDATE_DATA_TO_API } from '../actions/api';
import { redirectNotFound, setIsLoading } from '../actions/general';
import { setAllGroup, setCurrentGroup } from '../actions/groups';
import { setCurrentItem, setIsItemModalOpen } from '../actions/modal';
import { setNewRecipe, setAllRecipes, setIsModalOpen, setCurrentRecipe, setCookingRecipes} from '../actions/recipes';

const apiMiddleware = (store) => (next) => (action) => {
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  
  const { token } = store.getState().user;

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'authorization': `Bearer ${token}`
    },
  });

  switch (action.type) {
    case ADD_DATA_TO_API: {

      store.dispatch(setIsLoading(true));
      
      if(action.image) {
        action.data.imagePath = action.image;
      }

      api
        .post(action.endPoint,
          action.data, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          })
        .then(
          () => {
            document.location.reload();
          },
        )
        .catch((error) => {
            console.log(error)
          },
        );

      store.dispatch(setIsLoading(false));

      next(action);
      break;
    }
    case GET_DATA_FROM_API: {

      store.dispatch(setIsLoading(true));

      api
        .get(action.endPoint)
        .then(
          (response) => {
            switch(action.information) {
              case 'myRecipesList' : {
                store.dispatch(setAllRecipes(response.data));
                break;
              }
              case 'cookingRecipesList' : {
                store.dispatch(setCookingRecipes(response.data));
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
                console.log(response.data);
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
      
      store.dispatch(setIsLoading(false));
      
      next(action);
      break;
    }
    case UPDATE_DATA_TO_API: {

      store.dispatch(setIsLoading(true));

      if(action.image) {
        action.data.imagePath = action.image;
      }

      api
        .put(action.endPoint, action.data, 
          {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          }
          )
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
      
      store.dispatch(setIsLoading(false));

      next(action);
      break;
    }
    case DELETE_DATA_FROM_API: {

      store.dispatch(setIsLoading(true));

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

      store.dispatch(setIsLoading(false));

      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;