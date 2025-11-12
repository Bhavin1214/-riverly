import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchEngine from './components/SearchEngine';
import BackgroundImage from './components/BackgroundImage';
import Frame704 from './components/Hero/Frame704';
import AboutRiverly from './components/AboutRiverly';
import OffersSection from './components/OffersSection';
import DestinationsHeader from "./components/DestinationsHeader"
import DestinationsSection from "./components/DestinationsSection"
import Frame68Section from "./components/Frame68Section"
import Frame692 from "./components/Frame692"

function App() {
  return (
    <>
      <Header />
      <div class="hero-wrapper">
        <BackgroundImage />
        <Frame704 />
      </div>
      <SearchEngine />
      <AboutRiverly />
      <OffersSection />
      <DestinationsHeader/>
      <DestinationsSection/>
      <Frame68Section/>
      <Frame692/>
    </>
  );
}

export default App;
