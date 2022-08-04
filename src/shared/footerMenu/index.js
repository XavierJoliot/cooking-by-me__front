// import utils
import './styles.scss';
import { NavLink } from 'react-router-dom';

// import images
import Logo from '../../assets/images/logo_typo.png';

const FooterMenu = () => (
  <nav className='footer-navigation'>
    <NavLink className='footer-navigation__link' to='/' target='_blank'>
      <img className='footer-navigation__link__logo' src={Logo} alt='Logo typographie Cooking by me' />
    </NavLink>
    <ul className='footer-navigation__list'>
      <NavLink className='footer-navigation__list__link' to='/' target='_blank'>
        <li className='footer-navigation__list__link__item'>Cooking by me</li>
      </NavLink>
      <NavLink className='footer-navigation__list__link' to='a-propos-de-nous' target='_blank'>
        <li className='footer-navigation__list__link__item'>À propos de nous</li>
      </NavLink>
      <NavLink className='footer-navigation__list__link' to='mes-recettes' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mes recettes</li>
      </NavLink>
      <NavLink className='footer-navigation__list__link' to='#' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mon espace</li>
      </NavLink>
      <NavLink className='footer-navigation__list__link' to='contact' target='_blank'>
        <li className='footer-navigation__list__link__item'>Contact</li>
      </NavLink>
      <NavLink className='footer-navigation__list__link' to='mentions-legales' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mentions légales</li>
      </NavLink>
    </ul>
  </nav>
);

export default FooterMenu;
