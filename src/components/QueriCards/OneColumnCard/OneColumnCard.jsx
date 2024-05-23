// user on - all queries

import { RiQuestionAnswerLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const OneColumnCard = ({ query }) => {
  // console.log(query)
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
    <div className="bg-white dark:bg-dark_div_bg px-6 md:px-10 py-8 flex flex-col-reverse lg:flex-row gap-6 rounded-md drop-shadow-sm">
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
            <p className="text-custom_blue dark:text-gray-200 dark:font-semibold dark:text-lg font-bold">{userName}</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-xs font-medium text-slate-500 dark:bg-transparent dark:text-slate-400 bg-page_bg px-1 py-0.5">
              Asked on : {submissionTime}
            </p>
          </div>
        </div>
        {/* user info ends */}

        <div className="my-2 text-custom_Dark flex flex-col gap-1.5">
          {/* query title */}
          <h1 className="text-xl dark:text-gray-200 md:text-3xl font-medium mt-1 mb-2 md:mb-3">{queryTitle}</h1>
          {/* <h3 className="font-medium  text-gray-600">Product Details - </h3> */}

          <h3 className="text-sm dark:text-gray-300 md:text-base  font-medium  text-gray-600">
            <span className="font-semibold"> Product Name :</span> {productName}
          </h3>
          <h3 className="text-sm dark:text-gray-300 md:text-base  font-medium  text-gray-600">
            {" "}
            <span className="font-semibold"> Brand :</span> {productBrand}
          </h3>

          <h3 className="text-sm dark:text-gray-300 md:text-base font-medium   text-gray-600">
            <span className="font-semibold"> Alternation Reason :</span>{" "}
          </h3>
          <p className="text-sm dark:text-gray-300 md:text-base font-medium text-gray-500">{boycottingReason}</p>
          <div className="bg-page_bg py-5 px-3 md:p-5 flex flex-col md:flex-row md:justify-between mt-5 items-center gap-3 dark:bg-slate-500 dark:text-black">
            <div className="flex gap-1 px-3 py-2 border bg-white drop-shadow-sm w-full md:w-auto  justify-center dark:bg-dark_text_1">
              <RiQuestionAnswerLine className="text-xl"></RiQuestionAnswerLine>
              <p className=" text-sm font-medium ">
                Recommendations : {recommendationCount}
              </p>
            </div>
            <div className="w-full md:w-auto">
              {/* btn for recommendation / view details*/}
              <Link to={`/queryDetails/${_id}`}>
                <button  className="bg-custom_Dark text-white px-6 py-2 text-sm font-medium rounded-sm hover:bg-page_bg hover:text-custom_Dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:border drop-shadow-md hover:border-custom_Dark w-full md:w-auto">
                  Recommend
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* img section */}
      <div className="w-full lg:flex-1">
        <div className="bg-page_bg flex justify-center items-center w-full h-full px-5 py-5 lg:py-0  dark:bg-slate-500">
          <img src={productImage} alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default OneColumnCard;
