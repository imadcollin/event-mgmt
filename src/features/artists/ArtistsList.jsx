import { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const ArtistsList = () => {
  const [search, setSearch] = useState('');
  const artists = [
    { id: 1, name: 'Artist A', genre: 'Pop' },
    { id: 2, name: 'Artist B', genre: 'Rock' },
    { id: 3, name: 'Artist C', genre: 'Jazz' },
  ];

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

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
                <Typography variant="h6">{artist.name}</Typography>
                <Typography color="textSecondary">{artist.genre}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ArtistsList;