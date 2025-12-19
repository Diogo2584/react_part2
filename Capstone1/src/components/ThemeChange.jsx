import React, { useContext } from "react";
import * as ThemeContextModule from "./ThemeContext";

// Support either `export default ThemeContext` or `export const ThemeContext = ...`
const ThemeContext = ThemeContextModule.default ?? ThemeContextModule.ThemeContext;

function ThemeChange() {
  // get the context value
  const context = useContext(ThemeContext);

  // if the component is rendered outside a provider, show a friendly message instead of crashing
  if (!context) {
    return (
      <nav style={{ padding: "10px", backgroundColor: "lightgray" }}>
        <p>No ThemeProvider found. Wrap your app with ThemeContext.Provider.</p>
      </nav>
    );
  }

  const { theme = "light", toggleTheme = () => {} } = context;

  return (
    <nav
      style={{
        padding: "10px",
        backgroundColor: theme === "light" ? "green" : "blue",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme} aria-pressed={theme === "dark"}>
        Toggle
      </button>
    </nav>
  );
}

export default ThemeChange;