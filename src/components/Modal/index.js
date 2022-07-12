// import utils
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModalOpen } from '../../actions/recipes';

// import component
import Input from '../../shared/input';
import Button from '../../shared/button';

const Modal = () => { 
  const dispatch = useDispatch();

  const { title, imagePath, time, people, note } = useSelector((state) => state.addRecipeModal.newRecipe);

  const handleClose = () => {
    dispatch(setIsModalOpen());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIsModalOpen());
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
        />
        <Input
          name='imagePath'
          type='file'
          value={imagePath}
          label='Média :'
        />
        <div className='modal__form__lists'>
          <div className='modal__form__lists__ingredients'>
            <h2 className='modal__form__lists__ingredients__title'>Ingrédients :</h2>
            <ul className='modal__form__lists__ingredients__list'>
              <li className='modal__form__lists__ingredients__list__item'>test</li>
            </ul>
            <a className='modal__form__lists__ingredients__add'>
              <i className="fa-solid fa-plus modal__form__lists__steps__add__icon"></i> Ajouter
            </a>
          </div>
          <div className='modal__form__lists__steps'>
            <h2 className='modal__form__lists__steps__title'>Étapes :</h2>
            <ul className='modal__form__lists__steps__list'>
              <li className='modal__form__lists__steps__list__item'>test</li>
            </ul>
            <a className='modal__form__lists__steps__add'>
              <i className="fa-solid fa-plus modal__form__lists__steps__add__icon"></i> Ajouter
            </a>
          </div>
        </div>
        <div className='modal__form__number'>
          <Input
            name='time'
            type='number'
            value={time}
            label='Temps de préparation :'
          />
          <Input
            name='people'
            type='number'
            value={people}
            label='Nombre de personnes :'
          />
        </div>
        <Input
          name='note'
          type='textarea'
          value={note}
          label='Note :'
          placeholder='Entrez une note succeptible de vous aider...' 
        />
        <Button type='submit' text='Ajouter' className='fill' />
        <Button type='button' text='Clear' className='stroke' />
      </form>
    </section>
  );
};

export default Modal;
