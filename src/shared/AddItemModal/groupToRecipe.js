// import utils
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setInputItemGroupModal } from '../../actions/input';
import { addDataToApi, deleteDataFromAPI } from '../../actions/api';
import { setGroupId } from '../../actions/recipes';

// import component
import Button from '../button';

const GroupToRecipe = ({ close }) => { 
  const dispatch = useDispatch();
  const { modalName } = useSelector((state) => state.addItemModal);
  const { groupList } = useSelector((state) => state.groups);
  const { groupData } = useSelector((state) => state.recipes);
  const { groupIds } = useSelector((state) => state.recipes.groupData);
  const { id, group_Recipe } = useSelector((state) => state.recipes.currentRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addDataToApi(`groupe-recette/recette/${id}`, groupData));

    close();

    return(console.log('erreur'));
  }

  const handleGroupClicked = (e, id) => {
    dispatch(setGroupId(id));
    e.target.classList.toggle('');
  }

  const handleRemoveGroupClicked = (e, id) => {
    if(confirm(`Tu es sûr de vouloir retirer ta recette de ce groupe ?`)) {
      dispatch(deleteDataFromAPI(`groupe-recette/${id}`));
    }
  }

  

  return (
    <form onSubmit={handleSubmit} className='add-item-modal__form' encType='multipart/form-data'>
      <i onClick={close} className="fa-solid fa-xmark add-item-modal__form__close"></i>
      <h1 className='add-item-modal__form__title'>Ajouter un {modalName} :</h1>
      <section className='add-item-modal__form__group-list'>
        <h2 className='add-item-modal__form__group-list__title'>Groupes disponibles :</h2>
      {
        groupList && 
        groupList.map(
          (group) => (
            <div className={`add-item-modal__form__group-list__item ${groupIds.includes(group.id) ? 'add-item-modal__form__group-list__item--active' : ''}`} onClick={(e) => handleGroupClicked(e, group.id)}  title='Ajouter la recette à ce groupe'>
              <p className='add-item-modal__form__group-list__item__text'>{group.title}</p>
              <i className={`ri-check-line add-item-modal__form__group-list__item__icon ${groupIds.includes(group.id) ? 'add-item-modal__form__group-list__item__icon--active' : ''}`}></i>
            </div>
          )
        )
      }
      </section>
      <section className='add-item-modal__form__group-list'>
        <h2 className='add-item-modal__form__group-list__title'>Groupes déjà sélectionnés :</h2>
        {
          group_Recipe && 
          group_Recipe.map(
            (groupRecipe) => (
                <div onClick={(e) => handleRemoveGroupClicked(e, groupRecipe.id)} className='add-item-modal__form__group-list__item add-item-modal__form__group-list__item--not-available' title='Retirer la recette de ce groupe'>
                  <p className='add-item-modal__form__group-list__item__text'>{groupRecipe.group.title}</p>
                  <i className='ri-delete-bin-line add-item-modal__form__group-list__item__icon add-item-modal__form__group-list__item__icon--red'></i>
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

GroupToRecipe.propTypes = {
  close: PropTypes.func.isRequired,
}

export default GroupToRecipe;
