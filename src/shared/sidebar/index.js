// import utils
import './styles.scss';

// import components
import Button from '../../shared/button';
import Input from '../../shared/input';

const Sidebar = () => (
  <aside className='sidebar'>
    <div className='sidebar__add'>
      <Button type='button' text='+ Ajouter une recette' className='fill full' />
    </div>
    <div className='sidebar__search'>
      <h2 className='sidebar__search__title'>Rechercher :</h2>
      <Input type='search' name='searchbar' value='' placeholder='Saisissez une lettre...' />
    </div>
    <div className='sidebar__navigation'>
      <h2 className='sidebar__navigation__title'>Navigation :</h2>
      <Button type='button' text='Groupes' className='stroke filter' />
      <Button type='button' text='Mes recettes' className='stroke filter' />
      <Button type='button' text='Recettes Cooking by me' className='stroke filter' />
    </div>
  </aside>
);

export default Sidebar;
