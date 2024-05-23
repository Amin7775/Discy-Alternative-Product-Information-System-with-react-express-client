import { RiQuestionAnswerLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const RecentQueriesCard2 = ({query}) => {
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

      const shortedBoyCottingReason = boycottingReason?.slice(0,105)
    //   console.log(shortedBoyCottingReason,userImg)
    return (
        <div className="bg-white px-5 lg:px-7 py-5 lg:py-8 flex flex-col-reverse gap-6 rounded-md drop-shadow-sm h-full">
          <div className="w-full flex-grow flex flex-col justify-between">
            <div>
              {/* user info */}
              <div className="flex gap-2 items-center flex-wrap">
                <div className="flex gap-2 items-center">
                  <div className="avatar p-0.5 md:p-1 border-2 rounded-full border-custom_blue ">
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
                  <p className="text-custom_blue font-bold">{userName}</p>
                </div>
              </div>
              {/* user info ends */}
    
              <div className="my-2 text-custom_Dark flex flex-col gap-1">
                <div className="flex gap-5 items-center">
                  <p className="text-xs font-medium text-slate-500 bg-page_bg px-1 py-0.5 text-wrap">
                    Asked on : {submissionTime}
                  </p>
                </div>
                {/* query title */}
                <h1 className="text-xl lg:text-2xl font-medium mt-1 mb-1 ">{queryTitle}</h1>
                {/* <h3 className="font-medium  text-gray-600">Product Details - </h3> */}
    
                <h3 className="text-sm text-wrap md:text-base font-medium text-gray-600">
                  <span className="font-semibold"> Product Name :</span> {productName}
                </h3>
                <h3 className="text-smtext-wrap md:text-base font-medium text-gray-600">
                  <span className="font-semibold"> Brand :</span> {productBrand}
                </h3>
    
                <h3 className="text-sm text-wrap md:text-base font-medium text-gray-600">
                  <span className="font-semibold"> Alternation Reason :</span>{" "}
                </h3>
                <p className="text-sm text-wrap md:text-base font-medium text-gray-500">{shortedBoyCottingReason} ...</p>
              </div>
            </div>
            {/* recommendation box */}
            <div className="bg-page_bg py-5 px-3 md:p-5 flex flex-col md:justify-between mt-2 items-center gap-3">
              <div className="flex gap-1 px-3 py-2 border bg-white drop-shadow-sm w-full  justify-center">
                <RiQuestionAnswerLine className="text-xl"></RiQuestionAnswerLine>
                <p className="text-xs md:text-sm font-medium text-wrap text-center">
                  Recommendations : {recommendationCount}
                </p>
              </div>
              <div className="w-full ">
                <Link to={`/queryDetails/${_id}`}>
                  <button className="bg-custom_Dark text-white px-6 py-2 text-xs md:text-sm font-medium rounded-sm hover:bg-page_bg hover:text-custom_Dark transition-all duration-300 ease-in-out transform   drop-shadow-md w-full  border border-custom_Dark">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* img section */}
          <div className="w-full lg:flex-1 lg:h-[400px]">
            <div className="bg-page_bg flex justify-center items-center w-full px-5 py-5">
              <img src={productImage} alt="" className="object-contain" />
            </div>
          </div>
        </div>
    );
};

export default RecentQueriesCard2;