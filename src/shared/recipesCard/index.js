// import utils
import './styles.scss';
import PropTypes from 'prop-types';

const RecipesCard = ({ imagePath, time, title, quantity }) => (
  <article className='card'>
    <img className='card__image' src={imagePath} alt='Rectte cooking by me' />
    <div className='card__description'>
      <h3 className='card__description__title'>{title}</h3>
      <div className='card__description__details'>
        <div className='card__description__details__item'>
          <i className="fa-regular fa-clock card__description__details__item__icon"></i>
          <p className='card__description__details__item__text'>{time} min.</p>
        </div>
        <div className='card__description__details__item'>
          <i className="fa-regular fa-user card__description__details__item__icon"></i>
          <p className='card__description__details__item__text'>{quantity} pers.</p>
        </div>
      </div>
    </div>
  </article>
);

RecipesCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default RecipesCard;
