import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import CustomContainer from "../../components/Container/CustomContainer";
import { useLoaderData } from "react-router-dom";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import OneColumnCard from "../../components/QueriCards/OneColumnCard/OneColumnCard";
import ThreeColumnCard from "../../components/QueriCards/ThreeColumnCard/ThreeColumnCard";
import axios from "axios";
const Queries = () => {
  const loadedQueries = useLoaderData();
  const [queries, setQueries] = useState(loadedQueries);
  const [gridLayout, setGridLayout] = useState(1);
  // const [searchTextField,setSearchTextField]=useState('')
  console.log(queries.length);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.searchText.value;

    if (searchText == "") {
      axios.get("http://localhost:5000/queries").then((res) => {
        setQueries(res.data);
      });
    } else {
      axios
        .get(`http://localhost:5000/queries?search=${searchText}`)
        .then((res) => {
          setQueries(res.data);
        });
    }
  };

  const handleLayout = (number) => {
    setGridLayout(number);
  };
  return (
    <div className="min-h-screen bg-page_bg dark:bg-dark_page_bg">
      <div>
        <Banner heading={"All Queries"}></Banner>
      </div>
      {/* custom container */}
      <CustomContainer>
        {/* search bar */}
        <div className="">
          <div className="flex justify-center mt-5 mb-1 ">
            <form
              onSubmit={handleSearch}
              className="w-full lg:w-1/2 border border-gray-400 rounded-md drop-shadow-sm dark:drop-shadow-none dark:outline-white dark:border-2 dark:rounded-lg"
            >
              <div className="flex">
                <input
                  type="text"
                  name="searchText"
                  className="text-lg py-2  rounded-l-md rounded-r-none px-5 w-full focus:outline-1 "
                  placeholder="Search by product name"
                />
                <button className="px-5 rounded-r-md rounded-l-none bg-custom_Dark dark:bg-custom_blue text-white w-1/3 md:w-1/4 hover:bg-custom_blue dark:hover:bg-slate-500 transition-all duration-300 ease-in-out">
                  Search
                </button>
              </div>
            </form>
          </div>
          <p className="text-xs font-medium text-slate-400 lg:text-center mt-2 mb-5 lg:mt-1">
            Empty search for all queries
          </p>
        </div>
        <div className="mt-1 mb-6 flex justify-between items-center">
          <p className="text-end text-sm font-medium text-slate-500 dark:text-slate-400 opacity-80">
            Showing {queries.length} queries
          </p>
          {/* layout */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 opacity-80">
              Change View :
            </p>
            <div>
              <button
                onClick={() => handleLayout(1)}
                className={`${
                  gridLayout == 1 ? "bg-custom_Dark" : "bg-custom_blue"
                }  text-white  p-1 rounded-md hover:bg-custom_Dark transition-all duration-300 transform scale-105 dark:border-gray-500 dark:border`}
              >
                <CiGrid2H className="text-xl font-extrabold"></CiGrid2H>
              </button>
            </div>
            <div>
              <button
                onClick={() => handleLayout(2)}
                className={`${
                  gridLayout == 2 ? "bg-custom_Dark" : "bg-custom_blue"
                }  text-white  p-1 rounded-md hover:bg-custom_Dark transition-all duration-300 transform scale-105 dark:border-gray-600 dark:border`}
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
              {queries?.map((query) => (
                <OneColumnCard key={query._id} query={query}></OneColumnCard>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 pb-10">
              {queries?.map((query) => (
                <ThreeColumnCard
                  key={query._id}
                  query={query}
                ></ThreeColumnCard>
              ))}
            </div>
          </>
        )}
      </CustomContainer>
    </div>
  );
};

export default Queries;
