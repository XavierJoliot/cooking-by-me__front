// import utils
import './styles.scss';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';

// import images
import ContactHead from '../../assets/images/contact-head.jpg';

const Contact = () => (
  <main className='contact-page'>
    <InternPageHeadSection title='Contact' imagePath={ContactHead} />
    <section className='contact-page__description'>
      <p>Parce que la <strong>cuisine</strong> c’est avant tout du <strong>partage</strong>, n’hésite pas à communiquer avec nous à l’aide de notre formulaire de contact ! C’est simple, rapide et nous te répondrons dans un délai de 48h ! </p>
    </section>
  </main>
);

export default Contact;
