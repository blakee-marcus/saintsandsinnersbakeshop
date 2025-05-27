import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function NavBar() {
  const [customOpen, setCustomOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCustomOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className='flex flex-col md:flex-row md:items-center justify-between px-6 py-4 bg-sinner text-saint shadow-lg gap-y-2'>
      <h1 className='text-2xl font-serif tracking-wider'>Saints & Sinners</h1>

      <nav className='flex flex-wrap items-center gap-x-4 text-sm relative'>
        <Link to='/' className='hover:text-goldleaf transition'>Home</Link>
        <Link to='/menu' className='hover:text-goldleaf transition'>Menu</Link>
        <Link to='/story' className='hover:text-goldleaf transition'>Our Story</Link>

        <div className='relative' ref={dropdownRef}>
          <button
            onClick={() => setCustomOpen(prev => !prev)}
            className='hover:text-goldleaf transition inline-flex items-center'
          >
            Custom Orders <ChevronDown size={16} className='ml-1' />
          </button>

          {customOpen && (
            <div className='absolute left-0 mt-2 bg-sinner border border-goldleaf rounded shadow-lg z-50 w-56'>
              <Link to='/specialty-cakes' className='block px-4 py-2 hover:bg-goldleaf hover:text-sinner transition'>Specialty Cakes</Link>
              <Link to='/custom-cakes' className='block px-4 py-2 hover:bg-goldleaf hover:text-sinner transition'>Custom Cakes</Link>
              <Link to='/custom-cookies' className='block px-4 py-2 hover:bg-goldleaf hover:text-sinner transition'>Custom Cookies</Link>
              <Link to='/cookie-cakes' className='block px-4 py-2 hover:bg-goldleaf hover:text-sinner transition'>Cookie Cakes</Link>
              <Link to='/custom-cupcakes' className='block px-4 py-2 hover:bg-goldleaf hover:text-sinner transition'>Custom Cupcakes</Link>
              <Link to='/cake-bombs' className='block px-4 py-2 hover:bg-goldleaf hover:text-sinner transition'>Cake Bombs</Link>
            </div>
          )}
        </div>

        <Link to='/toasts' className='hover:text-goldleaf transition'>Toasts</Link>
        <Link to='/contact' className='hover:text-goldleaf transition'>Contact</Link>
      </nav>
    </header>
  );
}

export default NavBar;
