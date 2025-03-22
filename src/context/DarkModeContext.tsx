import { createContext, useContext, useState } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);
  
    console.log('Dark Mode Context:', darkMode); // Debug
  
    return (
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
  };

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};