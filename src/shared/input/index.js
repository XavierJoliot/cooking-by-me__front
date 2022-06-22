// import utils
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({ name, type, value, label, placeholder }) => {

  const handleChange = (e) => {
    console.log(e.target.value);
  };

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
      placeholder={placeholder}
      onChange={handleChange} 
    />;
  }
  return (
    <div className='group'>
      <label className='group__label' htmlFor={name}>{label}</label>
      {input}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Input;
