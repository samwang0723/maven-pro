import { useTheme } from '../../App';

const ThemeSwitcher = () => {
  // Use the ThemeContext to access the theme and setTheme function
  const { theme, setTheme } = useTheme();

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'default' : 'dark');
  };

  return (
    <>
      {theme !== 'dark' && (
        <button
          type="button"
          className="group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
          onClick={toggleTheme} // Use the toggleTheme function on click
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
      )}
      {theme === 'dark' && (
        <button
          type="button"
          className="group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
          onClick={toggleTheme} // Use the toggleTheme function on click
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 8a2 2 0 1 0 4 4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
