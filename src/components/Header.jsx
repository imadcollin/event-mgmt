import { AppBar, Toolbar, Typography, Button, Box, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: darkMode ? '#000' : '#1976d2', paddingY: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Event Management Logo" style={{ height: 40, marginRight: 8 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Event Management
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button component={Link} to="/" sx={{
            color: '#fff',
            '&:hover': { color: '#e53935', borderBottom: '2px solid #e53935' },
            fontSize: '14px',
            fontWeight: 500
          }}>
            HOME
          </Button>
          <Button component={Link} to="/events" sx={{
            color: '#fff',
            '&:hover': { color: '#e53935', borderBottom: '2px solid #e53935' },
            fontSize: '14px',
            fontWeight: 500
          }}>
            EVENTS
          </Button>
          <Button component={Link} to="/artists" sx={{
            color: '#fff',
            '&:hover': { color: '#e53935', borderBottom: '2px solid #e53935' },
            fontSize: '14px',
            fontWeight: 500
          }}>
            ARTISTS
          </Button>
          <Button component={Link} to="/halls" sx={{
            color: '#fff',
            '&:hover': { color: '#e53935', borderBottom: '2px solid #e53935' },
            fontSize: '14px',
            fontWeight: 500
          }}>
            HALLS
          </Button>
          <Button component={Link} to="/profile" sx={{
            color: '#fff',
            '&:hover': { color: '#e53935', borderBottom: '2px solid #e53935' },
            fontSize: '14px',
            fontWeight: 500
          }}>
            PROFILE
          </Button>
        </Box>

        {/* Dark Mode Toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Switch checked={darkMode} onChange={handleToggleDarkMode} />
          <Button
            component={Link}
            to="/contact"
            sx={{
              backgroundColor: '#e53935',
              color: '#fff',
              '&:hover': { backgroundColor: '#c62828' },
              borderRadius: '4px',
              paddingX: 2,
              paddingY: 0.5,
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            CONTACT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;