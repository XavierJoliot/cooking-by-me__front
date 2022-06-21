// import utils
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ type, text, className }) => {
  className += " button";
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default Button;
