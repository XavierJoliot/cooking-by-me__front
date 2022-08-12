// import utils
import './styles.scss';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';
import Button from '../../shared/button';

// import images
import HeadImage from '../../assets/images/aboutUs.jpg';
import PresentationImage from '../../assets/images/about-presentation.jpg';
import Step1 from '../../assets/images/step.png';
import Step2 from '../../assets/images/step2.png';
import Step3 from '../../assets/images/step3.png';

const AboutUs = () => { 

  const { loginWithRedirect } = useAuth0();

  return (
    <main className='about'>
      <InternPageHeadSection imagePath={HeadImage} title='À propos de nous' />
      <section className='about__presentation'>
        <div className='about__presentation__description'>
          <h2 className='about__presentation__description__title'>Qu'est ce que Cookng by me ?</h2>
          <p className='about__presentation__description__text'>
          <strong>Cuisiner est un plaisir qui fait plaisir.</strong> Quoi de mieux que de cuisiner des <strong>recettes de famille</strong>, ou encore la <strong>recette du gâteau au chocolat</strong> de sa meilleure amie griffonnée sur un bout de papier.
          <br />
          <br />
          Souvent, le problème qui se pose  n’est pas de réaliser la recette, mais plutôt de retrouver l’endroit où on l’a laissée. Dans le cas du bout de papier, il y a peu d’espoir, la seule solution c’est de recontacter sa meilleure amie. Solution qui ne fonctionne pas avec la recette de l’arrière, arrière grand-mère malheureusement...
          <br />
          <br />
          <strong>Cooking By Me</strong> c'est la solution à ce problème ! 
          <br />
          <br />
          Qu’elles soient inventées de toutes pièces, remises au goût du jour ou copiées des plus <strong>grands chefs</strong>, tu pourras retrouver en tout temps ton propre <strong>livre de recette en ligne</strong> pour que jamais ne s’effacent tes talents culinaires. 
          <br />
          <br />
          Alors avant d’être dans le pâté, crée ton profil et commence par <strong>ajouter tes premières recettes</strong>, par chance, on t'explique comment faire ci-dessous !
          </p>
        </div>
        <div className='about__presentation__image'>
          <img src={PresentationImage} className='about__presentation__image__item' alt='Cooking by me image de presentation à propos de nous' />
        </div>
      </section>
      <section className='about__explication'>
        <h2 className='about__explication__title'>Comment ça fonctionne ?</h2>
        <article className='about__explication__article'>
          <div className='about__explication__article__image'>
            <img className='about__explication__article__image__item' src={Step2} alt='Cooking by me étape' />
          </div>
          <div className='about__explication__article__description'>
            <h3 className='about__explication__article__description__title'>Tout d'abord :</h3>
            <p className='about__explication__article__description__text'>
            Pour pouvoir <strong>rédiger un livre</strong>, il faut un auteur. On dirait qu'on a de la chance, car si tu lis ces mots c'est que tu es sûrement notre auteur.
            <br />
            <br />
            Il te suffit alors de te créer un compte utilisateur en cliquant sur le lien en bas de page. Tu vas être dirigé sur un écran te proposant plusieurs solutions de créaion de compte. 
            <br />
            <br />
            A toi de choisir celle qui te convient le mieux.
            </p>
          </div>
        </article> 
        <article className='about__explication__article'>
          <div className='about__explication__article__image'>
            <img className='about__explication__article__image__item' src={Step1} alt='Cooking by me étape' />
          </div>
          <div className='about__explication__article__description'>
            <h3 className='about__explication__article__description__title'>Par la suite :</h3>
            <p className='about__explication__article__description__text'>
            Si le développeur à été bon, tu vas être de retour sur la page d'accueil de notre site, c'est super ça veut dire que la première étape s'est bien passée !
            <br />
            <br />
            Maintenant de nouvelles options devraient s'offrir à toi. 
            <br />
            <br />
            Notamment, un bouton d'<strong>ajout de recette</strong> (soit en haut a droite si tu es sur ordinateur ou en bas a droite si tu es sur mobile). 
            <br />
            <br />
            Tu l'auras deviner, si tu clique dessus tu vas pouvoir ajouter ta première recette !
            </p>
          </div>
        </article>
        <article className='about__explication__article'>
          <div className='about__explication__article__image'>
            <img className='about__explication__article__image__item' src={Step3} alt='Cooking by me étape' />
          </div>
          <div className='about__explication__article__description'>
            <h3 className='about__explication__article__description__title'>Et pour finir :</h3>
            <p className='about__explication__article__description__text'>
            Tu ouvre le champagne et tu bois jusqu'à plus soif ! 
            <br />
            <br />
            Non, comme tu t'en doute, c'est une blague, puis, il faut toujours penser à inviter M. Modération. 
            <br />
            <br />
            Néanmoins, tu as accomplis les principales étapes pour pouvoir créer ton <strong>livre de recettes</strong>. 
            <br />
            <br />
            Tu peux maintenant <strong>consulter tes recettes</strong>, <strong>créer des groupes</strong> (exemple: <strong>repas de fête, desserts, spécial barbecue,</strong> etc..) et bien sure continuer de nourir ton livre. 
            <br />
            <br />
            Si tu as une question, un besoin ou des suggestions, n'hesite pas, un formulaire de contact est présent sur chaque pages !
            </p>
          </div>
        </article>
      </section>
      <section className='about__foot'>
        <h2 className='about__foot__title'>Allez, on ne laisse pas l'huile sur le feu et on s'y met !</h2>
        <Link to='#' onClick={() => loginWithRedirect()} className='about__foot__link'>
          <Button type='button' text='Créer mon compte' className='fill' />
        </Link>
      </section>
    </main>
  );
};

export default AboutUs;
