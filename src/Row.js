import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";




const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //A snippet of code which runs based on a specific condition or variable
    useEffect(() => {
    // if brackets are blank [] it means run once when row loads, and don't run again
         async function fetchData() {
             const request = await axios.get(fetchUrl);
                // console.log(request.data.results);
             setMovies(request.data.results)
             return request;
        }
        fetchData();
        }, [fetchUrl]);

        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
        };
        
        //console.log(movies);

        const handleClick = (movie) => {
            if (trailerUrl){
                setTrailerUrl("");
            } else {
                movieTrailer( null, { tmdbId: movie.id})         //||movie.name || movie?.title || movie.original_title || "" 
                    .then((url)=>{
                        console.log("url is "+ url);
                        const urlParams = new URLSearchParams(new URL(url).search);
                        console.log("urlParams"+urlParams);
                        setTrailerUrl(urlParams.get("v"));
                        
                    })
                    .catch((error)=> console.log(error));
                    console.log(movie);
                    

            }
        }
        

    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
               
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                        
                ))}
            </div> 
             {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }

        </div>
    )
}

export default Row

