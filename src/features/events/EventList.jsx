import { useState, useMemo } from 'react';
import mockEvents from './mockEvents';
import { Box, Card, CardContent, Typography, Button, Grid, TextField, Select, MenuItem, Collapse } from '@mui/material';
import { useDarkMode } from '../../context/DarkModeContext';

const EventList = () => {
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedEventId, setExpandedEventId] = useState(null);
  const { darkMode } = useDarkMode();

  const itemsPerPage = 3;

  const filteredEvents = useMemo(() => {
    return mockEvents
      .filter(event =>
        event.name.toLowerCase().includes(search.toLowerCase()) &&
        (dateFilter === '' || event.date === dateFilter)
      )
      .sort((a, b) => {
        if (sortOption === 'name') return a.name.localeCompare(b.name);
        if (sortOption === 'date') return new Date(a.date) - new Date(b.date);
        return 0;
      });
  }, [search, dateFilter, sortOption]);

  const paginatedEvents = useMemo(() => {
    return filteredEvents.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredEvents, currentPage]);

  const handleRegister = (event) => {
    alert(`Registered for ${event.name}`);
  };

  const handleToggleExpand = (eventId) => {
    setExpandedEventId(expandedEventId === eventId ? null : eventId);
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: darkMode ? '#000' : '#f4f4f4', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ color: darkMode ? '#fff' : '#000', fontWeight: 'bold' }}>
        Events
      </Typography>

      {/* Search and Filters */}
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Search Events"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            aria-label="Search events by name"
            InputProps={{
              sx: {
                backgroundColor: darkMode ? '#1e1e1e' : '#fff',
                color: darkMode ? '#fff' : '#000',
                '& fieldset': { borderColor: darkMode ? '#444' : '#ccc' },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            fullWidth
            aria-label="Filter events by date"
            InputProps={{
              sx: {
                backgroundColor: darkMode ? '#1e1e1e' : '#fff',
                color: darkMode ? '#fff' : '#000',
                '& fieldset': { borderColor: darkMode ? '#444' : '#ccc' },
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            displayEmpty
            fullWidth
            aria-label="Sort events by option"
            sx={{
              backgroundColor: darkMode ? '#1e1e1e' : '#fff',
              color: darkMode ? '#fff' : '#000',
              '& fieldset': { borderColor: darkMode ? '#444' : '#ccc' },
            }}
          >
            <MenuItem value="">Sort By</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="date">Date</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Event List */}
      {paginatedEvents.length > 0 ? (
        <Grid container spacing={2}>
          {paginatedEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id || `${event.name}-${event.date}`}>
              <Card sx={{
                backgroundColor: darkMode ? '#1e1e1e' : '#fff',
                color: darkMode ? '#fff' : '#000',
                borderRadius: '8px',
                transition: '0.3s',
                '&:hover': { backgroundColor: darkMode ? '#222' : '#f9f9f9' },
              }}>
                <CardContent>
                  <Typography variant="h6">{event.name}</Typography>
                  <Typography color="textSecondary">{event.date} – {event.location}</Typography>
                  <Box sx={{ marginTop: 2, display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() => handleToggleExpand(event.id)}
                      aria-label={`View details for ${event.name}`}
                      sx={{
                        backgroundColor: darkMode ? '#e53935' : '#1976d2',
                        '&:hover': { backgroundColor: darkMode ? '#c62828' : '#1565c0' },
                      }}
                    >
                      {expandedEventId === event.id ? 'Hide Details' : 'Details'}
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleRegister(event)}
                      aria-label={`Register for ${event.name}`}
                      sx={{
                        backgroundColor: darkMode ? '#43a047' : '#388e3c',
                        '&:hover': { backgroundColor: darkMode ? '#2e7d32' : '#2e7d32' },
                      }}
                    >
                      Register
                    </Button>
                  </Box>
                </CardContent>

                {/* Inline Expanded Details */}
                <Collapse in={expandedEventId === event.id}>
                  <CardContent>
                    <Typography>
                      <strong>Date:</strong> {event.date || "TBD"}
                    </Typography>
                    <Typography>
                      <strong>Location:</strong> {event.location || "Unknown"}
                    </Typography>
                    <Typography sx={{ marginTop: 1 }}>
                      {event.description || "No description available."}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ color: darkMode ? '#fff' : '#000' }}>No events found.</Typography>
      )}

      {/* Pagination */}
      {filteredEvents.length > itemsPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            sx={{ marginRight: 1 }}
            variant="contained"
            aria-label="Go to previous page"
          >
            Previous
          </Button>
          <Typography sx={{ padding: '8px' }}>{currentPage}</Typography>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= filteredEvents.length}
            variant="contained"
            aria-label="Go to next page"
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default EventList;
