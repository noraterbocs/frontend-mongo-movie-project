/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
import { Box, Button, Backdrop, Card, CardActions, CardContent, Container, Fade, Grid, Modal, Pagination, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchSingleMovie, movies } from 'reducers/movies';

export const Movies = () => {
  const dispatch = useDispatch()
  const allMovies = useSelector((store) => store.movies.allMovies.data)
  const count = useSelector((store) => store.movies.allMovies.totalPages)
  const page = useSelector((store) => store.movies.page)
  const [open, setOpen] = React.useState(false);
  const singleMovie = useSelector((store) => store.movies.singleMovie)

  useEffect(() => {
    dispatch(fetchMovies(page))
  }, [page]);
  const handleChange = (event, value) => {
    dispatch(movies.actions.setPage(value))
  }

  const selectMovie = (id) => {
    setOpen(true)
    dispatch(fetchSingleMovie(id))
  }
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

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
                  <Button size="small" onClick={() => selectMovie(movie._id)}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500
            }
          }}>
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Title: {singleMovie.title}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Director: {singleMovie.director}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Cast: {singleMovie.cast}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Country: {singleMovie.country}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Release year: {singleMovie.release_year}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Rating: {singleMovie.rating}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Duration: {singleMovie.duration}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Genre: {singleMovie.listed_in}
              </Typography>
              <Typography id="transition-modal-title" variant="h6" component="h2">
              Type: {singleMovie.type}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {singleMovie.description}
              </Typography>
            </Box>
          </Fade>
        </Modal>
        <Pagination count={count} page={page} onChange={handleChange} sx={{ textAlign: 'center' }} />
      </Container>
    </Container>
  )
}
