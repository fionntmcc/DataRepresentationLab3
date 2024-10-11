import { useEffect } from "react";

const MovieItem = (props) => {

    

    return(
        <div>
            <h3>{props.myMovie.title}</h3>
        </div>
    );
}

export default MovieItem;