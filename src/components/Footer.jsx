import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: '#f4f4f4', marginTop: 'auto' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Event Management. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;