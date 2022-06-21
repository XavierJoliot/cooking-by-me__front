// import utils
import './styles.scss';
import Avatar from '../../assets/images/defaultAvatar.png'

const UserMenu = () => (
  <div className='user-menu'>
    <div className='user-menu__avatar'>
      <img className='user-menu__avatar__image' src={Avatar} alt='Avatar utilisateur Cooking by me' />
    </div>
    {/* <i className='fa-solid fa-caret-down'></i> */}
  </div>
);

export default UserMenu;
