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
    <Box sx={{ padding: 3, backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Box sx={{ padding: 3, maxWidth: 600, margin: '0 auto', backgroundColor: '#1e1e1e', borderRadius: '8px' }}>
        {/* Profile Image */}
        <Avatar src={artist.imageUrl} sx={{ width: 120, height: 120, marginBottom: 2 }} />

        {/* Artist Name and Genre */}
        <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
          {artist.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {artist.genre}
        </Typography>

        <Divider sx={{ marginY: 2, backgroundColor: '#444' }} />

        {/* Artist Bio */}
        <Typography sx={{ marginBottom: 2, color: '#ccc' }}>
          {artist.bio}
        </Typography>

        {/* Followers and Albums */}
        <Typography sx={{ marginBottom: 2, color: '#ccc' }}>
          <strong>{artist.followers.toLocaleString()}</strong> followers • <strong>{artist.albums}</strong> albums
        </Typography>

        {/* Social Media Links */}
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Tooltip title="Twitter">
            <IconButton href={artist.social.twitter} target="_blank" rel="noopener noreferrer" sx={{ color: '#1da1f2', '&:hover': { color: '#ff0000' } }}>
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton href={artist.social.instagram} target="_blank" rel="noopener noreferrer" sx={{ color: '#e4405f', '&:hover': { color: '#ff0000' } }}>
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistProfile;