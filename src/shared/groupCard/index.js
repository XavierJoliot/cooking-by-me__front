// import utils
import './styles.scss';
import PropTypes from 'prop-types';

const GroupCard = ({ title, imagePath }) => (
  <article className='group-card' style={{'backgroundImage': imagePath}}>
    <h3 className='group-card__title'>{title}</h3>
  </article>
);

GroupCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired
}

export default GroupCard;
