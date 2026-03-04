import Header from './components/Header';
import Main from './components/Main';
import MovieList from './components/MovieList';
import OurListMovie from './components/OurListMovie';

function App() {
  return (
    <div>
      <Header/>
      <Main>
        <MovieList/>
        <OurListMovie/>
      </Main>
    </div>
  );
}

export default App;
