import ExternalNav from '../ExternalNav/ExternalNav';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p className='footer__text'>
          This is not an official 7-Eleven website.
        </p>
        <p className='footer__text-copyright'>
          It is part of a web development bootcamp.
        </p>
        <p className='footer__text-copyright'>
          &copy; 2026 Arthur Klein Becker - TripleTen Web Development Bootcamp
        </p>
      </div>
      <div className='footer__nav'>
        <ExternalNav />
      </div>
    </footer>
  );
}

export default Footer;
