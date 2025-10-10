function About() {
  return (
    <>
      {/* Spacer: Now relies on CSS for margin; kept for scroll target */}
      <div id="about-scroll" className="about-scroll" style={{ width: '100%', height: '10px' }}></div>

      <div className="container about">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img 
              alt="about" 
              src="./img/img1.png" 
              className="img-fluid rounded"
              style={{ maxHeight: '400px', objectFit: 'cover' }} 
            />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <h3 className="about-subtitle mb-3">
              We're a team of talented developers and Data Management Experts that can help your business grow!
            </h3>
            <p className="main-p text-wrap">
              At SRV Solutions, we combine cutting-edge technology with ethical practices to deliver innovative AI and web solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
