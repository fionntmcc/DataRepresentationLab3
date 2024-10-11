import { useEffect } from "react";

const MovieItem = (props) => {

    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
            <h6>{props.myMovie.Year}</h6>
            <img src={props.myMovie.Poster} />
        </div>
    );
}

export default MovieItem;