import AddMovie from './component/AddMovie';
import './App.css';
import { MovieProvider } from './component/MovieContext';
import MovieList from './component/MovieList';
import Nav from './Nav';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
