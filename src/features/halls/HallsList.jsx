import React from 'react';
import { Box, Typography, List, ListItem, Card, CardContent } from '@mui/material';

const HallsList = () => {
  const halls = [
    { id: 1, name: 'Hall X', location: 'Downtown' },
    { id: 2, name: 'Hall Y', location: 'Uptown' },
    { id: 3, name: 'Hall Z', location: 'Suburb' },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Halls
      </Typography>
      <List>
        {halls.map((hall) => (
          <ListItem key={hall.id} disablePadding>
            <Card sx={{ width: '100%', marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">{hall.name}</Typography>
                <Typography color="textSecondary">{hall.location}</Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HallsList;