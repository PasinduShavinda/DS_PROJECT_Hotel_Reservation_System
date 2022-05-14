import "../shv_Footer/footer.css";


const Footer = () => {
  return (

    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join with us to receive our best offers and deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'> 
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
         
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <a href = "/location"><h2>Location</h2></a>
   
            
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
      
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Payments</h2>

            
          </div>

        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
     
          </div>
     
        </div>
      </section>
      <center>
          <small className='website-rights'>Hilton Surface Paradice © 2022</small>
          </center>
    </div>

  );
}

export default Footer;