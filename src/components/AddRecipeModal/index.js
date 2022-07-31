// import utils
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsItemModalOpen, setIsModalOpen, setItemModalType, setUserToken, submitAddRecipeModal } from '../../actions/recipes';
import { setInputAddRecipeValue } from '../../actions/input';
import { useAuth0 } from '@auth0/auth0-react';

// import component
import Input from '../../shared/input';
import Button from '../../shared/button';

const AddRecipeModal = () => { 
  const dispatch = useDispatch();

  const { user, getAccessTokenSilently } = useAuth0();

  const { 
    title, 
    imagePath,
    duration, 
    quantity, 
    note, 
    ingredientsList, 
    stepsList 
  } = useSelector((state) => state.addRecipeModal.newRecipe);

  const handleClose = () => {
    dispatch(setIsModalOpen());
  }

  const handleSubmit = async (e) => {    
    e.preventDefault();

    dispatch(setInputAddRecipeValue('userId', user.sub));

    dispatch(submitAddRecipeModal());
  }

  const handleOpenAddItemModal = (e) => {
    if(e.target.id === 'ingredient') {
      dispatch(setItemModalType('ingredient'));
    };
    if(e.target.id === 'step') {
      dispatch(setItemModalType('étape'));
    };
    dispatch(setIsItemModalOpen());
  }

  return (
    <section className='modal'>
      <form onSubmit={handleSubmit} className='modal__form'>
        <i onClick={handleClose} className="fa-solid fa-xmark modal__form__close"></i>
        <h1 className='modal__form__title'>Ajouter une recette :</h1>
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
                      {ingredient.name} - {ingredient.quantity}{ingredient.unit}
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
        <Button type='submit' text='Ajouter' className='fill m-r' />
        <Button handler={handleClose} type='button' text='Fermer' className='stroke' />
      </form>
    </section>
  );
};

export default AddRecipeModal;
