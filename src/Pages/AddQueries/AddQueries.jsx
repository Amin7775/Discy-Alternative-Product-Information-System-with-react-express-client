import moment from "moment";
import Banner from "../../components/Banner/Banner";
import CustomContainer from "../../components/Container/CustomContainer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddQueries = () => {
  const navigate = useNavigate();
  // context
  const { user } = useContext(AuthContext);
  // moment js time
  let submissionTime = moment().format('Do MMMM YYYY, h:mm a');
  // console.log(submissionTime)
  // handle submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImage =
      form.productImage.value || "https://i.ibb.co/9sNq2GK/macbook-pro.jpg";
    const queryTitle = form.queryTitle.value;
    const boycottingReason = form.boycottingReason.value;

    const submitInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      userImg: user?.photoURL,
      productName,
      productBrand,
      productImage,
      queryTitle,
      boycottingReason,
      submissionTime,
      recommendationCount: 0,
    };
    // console.log(submitInfo)

    axios.post("https://discy-server.vercel.app/queries", submitInfo).then((res) => {
      // console.log(res);
    });
    let currentUser = { email: user?.email };
    axios.patch("https://discy-server.vercel.app/users/query", currentUser).then(() => {
      //console.log(res)
      Swal.fire({
        title: "Query Added Successfully",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Go to My Queries",
        denyButtonText: `Add Another`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/myqueries");
        } else if (result.isDenied) {
          form.reset();
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-page_bg dark:bg-dark_page_bg">
      <Helmet>
        <title>Discy - Add Queries</title>
      </Helmet>
      <Banner heading={"Add Queries"}></Banner>
      <CustomContainer>
        <form className="space-y-6 my-8" onSubmit={handleSubmit}>
          {/*container*/}
          <div className="grid grid-cols-1 gap-5 w-full lg:w-1/2 mx-auto">
            {/* Product name */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
                Product Name
              </label>
              <div className="mt-2">
                <input
                  name="productName"
                  type="text"
                  placeholder="Add product name"
                  required
                  className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
                />
              </div>
            </div>
            {/* Product Brand */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
                Product Brand
              </label>
              <div className="mt-2">
                <input
                  name="productBrand"
                  type="text"
                  placeholder="Add product brand name"
                  required
                  className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
                />
              </div>
            </div>
            {/* Product Image */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
                Product Image
              </label>
              <div className="mt-2">
                <input
                  name="productImage"
                  type="text"
                  placeholder="Add product image link here"
                  required
                  className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
                />
              </div>
            </div>
            {/* Product Brand */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
                Query Title
              </label>
              <div className="mt-2">
                <input
                  name="queryTitle"
                  type="text"
                  placeholder="Add query title "
                  required
                  className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
                />
              </div>
            </div>
            {/* Boycotting Reason Details */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
                Boycotting Reason
              </label>
              <div className="mt-2">
                <textarea
                  name="boycottingReason"
                  type="text"
                  placeholder="Add boycotting reason details "
                  required
                  className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
                  rows={4}
                />
              </div>
            </div>
            {/* btn */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-custom_blue px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out mt-1 dark:hover:bg-slate-500"
              >
                Add Query
              </button>
            </div>
          </div>
        </form>
      </CustomContainer>
    </div>
  );
};

export default AddQueries;
