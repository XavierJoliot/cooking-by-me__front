// import utils
import './styles.scss';

// import images
import Fb from '../../assets/images/fb.png';
import Insta from '../../assets/images/insta.png';

const Social = () => (
  <section className='social'>
    <a className='social__link' target='_blank' href='#'>
      <img className='social__link__image' src={Fb} alt='Logo facebook Cooking by me' />
    </a>
    <a className='social__link' target='_blank' href='#'>
      <img className='social__link__image' src={Insta} alt='Logo facebook Cooking by me' />
    </a>
  </section>  
);

export default Social;
