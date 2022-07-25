//  import axios so that we can make some async requests
import axios from "axios";

// import useState AND useEffect Hooks
import { useEffect, useState} from 'react';

//  we want to use the movie id which is currently in the URL (at which this component renders) winthin our axios call
//  in order to grab information from a URL (when using Router) we can useParams Hook
import { useParams } from 'react-router-dom'

function MovieInfo(props) {
    //same thing as useParams
    console.log(props);

    //  let's call the useParams Hook and see the 
    const { movieId: movie_id } = useParams();
    // console.log( useParams() );

    // call the usePara

    // initialize state to represent the movie details which will be returennd to use from the API
    const [details, setDetails] = useState( {} );

    // define a side effect which will fetch data about the movie after the component has first rendered
    useEffect( function() {
        // use axios to make a request to the movie id endpoint
        axios ({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac'
            }
        }).then( function(movieInfo) {
            console.log(movieInfo)
            setDetails(movieInfo.data)
            // use the API data and update state
        })
    }, [] )

    return (
        <section className="poster">
            <div className="description">
                {/* render the movie tagline, summary, and title */}
                <h4>{details.tagline }</h4>
                <h3>{details.title}</h3>
                <p>{details.overview}</p>
            </div>
            <div className="poster-image">
                {/* render the movie poster */}
                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={`A move poster for ${details.title}`} />
            </div>
        </section>
    )
}

export default MovieInfo;