import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {
  const [movies, setMovies] = useState([]);
  // this is used to reserve the movie data for the reviews page
  const [movie,setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try{
      const response = await api.get('api/v1/movies');
      setMovies(response.data);
    }
    catch(error){
      console.log(error);
    }
  }
  // getMovies 会在组件首次渲染时调用一次，第一次渲染了一个空列表的home page
  // 此时，getEffect在同步执行，然通过setMovies movies拿到数据，useState检测到movies的变化，会重新渲染，所以必须给在首次渲染的时候给movies设置一个值。
  useEffect(() => {
    getMovies();
  },[]);

  const getMovieData = async(movieId) => {
    try{
      console.log(`${movieId}!!!`);
      const response = await api.get( `/api/v1/movies/${movieId}`)
      console.log(response.data);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    }catch(err){
      console.log(err);
    }

  }

  return (
    <div className="App">
      <Header/>
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews = {setReviews}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
