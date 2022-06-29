// import utils
import './styles.scss';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';
import ExplicationStep from './explicationStep';
import Button from '../../shared/button';

// import images
import HeadImage from '../../assets/images/aboutUs.jpg';
import PresentationImage from '../../assets/images/about-presentation.jpg';
import Step1 from '../../assets/images/how-it-work.jpg';

const AboutUs = () => (
  <main className='about'>
    <InternPageHeadSection imagePath={HeadImage} title='À propos de nous' />
    <section className='about__presentation'>
      <div className='about__presentation__description'>
        <h2 className='about__presentation__description__title'>Qu'est ce que Cookng by me ?</h2>
        <p className='about__presentation__description__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim mauris, dictum eget sapien vitae, auctor vulputate mi. Maecenas finibus elit arcu, vel sodales massa vulputate quis. Praesent iaculis risus vitae feugiat laoreet. Vestibulum ut ligula nec mi rhoncus sodales.
        </p>
      </div>
      <div className='about__presentation__image'>
        <img src={PresentationImage} className='about__presentation__image__item' alt='Cooking by me image de presentation à propos de nous' />
      </div>
    </section>
    <section className='about__explication'>
      <h2 className='about__explication__title'>Comment ça fonctionne ?</h2>
      <ExplicationStep title="Tout d'abord :" imagePath={Step1} description='test' />
      <ExplicationStep title="Par la suite :" imagePath={Step1} description='test' />
      <ExplicationStep title="Et pour finir :" imagePath={Step1} description='test' />
    </section>
    <section className='about__foot'>
      <h2 className='about__foot__title'>Allez, on ne laisse pas l'huile sur le feu et on s'y met !</h2>
      <Button type='button' text='Créer mon compte' className='fill' />
    </section>
  </main>
);

export default AboutUs;
