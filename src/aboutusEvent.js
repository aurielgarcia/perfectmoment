import './aboutus.css';
import Navbar from "./components/Navbar/Navbar"
import { FooterContainer } from './containers/footer'
import Slider from './components/Slider/Slider';
import'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />



      <section className='section'>
        <div className='container'>
          <div className='title'>
            <h1>About us</h1>
          </div>
          <div class='content'>
          <div class='article'>
            <p1>Perfect Moment is a reservation platform in Bulacan Philippines</p1><br></br>
            <br></br>
            <p2>Launched in 2022, it is a reservation platform that helps the company to endorse<br></br> their photography and videography services on their website. We believe Online<br></br> reservation should be accessible, easy, and enjoyable</p2>

          </div>
          <div class='image-section'>
            <img src='/images/img.png'></img>
          </div>
          
          </div>
            
           <div class="button">
            <a href="">Explore More</a>
           </div>

        </div>
      </section>

      {/* mission, vision*/}
      <section className='section bg-c-light border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-4 text-center'>
            <h1 className="main-heading">Vision, Mission and Values</h1>
            <div className='underline mx-auto'></div>
            </div>

          <div className='col-md-4 text-center'>
            <h3>Our Vision</h3>
          <p>We aim to provide services around all over the Philippines</p>
          </div>

          <div className='col-md-4 text-center'>
            <h3>Our Mission</h3>
          <p>We are here to provide functional web application that will satisfy everyone on Philippines and to emerge with other country</p>
          </div>

          <div className='col-md-4 text-center'>
            <h3>Our Core Values</h3>
          <p>Do the right thing.<br></br> Learn forever. <br></br> Own it. <br></br> Think customer first.</p>
          </div>

      </div>
        </div>
      </section>

      <section className='section bg-c-light2 border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-4 text-center'>
            <h1 className="main-heading">Why Choose Us?</h1>
            </div>

          <div className='col-md-12 text-right'>
            <h3>Immediately Confirm</h3>
          <p4>Every Reservation made on Perfect Moment is instantly confirmed. It only takes a few clicks to book your ideal event services</p4>
          </div>

          <div className='col-md-12 text-right'>
            <h3><br></br>No Reservation Fees</h3>
          <p4>We don't charge you any booking fees. In many instances, you can cancel your reservation without incurring any fees.</p4>
          </div>
          
          <div className='col-md-12 text-right'>
            <h3><br></br>Secure booking</h3>
          <p4>Through our secure platform, we enable hundreds of thousands of transactions each day, and we maintain the highest standards to ensure your privacy.</p4>
          </div>

      </div>
        </div>
      </section>

      

      <FooterContainer />
    </div>



  );
}

export default App;
