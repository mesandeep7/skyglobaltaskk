import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Testimonial from './components/testimonials/Testimonial.jsx'
import Footer from './components/footer/footer.jsx';
import LandPage from './components/landpage/landPage';
import ThirdFile from './components/thirdFile/thirdFile';
import FourthFile from './components/fourthFile/fourthFile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandPage />
      <ThirdFile />
      <div>
        <FourthFile />
      </div>
      <div>
        <Testimonial />
      </div>
      <Footer />

    </div>

  );
}

export default App;
