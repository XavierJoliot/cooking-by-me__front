// import utils
import './styles.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { setIsModalOpen } from '../../actions/recipes';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';
import RecipesCard from '../../shared/recipesCard';
import Sidebar from '../../shared/sidebar';
import GroupCard from '../../shared/groupCard';

// import images
import HeadImage from '../../assets/images/recipes.jpg';

const Recipes = () => { 
  const dispatch = useDispatch();

  const { isAuthenticated, loginWithRedirect } = useAuth0();

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

  const handleAddRecipeClick = () => {
    dispatch(setIsModalOpen());
  }

  const { myRecipes, cookingRecipes, groupList } = useSelector((state) => state.recipes);

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
              {
                isAuthenticated &&
                groupList.length > 0 &&
                groupList.map(
                  (item) =>
                    <Link key={item.id} to={'/groupe/' + item.id} reloadDocument>
                      <GroupCard title={item.title} imagePath={item.imagePath} />
                    </Link>
                )
              }
              {
                isAuthenticated &&
                groupList.length === 0 &&
                <a className='recipes__list__right__group__content__empty' onClick={handleAddRecipeClick}> 
                  <p className='recipes__list__right__group__content__empty__text'>
                  <span className='recipes__list__right__group__content__empty__text__bold'>N'attendez plus !</span>
                  Ajouter un groupe de recette pour le voir s'afficher ici.
                  <span className='recipes__list__right__group__content__empty__text__bold'>Cliquez moi !</span>
                  </p>
                </a>
              }
              {
                !isAuthenticated &&
                <a className='recipes__list__right__group__content__empty' onClick={() => loginWithRedirect()}> 
                  <p className='recipes__list__right__group__content__empty__text'>
                  <span className='recipes__list__right__group__content__empty__text__bold'>N'attendez plus !</span>
                  Créer vous un compte pour pouvoir ajouter un groupe de recette et débuter votre livre.
                  <span className='recipes__list__right__group__content__empty__text__bold'>Cliquez moi !</span>
                  </p>
                </a>
              }
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
                        duration={item.duration}
                        title={item.title}
                        quantity={item.quantity}
                      />
                    </Link>
                )
              }
              {
                isAuthenticated &&
                myRecipes.length === 0 &&
                <a className='recipes__list__right__group__content__empty' onClick={handleAddRecipeClick}> 
                  <p className='recipes__list__right__group__content__empty__text'>
                  <span className='recipes__list__right__group__content__empty__text__bold'>N'attendez plus !</span>
                  Ajouter une recette pour la voir s'afficher ici.
                  <span className='recipes__list__right__group__content__empty__text__bold'>Cliquez moi !</span>
                  </p>
                </a>
              }
              {
                !isAuthenticated &&
                <a className='recipes__list__right__group__content__empty' onClick={() => loginWithRedirect()}> 
                  <p className='recipes__list__right__group__content__empty__text'>
                  <span className='recipes__list__right__group__content__empty__text__bold'>N'attendez plus !</span>
                  Créer vous un compte pour pouvoir ajouter une recette et débuter votre livre.
                  <span className='recipes__list__right__group__content__empty__text__bold'>Cliquez moi !</span>
                  </p>
                </a>
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
                        duration={item.duration}
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
