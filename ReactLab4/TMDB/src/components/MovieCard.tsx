import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './MovieCards.css'
import { blue } from '@mui/material/colors';
import altImage from '../assets/Squiral.jpg'


export default function MovieCard(cards:any) {

  let posterImage;

  if (cards.movie.poster_path) {
    posterImage = `https://image.tmdb.org/t/p/w200${cards.movie.poster_path}`;
  } else {
    posterImage = altImage; // Fallback to default image
  }
  
  return (
    <div id='movie'>
    <Card sx={{ maxWidth: 350, height: 600, backgroundColor: 'dimgrey'}}>
      <CardMedia
        sx={{ height: 300, width: 450}}
        image={posterImage}
        title={cards.movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {cards.movie.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {cards.movie.overview}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Rating: {cards.movie.vote_average}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
