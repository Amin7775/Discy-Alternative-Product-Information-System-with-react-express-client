import { useContext } from "react";
import CustomContainer from "../../components/Container/CustomContainer";
import AboutDiscy from "./homeComponents/AboutDiscy/AboutDiscy";
import Left from "./homeComponents/Main/Left";
import Right from "./homeComponents/Main/Right";
// import Row1 from "./homeComponents/Row1/Row1";
import HomeBanner from "./homeComponents/Slider/Banner/HomeBanner";
import HomeSlider from "./homeComponents/Slider/HomeSlider";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const loadedQueries = useLoaderData();

  return (
    <div className="pb-10 dark:bg-dark_page_bg bg-page_bg">
      <Helmet>
        <title>Discy</title>
      </Helmet>
      {/* This is home */}
      <HomeSlider></HomeSlider>
      {/* About discy*/}
      <AboutDiscy></AboutDiscy>
      {/* rows/main content */}
      <CustomContainer>
        <h1 className="text-2xl md:text-3xl font-medium  mb-5 text-custom_blue text-center lg:text-start dark:text-gray-200">
          Recent Queries
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* left side */}
          <div className="lg:col-span-2">
            <Left loadedQueries={loadedQueries}></Left>
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
