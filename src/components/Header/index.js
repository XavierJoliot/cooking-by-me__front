// import styles
import './styles.scss';

// import images
import HeadLogo from 'src/assets/images/logo_typo.png';

// import component
import UserMenu from '../../shared/userMenu';

const Header = () => {
  // handleEvent
  const handleBurgerClicked = (e) => {
    const link = document.querySelector('.header__left__burger');
    const nav = document.querySelector('.header__left__navigation');

    link.classList.toggle('header__left__burger__icon--active');
    nav.classList.toggle('header__left__navigation--active');

    return false;
  }
  
  // You can add a reloadDocument property to the Link or NavLink that you want to cause a reload.

  return (
    <header className='header'>
      <div className='header__left'>
        <div className='header__left__burger'>
          <div className='header__left__burger__icon' onClick={(handleBurgerClicked)} href="#">
            <span className='header__left__burger__icon__link'></span>
          </div>
        </div>
        <nav className='header__left__navigation'>
          <ul className='header__left__navigation__list'>
            <a className='header__left__navigation__list__link' href='/'>
              <li className='header__left__navigation__list__link__item'>Cooking by me</li>
            </a>
            <a className='header__left__navigation__list__link' href='/a-propos-de-nous'>
              <li className='header__left__navigation__list__link__item'>À propos de nous</li>
            </a>
            <a className='header__left__navigation__list__link' href='/mes-recettes'>
              <li className='header__left__navigation__list__link__item'>Mes recettes</li>
            </a>
            <a className='header__left__navigation__list__link' href='/contact'>
              <li className='header__left__navigation__list__link__item'>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
      <div className='header__center'>
        <a  className='header__center__link' href='/'>
          <img  className='header__center__link__image' src={HeadLogo} alt="Logo cooking by me" />
        </a>
      </div>
      <div className='header__right'>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
