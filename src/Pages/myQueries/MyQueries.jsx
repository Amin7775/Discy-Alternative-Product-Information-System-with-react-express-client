import { useContext, useEffect, useState } from "react";
import CustomContainer from "../../components/Container/CustomContainer";
import customBanner2 from "./../../assets/images/Banner/customBanner2.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
// import OneColumnCard from "../../components/QueriCards/OneColumnCard/OneColumnCard";
import MyQueriesCard from "./MyQueriesComponents/MyQueriesCard";
import { Helmet } from "react-helmet-async";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  let currentUser = user?.email;
  const [queriesData, setQueriesData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/queries/myQueries?email=${currentUser}`,{withCredentials:true})
      .then((res) => {
        setQueriesData(res.data);
      });
  }, [currentUser]);
  console.log(queriesData);
  return (
    <div className="min-h-screen bg-page_bg dark:bg-dark_page_bg">
      <Helmet>
        <title>Discy - My Queries</title>
      </Helmet>
      {/* <img src={customBanner2}  className="w-full" alt="" /> */}
      <div
        className="h-[300px]"
        style={{
          background: `url(${customBanner2})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-center text-4xl font-medium">My Queries</h1>
          {/* add queries btn */}
          <div className="mt-7 flex flex-col md:flex-row items-center gap-2">
            <h3 className="text-lg">Have Any Queries?</h3>
            <Link to={"/addQueries"}>
              <button className="bg-custom_Dark px-5 rounded-sm py-1 hover:bg-page_bg hover:text-custom_Dark transition-all duration-300 ease-in-out transform hover:scale-105">
                Add a Query
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CustomContainer>
        {queriesData.length == 0 ? (
          <>
          <div className=" min-h-[50vh] w-full flex items-center justify-center mt-10">
            <div className="min-h-full ">
                <p className="text-lg md:text-2xl font-medium text-center">You have not added any Queries yet!</p>
                <p className="text-lg md:text-2xl font-medium text-center mt-2">Please add a query</p>
            </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4">
              {queriesData?.map((query) => (
                <MyQueriesCard key={query._id} query={query} queriesData={queriesData} setQueriesData={setQueriesData}></MyQueriesCard>
              ))}
            </div>
          </>
        )}
        {/* <div className="grid grid-cols-1 gap-4">
          {queriesData?.map((query) => (
            <OneColumnCard query={query}></OneColumnCard>
          ))}
        </div> */}
      </CustomContainer>
    </div>
  );
};

export default MyQueries;
