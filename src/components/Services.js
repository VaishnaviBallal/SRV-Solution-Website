import Card from "./Card";

function Services() {
  return (
    <div id="services" className="container services"> {/* Added id for scroll */}
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2 col-12">
              <Card 
                title="Website Development" 
                img="card1.png" 
                text="We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients." 
                className="h-100" 
              />
            </div>
            <div className="col-md-4 mb-2 col-12">
              <Card 
                title="Ethical Data Collection" 
                img="card2.png" 
                text="At SRV Solutions, we make sure our data collection for AI software is always done the right way—ethically and fairly—so you can trust the results. We work on image data collection of any country, audio data collection of many languages, video data collection." 
                className="h-100 text-break" 
              />
            </div>
            <div className="col-md-4 mb-2 col-12">
              <Card 
                title="Data Annotation and Transcription" 
                img="card3.png" 
                text="The process of labeling our collected audio, image, and video data to make it easier for AI models to learn—like adding Transcription to spoken words in audio clips, so the AI understands patterns accurately without confusion. We do this ethically by training our global team of experts to follow strict guidelines, avoid biases by including diverse examples from different people and cultures, and ensure every label is checked multiple times for quality and fairness." 
                className="h-100 text-break" 
              />
            </div>
          </div>
        </div>
      </div>
      {/* Added this div for bottom spacing - prevents About overlap */}
      <div style={{ height: '100px', marginBottom: '5rem' }} className="services-spacer"></div>
    </div>
  );
}

export default Services;
