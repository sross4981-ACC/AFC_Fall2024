import {useEffect, useState} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';


export default function NowPlaying() {
const {VITE_TMDB_API_TOKEN } = process.env
const [nowPlaying, setNowPlaying] = useState([]);
const handleClick = () => {
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  params: {include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2MzZGE2OTVmYTM3MmI3YmU4ZjQxMTAyMGZmYzNkZiIsIm5iZiI6MTcyODQwNTY0NC44MjIzMDIsInN1YiI6IjY2ZmQ1NzRhYmFlMzgzYzEwY2QwNzdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2b5UHVQayA3rqs4km48kL6rsG_2jvHjGJQiSFfE96rQ'
  }
};

axios
  .request(options)
  .then(function (response) {
    setNowPlaying(response.data.results)
    console.log(nowPlaying)
    let movieArray = response.data.results.map((cards:any) => {
      return <MovieCard movie={cards}/>
    })
    setNowPlaying(movieArray)
  })
  .catch(function (error) {
    console.error(error);
  });
  
}
useEffect(() => {
    handleClick();
}, []);
return (
    <>
    <div id='movie-container'>
    {nowPlaying}
    </div>
    </>
  )
}