// import utils
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './styles.scss';

const Input = ({ name, type, value, label, placeholder, action, isRequired }) => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(action(name, e.target.value));
  };

  const handleChangeFile = (e) => {
    console.log(e.target.files[0])
    dispatch(action(name, e.target.files[0]));
  }

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
      required={isRequired}
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
      required={isRequired}
    />;
  }

  if(type === 'file') {
    input = <input
      className='group__input'
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={handleChangeFile} 
      required={isRequired}
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
  action: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
}

export default Input;
