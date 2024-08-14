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
            <form>
              <label>Email</label>
              <input type="text" placeholder="Email"></input>
              <button type="submit">Submit</button>
            </form>
            <p className="normal-text-white">
              Alternatively, drop me a mail at joshuawiidrichter@gmail.com
            </p>
          </div>
          <div className="footer-socials"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
