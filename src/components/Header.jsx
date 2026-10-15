import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header id="site_header" className={`site-header ${scrolled ? 'is-sticky' : ''}`}>
      {/* Top Bar */}
      <div className="header-top-bar">
        <div className="container header-top-container">
          <div className="top-bar-left">
            <span className="top-bar-text">Have any questions? call us</span>
            <a href="tel:0018182345678" className="top-bar-phone">
              <i className="fa-solid fa-phone phone-icon"></i>
              <span className="phone-number">+1 (818) 23 45 678</span>
            </a>
          </div>
          <div className="top-bar-right">
            <div className="social-links">
              <a href="https://www.facebook.com/XtraTheme" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/Xtra_Theme" target="_blank" rel="noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/XtraTheme/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#linkedin" aria-label="Linkedin">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="header-main-bar">
        <div className="container header-main-container">
          {/* Logo */}
          <div className="site-logo">
            <a href="#" title="Construction 2 WordPress Theme">
              <img
                src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/logo-construction.png"
                alt="Construction 2 WordPress Theme"
                width="270"
                height="100"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li className="nav-item active">
                <a href="#home" className="home-link" aria-label="Home">
                  <i className="fa-solid fa-house"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about">About</a>
              </li>
              <li className="nav-item">
                <a href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a href="#faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a href="#blog">Blog</a>
              </li>
              <li 
                className="nav-item has-dropdown"
                onMouseEnter={() => setPagesDropdownOpen(true)}
                onMouseLeave={() => setPagesDropdownOpen(false)}
              >
                <a href="#pages" onClick={(e) => e.preventDefault()}>
                  Pages <i className="fa-solid fa-angle-down dropdown-arrow"></i>
                </a>
                {pagesDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#cart">Cart</a></li>
                    <li><a href="#wishlist">Wishlist</a></li>
                    <li><a href="#my-account">My account</a></li>
                    <li><a href="#submenu">Submenu example</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Right Header Actions */}
          <div className="header-actions">
            <div className="search-wrapper">
              <button
                className="search-toggle-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle search box"
              >
                <i className={searchOpen ? "fa-solid fa-xmark" : "fa-solid fa-magnifying-glass"}></i>
              </button>

              {searchOpen && (
                <div className="search-dropdown-box">
                  <form onSubmit={handleSearchSubmit} className="search-form">
                    <input
                      type="text"
                      placeholder="Type keyword to search ..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    <button type="submit" aria-label="Search">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                  <div className="search-trending">
                    <span><i className="fa-solid fa-fire"></i> Trending searches:</span>
                    <div className="trending-tags">
                      <a href="#search" onClick={() => setSearchQuery('place')}>place</a>
                      <a href="#search" onClick={() => setSearchQuery('silence')}>silence</a>
                      <a href="#search" onClick={() => setSearchQuery('create')}>create</a>
                      <a href="#search" onClick={() => setSearchQuery('logo')}>logo</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#contact" className="btn-consultation">
              Free Consultation
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <i className={mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <img
                src="https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/2020/01/logo-construction.png"
                alt="Logo"
                width="160"
              />
              <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <ul className="mobile-nav-list">
              <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
              <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
              <li><a href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              <li>
                <a href="#contact" className="mobile-consultation-btn" onClick={() => setMobileMenuOpen(false)}>
                  Free Consultation
                </a>
              </li>
            </ul>
            <div className="mobile-drawer-footer">
              <div className="mobile-social-links">
                <a href="https://www.facebook.com/XtraTheme" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com/Xtra_Theme" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/XtraTheme/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="#linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
              <p>© Copyright 2026 XTRA</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
