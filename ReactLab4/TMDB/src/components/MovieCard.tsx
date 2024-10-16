import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './MovieCards.css'
import { blue } from '@mui/material/colors';


export default function MovieCard(props) {
  const posterImage = `https://image.tmdb.org/t/p/w200${props.movie.poster_path}`

  return (
    <div id='movie'>
    <Card sx={{ maxWidth: 350, height: 600, backgroundColor: 'dimgrey'}}>
      <CardMedia
        sx={{ height: 300, width: 450}}
        image={posterImage}
        title={props.movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.movie.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.movie.overview}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Rating: {props.movie.vote_average}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
