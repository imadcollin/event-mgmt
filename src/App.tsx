import { useDarkMode } from './context/DarkModeContext';
import { ThemeProvider } from '@mui/material/styles';
import AppRoutes from './routes/AppRoutes';
import getTheme from './theme';
import './App.css';
const App = () => {
  const { darkMode } = useDarkMode();


  return (
    <ThemeProvider theme={getTheme(darkMode)} >
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;