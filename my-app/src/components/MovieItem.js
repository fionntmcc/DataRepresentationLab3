// necessary inputs
import { useEffect } from "react";

const MovieItem = (props) => {

    // useEffect() functions handle side effects caused by anything
    // that may be outside of scope of the function such as
    // fetching data, subscriptions etc.
    useEffect(() => {
        // debug - log movies to console
        console.log("Movies:", props.myMovies);
      }, []);
    
    // return movie information for MovieItem
    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
            <h6>{props.myMovie.Year}</h6>
            <img src={props.myMovie.Poster} />
        </div>
    );
}

export default MovieItem;