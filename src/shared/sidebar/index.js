// import utils
import './styles.scss';
import { useDispatch } from 'react-redux';
import { setIsItemModalOpen, setIsModalOpen, setItemModalType } from '../../actions/recipes';
import { useAuth0 } from '@auth0/auth0-react';

// import components
import Input from '../../shared/input';

const Sidebar = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useAuth0();

  const handleAddRecipeClick = () => {
    dispatch(setIsModalOpen());
  }

  const handleAddGroupClick = () => {
    dispatch(setIsItemModalOpen('groupe'));
  }

  return (
    <aside className='sidebar'>
      <div className='sidebar__add'>
        { isAuthenticated &&
          <a onClick={handleAddRecipeClick} className='sidebar__add__button'>
            <i className="fa-solid fa-plus sidebar__add__button__icon"></i> Ajouter une recette
          </a>
        }
        { isAuthenticated &&
          <a onClick={handleAddGroupClick} className='sidebar__add__button'>
            <i className="fa-solid fa-plus sidebar__add__button__icon"></i> Ajouter un groupe
          </a>
        }
      </div>
      <div className='sidebar__search'>
        <h2 className='sidebar__search__title'>Rechercher :</h2>
        <Input type='search' name='searchbar' value='' placeholder='Saisissez une lettre...' />
      </div>
      <div className='sidebar__navigation'>
        <h2 className='sidebar__navigation__title'>Navigation :</h2>
        <a href='#group' className='sidebar__navigation__filter'>Groupes</a>
        <a href='#recipes' className='sidebar__navigation__filter'>Mes recettes</a>
        <a href='#cooking' className='sidebar__navigation__filter'>Recettes Cooking by me</a>
      </div>
    </aside>
  );
};

export default Sidebar;
