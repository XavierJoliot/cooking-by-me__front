// import utils
import './styles.scss';
import PropTypes from 'prop-types';

const InternPageHeadSection = ({ imagePath, title }) => (
  <section className='head'>
    <img src={imagePath} className='head__image' alt='Cooking by me image entête' />
    <h1 className='head__title'>{title}</h1>
  </section>  
);

InternPageHeadSection.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default InternPageHeadSection;
