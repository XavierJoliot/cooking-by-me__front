// import utils
import './styles.scss';

// import images
import Logo from '../../assets/images/logo_typo.png';

const FooterMenu = () => (
  <nav className='footer-navigation'>
    <a className='footer-navigation__link' href='/' target='_blank'>
      <img className='footer-navigation__link__logo' src={Logo} alt='Logo typographie Cooking by me' />
    </a>
    <ul className='footer-navigation__list'>
      <a className='footer-navigation__list__link' href='/' target='_blank'>
        <li className='footer-navigation__list__link__item'>Cooking by me</li>
      </a>
      <a className='footer-navigation__list__link' href='#' target='_blank'>
        <li className='footer-navigation__list__link__item'>À propos de nous</li>
      </a>
      <a className='footer-navigation__list__link' href='#' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mes recettes</li>
      </a>
      <a className='footer-navigation__list__link' href='#' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mon espace</li>
      </a>
      <a className='footer-navigation__list__link' href='#' target='_blank'>
        <li className='footer-navigation__list__link__item'>Contact</li>
      </a>
      <a className='footer-navigation__list__link' href='#' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mentions légales</li>
      </a>
    </ul>
  </nav>
);

export default FooterMenu;
