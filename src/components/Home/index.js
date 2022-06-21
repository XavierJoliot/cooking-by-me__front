// import utils
import './styles.scss';

// import images
import Slider from '../../assets/images/slider-head-home.jpg';
import Logo from '../../assets/images/logo.png'

// import component
import Button from '../../shared/button';
import RecipesCard from '../../shared/recipesCard';

const Home = () => (
  <main className='home'>
    <section className='home__slider'>
      <img className='home__slider__image' src={Slider} alt="Livre de recettes Cooking by me" />
    </section>
    <section className='home__presentation'>
      <img className='home__presentation__logo' src={Logo} alt="Logo simplifié Cooking by me" />
      <div className='home__presentation__description'>
        <h1 className='home__presentation__description__title'>Comment ça fonctionne ?</h1>
        <p className='home__presentation__description__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim mauris, dictum eget sapien vitae, auctor vulputate mi. Maecenas finibus elit arcu, vel sodales massa vulputate quis. Praesent iaculis risus vitae feugiat laoreet. Vestibulum ut ligula nec mi rhoncus sodales.
        </p>
      </div>
      <img className='home__presentation__image' src={Slider} alt="Livre de recettes Cooking by me" />
    </section>
    <section className='home__my-recipes'>
      <Button type='button' text='Mes recettes' className='fill' />
    </section>
    <section className='home__cooking-recipes'>
      <div className='home__cooking-recipes__description'>
        <h2>Une liste de recettes ready to cook :</h2>
        <p className='home__cooking-recipes__description__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim mauris, dictum eget sapien vitae, auctor vulputate mi. Maecenas finibus elit arcu, vel sodales massa vulputate quis. Praesent iaculis risus vitae feugiat laoreet. Vestibulum ut ligula nec mi rhoncus sodales.
        </p>
      </div>
      <div className='home__cooking-recipes__list'>
        <RecipesCard
          imagePath={Slider} 
          time={35}
          title="test"
          quantity={4}
        />
        <RecipesCard
          imagePath={Slider} 
          time={35}
          title="test"
          quantity={4}
        />
        <RecipesCard
          imagePath={Slider} 
          time={35}
          title="test"
          quantity={4}
        />
      </div>
    </section>
  </main>
);

export default Home;
