// import utils
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../../actions/recipes';
import { setIsItemModalOpen } from '../../actions/modal';
import { setInputAddRecipeValue } from '../../actions/input';
import { useAuth0 } from '@auth0/auth0-react';

// import component
import Input from '../../shared/input';
import Button from '../../shared/button';
import { addDataToApi, updateDataToApi } from '../../actions/api';

const AddRecipeModal = () => { 
  const dispatch = useDispatch();

  const { mode, newRecipe } = useSelector((state) => state.addRecipeModal);
  const { userRole } = useSelector((state) => state.user);

  const { 
    id,
    title, 
    imagePath,
    duration, 
    quantity, 
    note, 
    ingredientsList, 
    stepsList ,
    isPublic
  } = useSelector((state) => state.addRecipeModal.newRecipe);

  const handleClose = () => {
    dispatch(setIsModalOpen());
  }

  const handleSubmit = async (e) => {    
    e.preventDefault();
    if(mode === 'edit') {
      dispatch(updateDataToApi(`recette/${id}`, newRecipe));
    } else {
      dispatch(addDataToApi('recette', newRecipe));
    }

    
  }

  const handleOpenAddItemModal = (e) => {
    if(e.target.id === 'ingredient') {
      dispatch(setIsItemModalOpen('ingredient'));
    };
    if(e.target.id === 'step') {
      dispatch(setIsItemModalOpen('étape'));
    };
  }

  const handleSwitchClicked = () => {
    dispatch(setInputAddRecipeValue('isPublic', !isPublic));
  }

  const beforeClassName = isPublic ? 'modal__form__switch__box__before' : 'modal__form__switch__box__before modal__form__switch__box__before--active';

  const afterClassName = !isPublic ? 'modal__form__switch__box__after' : 'modal__form__switch__box__after modal__form__switch__box__after--active';

  return (
    <section className='modal'>
      <form onSubmit={handleSubmit} className='modal__form'>
        <i onClick={handleClose} className="fa-solid fa-xmark modal__form__close"></i>
        <h1 className='modal__form__title'>{mode === 'edit' ? 'Modifier la' : 'Ajouter une'} recette :</h1>
        <Input
          name='title'
          type='text'
          value={title}
          label='Titre de la recette :' 
          placeholder='Entrez un titre pour votre recette..' 
          action={setInputAddRecipeValue}
          isRequired={true}
        />
        <Input
          name='imagePath'
          type='file'
          value={imagePath}
          label='Média :'
          action={setInputAddRecipeValue}
          isRequired={false}
        />
        <div className='modal__form__lists'>
          <div className='modal__form__lists__ingredients'>
            <h2 className='modal__form__lists__ingredients__title'>Ingrédients :</h2>
            <ul className='modal__form__lists__ingredients__list'>
              {
                ingredientsList.map(
                  (ingredient) => (
                    <li key={ingredient.name} className='modal__form__lists__ingredients__list__item'>
                      {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                    </li>
                  )
                )
              }
            </ul>
            <a id='ingredient' className='modal__form__lists__ingredients__add' onClick={handleOpenAddItemModal}>
              <i className="fa-solid fa-plus modal__form__lists__steps__add__icon"></i> Ajouter
            </a>
          </div>
          <div className='modal__form__lists__steps'>
            <h2 className='modal__form__lists__steps__title'>Étapes :</h2>
            <ul className='modal__form__lists__steps__list'>
              {
                stepsList.map(
                  (step) => (
                    <li key={step.order} className='modal__form__lists__steps__list__item'>
                      <p className='modal__form__lists__steps__list__item__title'>Étape {step.order} : </p>
                      {step.description}
                    </li>
                  )
                )
              }
            </ul>
            <a id='step' className='modal__form__lists__steps__add' onClick={handleOpenAddItemModal}>
              <i className="fa-solid fa-plus modal__form__lists__steps__add__icon"></i> Ajouter
            </a>
          </div>
        </div>
        <div className='modal__form__number'>
          <Input
            name='duration'
            type='number'
            value={duration}
            label='Temps de préparation en minute :'
            action={setInputAddRecipeValue}
            isRequired={true}
          />
          <Input
            name='quantity'
            type='number'
            value={quantity}
            label='Nombre de personnes :'
            action={setInputAddRecipeValue}
            isRequired={true}
          />
        </div>
        <Input
          name='note'
          type='textarea'
          value={note}
          label='Note :'
          placeholder='Entrez une note succeptible de vous aider...' 
          action={setInputAddRecipeValue}
          isRequired={false}
        />
        {userRole &&
          <div className='modal__form__switch'>
            <h3 className='modal__form__switch__title'>Visibilité de la recette :</h3>
            <div className='modal__form__switch__box'>
              <p className={beforeClassName}>Privée</p>
              <input
                className='modal__form__switch__box__input'
                type="checkbox"
                id="switch"
                checked={isPublic}
                onChange={handleSwitchClicked}
                value={isPublic}
              />
              <label className='modal__form__switch__box__label' htmlFor="switch">Toggle</label>
              <p className={afterClassName}>Publique</p>
            </div>
          </div>
        }
        <Button type='submit' text='Ajouter' className='fill m-r' />
        <Button handler={handleClose} type='button' text='Fermer' className='stroke' />
      </form>
    </section>
  );
};

export default AddRecipeModal;
