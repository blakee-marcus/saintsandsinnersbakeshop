import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CakeSlice } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Story from './pages/Story';
import Contact from './pages/Contact';

// New custom offering pages
import CustomCakes from './pages/CustomCakes';
import CustomCookies from './pages/CustomCookies';
import CustomCupcakes from './pages/CustomCupcakes';
import SpecialtyCakes from './pages/SpecialtyCakes';
import CookieCakes from './pages/CookieCakes';
import CakeBombs from './pages/CakeBombs';

import NavBar from './components/NavBar';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className='min-h-screen bg-saint text-sinner font-sans'>
          <Helmet>
            <title>Saints & Sinners Bake Shop | Long Beach</title>
            <meta
              name='description'
              content='Saints & Sinners Bake Shop in Long Beach crafts divine pastries and sinful sweets. Discover our heavenly menu and indulge your cravings.'
            />
          </Helmet>

          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/story' element={<Story />} />
            <Route path='/contact' element={<Contact />} />

            {/* Custom Offerings */}
            <Route path='/custom-cakes' element={<CustomCakes />} />
            <Route path='/custom-cookies' element={<CustomCookies />} />
            <Route path='/custom-cupcakes' element={<CustomCupcakes />} />
            <Route path='/specialty-cakes' element={<SpecialtyCakes />} />
            <Route path='/cookie-cakes' element={<CookieCakes />} />
            <Route path='/cake-bombs' element={<CakeBombs />} />

            <Route
              path='*'
              element={<div className='p-8 text-center text-red-500'>404: Not Found</div>}
            />
          </Routes>

          <footer className='bg-sinner text-center text-sm text-saint py-6 mt-0'>
            <div className='flex justify-center items-center space-x-2'>
              <CakeSlice className='w-4 h-4' />
              <span>&copy; {new Date().getFullYear()} Saints & Sinners Bake Shop</span>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
