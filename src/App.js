import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Navbar from './components/Navbar'
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <Row title="Netflix Originals" isLargeRow fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchURL={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
