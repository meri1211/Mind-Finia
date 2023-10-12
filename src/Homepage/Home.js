// creating the Home component
import Header from "../components/Header";
import Navbar from "../Components/Navbar";
import AnimatedDiv from "../Homepage/AnimatedDiv";
import PictureDiv from "../Homepage/PictureDiv";
import AnimatedLogosContainer from "../Homepage/AnimatedLogosContainer";
import ServicesDiv from "../Homepage/ServicesDiv";
import GravityInfoSolutions from "../Homepage/GravityInfoSolutions";
import ValuedCustomer from "../Homepage/ValuedCustomer";
import Reviews from "../Homepage/Reviews";
import Workflow from "../Homepage/Workflow";
import Footer from "../Components/Footer";

function Home() {
  const headerImageSrc = "src/Homepage/homeHeaderPhoto.png";
  const headerText =
    "Mindfinia combines intellectual expertise ('Mind') with limitless technological possibilities ('Finia'), encapsulating a promise of strategic insight and boundless solutions for technology consulting and services";
  const logoSrc = "src/Components/mindFiniaLogo.png";

  return (
    <div>
      <Header
        imageSrc={headerImageSrc}
        headerText={headerText}
        logoSrc={logoSrc}
      >
        <Navbar />
      </Header>
      <AnimatedDiv/>
      <PictureDiv/>
      <AnimatedLogosContainer/>
      <ServicesDiv/>
      <PictureDiv/>
      <GravityInfoSolutions/>
      <ValuedCustomer/>
      <Reviews/>
      <Workflow/>
      <Footer/>
    </div>
  );
}

export default Home;
