import { Container, Typography } from '@mui/material';
import { Movies } from 'Movies';
import React from 'react';

export const Main = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100%' }}>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
  Movies
      </Typography>
      <Movies />
    </Container>
  )
}
