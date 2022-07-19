// == Import
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import styles
import './styles.scss';

// import components
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import AboutUs from '../AboutUs';
import Contact from '../Contact';
import Legals from '../Legals';
import Recipes from '../Recipes';
import Recipe from '../Recipe';
import AddRecipeModal from '../AddRecipeModal';
import AddItemModal from '../../shared/addItemModal';
import Loader from '../../shared/loader';
import { useAuth0 } from '@auth0/auth0-react';
import Group from '../Group';
import AddRecipeButton from '../../shared/AddRecipeButton';

// == Composant
const App = () => { 
  // utils
  const location = useLocation();

  // scroll to top on page change
  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    },
    [location]
  );

  const { isOpen } = useSelector((state) => state.addRecipeModal);
  const { isItemModalOpen } = useSelector((state) => state.addItemModal);

  const { isLoading } = useAuth0();

  // change header bar color
  // function runOnScroll() {
  //   if (window.scrollY > 100) {
  //     document.querySelector('.header').style.backgroundColor = "red";
  //   } else {
  //     document.querySelector('.header').style.backgroundColor = "#fff";
  //   }
  // };

  // window.addEventListener("scroll", () => {runOnScroll()});

  return (
    <div className="app">
      {isLoading && <Loader />}
      {isOpen && <AddRecipeModal />}
      {isItemModalOpen && <AddItemModal />}
      <AddRecipeButton />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos-de-nous" element={<AboutUs />} />
        <Route path="/mes-recettes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Legals />} />
        <Route path="/recette/:id" element={<Recipe />} />
        <Route path="/groupe/:id" element={<Group />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;