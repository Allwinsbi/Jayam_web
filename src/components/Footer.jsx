import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="site_footer" className="page-footer">
      <div className="middle-footer">
        <div className="container footer-center-content">
          <div className="footer-logo-wrapper">
            <img
              src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/footer-logo-construction.png"
              alt="Construction 2 Logo"
              className="footer-logo-img"
            />
          </div>

          <p className="footer-about-text">
            A company is any entity that engages in business. <br />
            Companies can be structured in different ways. <br />
            For example, your company can be a sole proprietorship,<br />
            a partnership, or a corporation.
          </p>

          <div className="footer-social-icons">
            <a href="https://www.facebook.com/XtraTheme" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/Xtra_Theme" target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/XtraTheme/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Youtube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container bottom-footer-container">
          <div className="bottom-left">
            <span>© 2026 XTRA, Powered by WordPress</span>
          </div>

          <div className="bottom-right">
            <a href="#contact">Contact Us</a>
            <span className="divider-pipe">|</span>
            <a href="#about">About</a>
            <span className="divider-pipe">|</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
