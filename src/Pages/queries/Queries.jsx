import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import CustomContainer from "../../components/Container/CustomContainer";
import { useLoaderData } from "react-router-dom";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import OneColumnCard from "../../components/QueriCards/OneColumnCard/OneColumnCard";
import ThreeColumnCard from "../../components/QueriCards/ThreeColumnCard/ThreeColumnCard";
const Queries = () => {
  const loadedQueries = useLoaderData();
  const [queries, setQueries] = useState(loadedQueries);
  const [gridLayout, setGridLayout] = useState(1);

  console.log(queries.length);

  const handleLayout = (number) => {
    setGridLayout(number);
  };
  return (
    <div className="min-h-screen bg-page_bg">
      <Banner heading={"All Queries"}></Banner>
      {/* custom container */}
      <CustomContainer>
        <div className="mt-1 mb-6 flex justify-between items-center">
          <p className="text-end text-sm font-medium text-slate-500 opacity-80">
            Showing {queries.length} queries
          </p>
          {/* layout */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-slate-500 opacity-80">
              Change View :
            </p>
            <div>
              <button
                onClick={() => handleLayout(1)}
                className={`${
                  gridLayout == 1 ? "bg-custom_Dark" : "bg-custom_blue"
                }  text-white  p-1 rounded-md hover:bg-custom_Dark transition-all duration-300 transform scale-105`}
              >
                <CiGrid2H className="text-xl font-extrabold"></CiGrid2H>
              </button>
            </div>
            <div>
              <button
                onClick={() => handleLayout(2)}
                className={`${
                  gridLayout == 2 ? "bg-custom_Dark" : "bg-custom_blue"
                }  text-white  p-1 rounded-md hover:bg-custom_Dark transition-all duration-300 transform scale-105`}
              >
                <CiGrid2V className="text-xl font-extrabold"></CiGrid2V>
              </button>
            </div>
          </div>
          {/* layout end */}
        </div>
        {/* queries container */}
        {gridLayout == 1 ? (
          <>
            <div className="grid grid-cols-1 gap-10 pb-10">
                {
                    queries?.map(query => <OneColumnCard key={query._id} query={query}></OneColumnCard>)
                }
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 pb-10">
                {
                    queries?.map(query => <ThreeColumnCard key={query._id} query={query}></ThreeColumnCard>)
                }
            </div>
          </>
        )}
      </CustomContainer>
    </div>
  );
};

export default Queries;
