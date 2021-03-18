import { useEffect, useState } from "react";
import React from 'react';
import axios from './axios';
import './Row.css';

const base_url= "https://image.tmdb.org/t/p/w500";

function Row(props){
    // console.log(props)
    const title = props.title;
    const [movies, setMovies] = useState([]);
    
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
                        <img key={movie.id} className="row__img" src={`${base_url}${ props.isOriginals ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                    )
                })}
            </div>
        
        </div>
    )
}

export default Row;