import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Main() {
  return (
    <main className="main-content"> {/* Added class for CSS targeting */}
      <Services />
      <About />
      {/* <Contact /> */}
    </main>
  );
}

export default Main;
