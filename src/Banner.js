import { useEffect, useState } from "react";
import React from 'react';
import axios from './axios';
import './Banner.css';

const base_url= "https://image.tmdb.org/t/p/w500";

function Banner(props){
    const [movie, setMovie]  = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);

            return request;
        }
        fetchData()
    }, []);

    function truncate(str, maxlength) {
        return str?.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
      }

    return(
        <div className="banner" style={{backgroundImage:`url(${base_url}${movie?.backdrop_path})`}}> {/* background image */}
            <div className="banner__content">
                {/* title */}
                <h1>{movie.name}</h1>

                {/* div containing 2 buttons */}
                <div className="banner__btn_container">
                    <button className="banner__btn">Play</button>
                    <button className="banner__btn">My List</button>
                </div>

                {/* description */}
                <h3 className="banner__description"> {truncate(movie?.overview,250)}</h3>
            </div>
        
            {/* div to make a fadde effect at the bottom */}
            <div className="fade_bottom" />
        </div>
    )
}



export default Banner