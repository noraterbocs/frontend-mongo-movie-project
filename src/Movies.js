/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
import { Box, Button, Backdrop, Card, CardActions, CardContent, Container, Fade, Grid, Modal, Pagination, Typography, Link } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchSingleMovie, movies } from 'reducers/movies';
import { BiLink } from 'react-icons/bi'

export const Movies = () => {
  const dispatch = useDispatch()
  const allMovies = useSelector((store) => store.movies.allMovies.data)
  const count = useSelector((store) => store.movies.allMovies.totalPages)
  const page = useSelector((store) => store.movies.page)
  const [open, setOpen] = React.useState(false);
  const singleMovie = useSelector((store) => store.movies.singleMovie)
  const fetchMoviesAPI = () => {
    dispatch(fetchMovies(page))
  }

  useEffect(() => {
    fetchMoviesAPI()
  }, [page])

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
    maxWidth: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '80vh',
    overflowY: 'auto'
  };

  return (
    <Container maxWidth="100%" sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Grid container spacing={2} justifyContent="center" sx={{ boxSizing: 'border-box' }}>
        {allMovies && allMovies.map((movie) => {
          return (
            <Grid item xs={12} sm={8} md={6} lg={4} key={movie._id}>
              <Card sx={{ minWidth: 275, height: '100%', bgcolor: '#f0f3ff' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {movie.type}
                  </Typography>
                  <Typography sx={{ color: '#fe8be3' }} variant="h5" component="div">
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
                  <Button sx={{ color: '#8baafe' }} size="small" onClick={() => selectMovie(movie._id)}>Show More</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 2, alignItems: 'center', flexDirection: 'column' }}>
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
              <Typography id="transition-modal-title" variant="h6">
              Title: {singleMovie.title}
              </Typography>
              <Typography id="transition-modal-title" variant="body1">
              Director: {singleMovie.director}
              </Typography>
              <Typography id="transition-modal-title" variant="body1">
              Cast: {singleMovie.cast}
              </Typography>
              <Typography id="transition-modal-title" variant="body1">
              Country: {singleMovie.country}
              </Typography>
              <Typography id="transition-modal-title" variant="body1">
              Release year: {singleMovie.release_year}
              </Typography>
              <Typography id="transition-modal-title" variant="body1">
              Rating: {singleMovie.rating}
              </Typography>
              <Typography id="transition-modal-title" variant="body1">
              Duration: {singleMovie.duration}
              </Typography>
              <Typography id="transition-modal-title" variant="body1">
              Genre: {singleMovie.listed_in}
              </Typography>
              <Typography id="transition-modal-title" variant="body1">
              Type: {singleMovie.type}
              </Typography>
            </Box>
          </Fade>
        </Modal>
        <Pagination count={count} page={page} onChange={handleChange} sx={{ textAlign: 'center', color: '#ffffff' }} />
        <Link href="https://project-mongo-api-jbnyu77ahq-lz.a.run.app/api-docs/" underline="hover" variant="subtitle1" color="#ffffff"><BiLink /> API documentation</Link>
      </Container>
    </Container>
  )
}
