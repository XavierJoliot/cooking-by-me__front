// import style
import './styles.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';
import RecipesCard from '../../shared/recipesCard';
import Sidebar from '../../shared/sidebar';
import GroupCard from '../../shared/groupCard';

// import images
import HeadImage from '../../assets/images/recipes.jpg';
import Slider from '../../assets/images/slider-head-home.jpg';

const Recipes = () => { 
  const handleClick = (e) => {
    const elmt = e.target;
    const parent = elmt.closest('div');
    const content = parent.nextSibling;

    if(elmt.classList.contains('fa-caret-down')){
      elmt.classList.replace('fa-caret-down', 'fa-caret-right');
      content.style.display = 'none';
    } else {
      elmt.classList.replace('fa-caret-right', 'fa-caret-down');
      content.style.display = '';
    }
  }

  const { myRecipes } = useSelector((state) => state.recipes);
  return(
    <main className='recipes'>
      <InternPageHeadSection imagePath={HeadImage} title='Mes recettes' />
      <section className='recipes__description'>
        <p className='recipes__description__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim mauris, dictum eget sapien vitae, auctor vulputate mi. Maecenas finibus elit arcu, vel sodales massa vulputate quis. Praesent iaculis risus vitae feugiat laoreet. Vestibulum ut ligula nec mi rhoncus sodales.
        </p>
      </section>
      <section className='recipes__list'>
        <section className='recipes__list__left'>
          <Sidebar />
        </section>
        <section className='recipes__list__right'>
          <div id='group' className='recipes__list__right__group'>
            <div className='recipes__list__right__group__title'>
              <h2 className='recipes__list__right__group__title__text'>Groupes</h2>
              <i className="fa-solid fa-caret-down recipes__list__right__group__title__icon" onClick={handleClick}></i>
              <span className='recipes__list__right__group__title__bar'></span>
            </div>
            <div className='content recipes__list__right__group__content'>
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
            </div>
          </div>
          <div className='recipes__list__right__group'>
            <div id='recipes' className='recipes__list__right__group__title'>
              <h2 className='recipes__list__right__group__title__text'>Mes recettes</h2>
              <i className="fa-solid fa-caret-down recipes__list__right__group__title__icon" onClick={handleClick}></i>
              <span className='recipes__list__right__group__title__bar'></span>
            </div>
            <div className='content recipes__list__right__group__content recipes__list__right__group__content--recipes'>
              {
                myRecipes.map(
                  (item) =>
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
              }
            </div>
          </div>
          <div className='recipes__list__right__group'>
            <div id='cooking' className='recipes__list__right__group__title'>
              <h2 className='recipes__list__right__group__title__text'>Recettes Cooking by me</h2>
              <i className="fa-solid fa-caret-down recipes__list__right__group__title__icon" onClick={handleClick}></i>
              <span className='recipes__list__right__group__title__bar'></span>
            </div>
            <div className='content recipes__list__right__group__content recipes__list__right__group__content--recipes'>
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
          </div>
        </section>
      </section>
    </main>
  );
};

export default Recipes;
