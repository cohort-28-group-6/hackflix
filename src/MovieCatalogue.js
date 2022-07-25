// 1. import the axios library
import axios from "axios";

// 2. import the useState hook and the useEffect Hook
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

// in order to recreate the behaviour of an anchor tag with the added benefit/logic of React Router, we can use the Link component

function MovieCatalogue() {

    console.log('Catalogue has rendered');

    // 3. initialize state to keep track of the movie data which will be returned from the API
    const [ movies, setMovies ] = useState( [] );

    // 4. initialize a useEffect to run the side effect of fetching data from the movie API (this side effect is running a single time on page load)
    useEffect( function() {
        console.log('side effect is running');
        // 5. make an asynchronous request ot the TMDB API using axios
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac',
                include_adult: true
            }
        }).then( function( showMeTheMovies ) {
            console.log(showMeTheMovies);
            
            // 6. save the returned data within state
            setMovies( showMeTheMovies.data.results );
            console.log(movies);
        })

        
        //  make an asynchronous request to the TMDB API using axios
        
        
    }, [] );


    return (
        <section>
            <h2>Here are your viewing options:</h2>


            <ul className="catalogue">

            {/* // 7. map through state and return a movie for each movie present in the returned API data */}

            {
                movies.map( function(movie) {
                    return (
                        // we want to make the posters clickable and navigate to a unique URL to represent each specific movie

                        <Link to={`/${movie.id}`} key={movie.id}>
                            <li>
                                <img 
                                    src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } 
                                    alt={ `a poster for the movie ${movie.title}` } 
                                />
                            </li>
                        
                        </Link>
                    )
                } )

            }

            </ul>

        </section>
    )
}

export default MovieCatalogue;