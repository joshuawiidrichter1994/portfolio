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
            <a href="https://www.linkedin.com/in/joshua-richter-5373329b/">
              <p className="text-black">Cape Town based web developer</p>
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="portfolio-container"></div>
          <div className="portfolio-container"></div>
          <div className="portfolio-container"></div>
        </div>
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
