import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create a context with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// This is the type for the context provider's props
interface ThemeProviderProps {
  children: ReactNode; // Here we are saying 'children' is a ReactNode, which can be anything rendered in JSX
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Render children passed to this provider */}
    </ThemeContext.Provider>
  );
};

// A custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
