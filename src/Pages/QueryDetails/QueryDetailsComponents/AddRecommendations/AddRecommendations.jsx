import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

const AddRecommendations = ({ query }) => {
  // user
  const { user } = useContext(AuthContext);
  // loaded data
  const { _id, userName, userEmail, productName } = query;

  // moment js time
  const recommendationSubmissionTime = moment().format("do MMM YYYY, h:mma");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const recommendedProductName = form.recommendedProductName.value;
    const recommendedProductBrand = form.recommendedProductBrand.value;
    const recommendedProductImage = form.recommendedProductImage.value;
    const recommendTitle = form.recommendTitle.value;
    const recommendReason = form.recommendReason.value;

    const recommendInfo = {
      recommendedProductName,
      recommendedProductBrand,
      recommendedProductImage,
      recommendTitle,
      recommendReason,
      queryID: _id,
      productName,
      queryUserEmail: userEmail,
      queryUserName: userName,
      recommenderEmail: user?.email,
      recommenderName: user?.displayName,
      recommendationSubmissionTime,
    };

    console.log(recommendInfo);

    // post
    axios
      .post("http://localhost:5000/recommendations", recommendInfo)
      .then(res => {
        console.log(res)
      });
    // incrementing user recommendation
    let currentUser = { email: user?.email };
    axios.patch("http://localhost:5000/users", currentUser).then(() => {
      //console.log(res)
    });
    // incrementing query recommendations
    const queryID = {
      Qid : _id
    }
    axios.patch("http://localhost:5000/queries", queryID)
    .then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Recommendation Added Successfully",
        showConfirmButton: false,
        timer: 1500
      })
      .then(()=>{
        window.location.reload()
      })
    });
  };
  return (
    <div className="bg-white px-6 md:px-10 py-8  rounded-md drop-shadow-sm">
      <h1 className="text-xl md:text-2xl text-center font-medium">
        Add Recommendation
      </h1>
      <div className="h-1 border-b mt-4 pb-1"></div>
      <form className="space-y-6 mt-7" onSubmit={handleSubmit}>
        {/*container*/}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 w-full  mx-auto">
          {/* Product name */}
          <div>
            <label className="block text-base font-medium leading-6 text-gray-900">
              Product Name
            </label>
            <div className="mt-2">
              <input
                name="recommendedProductName"
                type="text"
                placeholder="Add product name"
                required
                className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
              />
            </div>
          </div>
          {/* Product Brand */}
          <div>
            <label className="block text-base font-medium leading-6 text-gray-900">
              Product Brand
            </label>
            <div className="mt-2">
              <input
                name="recommendedProductBrand"
                type="text"
                placeholder="Add product brand name"
                required
                className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
              />
            </div>
          </div>
          {/* Product Image */}
          <div>
            <label className="block text-base font-medium leading-6 text-gray-900">
              Product Image
            </label>
            <div className="mt-2">
              <input
                name="recommendedProductImage"
                type="text"
                placeholder="Add product image link here"
                required
                className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
              />
            </div>
          </div>
          {/* Product Brand */}
          <div>
            <label className="block text-base font-medium leading-6 text-gray-900">
              Recommendation Title
            </label>
            <div className="mt-2">
              <input
                name="recommendTitle"
                type="text"
                placeholder="Add Recommendation Title "
                required
                className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
              />
            </div>
          </div>
          {/* Boycotting Reason Details */}
          <div className="lg:col-span-2">
            <label className="block text-base font-medium leading-6 text-gray-900">
              Recommendation reason
            </label>
            <div className="mt-2">
              <textarea
                name="recommendReason"
                type="text"
                placeholder="Add Recommendation reason"
                required
                className="block w-full rounded-md border-0 py-2 text-lg font-medium shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 text-slate-600"
                rows={4}
              />
            </div>
          </div>
          {/* btn */}
          <div className="">
            <button
              type="submit"
              className="flex w-full lg:w-1/2 justify-center rounded-md bg-custom_blue px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out mt-1"
            >
              Add Query
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecommendations;
