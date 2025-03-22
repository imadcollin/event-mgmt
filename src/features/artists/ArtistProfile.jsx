import { useParams, useLocation } from 'react-router-dom';
import { Box, Typography, Avatar, IconButton, Tooltip, Divider } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ArtistProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const artist = location.state?.artist;

  if (!artist) {
    return <Typography>Artist not found.</Typography>;
  }

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: '0 auto' }}>
      {/* Profile Image */}
      <Avatar src={artist.imageUrl} sx={{ width: 120, height: 120, marginBottom: 2 }} />

      {/* Artist Name and Genre */}
      <Typography variant="h4" gutterBottom>
        {artist.name}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {artist.genre}
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      {/* Artist Bio */}
      <Typography sx={{ marginBottom: 2 }}>
        {artist.bio}
      </Typography>

      {/* Followers and Albums */}
      <Typography sx={{ marginBottom: 2 }}>
        <strong>{artist.followers.toLocaleString()}</strong> followers • <strong>{artist.albums}</strong> albums
      </Typography>

      {/* Social Media Links */}
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Tooltip title="Twitter">
          <IconButton href={artist.social.twitter} target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton href={artist.social.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ArtistProfile;