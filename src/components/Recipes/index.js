// import utils
import './styles.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';
import RecipesCard from '../../shared/recipesCard';
import Sidebar from '../../shared/sidebar';
import GroupCard from '../../shared/groupCard';
import Button from '../../shared/button';

// import images
import HeadImage from '../../assets/images/recipes.jpg';

const Recipes = () => { 
  const { isAuthenticated } = useAuth0();

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

  const { myRecipes, cookingRecipes } = useSelector((state) => state.recipes);
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
            <div className='recipes__list__right__group__content'>
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
            <div className='recipes__list__right__group__content recipes__list__right__group__content--recipes'>
              {
                isAuthenticated &&
                myRecipes.length > 0 &&
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
              {
                isAuthenticated &&
                myRecipes.length === 0 &&
                <section className='recipes__list__right__group__content__empty'>
                  <p className='recipes__list__right__group__content__empty__text'>N'attendez plus ! Ajouter une recette pour la voir s'afficher ici.</p>
                  <a className='recipes__list__right__group__content__empty__button' href="#"> 
                    {/* <Button type='button' text='Connexion / inscription' className='fill' /> */}
                  </a>
                </section>
              }
              {
                !isAuthenticated &&
                <section className='recipes__list__right__group__content__empty'>
                  <p className='recipes__list__right__group__content__empty__text'>N'attendez plus ! Créer vous un compte pour pouvoir ajouter une recette et débuter votre livre.</p>
                  <a className='recipes__list__right__group__content__empty__button' onClick={() => loginWithRedirect()}> 
                    <Button type='button' text='Connexion / Inscritption' className='fill' />
                  </a>
                </section>
              }
            </div>
          </div>
          <div className='recipes__list__right__group'>
            <div id='cooking' className='recipes__list__right__group__title'>
              <h2 className='recipes__list__right__group__title__text'>Recettes Cooking by me</h2>
              <i className="fa-solid fa-caret-down recipes__list__right__group__title__icon" onClick={handleClick}></i>
              <span className='recipes__list__right__group__title__bar'></span>
            </div>
            <div className='recipes__list__right__group__content recipes__list__right__group__content--recipes'>
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
          </div>
        </section>
      </section>
    </main>
  );
};

export default Recipes;
