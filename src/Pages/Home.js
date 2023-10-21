import logo from "../HACCS_Logo.png";
import DanielWin from "../CarouselPics/DanielWin.JPG";
import Lim_Pres from "../CarouselPics/Lim_Pres.jpg";
import firstGBMFall from "../CarouselPics/firstGBMFall.jpg";
import InvolvementFair from "../CarouselPics/InvolvementFair.jpg";
import AliceCarousel from "react-alice-carousel";
import KeyboardDoubleArrowRightRounded from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRounded from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import "react-alice-carousel/lib/alice-carousel.css";
import "../carousel.css";
import home from "./home_style.module.css";
const HomePage = () => {
  return (
    <>
      <div className="App">
        <AliceCarousel
          renderPrevButton={() => {
            return (
              <KeyboardDoubleArrowLeftRounded style={{ fontSize: "48px" }} />
            );
          }}
          renderNextButton={() => {
            return (
              <KeyboardDoubleArrowRightRounded style={{ fontSize: "48px" }} />
            );
          }}
          animationType="slide"
          keyboardNavigation="true"
          mouseTracking="true"
          infinite="true"
          autoPlay="true"
          autoPlayInterval={3000}
        >
          <img src={firstGBMFall} className="sliderimg" alt="pic" />
          <img src={Lim_Pres} className="sliderimg" alt="pic" />
          <img src={DanielWin} className="sliderimg" alt="pic" />
          <img src={InvolvementFair} className="sliderimg" alt="pic" />
        </AliceCarousel>
      </div>
      <div className={home.info}>
        <div className={home.mission}>
          <h1>Mission</h1>
          <div className={home.missionText}>
            <p>
              To enhance the college experience and professional development of
              Hispanic/Latino students in the Ying Wu College of Computing
              (YWCC) by providing resources such as workshops, technical
              interview prep, and fostering a supportive community. HACCS
              promotes career advancement, facilitates information exchange, and
              celebrates cultural diversity.
            </p>
          </div>
        </div>
        <div className={home.vision}>
          <h1>Vision</h1>
          <div className={home.visionText}>
            <img></img>
            <p>
              We are committed to cultivating a strong community, encouraging
              cultural awareness, and providing resources to empower members as
              they pursue successful careers in computing. Through collaboration
              and engagement, we aim to amplify our impact and contribute to a
              more inclusive and diverse computing field.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <img className="contact-logo" src={logo} alt="HACCS Logo"></img>
        <h3>Contact Us</h3>
        <div className="txt_below">
          <p>njithaccs@gmail.com</p>
        </div>
        <h3 className="contact">Follow Us</h3>

        <div className="txt_below">
          <p> Discord Instagram</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
