// import utils
import './styles.scss';
import PropTypes from 'prop-types';

// import image
import EmptyImage from '../../assets/images/empty-image.jpg';

const GroupCard = ({ isGroup, title, imagePath }) => { 
  
  const path = process.env.REACT_APP_API_PATH;
  
  const imageSrc = imagePath ? path + imagePath : EmptyImage;
  
  if(!isGroup) {
    return (
      <article className='group-card group-card--add'>
        <div className='group-card__add'>
          <i className="fa-solid fa-plus group-card__add__icon"></i>
          {title}
        </div>
      </article>
    );
  }
  
  return (
    <article className='group-card' style={{backgroundImage: "url(" + imageSrc + ")"}}>
      <h3 className='group-card__title'>{title}</h3>
    </article>
  );
};

GroupCard.propTypes = {
  isGroup: PropTypes.bool.isRequired,
  title: PropTypes.string,
  imagePath: PropTypes.string
}

export default GroupCard;
