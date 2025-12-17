import { useContext } from 'react';
import { ThemeSettings } from '../components/ThemeSettings';
import light from '../assets/light.png';
import dark from '../assets/dark.png';

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeSettings);

  return (
   //sidebar
    <div 
    style = {{ 
      backgroundColor: theme === 'light' ? '#F3FBE6' : '#CDCDCD',
      
    }}
    >
      <h1>Site Settings</h1>

      <div style = {{
         backgroundColor: theme === 'light' ? '#E6ECFB' : '#18235D',
      }}>

        <h1>Appearance</h1>

        <img src={light} alt="Light Theme" />

        <button onClick={toggleTheme}>Switch Theme</button>
      </div>

      <div className="setting-right2">

        <img src={dark} alt="Dark Theme" />

        <button onClick={toggleTheme}>Switch Theme</button>
      </div>

    </div>
  );
}

export default Settings;