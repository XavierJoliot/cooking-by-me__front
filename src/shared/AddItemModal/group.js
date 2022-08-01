// import utils
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setInputItemGroupModal } from '../../actions/input';

// import component
import Input from '../input';
import Button from '../button';
import { addDataToApi } from '../../actions/api';

const Group = ({ close }) => { 
  const dispatch = useDispatch();
  const { modalName } = useSelector((state) => state.addItemModal);
  const { group } = useSelector((state) => state.addItemModal);
  const { title, description } = useSelector((state) => state.addItemModal.group);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title) {
      dispatch(addDataToApi(('groupe'), group, 'group'));
      close();
      return(console.log('done'));
    }

    return(console.log('erreur'));
  }

  return (
    <form onSubmit={handleSubmit} className='add-item-modal__form'>
      <i onClick={close} className="fa-solid fa-xmark add-item-modal__form__close"></i>
      <h1 className='add-item-modal__form__title'>Ajouter un {modalName} :</h1>
      <Input 
        name='title'
        type='text'
        value={title}
        action={setInputItemGroupModal}
        label="Nom du groupe :"
        isRequired={true}
      />
      <Input 
        name='description'
        type='textarea'
        value={description}
        action={setInputItemGroupModal}
        label="Description du groupe :"
        placeholder='Entrez la déscripton de votre groupe, si vous en avez envie...'
        isRequired={false}
      />
      <Button type='submit' text='Ajouter' className='fill m-r' />
      <Button handler={close} type='button' text='Fermer' className='stroke' />
    </form>
  );
};

Group.propTypes = {
  close: PropTypes.func.isRequired,
}

export default Group;
