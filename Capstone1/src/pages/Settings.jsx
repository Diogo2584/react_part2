import React, { useContext } from 'react';
import * as ThemeContextModule from '../components/ThemeContext';
import light from '../assets/light.png';
import dark from '../assets/dark.png';
import styles from '../styles/Settings.module.css';

// Support either `export default ThemeContext` or `export const ThemeContext = ...`
const ThemeContext = ThemeContextModule.default ?? ThemeContextModule.ThemeContext;

function Settings() {
  const context = useContext(ThemeContext);

  // If rendered outside a ThemeProvider, show a helpful message instead of crashing
  if (!context) {
    return (
      <div className={styles.leftSidebar ?? styles.leftsidebar ?? ''} style={{ padding: '1rem' }}>
        <h2>Site Settings</h2>
        <p>No ThemeProvider found. Wrap your app with ThemeContext.Provider.</p>
      </div>
    );
  }

  // Accept either a toggle-only API or an API that exposes setTheme
  const { theme = 'light', toggleTheme = () => {}, setTheme } = context;

  const switchToLight = () => {
    if (typeof setTheme === 'function') {
      setTheme('light');
      return;
    }
    // fallback to toggle if there's no setTheme and current theme is dark
    if (theme === 'dark') toggleTheme();
  };

  const switchToDark = () => {
    if (typeof setTheme === 'function') {
      setTheme('dark');
      return;
    }
    if (theme === 'light') toggleTheme();
  };

  return (
    <div className={styles.leftSidebar ?? styles.leftsidebar ?? ''}>
      <h2>Site Settings</h2>

      <section>
        <h3>Appearance</h3>

        <div>
          <img src={light} alt="Light Theme preview" />
          <button onClick={switchToLight} aria-pressed={theme === 'light'} aria-label="Switch to light theme">
            Switch to Light
          </button>
        </div>
      </section>

      <section className={styles.settingRight2 ?? 'setting-right2'}>
        <div>
          <img src={dark} alt="Dark Theme preview" />
          <button onClick={switchToDark} aria-pressed={theme === 'dark'} aria-label="Switch to dark theme">
            Switch to Dark
          </button>
        </div>
      </section>
    </div>
  );
}

export default Settings;