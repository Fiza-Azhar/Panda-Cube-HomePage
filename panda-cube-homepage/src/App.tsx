import React from 'react';
import Navbar from './components/navbar';
import LanguageDropdown from './components/Header/LanguageDropdown';
import SocialMedia from './components/socialMedia'; // Import the SocialMedia component

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: 'var(--hero-section-items)' }}>
        <LanguageDropdown />
      </div>
      {/* Add SocialMedia links below */}
      <div className="social-media-section">
        <SocialMedia />
      </div>
    </div>
  );
};

export default App;
