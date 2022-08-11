// import utils
import './styles.scss';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../../actions/api';
import { setUserToken } from '../../actions/general';
import { Link } from 'react-router-dom';
import { setIsModalOpen } from '../../actions/recipes';
import { setIsItemModalOpen } from '../../actions/modal';

// import components
import Loader from '../../shared/loader';
import InternPageHeadSection from '../../shared/internPageHeadSection';
import RecipesCard from '../../shared/recipesCard';
import GroupCard from '../../shared/groupCard';

// import image
import HeadImage from '../../assets/images/dashboard-head.jpg';

const Dashboard = () => {
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();

  const dispatch = useDispatch();

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

  const { myRecipes } = useSelector((state) => state.recipes);
  const { groupList } = useSelector((state) => state.groups);

  const handleAddRecipeClick = () => {
    dispatch(setIsModalOpen());
  }

  const handleAddGroupClicked = () => {
    dispatch(setIsItemModalOpen('groupe'))
  }

  return (
    <main className='dashboard'>
      <InternPageHeadSection imagePath={HeadImage} title='Mon espace' />
      <section className='dashboard__body'>
        <ul className='dashboard__body__menu'>
          <Link to='/mon-espace'>
            <li className='dashboard__body__menu__icon'>
              <i className="ri-dashboard-2-line dashboard__body__menu__icon__item" title='Tableau de bord'></i>
              <span className='dashboard__body__menu__icon__label'>Tableau de bord</span>
            </li>
          </Link>
          <Link to='/mes-recettes'>
            <li className='dashboard__body__menu__icon'>
              <i className="ri-book-2-line dashboard__body__menu__icon__item" title='Mes recettes'></i>
              <span className='dashboard__body__menu__icon__label'>Mes recettes</span>
            </li>
          </Link>
          <li className='dashboard__body__menu__icon' onClick={() => logout({ returnTo: window.location.origin })}>
            <i className="ri-logout-box-r-line dashboard__body__menu__icon__item dashboard__body__menu__icon__item--red" title='Se déconnecter'></i>
            <span className='dashboard__body__menu__icon__label dashboard__body__menu__icon__label--red'>Déconnexion</span>
          </li>
        </ul>
        <section className='dashboard__body__content'>
          <article className='dashboard__body__content__article dashboard__body__content__article--user'>
            <h2 className='dashboard__body__content__article__title'>Mon profil :</h2>
              <div className='dashboard__body__content__article__data__user'>
                <img className='dashboard__body__content__article__data__user__picture' src={user.picture} alt={`Photo de profile de ${user.name}`} />
                <div className='dashboard__body__content__article__data__user__content'>
                  <h3 className='dashboard__body__content__article__data__user__content__text'>
                    {user.name}
                  </h3>
                  <h3 className='dashboard__body__content__article__data__user__content__text'>
                    {user.email}
                  </h3>
                </div>
              </div>
            <div className='dashboard__body__content__article__stats'>
              <h3 className='dashboard__body__content__article__stats__title'>Statistiques :</h3>
              <div className='dashboard__body__content__article__stats__item'>
                <h4 className='dashboard__body__content__article__stats__item__title'>
                  Nombre de recettes :
                </h4>
                <p className='dashboard__body__content__article__stats__item__data'>
                  {
                    myRecipes.length
                  }
                </p>
              </div>
              <div className='dashboard__body__content__article__stats__item'>
                <h4 className='dashboard__body__content__article__stats__item__title'>
                  Nombre de groupes :
                </h4>
                <p className='dashboard__body__content__article__stats__item__data'>
                  {
                    groupList.length
                  }
                </p>
              </div>
            </div>
          </article>
          <article className='dashboard__body__content__article dashboard__body__content__article--groups'>
            <h2 className='dashboard__body__content__article__title'>Mes groupes :</h2>
            <div className='dashboard__body__content__article__items'>
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
            </div>
          </article>
          <article className='dashboard__body__content__article'>
            <h2 className='dashboard__body__content__article__title'>Mes recettes :</h2>
            <div className='dashboard__body__content__article__items'>
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
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Loader />,
});;
