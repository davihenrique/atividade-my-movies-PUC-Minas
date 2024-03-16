import { MovieItem } from "./MovieItem";

export const MoviesList = (props) => (
    <section>
        <ul>
            {props.movies.map(m => <MovieItem title={m.title} />)}
        </ul>
    </section>
)