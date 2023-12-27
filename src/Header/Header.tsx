import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [selected, setSelected] = useState('Home');

  const handleNavigation = (selectedItem: string) => {
    setSelected(selectedItem);
  };

  return (
    <header>
      <div className="left-section">
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
        <circle cx="20.5" cy="20.5" r="20.5" fill="#458FF6"/>
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#FFFFFF" font-size="24px">T</text>
        </svg>
        <span className="healthcare-text">HealthCare</span>
      </div>
      <nav className="right-section">
        <a href="#" className={selected === 'Home' ? 'selected' : ''} onClick={() => handleNavigation('Home')}>Home</a>
        <a href="#" className={selected === 'Find a doctor' ? 'selected' : ''} onClick={() => handleNavigation('Find a doctor')}>Find a doctor</a>
        <a href="#" className={selected === 'Apps' ? 'selected' : ''} onClick={() => handleNavigation('Apps')}>Apps</a>
        <a href="#" className={selected === 'Testimonials' ? 'selected' : ''} onClick={() => handleNavigation('Testimonials')}>Testimonials</a>
        <a href="#" className={selected === 'About us' ? 'selected' : ''} onClick={() => handleNavigation('About us')}>About us</a>
      </nav>
    </header>
  );
};

export default Header;