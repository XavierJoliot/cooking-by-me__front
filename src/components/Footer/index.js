// import utils
import './styles.scss';

// import component
import ContactForm from '../../shared/contactForm';
import FooterMenu from '../../shared/footerMenu';
import Social from '../../shared/social';

const Footer = () => (
  <footer className='footer'>
    <ContactForm />
    <FooterMenu />
    <Social />
    <section className='footer__copyright'>
      <p className='footer__copyright__text'>© 2022, Cooking by me</p>
    </section>
  </footer>  
);

export default Footer;
