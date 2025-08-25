import { NavLink } from "react-router-dom";

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 4.525c.636-.247 1.363-.416 2.427.465C9.792 2.013 10.146 2 12.315 2zm-1.161 1.525a.875.875 0 10-1.75 0 .875.875 0 001.75 0zm6.556 1.163a3.875 3.875 0 10-7.75 0 3.875 3.875 0 007.75 0z" clipRule="evenodd" />
  </svg>
);


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-about">
            <h3>Recipe Finder</h3>
            <p>
              Discover thousands of recipes from around the world. Your ultimate kitchen companion for delicious meals.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><NavLink to="/">Home</NavLink></li>
              <li><a href="/search">Search Recipes</a></li>
              <li><NavLink to="/wishlist">My Wishlist</NavLink></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-section-title">Follow Us</h4>
            <div className="footer-social-icons">
              <a href="#">
                <span className="sr-only">Twitter</span>
                <TwitterIcon />
              </a>
              <a href="#">
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} Recipe Finder. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;