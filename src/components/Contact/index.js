// import utils
import './styles.scss';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';

// import images
import ContactHead from '../../assets/images/contact-head.jpg';

const Contact = () => (
  <main className='contact-page'>
    <InternPageHeadSection title='Contact-page' imagePath={ContactHead} />
    <section className='contact-page__description'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim mauris, dictum eget sapien vitae, auctor vulputate mi. Maecenas finibus elit arcu, vel sodales massa vulputate quis. Praesent iaculis risus vitae feugiat laoreet. Vestibulum ut ligula nec mi rhoncus sodales.</p>
    </section>
  </main>
);

export default Contact;
