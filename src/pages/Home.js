import Header from '../components/Header';
import Footer from '../components/Footer'
import ParallaxSection from "../components/ParallaxSection";
import Promotion from "../components/Promotion";
import ProductList from "../components/ProductList";
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className="bg-primary overflow-auto scrollbar-hide">
      <Header/>
      <ParallaxSection/>
      <Promotion/>
      <ProductList/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
