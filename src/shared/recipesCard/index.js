// import utils
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDataFromAPI, getDataFromApi } from '../../actions/api';

// import images
import EmptyImage from '../../assets/images/empty-image.jpg';

const RecipesCard = ({ isEmpty, isEditable, recipeId, imagePath, duration, title, quantity }) => { 
  const dispatch = useDispatch();
  
  const path = process.env.REACT_APP_API_PATH;

  const imageSrc = imagePath ? path + imagePath : EmptyImage;

  const handleRecipeMenuClicked = (e) => {
    const element = document.getElementById(`cardMenu${recipeId}`);
    element.classList.toggle("card__interaction__menu--display");
  }

  const handleRecipeEditLinkClicked = () => {
    dispatch(getDataFromApi(`recette/${recipeId}`, 'editMyRecipe'));
  }

  const handleRecipeDeleteLinkClicked = () => {
    if(confirm(`Tu es sûr de vouloir supprimer ce chef d'oeuvre ?`)) {
      dispatch(deleteDataFromAPI(`recette/${recipeId}`));
    }
  }

  const failedImageLoad = ({currentTarget}) => {
    currentTarget.onError = null;
    currentTarget.src = EmptyImage;
  }

  if(isEmpty) {
    return (
      <article className='card card--add'>
        <div className='card__add'>
          <i className="fa-solid fa-plus card__add__icon"></i>
          {title}
        </div>
      </article>
    )
  }
  return (
    <article className='card'>
      {
        isEditable &&
        <div className='card__interaction' onClick={handleRecipeMenuClicked}>
          <i className="fa-solid fa-ellipsis-vertical card__interaction__icon"></i>
          <div id={`cardMenu${recipeId}`} className='card__interaction__menu'>
            <ul className='card__interaction__menu__list'>
              <Link to='#' className='card__interaction__menu__list__link' onClick={handleRecipeEditLinkClicked}>
                <li className='card__interaction__menu__list__link__item'>
                  Modifier
                </li>
              </Link>
              <Link to='#' className='card__interaction__menu__list__link' onClick={handleRecipeDeleteLinkClicked}>
                <li className='card__interaction__menu__list__link__item'>
                  Supprimer
                </li>
              </Link>
            </ul>
          </div>
        </div>
      }
      
      <Link key={recipeId} to={'/recette/' + recipeId}>
        <img className='card__image' src={imageSrc} onError={failedImageLoad} alt='Rectte cooking by me' />
        <div className='card__description'>
          <h3 className='card__description__title'>{title}</h3>
          <div className='card__description__details'>
            <div className='card__description__details__item'>
              <i className="fa-regular fa-clock card__description__details__item__icon"></i>
              <p className='card__description__details__item__text'>{duration} min.</p>
            </div>
            <div className='card__description__details__item'>
              <i className="fa-regular fa-user card__description__details__item__icon"></i>
              <p className='card__description__details__item__text'>{quantity} pers.</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

RecipesCard.propTypes = {
  isEmpty: PropTypes.bool,
  isEditable: PropTypes.bool,
  recipeId: PropTypes.number,
  imagePath: PropTypes.string,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number
};

export default RecipesCard;
