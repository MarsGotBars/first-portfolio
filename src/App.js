import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import TodoMain from "./Todo/TodoMain";
import IMAGES from "./image";

function App() {
  return (
    <Router>
      <div className="App">
        {/* header met nav */}
        <Header />
        <Switch>
          {/* content */}
          <Route path="/" exact component={Home} />
          <Route path="/TodoMain" exact component={TodoMain} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <section className="top">
      <figure>
        <img src={IMAGES.Prof} alt="Marcin" />
      </figure>
      <article>
        <h1 className="indexh1">Hallo, mijn naam is Marcin.</h1>
        <p className="sub">Welkom op mijn eerste React pagina!</p>
      </article>
      <article>
        <p>Mijn projecten</p><a href="#link"class="arrow down"></a>
      </article>
    </section>
    <main className="front-page">
      <section className="left">
        <article className="bottomArt">
          <h2>Recente projecten</h2>
        </article>
        <figure>
            <NavLink to="/TodoMain">
              <div className="overlay">
                <article>
                  <h3>To do list</h3>
                </article>
                <img src={IMAGES.Todoimg} alt="foto1" />
              </div>
            </NavLink>
            <a href="#link">
              <div className="overlay">
                <article>
                  <h3>Coming soon</h3>
                </article>
                <img src={IMAGES.Chat} alt="foto2" />
              </div>
            </a>
        </figure>
      </section>
      <section className="right">
        <article className="bottomArt" id="link">
          <h2>Voorgaande projecten</h2>
        </article>
        <figure>
            <a href="https://86908.ict-lab.nl/Villas4U/">
              <div className="overlay">
                <article>
                  <h3>Villas4U</h3>
                </article>
                <img src={IMAGES.Pex} alt="foto3" />
              </div>
            </a>
            <a href="https://86907.ict-lab.nl/PHP/Quisquiliarum/">
              <div className="overlay">
                <article>
                  <h3>CROW</h3>
                </article>
                <img src={IMAGES.Crow} alt="foto4" />
              </div>
            </a>
            <a href="https://86908.ict-lab.nl/pokemon-web/">
              <div className="overlay">
                <article>
                  <h3>Pokedex</h3>
                </article>
                <img src={IMAGES.Poke} alt="foto5" />
              </div>
            </a>
            <a href="https://weather-app-m.netlify.app/">
              <div className="overlay">
                <article>
                  <h3>Weather app</h3>
                </article>
                <img src={IMAGES.Weath} alt="foto6" />
              </div>
            </a>
        </figure>
      </section>
    </main>
    {/* footer */}
    <footer className="relative">
      <p>
        © <span>Marcin</span>
      </p>
    </footer>
  </div>
);
export default App;
