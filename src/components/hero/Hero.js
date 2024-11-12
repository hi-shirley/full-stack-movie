import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Hero = ({ movies }) => {
    const navigate = useNavigate();

    function navToReviews(movieId) {
        navigate(`/Reviews/${movieId}`)
    }

    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper>
                                <div className='movie-card-container'>
                                    {/*"--img" 是一个自定义 CSS 变量的名称，CSS 变量以双连字符（--）开头。 */}
                                    <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className='movie-detail'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt='' />
                                            </div>
                                            
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                            
                                            <Link to={`/Trailer/${movie.trailerLink.slice(-11)}`}>
                                                <div className='movie-buttons-container'>
                                                    <div className='play-button-icon-container'>
                                                        <FontAwesomeIcon className='play-button-icon' icon = {faCirclePlay}/>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div>
                                                <Button variant='info' onClick={()=>navToReviews(movie.imdbId)}>Reviews</Button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero;  