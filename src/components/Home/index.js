// import utils
import './styles.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// import images
import Slider from '../../assets/images/slider-head-home.jpg';
import HowItWork from '../../assets/images/how-it-work.jpg';
import Logo from '../../assets/images/logo.png'

// import component
import Button from '../../shared/button';
import RecipesCard from '../../shared/recipesCard';

const Home = () =>{ 
  const { cookingRecipes } = useSelector((state) => state.recipes);

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <main className='home'>
      <section className='home__slider'>
        <img className='home__slider__image' src={Slider} alt="Livre de recettes Cooking by me" />
      </section>
      <section className='home__presentation'>
        <div className='home__presentation__logo'>
          <img className='home__presentation__logo__item' src={Logo} alt="Logo simplifié Cooking by me" />
        </div>
        <div className='home__presentation__description'>
          <h1 className='home__presentation__description__title'>Comment ça fonctionne ?</h1>
          <p className='home__presentation__description__text'>
          As-tu déjà passé des heures a trouver <strong>LA recette</strong> pour assurer le <strong>repas de famille</strong> du dimanche, pour célébrer l’<strong>anniversaire</strong> du petit dernier ou encore pour impressionner ton nouveau crush ?  
          <br />
          <br />
          Pire, as-tu déjà eu l’honneur de recevoir une précieuse <strong>recette de famille</strong> écrite avec authenticité sur un bout de papier taché et qui s’est ensuite perdue dans les abîmes ?
          <br />
          <br />
          Parce que les recettes sont les secrets les mieux gardés de tout <strong>cuisinier</strong> qui se respecte, <strong>Cooking By Me</strong> a pour vocation de venir en aide aux têtes en l’air de la cuisine, aux familles de <strong>cuistots</strong> et aux <strong>chefs</strong> en herbe qui ne seraient rien sans elles.
          </p>
        </div>
        <img className='home__presentation__image' src={HowItWork} alt="Livre de recettes Cooking by me" />
      </section>
      <section className='home__my-recipes'>
        <div className='home__my-recipes__content'>
          <h2 className='home__my-recipes__content__title'>Des recettes, des groupes, des filtres, tout ce dont tu as besoin !</h2>
          <p className='home__my-recipes__content__text'>
            Un <strong>livre de recette</strong> disponible n'importe où et n'importe quand, ça donne envie n'est ce pas ? Et bien n'hésite plus, <strong>Cooking By Me</strong> est la solution !
            <br />
            <br />
            Ce concept est dédié à tout le monde, que tu sois un <strong>chef étoilé</strong> d'une grande enseigne ou que la <strong>cuisson</strong> d'un oeuf te réserve encore des quelques surprise, tu es à ta place ici !
            <br />
            <br />
            Ton <strong>livre</strong> est personnel, tu es le seul à y avoir accès, alors n'ai pas peur de te sentir à l'aise, même si tu aime faire des <strong>pizzas</strong> avec de l'ananas... Ici tu es seul maître de tes <strong>recettes</strong> !
            <br />
            <br />
            Envie d’aller plus loin ? Tu souhaites commencer ou continuer à écrire ton propre <strong>livre de cuisine</strong> ? 
            <br />
            <br />
            C’est par ici que la magie opère. Viens vite retrouver tes recettes et en créer de nouvelles !
            <br />
            <br />
            (P.S : Si tu n'as pas encore de compte, nous t'invitons à en créer un, sans compte il est difficile de relié un auteur à un livre.)
          </p>
          {
            !isAuthenticated && 
            <Link className='home__my-recipes__content__link ' to='#' onClick={() => loginWithRedirect()}> 
              <Button type='button' text='Connexion / inscription' className='fill' />
            </Link>
          }
          {
            isAuthenticated && 
            <Link className='home__my-recipes__content__link' to='mes-recettes/#recipes'>
              <Button type='button' text='Mes recettes' className='fill' />
            </Link>
          }
        </div>
      </section>
      <section className='home__cooking-recipes'>
        <div className='home__cooking-recipes__description'>
          <h2>Une liste de recettes ready to cook :</h2>
          <p className='home__cooking-recipes__description__text'>
          Tu en as assez de répéter les mêmes recettes et souhaites trouver de <strong>nouvelles pépites</strong> ? 
          <br />
          <br />
          Tu recherche en priorité des recettes à réaliser, nous avons également ce qu'il te faut ! Des recettes <strong>Ready To Cook</strong>, disponible, toutes fraîches du matin et surtout testées est approuvées par les <strong>chefs Cookers</strong> !
          <br />
          <br />
          Parce qu’on <strong>apprend la cuisine</strong> avec celles des autres, tu pourras aussi trouver ton inspiration dans les <strong>recettes partagées</strong> par notre équipe de Cookers ! 
          </p>
          <Link className='home__cooking-recipes__description__link' to='mes-recettes/#cooking'>
            <Button type='button' text='Découvrir' className='fill' /> 
          </Link>
        </div>
        <div className='home__cooking-recipes__list'>
          {
            cookingRecipes.map(
              (item) => (
                <RecipesCard
                  isEditable={false}
                  recipeId={item.id}
                  key={item.title}
                  imagePath={item.imagePath} 
                  duration={item.duration}
                  title={item.title}
                  quantity={item.quantity}
                />
              )
            )
          }
          {
            cookingRecipes.length === 0 &&
            <div className='recipes__list__right__group__content__empty'>
              <p className='recipes__list__right__group__content__empty__text'>
              <span className='recipes__list__right__group__content__empty__text__bold'>Bientot du contenu par ici !</span>
              Nos cuistos sont en train de préparer les meilleurs recette pour nos cooker. Revenez d'ici peu, il y aura plein de bonnes choses à découvrir !
              </p>
            </div>
          }
        </div>
      </section>
    </main>
  );
};

export default Home;
