// import utils
import './styles.scss';
import Pattern from '../../assets/images/pattern.png';
import PatternDesktop from '../../assets/images/patternDesk.png';

// import component
import ContactForm from '../../shared/contactForm';
import FooterMenu from '../../shared/footerMenu';
import Social from '../../shared/social';

const Footer = () => (
  <footer className='footer'>
    <img className='footer__image' src={Pattern} alt='Footer cooking by me pattern' />
    <img className='footer__image footer__image--desktop' src={PatternDesktop} alt='Footer cooking by me pattern' />
    <ContactForm />
    <FooterMenu />
    <Social />
    <section className='footer__copyright'>
      <p className='footer__copyright__text'>© 2022, Cooking by me</p>
    </section>
  </footer>  
);

export default Footer;
