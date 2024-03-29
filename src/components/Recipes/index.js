// import utils
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { setIsModalOpen } from '../../actions/recipes';
import { setUserToken } from '../../actions/general';
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
    dispatch(getDataFromApi('recette/cooking-by-me', 'cookingRecipesList'));
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
        Chez <strong>Cooking By Me</strong> nous sommes convaincus que la <strong>cuisine</strong> rend nos vies meilleures. Une journée difficile, une promotion à célébrer, une soirée entre amis… à chaque événement, sa <strong>recette</strong> ! 
        <br />
        <br />
        Tu peux trouver ton bonheur à chaque pixel ! Ici tu trouveras tout ce dont tu as besoin, des <strong>recettes toutes faites</strong> pour des <strong>repas sans se poser de questions</strong>, tes propres recettes pour pouvoir briller en société ou tout simplement te régaler quand tu le désir et pour finir des <strong>groupes</strong>, dans lesquelles tu peux <strong>ranger, trier tes recettes</strong> afin de te <strong>simplifier</strong> la vie.
        <br />
        <br />
        Et puis, si tu as une idée précise en tête, que tu veux retrouver un groupe, une recette de <strong>Cookers</strong> ou encore une de tes recettes, la <strong>barre de filtres</strong> sur le coté t'aideras à trouver tout ce dont tu as besoin.
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
                <Link to='#' className='recipes__list__right__group__content__empty' onClick={() => loginWithRedirect()}> 
                  <p className='recipes__list__right__group__content__empty__text'>
                  <span className='recipes__list__right__group__content__empty__text__bold'>N'attendez plus !</span>
                  Créer vous un compte pour pouvoir ajouter un groupe de recette et débuter votre livre.
                  <span className='recipes__list__right__group__content__empty__text__bold'>Cliquez moi !</span>
                  </p>
                </Link>
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
                <Link to='#' className='recipes__list__right__group__content__empty' onClick={handleAddRecipeClick}> 
                  <p className='recipes__list__right__group__content__empty__text'>
                  <span className='recipes__list__right__group__content__empty__text__bold'>N'attendez plus !</span>
                  Ajouter une recette pour la voir s'afficher ici.
                  <span className='recipes__list__right__group__content__empty__text__bold'>Cliquez moi !</span>
                  </p>
                </Link>
              }
              {
                !isAuthenticated &&
                <Link to='#' className='recipes__list__right__group__content__empty' onClick={() => loginWithRedirect()}> 
                  <p className='recipes__list__right__group__content__empty__text'>
                  <span className='recipes__list__right__group__content__empty__text__bold'>N'attendez plus !</span>
                  Créer vous un compte pour pouvoir ajouter une recette et débuter votre livre.
                  <span className='recipes__list__right__group__content__empty__text__bold'>Cliquez moi !</span>
                  </p>
                </Link>
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
                cookingRecipes.length > 0 &&
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
          </div>
        </section>
      </section>
    </main>
  );
};

export default Recipes;
