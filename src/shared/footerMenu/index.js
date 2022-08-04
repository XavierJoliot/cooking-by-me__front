// import utils
import './styles.scss';
import { Link } from 'react-router-dom';

// import images
import Logo from '../../assets/images/logo_typo.png';

const FooterMenu = () => (
  <nav className='footer-navigation'>
    <Link className='footer-navigation__link' to='/' target='_blank'>
      <img className='footer-navigation__link__logo' src={Logo} alt='Logo typographie Cooking by me' />
    </Link>
    <ul className='footer-navigation__list'>
      <Link className='footer-navigation__list__link' to='/' target='_blank'>
        <li className='footer-navigation__list__link__item'>Cooking by me</li>
      </Link>
      <Link className='footer-navigation__list__link' to='a-propos-de-nous' target='_blank'>
        <li className='footer-navigation__list__link__item'>À propos de nous</li>
      </Link>
      <Link className='footer-navigation__list__link' to='mes-recettes' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mes recettes</li>
      </Link>
      <Link className='footer-navigation__list__link' to='#' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mon espace</li>
      </Link>
      <Link className='footer-navigation__list__link' to='contact' target='_blank'>
        <li className='footer-navigation__list__link__item'>Contact</li>
      </Link>
      <Link className='footer-navigation__list__link' to='mentions-legales' target='_blank'>
        <li className='footer-navigation__list__link__item'>Mentions légales</li>
      </Link>
    </ul>
  </nav>
);

export default FooterMenu;
