// import utils
import './styles.scss';
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteDataFromAPI, getDataFromApi } from '../../actions/api';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { setUserToken } from '../../actions/general';
import { setIsItemModalOpen, setRecipeIdItemModal } from '../../actions/modal';

// import component
import Loader from '../../shared/loader';

// import images
import EmptyImage from '../../assets/images/empty-image.jpg';
import GroupCard from '../../shared/groupCard';

const Recipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const getData = async() => {
    const token = await getAccessTokenSilently();

    dispatch(setUserToken(token));

    dispatch(getDataFromApi(`recette/${id}`, 'getRecipe'));
  }

  useEffect(() => {
    if(isAuthenticated) {
      getData();
    }
  },
  [isAuthenticated]);

  const path = process.env.REACT_APP_API_PATH;

  const currentRecipe = useSelector((state) => state.recipes.currentRecipe);

  const imageSrc = currentRecipe.imagePath ? path + currentRecipe.imagePath : EmptyImage;

  const failedImageLoad = ({currentTarget}) => {
    currentTarget.onError = null;
    currentTarget.src = EmptyImage;
  }
  
  // voir pour amélioration
  const handleLinkClick = (e) => {
    const currentElmt = e.target;
    if(currentElmt.innerHTML === 'Ingrédients') {
      currentElmt.classList.add('recipe__content__menu__link--active');
      document.getElementById('ingredients').classList.remove('recipe__content__ingredients--hidden');
      document.getElementById('stepButton').classList.remove('recipe__content__menu__link--active');
      document.getElementById('steps').classList.add('recipe__content__steps--hidden');
    }
    
    if (currentElmt.innerHTML === 'Étapes') {
      currentElmt.classList.add('recipe__content__menu__link--active');
      document.getElementById('steps').classList.remove('recipe__content__steps--hidden');
      document.getElementById('ingredientsButton').classList.remove('recipe__content__menu__link--active');
      document.getElementById('ingredients').classList.add('recipe__content__ingredients--hidden');
    }
  }

  const handleAddItemClicked = (e) => {
    if(e.target.id === 'addIngredient') {
      dispatch(setRecipeIdItemModal(id, 'ingredient'));
      dispatch(setIsItemModalOpen('ingredient', 'add'));
    };
    if(e.target.id === 'addStep') {
      dispatch(setRecipeIdItemModal(id, 'step'));
      dispatch(setIsItemModalOpen('étape', 'add'));
    };
  }

  const handleIngredientDeleteClicked = (id) => {
    if(confirm('Tu es sûr de vouoir supprimer cet ingrédient magique ?')) {
      dispatch(deleteDataFromAPI(`ingredient/${id}`));
    }
  }

  const handleIngredientEditClicked = (id) => {
    dispatch(getDataFromApi(`ingredient/${id}`, 'editIngredient'))
  }

  const handleStepDeleteClicked = (id) => {
    if(confirm('Tu es sûr de vouoir supprimer cette étape miraculeuse ?')) {
      dispatch(deleteDataFromAPI(`etape/${id}`));
    }
  }

  const handleStepEditClicked = (id) => {
    dispatch(getDataFromApi(`etape/${id}`, 'editStep'))
  }

  const handleRecipeMenuClicked = () => {
    const recipeMenu = document.getElementById('recipeMenu');
    recipeMenu.classList.toggle("recipe__presentation__interaction__menu--display");
  }

  const handleRecipeEditLinkClicked = () => {
    dispatch(getDataFromApi(`recette/${currentRecipe.id}`, 'editMyRecipe'));
  }

  const handleRecipeDeleteLinkClicked = () => {
    if(confirm(`Tu es sûr de vouloir supprimer ce chef d'oeuvre ?`)) {
      dispatch(deleteDataFromAPI(`recette/${currentRecipe.id}`, 'fromRecipe'));
    }
  }

  const handleAddGroupClicked = () => {
    dispatch(setIsItemModalOpen('groupe'))
  }

  const handleBackActionCkicked = () => {
    navigate(-1);
  }

  // redirect if data not found
  const { redirectTo } = useSelector((state) => state.general);

  if(redirectTo) {
    return <Navigate to={redirectTo} replace={true} />
  }

  return (
    <main className='recipe'>
      <section className='recipe__presentation'>
        <div className='recipe__presentation__interaction' onClick={handleRecipeMenuClicked} title='Menu'>
          <i className="fa-solid fa-ellipsis-vertical recipe__presentation__interaction__icon"></i>
          <div id="recipeMenu" className='recipe__presentation__interaction__menu'>
            <ul className='recipe__presentation__interaction__menu__list'>
              <Link to='#' className='recipe__presentation__interaction__menu__list__link' onClick={handleRecipeEditLinkClicked}>
                <li className='recipe__presentation__interaction__menu__list__link__item'>
                  Modifier
                </li>
              </Link>
              <Link to='#' className='recipe__presentation__interaction__menu__list__link' onClick={handleRecipeDeleteLinkClicked}>
                <li className='recipe__presentation__interaction__menu__list__link__item'>
                  Supprimer
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='recipe__presentation__back' onClick={handleBackActionCkicked} title='Retour'>
          <div className='recipe__presentation__back__icon'>
            <i className='fa-solid fa-angle-left recipe__presentation__back__icon__item'></i>
          </div>
        </div>
        <img className='recipe__presentation__image' onError={failedImageLoad} src={imageSrc} alt='Presentation recette utilisateur Cooking by me' />
        <h1 className='recipe__presentation__title'>{currentRecipe.title}</h1>
      </section>
      <section className='recipe__description'>
        <div className='recipe__description__info'>
          <i className="fa-regular fa-clock recipe__description__info__icon"></i>
          <h2 className='recipe__description__info__title'>{currentRecipe.duration} minutes</h2>
        </div>
        <div className='recipe__description__info'>
        <i className="fa-regular fa-user recipe__description__info__icon"></i>
          <h2 className='recipe__description__info__title'>{currentRecipe.quantity} personnes</h2>
        </div>
      </section>
      <section className='recipe__group'>
        <h1 className='recipe__group__title'>Groupes ayant cette recette :</h1>
        <div className='recipe__group__list'>
          {
            currentRecipe.groupsList &&
            currentRecipe.groupsList.map(
              (group) =>(
                <Link key={group.id} to={'/groupe/' + group.id}>
                  <GroupCard isGroup={true} title={group.title} imagePath={group.imagePath} />
                </Link>
              )
            )
          }
          <Link to='#' onClick={handleAddGroupClicked}>
            <GroupCard isGroup={false} title='Ajouter dans un groupe' />
          </Link>
        </div>
      </section>
      <section className='recipe__content'>
        <div className='recipe__content__menu'>
          <a id='ingredientsButton' className='recipe__content__menu__link recipe__content__menu__link--active' onClick={handleLinkClick}>
            Ingrédients
          </a>
          <a id='stepButton' className='recipe__content__menu__link' onClick={handleLinkClick}>
            Étapes
          </a>
        </div>
        <article id='ingredients' className='recipe__content__ingredients'>
          <Link id='addIngredient' className='recipe__content__ingredients__add' to='#' onClick={handleAddItemClicked}>
            <i className="fa-solid fa-plus recipe__content__ingredients__add__icon"></i>
            Ajouter un ingrédient
          </Link>
          <ul className='recipe__content__ingredients__list'>
            {currentRecipe.ingredientsList &&
              currentRecipe.ingredientsList.map(
                (item) => (
                  <li key={item.id} className='recipe__content__ingredients__list__item'>
                    - {item.name} - {item.quantity}{item.unit}
                    <div className='recipe__content__ingredients__list__item__icon'> 
                      <i onClick={() => handleIngredientEditClicked(item.id)}title='Modifier' className="fa-solid fa-pen-to-square recipe__content__ingredients__list__item__icon__item"></i>
                      <i onClick={() => handleIngredientDeleteClicked(item.id)} title='Supprimer' className="fa-solid fa-xmark recipe__content__ingredients__list__item__icon__item recipe__content__ingredients__list__item__icon__item--red"></i>
                    </div>
                  </li>
                )
              )
            }
          </ul>
        </article>
        <article id='steps' className='recipe__content__steps recipe__content__steps--hidden'>
          <Link id='addStep' className='recipe__content__steps__add' to='#' onClick={handleAddItemClicked}>
            <i className="fa-solid fa-plus recipe__content__steps__add__icon"></i>
            Ajouter une étape
          </Link>
          {currentRecipe.stepsList &&
            currentRecipe.stepsList.map(
              (item) => (
                <div key={item.id} className='recipe__content__steps__item'>
                  <div className='recipe__content__steps__item__texts'>
                    <h3 className='recipe__content__steps__item__texts__title'>
                    Étape {item.order} :
                    </h3>
                    <p className='recipe__content__steps__item__texts__text'>
                      {item.description}
                    </p>
                  </div>
                  <div className='recipe__content__steps__item__icon'>
                      <i onClick={() => handleStepEditClicked(item.id)} title='Modifier' className="fa-solid fa-pen-to-square recipe__content__steps__item__icon__item"></i>
                      <i onClick={() => handleStepDeleteClicked(item.id)} title='Supprimer' className="fa-solid fa-xmark recipe__content__steps__item__icon__item recipe__content__steps__item__icon__item--red"></i>
                  </div>
                </div>
              )
            )
          }
        </article>
      </section>
    </main>
  );
};

export default withAuthenticationRequired(Recipe, {
  onRedirecting: () => <Loader />,
});
