import { useEffect, useState } from "react";
import { MoviesList } from "../Components/MoviesList";
import { MoviesContainer } from "../Styles/MoviesContainer";
import { MoviesService } from "../api/MoviesService";

export const Home = (props) =>{
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const { data } = await MoviesService.getMovies();
        setMovies(data.results);
    };

    useEffect(() => {fetchMovies();},[]);

    return(
        <MoviesContainer>
            <MoviesList movies={movies} />
        </MoviesContainer>
    )
};