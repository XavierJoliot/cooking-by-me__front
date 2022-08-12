// import utils
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addDataToApi, deleteDataFromAPI } from '../../actions/api';

// import component
import Button from '../button';
import { setRecipeId } from '../../actions/groups';

const RecipeToGroup = ({ close }) => { 
  const dispatch = useDispatch();
  const { modalName } = useSelector((state) => state.addItemModal);
  const { myRecipes } = useSelector((state) => state.recipes);
  const { recipeData } = useSelector((state) => state.groups);
  const { recipeIds } = useSelector((state) => state.groups.recipeData);
  const { id, group_Recipe } = useSelector((state) => state.groups.currentGroup);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addDataToApi(`groupe-recette/groupe/${id}`, recipeData));

    close();

    return(console.log('erreur'));
  }

  const handleRecipeClicked = (e, id) => {
    dispatch(setRecipeId(id));
  }

  const handleRemoveRecipeClicked = (e, id) => {
    if(confirm(`Tu es sûr de vouloir retirer ta recette de ce groupe ?`)) {
      dispatch(deleteDataFromAPI(`groupe-recette/${id}`));
    }
  }

  

  return (
    <form onSubmit={handleSubmit} className='add-item-modal__form' encType='multipart/form-data'>
      <i onClick={close} className="fa-solid fa-xmark add-item-modal__form__close"></i>
      <h1 className='add-item-modal__form__title'>Ajouter une {modalName} :</h1>
      <section className='add-item-modal__form__group-list'>
        <h2 className='add-item-modal__form__group-list__title'>Recettes disponibles :</h2>
      {
        myRecipes && 
        myRecipes.map(
          (recipe) => (
            <div className={`add-item-modal__form__group-list__item ${recipeIds.includes(recipe.id) ? 'add-item-modal__form__group-list__item--active' : ''}`} onClick={(e) => handleRecipeClicked(e, recipe.id)}  title='Ajouter la recette à ce groupe'>
              <p className='add-item-modal__form__group-list__item__text'>{recipe.title}</p>
              <i className={`ri-check-line add-item-modal__form__group-list__item__icon ${recipeIds.includes(recipe.id) ? 'add-item-modal__form__group-list__item__icon--active' : ''}`}></i>
            </div>
          )
        )
      }
      </section>
      <section className='add-item-modal__form__group-list'>
        <h2 className='add-item-modal__form__group-list__title'>Recettes déjà sélectionnés :</h2>
        {
          group_Recipe && 
          group_Recipe.map(
            (groupRecipe) => (
                <div onClick={(e) => handleRemoveRecipeClicked(e, groupRecipe.id)} className='add-item-modal__form__group-list__item add-item-modal__form__group-list__item--not-available' title='Retirer la recette de ce groupe'>
                  <p className='add-item-modal__form__group-list__item__text'>{groupRecipe.recipe.title}</p>
                  <i onClick={(e) => handleRemoveRecipeClicked(e, groupRecipe.id)} className='ri-delete-bin-line add-item-modal__form__group-list__item__icon add-item-modal__form__group-list__item__icon--red'></i>
                </div>
            )
          )
        }
      </section>
      <Button type='submit' text='Mettre à jour' className='fill m-r' />
      <Button handler={close} type='button' text='Fermer' className='stroke' />
    </form>
  );
};

RecipeToGroup.propTypes = {
  close: PropTypes.func.isRequired,
}

export default RecipeToGroup;
