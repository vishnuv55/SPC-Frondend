/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRhinoState } from '../../../config/context';

const MenuContent = ({ darkMode, toggleDarkMode, toggleMenu }) => {
  const [installable, setInstallable] = useRhinoState('installable');

  const handleThemeChange = () => {
    toggleDarkMode();
    toggleMenu();
  };

  const history = useHistory();

  const handleLink = () => {
    if (history.location.pathname === '/admin') {
      history.push('/');
    } else {
      history.push('/admin');
    }
  };

  const handleInstallClick = (e) => {
    // Show the install prompt
    installable.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    installable.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
    // Hide the app provided install promotion
    setInstallable({ installable: false, deferredPrompt: null });
  };

  return (
    <div className="menu-content">
      <button className="link" type="button" onClick={handleLink}>
        {history.location.pathname === '/' ? 'Admin' : 'Home'}
      </button>
      <button className="link" type="button" onClick={handleThemeChange}>
        {darkMode ? 'Light Mode' : 'Dark mode'}
      </button>
      {installable.installable && (
        <button className="link" type="button" onClick={handleInstallClick}>
          install
        </button>
      )}
    </div>
  );
};

export default MenuContent;
