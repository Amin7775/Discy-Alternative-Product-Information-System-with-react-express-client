import { useContext } from "react";
import CustomContainer from "../../components/Container/CustomContainer";
import AboutDiscy from "./homeComponents/AboutDiscy/AboutDiscy";
import Left from "./homeComponents/Main/Left";
import Right from "./homeComponents/Main/Right";
// import Row1 from "./homeComponents/Row1/Row1";
import HomeBanner from "./homeComponents/Slider/Banner/HomeBanner";
import HomeSlider from "./homeComponents/Slider/HomeSlider";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {

  return (
    <div className="pb-10 bg-page_bg">
      {/* This is home */}
      <HomeSlider></HomeSlider>
      {/* About discy*/}
      <AboutDiscy></AboutDiscy>
      {/* rows/main content */}
      <CustomContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-2">
          {/* left side */}
          <div className="lg:col-span-2 border-2 p-3 lg:p-5">
            <Left></Left>
          </div>
          {/* right side */}
          <div className="">
            <Right></Right>
          </div>
        </div>
        {/* banner */}
      <HomeBanner></HomeBanner>
      </CustomContainer>
    </div>
  );
};

export default Home;
