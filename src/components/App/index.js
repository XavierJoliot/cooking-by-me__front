// == Import
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// import styles
import './styles.scss';

// import components
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import AboutUs from '../AboutUs';

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

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos-de-nous" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;