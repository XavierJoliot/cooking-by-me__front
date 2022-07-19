// import utils
import './styles.scss';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../actions/recipes';

const AddRecipeButton = () => { 
  const dispatch = useDispatch();

  const handleAddRecipeClick = () => {
    dispatch(setIsModalOpen());
  }
  return (
    <div onClick={handleAddRecipeClick} className='recipe-button' title='Ajouter une recette'>
      <i className="fa-solid fa-plus recipe-button__icon"></i>
    </div>
  );
};

export default AddRecipeButton;
