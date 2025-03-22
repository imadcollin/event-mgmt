import { useState } from 'react';
import { Box, TextField, Button, Typography, Avatar, Switch, FormControlLabel } from '@mui/material';
import { useDarkMode } from '../../context/DarkModeContext';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [profilePicture, setProfilePicture] = useState('');
  const [notifications, setNotifications] = useState(true);
  const { darkMode, setDarkMode } = useDarkMode(); // Use dark mode from context

  const handleSave = () => {
    // Save user settings to state or backend
    alert('Profile saved!');
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicture(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      {/* Profile Picture */}
      <Avatar
        src={profilePicture || '/default-profile.png'}
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />
      <input type="file" accept="image/*" onChange={handlePictureChange} />

      {/* Name */}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />

      {/* Email */}
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />

      {/* Dark Mode */}
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        }
        label="Dark Mode"
      />

      {/* Notifications */}
      <FormControlLabel
        control={
          <Switch
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        }
        label="Enable Notifications"
      />

      {/* Save Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ marginTop: 2 }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default Profile;