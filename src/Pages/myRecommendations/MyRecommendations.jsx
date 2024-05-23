import { useContext, useState } from "react";
import Banner from "../../components/Banner/Banner";
import CustomContainer from "../../components/Container/CustomContainer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyRecommendations = () => {
  const [loading, setLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  let { user } = useContext(AuthContext);
  let currentEmail = user?.email;
  // console.log(currentEmail);

  // load data
  useEffect(() => {
    axios
      .get(
        `https://discy-server.vercel.app/recommendations/myRecommendations?email=${currentEmail}`,{withCredentials: true}
      )
      .then((res) => {
        setLoadedData(res.data);
      });
  }, [currentEmail]);

  // spinner
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  let serial = 0;

  //   handleDelete
  const handleDelete = (id,StatsQueryID) => {
    // console.log("clicked", id);
    axios
      .delete(`https://discy-server.vercel.app/recommendations/delete/${id}`)
      .then((res) => {
        // console.log(res);
        const remaining = loadedData.filter((data) => data._id != id);
        setLoadedData(remaining,);
        const queryID = {
            Qid : StatsQueryID
          }
          axios.patch("https://discy-server.vercel.app/queries/decrement", queryID).then((res) => {
            // console.log("from queries update", res);
          });
      });
  };

  return (
    <div className="min-h-screen bg-page_bg dark:bg-dark_page_bg dark:text-gray-200">
      <Helmet>
        <title>Discy - My Recommendation</title>
      </Helmet>
      <Banner heading={"Recommendations for me"}></Banner>
      <CustomContainer>
        <div>
          {loading ? (
            <div className="h-screen w-full flex items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <section className="py-10">
              <div className="overflow-x-auto">
                {loadedData?.length != 0 ? (
                  <table className="table table-xs md:table-sm lg:table-lg border border-black">
                    {/* head */}
                    <thead className="border border-black">
                      <tr className="border border-black dark:border-gray-500 dark:border-2">
                        <th className="text-xs md:text-sm lg:text-base  text-center hidden sm:table-cell dark:text-gray-200">
                          <label>Serial No</label>
                        </th>
                        <th className=" text-xs md:text-sm lg:text-base  text-center dark:text-gray-200">
                          Product{" "}
                        </th>
                        <th className=" text-xs md:text-sm lg:text-base  text-center  hidden sm:table-cell dark:text-gray-200">
                          Recommended To
                        </th>
                        <th className=" text-xs md:text-sm lg:text-base  text-center  dark:text-gray-200">
                          Recommended
                        </th>
                        <th className=" text-xs md:text-sm lg:text-base  text-center hidden sm:table-cell dark:text-gray-200">
                          Time
                        </th>
                        <th className=" text-xs md:text-sm lg:text-base  text-center dark:text-gray-200">
                          Action
                        </th>
                        <th className=" text-xs md:text-sm lg:text-base  text-center dark:text-gray-200">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}

                      {loadedData?.map((singleData) => (
                        <tr
                          key={singleData._id}
                          className="border border-black dark:border-gray-500 dark:border-2"
                        >
                          <th className="hidden sm:table-cell">
                            <label>
                              <p className="text-lg text-center font-normal">
                                {(serial = serial + 1)}
                              </p>
                            </label>
                          </th>
                          <td>
                            <div className=" text-center text-wrap">
                              {singleData?.productName}
                            </div>
                          </td>
                          <td className=" text-center text-wrap hidden sm:table-cell">
                            {singleData?.queryUserName}
                          </td>
                          <td className="text-center text-wrap ">
                            {singleData?.recommendedProductName}
                          </td>
                          {/* <td className="hidden sm:table-cell ">
                          <img src={`${singleData?.recommendedProductImage}`} className="h-20 w-full" alt="" />
                          
                        </td> */}

                          <td className="hidden sm:table-cell text-center text-wrap">
                            {singleData?.recommendationSubmissionTime}
                          </td>
                          <td>
                            <div className="flex justify-center">
                              <button
                                onClick={() => handleDelete(singleData._id,singleData.queryID)}
                                className="btn bg-custom_Dark text-white hover:bg-custom_blue transition-all ease-in-out duration-300 text-xs md:text-sm font-medium "
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center">
                              <Link to={`/queryDetails/${singleData?.queryID}`}>
                                <button className="btn bg-custom_Dark text-white hover:bg-custom_blue transition-all ease-in-out duration-300 text-xs md:text-sm font-medium ">
                                  View
                                </button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <>
                    <div className=" min-h-[40vh] w-full flex items-center justify-center mt-10">
                      <div className="min-h-full ">
                        <p className="text-lg md:text-2xl font-medium text-center">
                          You have not recommendations any queries yet!
                        </p>
                        <p className="text-lg md:text-2xl font-medium text-center mt-2">
                          Please add recommendations
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>
          )}
        </div>
      </CustomContainer>
    </div>
  );
};

export default MyRecommendations;
