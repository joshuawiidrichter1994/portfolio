import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="left-block">
          <h1>JR</h1>
        </div>
        <div className="right-block">
          <p className="header-p">ABOUT</p>
          <p className="header-p">CONTACT</p>
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
      <footer></footer>
    </div>
  );
}

export default App;
