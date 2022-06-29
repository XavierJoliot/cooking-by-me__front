// import utils
import PropTypes from 'prop-types';
import './styles.scss';


const ExplicationStep = ({ imagePath, title, description }) => (
  <article className='about__explication__article'>
    <div className='about__explication__article__image'>
      <img className='about__explication__article__image__item' src={imagePath} alt='Cooking by me étape' />
    </div>
    <div className='about__explication__article__description'>
      <h3 className='about__explication__article__description__title'>{title}</h3>
      <p className='about__explication__article__description__text'>{description}</p>
    </div>
  </article>  
);

ExplicationStep.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ExplicationStep;
