// import utils
import './styles.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import images
import Slider from '../../assets/images/slider-head-home.jpg';
import HowItWork from '../../assets/images/how-it-work.jpg';
import Logo from '../../assets/images/logo.png'

// import component
import Button from '../../shared/button';
import RecipesCard from '../../shared/recipesCard';

const Home = () =>{ 
  const { cookingRecipes } = useSelector((state) => state.recipes);
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim mauris, dictum eget sapien vitae, auctor vulputate mi. Maecenas finibus elit arcu, vel sodales massa vulputate quis. Praesent iaculis risus vitae feugiat laoreet. Vestibulum ut ligula nec mi rhoncus sodales.
          </p>
        </div>
        <img className='home__presentation__image' src={HowItWork} alt="Livre de recettes Cooking by me" />
      </section>
      <section className='home__my-recipes'>
        <a className='home__my-recipes__link' href='mes-recettes/#recipes'>
          <Button type='button' text='Mes recettes' className='fill' href='/mes-recettes/#recipes' />
        </a>
      </section>
      <section className='home__cooking-recipes'>
        <div className='home__cooking-recipes__description'>
          <h2>Une liste de recettes ready to cook :</h2>
          <p className='home__cooking-recipes__description__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim mauris, dictum eget sapien vitae, auctor vulputate mi. Maecenas finibus elit arcu, vel sodales massa vulputate quis. Praesent iaculis risus vitae feugiat laoreet. Vestibulum ut ligula nec mi rhoncus sodales.
          </p>
          <a className='home__cooking-recipes__description__link' href='mes-recettes/#cooking'>
            <Button type='button' text='Découvrir' className='fill' /> 
          </a>
        </div>
        <div className='home__cooking-recipes__list'>
          {
            cookingRecipes.map(
              (item) => (
                <Link key={item.id} to={'/recette/' + item.id} reloadDocument>
                  <RecipesCard
                    key={item.title}
                    imagePath={item.imagePath} 
                    time={item.time}
                    title={item.title}
                    quantity={item.quantity}
                  />
                </Link>
              )
            )
          }
        </div>
      </section>
    </main>
  );
};

export default Home;
