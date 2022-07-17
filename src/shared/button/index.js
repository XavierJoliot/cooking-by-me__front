// import utils
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ type, text, className, handler }) => {
  className += " button";
  return (
    <button onClick={handler} className={className} type={type}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handler: PropTypes.func
};

export default Button;
