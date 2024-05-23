import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CustomContainer from "../../components/Container/CustomContainer";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateQueries = () => {
  const loadedData = useLoaderData();
  const params = useParams()
  // console.log(params)

  // const location = useLocation()
  const navigate = useNavigate()

  const {
    productName,
    productBrand,
    productImage,
    queryTitle,
    boycottingReason,
  } = loadedData;
  console.log(loadedData);
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
      productName,
      productBrand,
      productImage,
      queryTitle,
      boycottingReason,
    };

    axios.patch(`http://localhost:5000/queries/update/${params?.productId}`, submitInfo).
    then((res) => {
      // console.log(res)
      Swal.fire({
        title: "Update Success",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Go to My Queries",
        denyButtonText: `Update again`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/myqueries")
        } else if (result.isDenied) {
          window.location.reload()
        }
      });

    });
    //   form.reset();
  };
  return (
    <div className="min-h-screen bg-page_bg">
      <Banner heading={"Update Query"}></Banner>
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
                  defaultValue={productName}
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
                  defaultValue={productBrand}
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
                  defaultValue={productImage}
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
                  defaultValue={queryTitle}
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
                  defaultValue={boycottingReason}
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
                Update Query
              </button>
            </div>
          </div>
        </form>
      </CustomContainer>
    </div>
  );
};

export default UpdateQueries;
