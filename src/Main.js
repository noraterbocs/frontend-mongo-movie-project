/* eslint-disable react/jsx-closing-tag-location */

import { Container, Typography } from '@mui/material';
import { Movies } from 'Movies';
import React from 'react';
import { Loading } from 'Loading';
import { useSelector } from 'react-redux';

export const Main = () => {
  const loading = useSelector((store) => store.ui.isLoading)
  return (
    <Container maxWidth="lg" sx={{ height: '100%' }}>
      {!loading
        && <Typography variant="h1" sx={{ textAlign: 'center', color: '#ffffff' }}>
  Movies
        </Typography>}
      {loading
        && <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em', flexDirection: 'column' }}>
          <Loading />
          <Typography variant="h5">Waiting for movies to load...</Typography>
        </Container>}
      <Movies />
    </Container>
  )
}
