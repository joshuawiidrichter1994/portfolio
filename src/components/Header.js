import '../App.css';

function Header() {
  return (
    <div>
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
    </div>
  );
}

export default Header;
