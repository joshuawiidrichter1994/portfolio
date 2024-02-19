import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="left-block">
          <h1>JR</h1>
        </div>
        <div className="right-block">
          <div className="text-container">
            <a
              href="https://www.linkedin.com/in/joshua-richter-5373329b/"
              target="_blank"
            >
              <p className="text-header">Cape Town based web developer</p>
            </a>
          </div>
        </div>
      </header>
      <main>
        {/* ROW 1 */}
        <div className="row">
          <div className="portfolio-container">
            <a href="https://purrfection.vercel.app/" target="_blank">
              <p className="text-black">Purrfection</p>
            </a>
            <div className="photo-container">
              <img
                className="portfolio-photo"
                src={require('./images/purrfection.jpg')}
              />
            </div>
            <p className="portfolio-description">
              Purrfection is a Cape Town based artist.
            </p>
          </div>
          <div className="portfolio-container">
            <p className="text-black">Music Production</p>
            <div className="photo-container">
              <img
                className="portfolio-photo"
                src={require('./images/music-production.jpg')}
              />
            </div>
            <p className="portfolio-description">
              Years of practice and learning dedicated to the art of mixing,
              mastering, and music production
            </p>
          </div>
          <div className="portfolio-container">
            <p className="text-black">Gaby Photography</p>
            <div className="photo-container">
              <img
                className="portfolio-photo"
                src={require('./images/gaby-photography.jpg')}
              />
            </div>
            <p className="portfolio-description">
              Through the absence of color, the focus shifts to the intricate
              textures, graceful curves, and subtle contrasts of light and
              shadow, highlighting the innate beauty of each bloom.
            </p>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="row">
          <div className="portfolio-container"></div>
          <div className="portfolio-container"></div>
          <div className="portfolio-container"></div>
        </div>
      </main>
      <footer>
        <div className="footer-container">
          <p className="text-white">
            web developer, mixing / mastering engineer, and producer
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
