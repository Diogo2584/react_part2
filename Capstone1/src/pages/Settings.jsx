import { useContext } from 'react';
import { ThemeSettings } from '../components/ThemeSettings';
import light from '../assets/light.png';
import dark from '../assets/dark.png';

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeSettings);

  return (
   //sidebar
    <div className = {styles.leftsidebar}>
      <h1>Site Settings</h1>

      <div>

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