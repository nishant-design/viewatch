import { useEffect, useState } from "react";
import React from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url= "https://image.tmdb.org/t/p/w500";

function Row(props){
    // console.log(props)
    const title = props.title;
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const opts = {
        height: "360",
        width: "100%",
        playerVars:{
            autoplay: 1,
        }
    }   
    
    const loadTrailer = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || movie?.title || "").then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));

            }).catch((error)=>{
                console.log(error);
            })
        }
    }

    // a code which runs based on spefic conditions (page load or fetchUrl changes)
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            
            setMovies(request.data.results);
            return request; 
        }
        fetchData()
    }, [props.fetchUrl])
    
    return(
        <div className="row">
            {/* title */}
            <h2 className="title"> {title} </h2>

            {/* container containing poster of movies */}
            <div className="row__poster_container">
                {movies.map((movie)=>{
                    if(movie.backdrop_path == null){
                        return ;
                    }

                    return (
                        <div className="poster_wrapper">
                            <img 
                                key={movie.id} 
                                className="poster_img" 
                                src={`${base_url}${ props.isOriginals ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name}
                                onClick={()=> loadTrailer(movie)}/>
                            
                            <div className="poster_name"> {props.isOriginals ? "" : movie?.name || movie?.title} </div>
                        </div>
                    )   
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;