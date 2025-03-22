import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Event Management
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/events">
            Events
          </Button>
          <Button color="inherit" component={Link} to="/artists">
            Artists
          </Button>
          <Button color="inherit" component={Link} to="/halls">
            Halls
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;