import moment from "moment";
import Banner from "../../components/Banner/Banner";
import CustomContainer from "../../components/Container/CustomContainer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const AddQueries = () => {
  // context
  const { user } = useContext(AuthContext);
   // moment js time
   const submissionTime = moment().format("do MMM YYYY, h:mma");

  // handle submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImage = form.productImage.value;
    const queryTitle = form.queryTitle.value;
    const boycottingReason = form.boycottingReason.value;

    const submitInfo = {
        userName : user?.displayName,
        userEmail : user?.email,
        userImg : user?.photoURL,
        productName,
        productBrand,
        productImage,
        queryTitle,
        boycottingReason,
        submissionTime,
        recommendationCount : 0
    }
    console.log(submitInfo)

    axios.post("http://localhost:5000/queries",submitInfo)
    .then(res=>{
      console.log(res)
    })
    form.reset()
  };
 
  return (
    <div className="min-h-screen bg-page_bg">
      <Banner heading={"Add Queries"}></Banner>
      <CustomContainer>
        <form className="space-y-6 my-8" onSubmit={handleSubmit}>
          {/*container*/}
          <div className="grid grid-cols-1 gap-5 w-full lg:w-1/2 mx-auto">
            {/* Product name */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900">
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
              <label className="block text-base font-medium leading-6 text-gray-900">
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
              <label className="block text-base font-medium leading-6 text-gray-900">
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
              <label className="block text-base font-medium leading-6 text-gray-900">
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
              <label className="block text-base font-medium leading-6 text-gray-900">
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
                className="flex w-full justify-center rounded-md bg-custom_blue px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out mt-1"
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
