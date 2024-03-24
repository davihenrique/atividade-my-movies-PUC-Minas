import { MovieItem } from "./MovieItem";

export const MoviesList = (props) => (
    <section>
        <ul>
            {props.movies.map(m => <MovieItem key={m.title} title={m.title} />)}
        </ul>
    </section>
)