import DanielWin from "../CarouselPics/DanielWin.JPG";
import Lim_Pres from "../CarouselPics/Lim_Pres.jpg";
import firstGBMFall from "../CarouselPics/firstGBMFall.jpg";
import InvolvementFair from "../CarouselPics/InvolvementFair.jpg";
import AliceCarousel from "react-alice-carousel";
import KeyboardDoubleArrowRightRounded from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRounded from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
//import "react-alice-carousel/lib/alice-carousel.css";
import "../carousel.css";
import home from "./home_style.module.css";
import mission from "../Eboard-Photos/mission.png"
import vision from "../Eboard-Photos/vision.png"
const HomePage = () => {
  return (
    <>
      <div className="App">
        <AliceCarousel className={home.carousel}
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
          <img src={firstGBMFall} className={home.carousel} alt="pic" />
          <img src={Lim_Pres} className={home.carousel} alt="pic" />
          <img src={DanielWin} className={home.carousel} alt="pic" />
          <img src={InvolvementFair} className={home.carousel} alt="pic" />
        </AliceCarousel>
      </div>


      <div className={home.info}>
        <div className={home.icons}>
            <img src={vision}></img>
            <img src={mission}></img>
        </div>

        <div className={home.content}>
          <div className={home.vision}>
            <h1>Vision</h1>
            <div className={home.vision_text}>
              <p>To enhance the college experience and professional development of
              Hispanic/Latino students in the Ying Wu College of Computing
              (YWCC) by providing resources such as workshops, technical
              interview prep, and fostering a supportive community. HACCS
              promotes career advancement, facilitates information exchange, and
              celebrates cultural diversity.</p>
            </div>
          </div>

          <div className={home.mission}>
            <h1>Mission</h1>
            <div className={home.mission_text}>
              <p>  We are committed to cultivating a strong community, encouraging
              cultural awareness, and providing resources to empower members as
              they pursue successful careers in computing. Through collaboration
              and engagement, we aim to amplify our impact and contribute to a
              more inclusive and diverse computing field.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
