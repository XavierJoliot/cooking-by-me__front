// import utils
import './styles.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const UserMenu = () => { 
  const handleMenuClick = (e) => {
    const elmt = document.querySelector('.user__menu');

    elmt.classList.toggle('user__menu--active');
  };

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if(isAuthenticated) {
    return (
      <div className='user'>
        <div className='user__navigation' onClick={handleMenuClick}>
          <div className='user__navigation__avatar'>
            <img className='user__navigation__avatar__image' src={user.picture} alt={`Avatar ${user.name} Cooking by me`} />
          </div>
          <i className='fa-solid fa-caret-down user__navigation__icon'></i>
        </div>
        <div className='user__menu'>
          <ul className='user__menu__list'>
            <Link to='mon-espace' className='user__menu__list__link' onClick={handleMenuClick}>
              <li className='user__menu__list__link__item'>
                <i className="fa-solid fa-house user__menu__list__link__item__icon"></i>
                Mon espace
              </li>
            </Link>
            <Link to='mon-espace/profil' className='user__menu__list__link' onClick={handleMenuClick}>
              <li className='user__menu__list__link__item'>
                <i className="fa-solid fa-circle-user user__menu__list__link__item__icon"></i>
                Mon profil
              </li>
            </Link>
            <Link className='user__menu__list__link' to='#' onClick={() => logout({ returnTo: window.location.origin })}>
              <li className='user__menu__list__link__item'>
                <i className="fa-solid fa-right-from-bracket user__menu__list__link__item__icon user__menu__list__link__item__icon--red"></i>
                Déconnexion
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='user user--logout'>
      {!isAuthenticated &&
        <a className='user__link' onClick={() => loginWithRedirect()}>Connexion / Inscritpion</a>
      }
    </div>
  );
};

export default UserMenu;
