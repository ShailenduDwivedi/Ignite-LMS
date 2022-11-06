import React from "react";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// import './assets/css/bootstrap.min.css'
// import './assets/css/fontawesome.css'
// import './assets/css/templatemo-edu-meeting.css'
// import './assets/css/owl.css'
// import './assets/css/lightbox.css'

// import './assets/js/jquery.min.js'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// import './assets/js/isotope.min.js'
// import './assets/js/owl-carousel.js'
// import './assets/js/lightbox.js'
// import './assets/js/tabs.js'
// import './assets/js/video.js'
// import './assets/js/slick-slider.js'
// import './assets/js/custom.js'
// import './assets/js/script.js'

import Header from './Header';
import Video from './Video';
import Banner from './Banner';
import CarouselItem from './CarouselItem';
import Upcoming from './Upcoming';
import About from './About';
import Courses from './Courses';
import Facts from './Facts';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
    
      <Header /> 

      <section className="section main-banner" id="top" data-section="section1">
          <Video /> 
          <Banner />
      </section>

      <CarouselItem />

      <Upcoming />

      <About />

      <Courses />

      <Facts />

      <Contact />

    </div>
  );
}

export default App;
