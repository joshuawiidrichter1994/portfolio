import '../App.css';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-contact">
            <p className="normal-text-white">
              If you are interested in my services, please submit your email
              below and I will get back to you ASAP
            </p>
            <form className="contact-form">
              <input
                type="text"
                placeholder="Email"
                className="email-field"
              ></input>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            <p className="normal-text-white">
              Alternatively, drop me a mail at joshuawiidrichter@gmail.com
            </p>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/joshua-richter-5373329b/"
              target="_blank"
            >
              <img
                src={require('../images/linkedin.png')}
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
