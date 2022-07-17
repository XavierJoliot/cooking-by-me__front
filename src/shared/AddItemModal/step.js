// import utils
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setInputItemStepModal } from '../../actions/input';
import { setSteps } from '../../actions/recipes';

// import component
import Input from '../input';
import Button from '../button';

const Step = ({ close }) => { 
  const dispatch = useDispatch();
  const { modalName, step } = useSelector((state) => state.addItemModal);
  const { order, description } = useSelector((state) => state.addItemModal.step);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(order && description) {
      dispatch(setSteps(step));
      close();
      return(console.log('done'));
    }

    return(console.log('erreur'));
  }

  return (
    <form onSubmit={handleSubmit} className='add-item-modal__form'>
      <i onClick={close} className="fa-solid fa-xmark add-item-modal__form__close"></i>
      <h1 className='add-item-modal__form__title'>Ajouter une {modalName} :</h1>
      <div className='add-item-modal__form__order'>
        <Input 
          name='order'
          type='number'
          value={order}
          action={setInputItemStepModal}
          label="Numéro de l'étape :"
          isRequired={true}
        />
      </div>
      <Input 
        name='description'
        type='textarea'
        value={description}
        action={setInputItemStepModal}
        label="Description de l'étape :"
        placeholder='Entrez la déscripton de votre étape...'
        isRequired={true}
      />
      <Button type='submit' text='Ajouter' className='fill m-r' />
      <Button handler={close} type='button' text='Fermer' className='stroke' />
    </form>
  );
};

Step.propTypes = {
  close: PropTypes.func.isRequired,
}

export default Step;
