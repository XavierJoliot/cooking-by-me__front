// import style
import './styles.scss';

// import components
import InternPageHeadSection from '../../shared/internPageHeadSection';

// import images
import HeadImage from '../../assets/images/recipes.jpg';
import Sidebar from '../../shared/sidebar';
import GroupCard from '../../shared/groupCard';

const Recipes = () => { 
  const handleClick = (e) => {
    if(e.target.classList.contains('fa-caret-down')){
      e.target.classList.replace('fa-caret-down', 'fa-caret-right');
    } else {
      e.target.classList.replace('fa-caret-right', 'fa-caret-down');
    }
  }
  return(
    <main className='recipes'>
      <InternPageHeadSection imagePath={HeadImage} title='Mes recettes' />
      <section className='recipes__description'>
        <p className='recipes__description__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim mauris, dictum eget sapien vitae, auctor vulputate mi. Maecenas finibus elit arcu, vel sodales massa vulputate quis. Praesent iaculis risus vitae feugiat laoreet. Vestibulum ut ligula nec mi rhoncus sodales.
        </p>
      </section>
      <section className='recipes__list'>
        <section className='recipes__list__left'>
          <Sidebar />
        </section>
        <section className='recipes__list__right'>
          <div className='recipes__list__right__group'>
            <div className='recipes__list__right__group__title'>
              <h2 className='recipes__list__right__group__title__text'>Groupes</h2>
              <i className="fa-solid fa-caret-down recipes__list__right__group__title__icon" onClick={handleClick}></i>
              <span className='recipes__list__right__group__title__bar'></span>
            </div>
            <div className='content recipes__list__right__group__content'>
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
              <GroupCard title='Titre' imagePath='' />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Recipes;
