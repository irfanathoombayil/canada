import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ForumsPage() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9">
            <div className="forum-title">Forums</div>
            <div className="mb-4">
              <div className="input-group search-box">
                <span className="input-group-text"><i className="fas fa-search"></i></span>
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </div>
            
            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title"><a href="news.html">News</a></h5>
                <p className="card-text text-muted">The latest news and updates from around Canada. Feel free to share with the community.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title"><a href="canada living.html">Canada Living Lounge</a></h5>
                <p className="card-text text-muted">Chill out in the lounge.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title"><a href="advice.html">Advice & Help</a></h5>
                <p className="card-text text-muted">Need advice? Someone to listen to you? This is the place.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title"><a href="funny.html">Funnies</a></h5>
                <p className="card-text text-muted">haha,that's funny!but don't keep it to yourself-let as all laugh:)</p>
              </div>
            </div>

            {/* Living in Canada Section */}
            <div className="living-section living-canada">
              <i className="fas fa-map-marker-alt"></i>
              Living in Canada
            </div>
            
            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title"><a href="welcome.html">Welcome to Canada</a></h5>
                <p className="card-text text-muted">Welcome to Canada!</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title"><a href="social.html">Socialising</a></h5>
                <p className="card-text text-muted">Discussions on local Canadian culture.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title"><a href="visas.html">Visas and Permits</a></h5>
                <p className="card-text text-muted">Information on visas, permits, and immigration for Canada.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Motoring</h5>
                <p className="card-text text-muted">Tips on driving, car rentals, and public transport in Canada.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Canadian Culture</h5>
                <p className="card-text text-muted">Discussions on Canadian traditions, festivals, and more.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Mom's Corner</h5>
                <p className="card-text text-muted">A space for parents in Canada to share experiences and advice.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Missing home!</h5>
                <p className="card-text text-muted">What do you miss about home while living in Canada?</p>
              </div>
            </div>

            {/* Work Related Section */}
            <div className="section-header">
              <i className="fas fa-briefcase"></i>
              Work Related
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Working in Canada</h5>
                <p className="card-text text-muted">Discussions on anything relating to work in Canada.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Salary & Allowances</h5>
                <p className="card-text text-muted">Discussions on salaries and allowances.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Business & Finance</h5>
                <p className="card-text text-muted">Discussions on Business and Finance.</p>
              </div>
            </div>

            {/* Education Section */}
            <div className="section-header">
              <i className="fas fa-graduation-cap"></i>
              Education
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <p className="card-text text-muted">The education system in Canada is directed and controlled by provincial and territorial governments.</p>
              </div>
            </div>

            {/* Lifestyle Section */}
            <div className="section-header">
              <i className="fas fa-users"></i>
              Lifestyle
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Dining & Restaurants</h5>
                <p className="card-text text-muted">Looking for info on new restaurants in Canada? Want to share some feedback about a place you have visited? This is the place to do it.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Electronics & Gadgets</h5>
                <p className="card-text text-muted">Do you have any technical questions? Need to get that washing machine fixed. This is the place to find out more.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Technology & Internet</h5>
                <p className="card-text text-muted">This is where you should post reviews and discuss about of the some of the latest technologies around town or even the worldwide.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Fashion & Beauty</h5>
                <p className="card-text text-muted">Updates on the latest fashion trends in Canada.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Politics</h5>
                <p className="card-text text-muted">Play nice in this forum and remember, respect is the key!</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Environment</h5>
                <p className="card-text text-muted">Share advice about how to be more environmentally friendly, or news about what Canada is doing to be more green.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Pets & Animals</h5>
                <p className="card-text text-muted">Need to find a vet, or discuss possible locations to walk your dog? Join in the discussions here.</p>
              </div>
            </div>

            {/* Health & Fitness Section */}
            <div className="section-header">
              <i className="fas fa-heartbeat"></i>
              Health & Fitness
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Health & Fitness</h5>
                <p className="card-text text-muted">Canada has an excellent healthcare system that provides universal coverage to all its residents...</p>
              </div>
            </div>

            {/* Entertainment Section */}
            <div className="section-header">
              <i className="fas fa-tv"></i>
              Entertainment
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Movies & Cinemas</h5>
                <p className="card-text text-muted">Did you watch a movie recently in one of the cinemas in Canada? Would you like to share what you thought about the movie? Then this page is...</p>
              </div>
            </div>

            {/* Others Section */}
            <div className="section-header">
              <i className="fas fa-folder"></i>
              Others
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Language</h5>
                <p className="card-text text-muted">Express yourself in English and French.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Company News</h5>
                <p className="card-text text-muted">Welcome to Canada Living's all-new Company News section. This section will be your platform to directly upload and publish your company news...</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Canada Living Website</h5>
                <p className="card-text text-muted">Discussion regarding this website.</p>
              </div>
            </div>

            {/* About Canada Section */}
            <div className="section-header">
              <i className="fas fa-book"></i>
              About Canada
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Explore Arts & Culture</h5>
                <p className="card-text text-muted">Following the tradition of world class museums, Canada has a rich cultural heritage.</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Travel and Tourism</h5>
                <p className="card-text text-muted">Places of interest in Canada...there's so much to explore!</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Shopping in Canada</h5>
                <p className="card-text text-muted">Everything you could ever want to know about Malls, Markets and Shopping in Canada!</p>
              </div>
            </div>

            <div className="card forum-card">
              <div className="card-body">
                <h5 className="card-title">Moving to Canada</h5>
                <p className="card-text text-muted">Canada has a high standard of living and many immigrants find living in Canada a welcoming multicultural experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section bg-light pt-4 pb-4">
        <div className="container">
          <hr /> {/* Top separator line */}
          <div className="row">
            {/* Properties */}
            <div className="col-md-3">
              <h5 className="footer-heading">Properties</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Apartment</a></li>
                <li><a href="#" className="text-dark">Shared Accommodation</a></li>
                <li><a href="#" className="text-dark">Villa</a></li>
                <li><a href="#" className="text-dark">Commercial</a></li>
              </ul>
            </div>

            {/* Vehicles */}
            <div className="col-md-2">
              <h5 className="footer-heading">Vehicles</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Cars for Sale</a></li>
                <li><a href="#" className="text-dark">Car Rental</a></li>
                <li><a href="#" className="text-dark">Showrooms</a></li>
              </ul>
            </div>

            {/* Classifieds */}
            <div className="col-md-2">
              <h5 className="footer-heading">Classifieds</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Furniture & Decor</a></li>
                <li><a href="#" className="text-dark">Electronics</a></li>
                <li><a href="#" className="text-dark">Fashion & Beauty</a></li>
                <li><a href="#" className="text-dark">Phones & Tablets</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-2">
              <h5 className="footer-heading">Services</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Labor & Moving</a></li>
                <li><a href="#" className="text-dark">Household Services</a></li>
                <li><a href="#" className="text-dark">Cleaning Services</a></li>
              </ul>
            </div>

            <div className="col-md-3">
              <div className="newsletter-card mt-3 p-3 rounded shadow-sm" style={{ width: '100%' }}>
                <h5 className="footer-heading">Subscribe to our newsletter</h5>
                <div className="input-group">
                  <input type="email" className="form-control email-input" placeholder="email" />
                  <button className="btn btn-primary subscribe-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <a href="#" className="text-dark me-3"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-youtube fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-dark me-3"><i className="fab fa-tiktok fa-2x"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-snapchat fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumsPage;


