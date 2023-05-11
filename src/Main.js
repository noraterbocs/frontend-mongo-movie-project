import { Container, Typography } from '@mui/material';
import { Movies } from 'Movies';
import React from 'react';
import { Loading } from 'Loading';
import { useSelector } from 'react-redux';

export const Main = () => {
  const loading = useSelector((store) => store.ui.isLoading)
  return (
    <Container maxWidth="lg" sx={{ height: '100%' }}>
      <Typography variant="h1" sx={{ textAlign: 'center' }}>
  Movies
      </Typography>
      {loading ? <Loading /> : ''}
      <Movies />
    </Container>
  )
}
