// import utils
import './styles.scss';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// import components
import RecipesCard from '../../shared/recipesCard';

const Group = () => { 
  const { id } = useParams();

  const { imagePath, title, recipesList, description } = useSelector((state) => state.recipes.currentGroup);

  return (
    <main className='group-page'>
      <section className='group-page__head'>
        <div className='group-page__head__image'>
          <img className='group-page__head__image__item' src={imagePath} alt={title} />
        </div>
        <div className='group-page__head__presentation'>
          <h1 className='group-page__head__presentation__title'>{title}</h1>
          <h2 className='group-page__head__presentation__subtitle'>Nombre de recettes : <span className='group-page__head__presentation__subtitle__span'>{recipesList.length}</span></h2>
          <h2 className='group-page__head__presentation__subtitle'>Description :</h2>
          <p className='group-page__head__presentation__text'>{description}</p>
        </div>
      </section>
      <section className='group-page__content'>
        <h2 className='group-page__content__title'>Liste de recettes :</h2>
        <div className='group-page__content__recipe'>
          {
            recipesList.map(
              (item) => (
                <Link key={item.id} to={'/recette/' + item.id} reloadDocument>
                  <RecipesCard
                    key={item.title}
                    imagePath={item.imagePath} 
                    time={item.time}
                    title={item.title}
                    quantity={item.quantity}
                  />
                </Link>
              )
            )
          }
        </div>
      </section>
    </main>
  );
};

export default Group;
