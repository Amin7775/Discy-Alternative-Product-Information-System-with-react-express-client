import AboutDiscy from "./homeComponents/AboutDiscy/AboutDiscy";
import Row1 from "./homeComponents/Row1/Row1";
import HomeSlider from "./homeComponents/Slider/HomeSlider";

const Home = () => {
    return (
        <div className="pb-10 bg-page_bg">
            {/* This is home */}
            <HomeSlider></HomeSlider>
            {/* About discy*/}
            <AboutDiscy></AboutDiscy>
            {/* rows/main content */}
            <div className="max-w-7xl mx-auto">
                <Row1></Row1>
            </div>
        </div>
    );
};

export default Home;