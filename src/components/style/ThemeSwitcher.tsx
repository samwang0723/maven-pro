import React from 'react';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'cupcake');

  const isDarkMode = theme === 'dark';

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.checked ? 'dark' : 'cupcake'; // Toggle between 'dark' and 'cupcake' themes
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="flex justify-center items-center w-12 h-12">
      <input
        type="checkbox"
        className="toggle toggle-sm"
        checked={isDarkMode}
        onChange={handleThemeChange}
      />
    </div>
  );
};

export default ThemeSwitcher;


