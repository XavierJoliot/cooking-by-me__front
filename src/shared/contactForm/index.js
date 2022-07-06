// import utils
import './styles.scss';

// import images
import Image from '../../assets/images/contact-form.jpg';

// import component
import Button from '../button';
import Input from '../input';
import { useLocation } from 'react-router-dom';

const ContactForm = () => (
  <section className='contact'>
    <div className='contact__image'>
      <img className='contact__image__item' src={Image} alt="Contact cooking by me" />
    </div>
    <form className='contact__form'>
      <h2 className='contact__form__title'>Une idée ? Besoin d'aide ? Ou envie de discuter ? Contactez-nous !</h2>
      <Input name='email' type='email' label='Mail :' placeholder="Renseignez votre mail." value='' />
      <Input name='object' type='text' label='Objet :' placeholder="Entrez l'objet de votre demande." value='' />
      <Input name='content' type='textarea' label='Message :' placeholder="Entrez votre message" value='' />
      <div className='contact__form__button'>
        <Button type='submit' text='Envoyer' className='contact__form__button__item fill' />
        <Button type='button' text='Cancel' className='contact__form__button__item stroke' />
      </div>
    </form>
  </section>
);

export default ContactForm;
