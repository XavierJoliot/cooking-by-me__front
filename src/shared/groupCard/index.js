// import utils
import './styles.scss';
import PropTypes from 'prop-types';

const GroupCard = ({ isGroup, title, imagePath }) => { 
  if(!isGroup) {
    return (
      <article className='group-card group-card--add'>
        <div className='group-card__add'>
          <i className="fa-solid fa-plus group-card__add__icon"></i>
          Ajouter un groupe.
        </div>
      </article>
    );
  }
  return (
    <article className='group-card' style={{backgroundImage: "url(" + imagePath + ")"}}>
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
