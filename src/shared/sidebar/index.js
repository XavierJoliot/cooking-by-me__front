// import utils
import './styles.scss';
import { useDispatch } from 'react-redux';
import { setIsModalOpen } from '../../actions/recipes';
import { setIsItemModalOpen } from '../../actions/modal';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

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
          <Link to='#' onClick={handleAddRecipeClick} className='sidebar__add__button'>
            <i className="fa-solid fa-plus sidebar__add__button__icon"></i> Ajouter une recette
          </Link>
        }
        { isAuthenticated &&
          <Link to='#' onClick={handleAddGroupClick} className='sidebar__add__button'>
            <i className="fa-solid fa-plus sidebar__add__button__icon"></i> Ajouter un groupe
          </Link>
        }
      </div>
      <div className='sidebar__search'>
        <h2 className='sidebar__search__title'>Rechercher :</h2>
        <Input type='search' name='searchbar' value='' placeholder='Saisissez une lettre...' isRequired={false} />
      </div>
      <div className='sidebar__navigation'>
        <h2 className='sidebar__navigation__title'>Navigation :</h2>
        <Link to='#group' className='sidebar__navigation__filter'>Groupes</Link>
        <Link to='#recipes' className='sidebar__navigation__filter'>Mes recettes</Link>
        <Link to='#cooking' className='sidebar__navigation__filter'>Recettes Cooking by me</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
