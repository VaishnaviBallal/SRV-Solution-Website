import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Website Development" img="card1.png" text=" We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Mobile App Development" img="card2.png" text="we specialize in creating high-quality mobile applications tailored to meet your business needs. Our team of skilled developers utilizes the latest technologies and best practices to deliver user-friendly, scalable, and secure mobile solutions for both iOS and Android platforms." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="BPO Services" img="card3.png" text="we offer a wide range of Business Process Outsourcing (BPO) services designed to help businesses enhance efficiency, reduce costs, and focus on their core competencies. Our dedicated team of professionals is committed to delivering high-quality services tailored to meet your specific business needs." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
