// import utils
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../../actions/input';
import './styles.scss';

const Input = ({ name, type, value, label, placeholder }) => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setInputValue(name, e.target.value));
  };

  let labelVisibility = <label className='group__label' htmlFor={name}>{label}</label>;

  if(!label) {
    labelVisibility = null;
  }

  let input = <input
      className='group__input'
      type={type}
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange} 
    />;

  if(type === 'textarea') {
    input = <textarea
      className='group__input group__input--textarea'
      id={name}
      name={name}
      maxLength='200'
      value={value}
      placeholder={placeholder}
      onChange={handleChange} 
    />;
  }
  return (
    <div className='group'>
      {labelVisibility}
      {input}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input;
