// import utils
import './styles.scss';
import { useAuth0 } from '@auth0/auth0-react';

const UserMenu = () => { 
  const handleMenuClick = (e) => {
    const elmt = document.querySelector('.user__menu');

    elmt.classList.toggle('user__menu--hidden');
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
        <div className='user__menu user__menu--hidden'>
          <ul className='user__menu__list'>
            <a href='/mon-espace' className='user__menu__list__link'>
              <li className='user__menu__list__link__item'>
                <i className="fa-solid fa-house user__menu__list__link__item__icon"></i>
                Mon espace
              </li>
            </a>
            <a href='/mon-espace/profil' className='user__menu__list__link'>
              <li className='user__menu__list__link__item'>
                <i className="fa-solid fa-circle-user user__menu__list__link__item__icon"></i>
                Mon profil
              </li>
            </a>
            <a className='user__menu__list__link' onClick={() => logout({ returnTo: window.location.origin })}>
              <li className='user__menu__list__link__item'>
                <i className="fa-solid fa-right-from-bracket user__menu__list__link__item__icon user__menu__list__link__item__icon--red"></i>
                Déconnexion
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='user user--logout'>
      <div className='user__navigation' onClick={handleMenuClick}>
        <a className='user__navigation__link' onClick={() => loginWithRedirect()}>Connexion / Inscritpion</a>
      </div>
    </div>
  );
};

export default UserMenu;
