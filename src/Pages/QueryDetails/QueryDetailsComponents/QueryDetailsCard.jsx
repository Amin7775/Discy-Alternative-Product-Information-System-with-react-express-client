import { RiQuestionAnswerLine } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";

const QueryDetailsCard = ({ query }) => {
    const {
        _id,
        userName,
        userEmail,
        userImg,
        productName,
        productBrand,
        productImage,
        queryTitle,
        boycottingReason,
        submissionTime,
        recommendationCount,
      } = query;
      // console.log(productBrand);
      return (
        <div className="bg-white px-6 md:px-10 py-8 flex flex-col-reverse lg:flex-row gap-6 rounded-md drop-shadow-sm dark:bg-dark_div_bg">
          <div className=" lg:w-3/5 xl:w-3/4 ">
            {/* user info */}
            <div className="flex gap-2 items-center flex-wrap">
              <div className="flex gap-2 items-center">
                <div className="avatar p-0.5 md:p-1 border-2 rounded-full border-custom_blue dark:border-gray-200">
                  <div className="w-9 rounded-full ">
                    <img
                      src={
                        userImg
                          ? `${userImg}`
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </div>
                <p className="text-custom_blue dark:text-dark_text_1 dark:text-lg dark:font-semibold font-bold">{userName}</p>
              </div>
              
            </div>
            {/* user info ends */}
    
            <div className="my-2 text-custom_Dark flex flex-col gap-1.5 dark:text-gray-200">
              {/* query title */}
              <h1 className="text-xl md:text-3xl font-medium mt-1 mb-2 md:mb-3">{queryTitle}</h1>
              {/* <h3 className="font-medium  text-gray-600">Product Details - </h3> */}
    
              <h3 className="text-sm md:text-base  font-medium  text-gray-600 dark:text-gray-300">
                <span className="font-semibold"> Product Name :</span> {productName}
              </h3>
              <h3 className="text-sm md:text-base  font-medium  text-gray-600 dark:text-gray-300">
                {" "}
                <span className="font-semibold"> Brand :</span> {productBrand}
              </h3>
    
              <h3 className="text-sm md:text-base font-medium   text-gray-600 dark:text-gray-300">
                <span className="font-semibold"> Alternation Reason :</span>{" "}
              </h3>
              <p className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-300">{boycottingReason}</p>
              <div className="bg-page_bg py-5 px-3 md:p-5 flex flex-col md:flex-row md:justify-between mt-5 items-center gap-3 dark:bg-slate-500 dark:text-black">
                {/* bottom section */}
                <div className="flex gap-1 px-3 py-2 border bg-white drop-shadow-sm w-full md:w-auto  justify-center  dark:bg-dark_text_1">
                  <RiQuestionAnswerLine className="text-xl"></RiQuestionAnswerLine>
                  <p className=" text-sm font-medium ">
                    Recommendations : {recommendationCount}
                  </p>
                </div>
                <div className="flex gap-1 px-3 py-2 border bg-white drop-shadow-sm w-full md:w-auto  justify-center items-center dark:bg-dark_text_1">
                  <MdOutlineAccessTime className="text-xl"></MdOutlineAccessTime>
                  <p className=" text-sm font-medium ">
                  Asked on : {submissionTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* img section */}
          <div className="w-full lg:flex-1">
            <div className="bg-page_bg flex justify-center items-center w-full h-full px-5 py-5 lg:py-0 dark:bg-slate-500">
              <img src={productImage} alt="" className="object-contain" />
            </div>
          </div>
        </div>
      );
    };

export default QueryDetailsCard;