// import utils
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setInputItemIngredientModal } from '../../actions/input';

// import component
import Input from '../input';
import Button from '../button';
import { setIngredients } from '../../actions/recipes';
import { addDataToApi, updateDataToApi } from '../../actions/api';

const Ingredient = ({ close }) => { 
  const dispatch = useDispatch();

  const { mode, modalName, unitList, ingredient } = useSelector((state) => state.addItemModal);
  const { id, name, quantity, unit } = useSelector((state) => state.addItemModal.ingredient);

  const handleSelect = (e) => {
    dispatch(setInputItemIngredientModal('unit', e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && quantity > 0 && unit) {
      if(mode === 'edit') {
        dispatch(updateDataToApi(`ingredient/${id}`, ingredient));
        return(console.log('done'));
      }

      if(mode === 'add') {
        dispatch(addDataToApi(`ingredient`, ingredient));
        return(console.log('done'));
      }

      dispatch(setIngredients(ingredient));
      close();
      return(console.log('done'));
    }

    return(console.log('erreur'));
  }

  return (
    <form onSubmit={handleSubmit} className='add-item-modal__form' encType='multipart/form-data'>
      <i onClick={close} className="fa-solid fa-xmark add-item-modal__form__close"></i>
      <h1 className='add-item-modal__form__title'>Ajouter un {modalName} :</h1>
      <Input
        name='name'
        type='text'
        value={name}
        label="Nom de l'ingrédient :"
        placeholder='Entrez un nom pour votre ingrédient..' 
        action={setInputItemIngredientModal}
        isRequired={true}
      />
      <div className='add-item-modal__form__quantity'>
        <div className='add-item-modal__form__quantity__input'>
          <Input
            name='quantity'
            type='number'
            value={quantity}
            label="Quantité :"
            action={setInputItemIngredientModal}
            isRequired={true}
          />
        </div>
        <div className='add-item-modal__form__quantity__select'>
          <label className='add-item-modal__form__quantity__select__label'>Unité :</label>
          <select onChange={handleSelect} className='add-item-modal__form__quantity__select__item'>
            <option className='add-item-modal__form__quantity__select__item__option' value="value" selected={!ingredient.unit}>Choisir</option>
            {
              unitList.map(
                (unit) => (
                  <option key={unit} className='add-item-modal__form__quantity__select__item__option' selected={ingredient.unit === unit} value={unit}>{unit}</option>
                )
              )
            }
          </select>
        </div>
      </div>
      <Button type='submit' text='Ajouter' className='fill m-r' />
      <Button handler={close} type='button' text='Fermer' className='stroke' />
    </form>
  );
};

Ingredient.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Ingredient;
