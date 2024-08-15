import '../App.css';

function Portfolio() {
  return (
    <div>
      <main>
        {/* DESKTOP */}
        <div className="desktop">
          <div className="row">
            <div className="portfolio-container">
              <a href="https://gabyisabelle.com" target="_blank">
                <p className="text-black">Gaby Photography</p>
              </a>
              <div className="photo-container">
                <img
                  className="portfolio-photo"
                  src={require('../images/gaby-photography.jpg')}
                />
              </div>
              <p className="portfolio-description">
                Through the absence of color, the focus shifts to the intricate
                textures, graceful curves, and subtle contrasts of light and
                shadow, highlighting the innate beauty of each bloom.
              </p>
            </div>
            <div className="portfolio-container">
              <a href="https://purrfection.vercel.app/" target="_blank">
                <p className="text-black">Purrfection</p>
              </a>
              <div className="photo-container">
                <img
                  className="portfolio-photo"
                  src={require('../images/purrfection.jpg')}
                />
              </div>
              <p className="portfolio-description">
                Purrfection is a Cape Town based artist.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-container">
              <a href="https://bumbo.co.za/" target="_blank">
                <p className="text-black">Bumbo</p>
              </a>

              <div className="photo-container">
                <img
                  className="portfolio-photo-bumbo"
                  src={require('../images/bumbo-logo.png')}
                />
              </div>
              <p className="portfolio-description">
                Quality, comfort and safety without compromise
              </p>
            </div>
            <div className="portfolio-container">
              <a
                href="https://book-store-snowy-seven.vercel.app/"
                target="_blank"
              >
                <p className="text-black">Library</p>
              </a>
              <div className="photo-container">
                <img
                  className="portfolio-photo"
                  src={require('../images/book-store.jpg')}
                />
              </div>
              <p className="portfolio-description">
                Keep an online library of all the books you own.
              </p>
            </div>
          </div>
        </div>
        {/* MOBILE / TABLET */}
        <div className="mobile"></div>
      </main>
    </div>
  );
}

export default Portfolio;
