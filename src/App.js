import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import video from '../src/assets/images/course-video.mp4';
import '../src/assets/css/owl.css';
import '../src/assets/js/owl-carousel.js';



function App() {
  return (
  <div className="App">
  <div className="sub-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-8">
          {/* <div className="left-content">
            <p>This is an educational <em>HTML CSS</em> template by TemplateMo website.</p>
          </div> */}
        </div>
        <div className="col-lg-4 col-sm-4">
          <div className="right-icons">
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-behance"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <header className="header-area header-sticky">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <nav className="main-nav">
                      <a href="index.html" className="logo">
                          Edu Meeting
                      </a>
                      <ul className="nav">
                          <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                          <li><a href="meetings.html">Meetings</a></li>
                          <li className="scroll-to-section"><a href="#apply">Apply Now</a></li>
                          <li className="has-sub">
                              <a href="javascript:void(0)">Pages</a>
                              <ul className="sub-menu">
                                  <li><a href="meetings.html">Upcoming Meetings</a></li>
                                  <li><a href="meeting-details.html">Meeting Details</a></li>
                              </ul>
                          </li>
                          <li className="scroll-to-section"><a href="#courses">Courses</a></li> 
                          <li className="scroll-to-section"><a href="#contact">Contact Us</a></li> 
                      </ul>        
                      <a className='menu-trigger'>
                          <span>Menu</span>
                      </a>
                  </nav>
              </div>
          </div>
      </div>
  </header>

  <section className="section main-banner" id="top" data-section="section1">
      <video autoPlay muted loop id="bg-video">
          <source src={video} type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
              <h6>Hello Students</h6>
              <h2>Welcome to Education</h2>
              <p>This is an edu meeting HTML CSS template provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_blank">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a rel="nofollow" href="https://www.pexels.com/@pressmaster" target="_blank">Pressmaster</a>.</p>
              <div className="main-button-red">
                  <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>

  <section className="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-service-item owl-carousel">
          
            <div className="item">
              <div className="icon">
                {/* <img src="images/service-icon-01.png" alt=""> */}
              </div>
              <div className="down-content">
                <h4>Best Education</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                {/* <img src="assets/images/service-icon-02.png" alt=""> */}
              </div>
              <div className="down-content">
                <h4>Best Teachers</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                {/* <img src="assets/images/service-icon-03.png" alt=""> */}
              </div>
              <div className="down-content">
                <h4>Best Students</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                {/* <img src="assets/images/service-icon-02.png" alt=""> */}
              </div>
              <div className="down-content">
                <h4>Online Meeting</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
            <div className="item">
              <div className="icon">
                {/* <img src="assets/images/service-icon-03.png" alt=""> */}
              </div>
              <div className="down-content">
                <h4>Best Networking</h4>
                <p>Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>


  </div>
  );
}

export default App;
