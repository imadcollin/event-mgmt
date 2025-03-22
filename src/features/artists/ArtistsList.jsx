import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Button, Grid, Avatar, IconButton, Tooltip } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ArtistsList = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const artists = [
    {
      id: 1,
      name: 'Artist A',
      genre: 'Pop',
      bio: 'Artist A is a famous pop singer with multiple awards.',
      imageUrl: '/images/artist-a.jpg',
      albums: 10,
      followers: 500000,
      social: {
        twitter: 'https://twitter.com/artistA',
        instagram: 'https://instagram.com/artistA',
      },
    },
    {
      id: 2,
      name: 'Artist B',
      genre: 'Rock',
      bio: 'Artist B is known for their energetic rock performances.',
      imageUrl: '/images/artist-b.jpg',
      albums: 5,
      followers: 300000,
      social: {
        twitter: 'https://twitter.com/artistB',
        instagram: 'https://instagram.com/artistB',
      },
    },
    {
      id: 3,
      name: 'Artist C',
      genre: 'Jazz',
      bio: 'Artist C is a jazz musician with a unique style.',
      imageUrl: '/images/artist-c.jpg',
      albums: 7,
      followers: 250000,
      social: {
        twitter: 'https://twitter.com/artistC',
        instagram: 'https://instagram.com/artistC',
      },
    },
  ];

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewProfile = (artist) => {
    navigate(`/artists/${artist.id}`, { state: { artist } });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Artists
      </Typography>
      <input
        type="text"
        placeholder="Search Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />
      <Grid container spacing={2}>
        {filteredArtists.map((artist) => (
          <Grid item xs={12} sm={6} md={4} key={artist.id}>
            <Card sx={{ width: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={artist.imageUrl} sx={{ width: 56, height: 56 }} />
                  <Box>
                    <Typography
                      variant="h6"
                      onClick={() => handleViewProfile(artist)}
                      sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      {artist.name}
                    </Typography>
                    <Typography color="textSecondary">{artist.genre}</Typography>
                  </Box>
                </Box>

                <Typography sx={{ marginTop: 2 }}>
                  {artist.followers.toLocaleString()} followers • {artist.albums} albums
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
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

                <Button
                  onClick={() => handleViewProfile(artist)}
                  sx={{ marginTop: 1 }}
                  variant="contained"
                  color="primary"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArtistsList;