import './App.css';
import { Header } from './Components/Header';
import { MoviesList } from './Components/MoviesList';
import { MoviesContainer } from './Styles/MoviesContainer';

function App() {
  return (
    <div >
        <Header/>
        <MoviesContainer>
          <MoviesList movies={[]}/>
        </MoviesContainer>
    </div>
  );
}

export default App;
