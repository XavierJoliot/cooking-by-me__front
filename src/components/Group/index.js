// import utils
import './styles.scss';
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setUserToken } from '../../actions/recipes';
import { deleteDataFromAPI, getDataFromApi } from '../../actions/api';
import { useEffect } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

// import components
import RecipesCard from '../../shared/recipesCard';
import Loader from '../../shared/loader';

// import image
import EmptyImage from '../../assets/images/empty-image.jpg';

const Group = () => { 
  const { id } = useParams();

  const { imagePath, title, group_Recipe, description } = useSelector((state) => state.groups.currentGroup);
  const { redirectTo } = useSelector((state) => state.general);

  const imageSrc = imagePath ? imagePath : EmptyImage;

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async() => {
    const token = await getAccessTokenSilently();

    dispatch(setUserToken(token));

    dispatch(getDataFromApi(`groupe/${id}`, 'getGroup'));
  }

  useEffect(() => {
    if(isAuthenticated) {
      getData();
    }
  },
  [isAuthenticated]);


  const failedImageLoad = ({currentTarget}) => {
    currentTarget.onError = null;
    currentTarget.src = EmptyImage;
  }

  const handleGroupMenuClicked = () => {
    const groupMenu = document.getElementById('groupMenu');
    groupMenu.classList.toggle("group-page__head__interaction__menu--display");
  }

  const handleGroupEditLinkClicked = () => {
    dispatch(getDataFromApi(`groupe/${id}`, 'editGroup'));
  }

  const handleGroupDeleteLinkClicked = () => {
    if(confirm(`Tu es sûr de vouloir supprimer ce groupe de pandor ?`)) {
      dispatch(deleteDataFromAPI(`groupe/${id}`));
    }
  }

  const handleBackActionCkicked = () => {
    navigate(-1);
  }

  // redirect if data not found
  if(redirectTo) {
    return <Navigate to={redirectTo} replace={true} />
  }
  return (
    <main className='group-page'>
      <section className='group-page__head'>
        <div className='group-page__head__interaction' onClick={handleGroupMenuClicked}>
          <i className="fa-solid fa-ellipsis-vertical group-page__head__interaction__icon"></i>
          <div id="groupMenu" className='group-page__head__interaction__menu'>
            <ul className='group-page__head__interaction__menu__list'>
              <Link to='#' className='group-page__head__interaction__menu__list__link' onClick={handleGroupEditLinkClicked}>
                <li className='group-page__head__interaction__menu__list__link__item'>
                  Modifier
                </li>
              </Link>
              <Link to='#' className='group-page__head__interaction__menu__list__link' onClick={handleGroupDeleteLinkClicked}>
                <li className='group-page__head__interaction__menu__list__link__item'>
                  Supprimer
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='group-page__head__back' onClick={handleBackActionCkicked} title='Retour'>
          <div className='group-page__head__back__icon'>
            <i className='fa-solid fa-angle-left group-page__head__back__icon__item'></i>
          </div>
        </div>
        <div className='group-page__head__image'>
          <img className='group-page__head__image__item' src={imageSrc} onError={failedImageLoad} alt={title} />
        </div>
        <div className='group-page__head__presentation'>
          <h1 className='group-page__head__presentation__title'>{title}</h1>
          <h2 className='group-page__head__presentation__subtitle'>Nombre de recettes dans ce groupe : <span className='group-page__head__presentation__subtitle__span'>{group_Recipe.length}</span></h2>
          <h2 className='group-page__head__presentation__subtitle'>Description du groupe :</h2>
          <p className='group-page__head__presentation__text'>{description}</p>
        </div>
      </section>
      <section className='group-page__content'>
        <h2 className='group-page__content__title'>Recettes du groupe :</h2>
        <div className='group-page__content__recipe'>
          {group_Recipe &&
            group_Recipe.map(
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
          <Link to='#'>
            <RecipesCard isEmpty={true} title='Ajouter une recette dans ce groupe'/>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default withAuthenticationRequired(Group, {
  onRedirecting: () => <Loader />,
});
