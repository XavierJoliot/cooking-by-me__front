// import utils
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { setIsModalOpen, setUserToken } from '../../actions/recipes';
import { setIsItemModalOpen } from '../../actions/modal';
import { useEffect } from 'react';
import { getDataFromApi } from '../../actions/api';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';
import RecipesCard from '../../shared/recipesCard';
import Sidebar from '../../shared/sidebar';
import GroupCard from '../../shared/groupCard';

// import images
import HeadImage from '../../assets/images/recipes.jpg';

const Recipes = () => { 
  const dispatch = useDispatch();

  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } = useAuth0();

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

  const getData = async() => {
    const token = await getAccessTokenSilently();

    dispatch(setUserToken(token));

    dispatch(getDataFromApi('recette', 'myRecipesList'));
    dispatch(getDataFromApi('groupe', 'groupsList'));
  }

  useEffect(() => {
    if(isAuthenticated) {
      getData();
    }
  },
  [isAuthenticated]);

  const handleAddRecipeClick = () => {
    dispatch(setIsModalOpen());
  }

  const handleAddGroupClicked = () => {
    dispatch(setIsItemModalOpen('groupe'))
  }

  const { myRecipes, cookingRecipes } = useSelector((state) => state.recipes);
  const { groupList } = useSelector((state) => state.groups);


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
                    <Link key={item.id} to={'/groupe/' + item.id}>
                      <GroupCard isGroup={true} title={item.title} imagePath={item.imagePath} />
                    </Link>
                )
                
              }
              {
                isAuthenticated &&
                <Link to='#' onClick={handleAddGroupClicked}>
                  <GroupCard isGroup={false} />
                </Link>
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
                    <RecipesCard
                      isEditable={true}
                      recipeId={item.id}
                      key={item.title}
                      imagePath={item.imagePath} 
                      duration={item.duration}
                      title={item.title}
                      quantity={item.quantity}
                    />
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
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Recipes;
