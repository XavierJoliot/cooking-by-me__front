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
import AddItemModal from '../../shared/AddItemModal';

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
      {isOpen && <AddRecipeModal />}
      {isItemModalOpen && <AddItemModal />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos-de-nous" element={<AboutUs />} />
        <Route path="/mes-recettes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Legals />} />
        <Route path="/recette/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;