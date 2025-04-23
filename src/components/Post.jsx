import React from 'react';
import './Post.css';

// Simple SVG Icon Components
const IconChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconHandshake = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="4" height="8" rx="1"></rect>
    <rect x="18" y="8" width="4" height="8" rx="1"></rect>
    <path d="M2 12h20"></path>
    <path d="M9 12l3-2"></path>
    <path d="M12 10l3 2"></path>
  </svg>
);

const AppStore = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="5" fill="black"/>
    <path d="M40.5 20C40.5 15 44 11.5 48.5 11.5C53 11.5 56.5 15 56.5 20C56.5 25 53 28.5 48.5 28.5C44 28.5 40.5 25 40.5 20Z" fill="white"/>
    <path d="M70 11.5H65V28.5H70V11.5Z" fill="white"/>
    <path d="M80 11.5H85C90 11.5 93 15 93 20C93 25 90 28.5 85 28.5H80V11.5Z" fill="white"/>
    <path d="M25 11.5L30 28.5H25L24 25H20L19 28.5H14L19 11.5H25Z" fill="white"/>
  </svg>
);

const GooglePlay = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="40" rx="5" fill="white"/>
    <path d="M20 8L35 20L20 32V8Z" fill="#4285F4"/>
    <path d="M20 8L35 20H50L20 32V8Z" fill="#34A853"/>
    <path d="M50 20H95C97.7614 20 100 17.7614 100 15V20C100 22.7614 97.7614 25 95 25H50V20Z" fill="#FBBC04"/>
    <path d="M50 20H95C97.7614 20 100 22.2386 100 25V20C100 17.2386 97.7614 15 95 15H50V20Z" fill="#EA4335"/>
  </svg>
);

const canadaLivingPage = () => {
  return (
    <div className="qatar-living-container">
      {/* Navigation Bar */}
      <header className="main-header">
        <div className="container header-container">
          <div className="logo-container">
            <a href="/" className="logo">
              <span className="logo-text-primary">Canada Living<span className="logo-registered"></span></span>
              
            </a>
          </div>
          
          <nav className="main-nav">
            <a href="/properties" className="nav-link">Properties</a>
            <a href="/vehicles" className="nav-link">Vehicles</a>
            <a href="/classifieds" className="nav-link">Classifieds</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/jobs" className="nav-link">Jobs</a>
            <div className="dropdown">
              <button className="nav-link dropdown-toggle">
                More <IconChevronDown />
              </button>
              <div className="dropdown-menu">
                <a href="/pages">Pages</a>
                <a href="/forums">Forums</a>
                <a href="/events">Events</a>
              </div>
            </div>
          </nav>
          
          <div className="user-actions">
            <button className="btn-post-ad">
              <span className="plus-icon">+</span> Post Ad
            </button>
            <a href="/favorites" className="icon-link">
              <IconHeart />
            </a>
            <a href="/profile" className="icon-link">
              <IconUser />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* News Search Section - Replaced forum selection */}
        <div className="container news-search-section">
          <div className="news-search-form">
            <div className="news-search-inputs">
              <div className="input-group">
                <label htmlFor="newsId">News ID</label>
                <input 
                  type="text" 
                  id="newsId" 
                  className="news-input" 
                  placeholder="Enter news ID"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="title">Title</label>
                <input 
                  type="text" 
                  id="title" 
                  className="news-input" 
                  placeholder="Enter news title"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="author">Author</label>
                <input 
                  type="text" 
                  id="author" 
                  className="news-input" 
                  placeholder="Enter author name"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="pubDate">Publication Date</label>
                <input 
                  type="date" 
                  id="pubDate" 
                  className="news-input"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="category">Category</label>
                <div className="select-container">
                  <select id="category" className="news-select">
                    <option value="">All Categories</option>
                    <option value="politics">Politics</option>
                    <option value="business">Business</option>
                    <option value="health">Health</option>
                    <option value="technology">Technology</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="sports">Sports</option>
                    <option value="science">Science</option>
                    <option value="environment">Environment</option>
                  </select>
                  <div className="select-arrow">
                    <IconChevronDown />
                  </div>
                </div>
              </div>
              
              <button className="btn-search">
                post news
              </button>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Categories */}
        <div className="container categories-section">
          <div className="category-grid">
            {/* Properties */}
            <div className="category">
              <h3 className="category-title properties">Properties</h3>
              <ul className="category-list">
                <li><a href="#">Apartment</a></li>
                <li><a href="#">Shared Accommodation</a></li>
                <li><a href="#">Villa</a></li>
                <li><a href="#">Commercial</a></li>
              </ul>
            </div>

            {/* Vehicles */}
            <div className="category">
              <h3 className="category-title vehicles">Vehicles</h3>
              <ul className="category-list">
                <li><a href="#">Cars for Sale</a></li>
                <li><a href="#">Car Rental</a></li>
                <li><a href="#">Showrooms</a></li>
              </ul>
            </div>

            {/* Classifieds */}
            <div className="category">
              <h3 className="category-title classifieds">Classifieds</h3>
              <ul className="category-list">
                <li><a href="#">Furniture & Decor</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Fashion & Beauty</a></li>
                <li><a href="#">Phones & Tablets</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="category">
              <h3 className="category-title services">Services</h3>
              <ul className="category-list">
                <li><a href="#">Labor & Moving</a></li>
                <li><a href="#">Household Services</a></li>
                <li><a href="#">Cleaning Services</a></li>
              </ul>
            </div>
          </div>

          <div className="category-grid secondary-grid">
            {/* Jobs */}
            <div className="category">
              <h3 className="category-title jobs">Jobs</h3>
              <ul className="category-list">
                <li><a href="#">Jobseekers</a></li>
                <li><a href="#">Freelancers</a></li>
              </ul>
            </div>

            {/* Pages */}
            <div className="category">
              <h3 className="category-title pages">Pages</h3>
              <ul className="category-list">
                <li><a href="#">Living2022</a></li>
                <li><a href="#">eShops</a></li>
                <li><a href="#">QL Events</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="category">
              <h3 className="category-title social">Social</h3>
              <ul className="category-list">
                <li><a href="#">COVID-19</a></li>
                <li><a href="#">Groups</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Forums</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>

            {/* Advertise Section */}
            <div className="category advertise-box">
              <div className="advertise-section">
                <div className="advertise-header">
                  <IconHandshake />
                  <span>Want to advertise on Qatar Living?</span>
                </div>
                <p>Take a look at our <a href="#" className="highlight-link">Advertise page</a></p>
              </div>
              
              <div className="feedback-section">
                <p>
                  Help us improve Qatar Living Send us <a href="#" className="highlight-link">feedback now</a> or <a href="#" className="highlight-link">Contact Us</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* App Download and Newsletter */}
        <div className="newsletter-section">
          <div className="container newsletter-container">
            <div className="newsletter-content">
              <div className="newsletter-form">
                <h3>Subscribe to our newsletter to get the latest updates</h3>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="email-input"
                  />
                  <button className="btn-subscribe">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="app-download">
                <a href="#" className="app-btn">
                  <AppStore />
                </a>
                <a href="#" className="app-btn">
                  <GooglePlay />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container footer-container">
          <div className="footer-content">
            <div className="social-links">
              {/* Social media icons */}
              <a href="#" className="text-dark me-3"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-youtube fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-tiktok fa-2x"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-snapchat fa-2x"></i></a>
            </div>
            <div className="footer-links">
              <a href="#">Help</a>
              <a href="#">Rules for posting ads</a>
              <a href="#">Website Terms</a>
              <a href="#">Advertising Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="container status-container">
          <div className="weather">34°C Partly sunny</div>
          <div className="datetime">
            <span className="time">8:00 PM</span>
            <span className="date">4/2/2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default canadaLivingPage;