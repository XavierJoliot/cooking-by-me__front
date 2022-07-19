// import utils
import './styles.scss';

// import image
import loader1 from '../../assets/images/loader1.png';
import loader2 from '../../assets/images/loader2.png';

const Loader = () => (
  <div className='loader'>
    <div className='loader__item'>
      <img className='loader__item__hero' src={loader1} alt='test' />
      <img className='loader__item__cookie' src={loader2} alt='test' />
    </div>
  </div>
);

export default Loader;
