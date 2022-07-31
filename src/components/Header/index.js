// import utils
import './styles.scss';
import { useDispatch } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

// import images
import HeadLogo from 'src/assets/images/logo_typo.png';

// import component
import UserMenu from '../../shared/userMenu';
import { setIsModalOpen } from '../../actions/recipes';

const Header = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // handleEvent
  const handleBurgerClicked = (e) => {
    const link = document.querySelector('.header__left__burger');
    const nav = document.querySelector('.header__left__navigation');

    link.classList.toggle('header__left__burger__icon--active');
    nav.classList.toggle('header__left__navigation--active');

    return false;
  }

  const handleAddRecipeClick = () => {
    dispatch(setIsModalOpen());
  }
  
  // You can add a reloadDocument property to the Link or NavLink that you want to cause a reload.

  return (
    <header className='header'>
      <div className='header__left'>
        <div className='header__left__burger' onClick={handleBurgerClicked} href="#">
          <div className='header__left__burger__icon'>
            <span className='header__left__burger__icon__link'></span>
          </div>
        </div>
        <nav className='header__left__navigation'>
          <ul className='header__left__navigation__list'>
            <Link className='header__left__navigation__list__link' onClick={handleBurgerClicked} to='/'>
              <li className='header__left__navigation__list__link__item'>Cooking by me</li>
            </Link>
            <Link className='header__left__navigation__list__link' onClick={handleBurgerClicked} to='a-propos-de-nous'>
              <li className='header__left__navigation__list__link__item'>À propos de nous</li>
            </Link>
            <Link className='header__left__navigation__list__link' onClick={handleBurgerClicked} to='mes-recettes'>
              <li className='header__left__navigation__list__link__item'>Mes recettes</li>
            </Link>
            <Link className='header__left__navigation__list__link' onClick={handleBurgerClicked} to='contact'>
              <li className='header__left__navigation__list__link__item'>Contact</li>
            </Link>
            {
              !isAuthenticated && 
              <a className='header__left__navigation__list__link header__left__navigation__list__link--logout' onClick={() => loginWithRedirect()}>
                <li className='header__left__navigation__list__link__item'>Connexion / inscription</li>
              </a>
            }
            
          </ul>
        </nav>
      </div>
      <div className='header__center'>
        <Link className='header__center__link' to='/'>
          <img  className='header__center__link__image' src={HeadLogo} alt="Logo cooking by me" />
        </Link>
      </div>
      <div className='header__right'>
        {
          isAuthenticated && <a className='header__right__button' onClick={handleAddRecipeClick}><i className="fa-solid fa-plus header__right__button__icon"></i> Ajouter une recette</a>
        }
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
