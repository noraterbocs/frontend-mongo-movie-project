import { Container, Typography } from '@mui/material';
import { Movies } from 'Movies';
import React from 'react';

export const Main = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
  Movies
      </Typography>
      <Movies />
    </Container>
  )
}
