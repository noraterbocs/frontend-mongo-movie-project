import { Button, Card, CardActions, CardContent, Container, Grid, Pagination, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, movies } from 'reducers/movies';

export const Movies = () => {
  const dispatch = useDispatch()
  const allMovies = useSelector((store) => store.movies.allMovies.data)
  const count = useSelector((store) => store.movies.allMovies.totalPages)
  const page = useSelector((store) => store.movies.page)

  useEffect(() => {
    dispatch(fetchMovies(page))
  }, [page]);
  const handleChange = (event, value) => {
    dispatch(movies.actions.setPage(value))
  }
  return (
    <Container maxWidth="100%" sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Grid container spacing={2} justifyContent="center">
        {allMovies && allMovies.map((movie) => {
          return (
            <Grid item xs={12} sm={8} md={6} lg={4}>
              <Card sx={{ minWidth: 275, height: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {movie.type}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {movie.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {movie.release_year}
                  </Typography>
                  <Typography variant="body2">
                    {movie.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination count={count} page={page} onChange={handleChange} sx={{ textAlign: 'center' }} />
      </Container>
    </Container>
  )
}
