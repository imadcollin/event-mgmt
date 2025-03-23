import { useEffect, useState } from 'react';
import { getArtists, getHalls } from '../services/mockService';
import { Link } from 'react-router-dom';
import { Box, Grid, Paper, Typography, Button, TextField, Select, MenuItem } from '@mui/material';
import { useDarkMode } from '../context/DarkModeContext';

const Dashboard = () => {
  const [artists, setArtists] = useState([]);
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchArtist, setSearchArtist] = useState('');
  const [searchHall, setSearchHall] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [newMessages, setNewMessages] = useState(2);

  const { darkMode } = useDarkMode();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const artistsData = await getArtists();
      const hallsData = await getHalls();
      setArtists(artistsData);
      setHalls(hallsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const mockEvents = [
    { id: 1, name: 'Concert A', date: '2025-05-12' },
    { id: 2, name: 'Festival B', date: '2025-06-20' },
    { id: 3, name: 'Show C', date: '2025-07-15' }
  ];

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchArtist.toLowerCase()) &&
    (genreFilter === '' || artist.genre === genreFilter)
  );

  const filteredHalls = halls.filter(hall =>
    hall.name.toLowerCase().includes(searchHall.toLowerCase()) &&
    (locationFilter === '' || hall.location === locationFilter)
  );

  return (
    <Box sx={{ padding: 3, backgroundColor: darkMode ? '#000' : '#f4f4f4', minHeight: '100vh', color: darkMode ? '#fff' : '#000' }}>
      {/* Stats */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{
            padding: 2,
            backgroundColor: darkMode ? '#1e1e1e' : '#fff',
            color: darkMode ? '#fff' : '#000'
          }}>
            <Typography variant="h6">Total Artists</Typography>
            <Typography variant="h4">{artists.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{
            padding: 2,
            backgroundColor: darkMode ? '#1e1e1e' : '#fff',
            color: darkMode ? '#fff' : '#000'
          }}>
            <Typography variant="h6">Total Halls</Typography>
            <Typography variant="h4">{halls.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{
            padding: 2,
            backgroundColor: darkMode ? '#1e1e1e' : '#fff',
            color: darkMode ? '#fff' : '#000'
          }}>
            <Typography variant="h6">Upcoming Events</Typography>
            <Typography variant="h4">{mockEvents.length}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Navigation Links */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={6} sm={3}>
          <Button fullWidth variant="contained" sx={{
            backgroundColor: '#e53935',
            '&:hover': { backgroundColor: '#c62828' },
            color: '#fff'
          }} component={Link} to="/artists">
            Browse Artists
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button fullWidth variant="contained" sx={{
            backgroundColor: '#43a047',
            '&:hover': { backgroundColor: '#2e7d32' },
            color: '#fff'
          }} component={Link} to="/halls">
            Browse Halls
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button fullWidth variant="contained" sx={{
            backgroundColor: '#ffb300',
            '&:hover': { backgroundColor: '#ff8f00' },
            color: '#fff'
          }} component={Link} to="/events">
            View Events
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button fullWidth variant="contained" sx={{
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#1565c0' },
            color: '#fff'
          }} component={Link} to="/inbox">
            Open Inbox ({newMessages})
          </Button>
        </Grid>
      </Grid>

      {/* Search and Filters */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Search Artists"
            value={searchArtist}
            onChange={(e) => setSearchArtist(e.target.value)}
            fullWidth
            InputProps={{
              sx: {
                backgroundColor: darkMode ? '#1e1e1e' : '#fff',
                color: darkMode ? '#fff' : '#000',
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            displayEmpty
            fullWidth
            sx={{
              backgroundColor: darkMode ? '#1e1e1e' : '#fff',
              color: darkMode ? '#fff' : '#000',
            }}
          >
            <MenuItem value="">All Genres</MenuItem>
            <MenuItem value="Pop">Pop</MenuItem>
            <MenuItem value="Rock">Rock</MenuItem>
            <MenuItem value="Jazz">Jazz</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Artists and Halls */}
      {!loading && (
        <>
          <Typography variant="h5" gutterBottom>Artists</Typography>
          {filteredArtists.map(artist => (
            <Paper key={artist.id} sx={{ padding: 2, marginBottom: 2, backgroundColor: darkMode ? '#1e1e1e' : '#fff', color: darkMode ? '#fff' : '#000' }}>
              <Typography>{artist.name} – {artist.contact}</Typography>
            </Paper>
          ))}

          <Typography variant="h5" gutterBottom>Halls</Typography>
          {filteredHalls.map(hall => (
            <Paper key={hall.id} sx={{ padding: 2, marginBottom: 2, backgroundColor: darkMode ? '#1e1e1e' : '#fff', color: darkMode ? '#fff' : '#000' }}>
              <Typography>{hall.name} – {hall.location}</Typography>
            </Paper>
          ))}
        </>
      )}
    </Box>
  );
};

export default Dashboard;