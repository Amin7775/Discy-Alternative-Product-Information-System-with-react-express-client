import { TbDirectionSignFilled } from "react-icons/tb";
import { WiDirectionRight } from "react-icons/wi";

const ShowRecommendationUsers = ({recommendation}) => {
  const {recommendedProductName,
    recommendedProductBrand,
    recommendedProductImage,
    recommendTitle,
    recommendReason,
    queryID,
    productName,
    queryUserEmail,
    queryUserName,
    recommenderEmail,
    recommenderName,
    recommendationSubmissionTime,} = recommendation;
  return (
    <div>
      {/* information section */}
      <div className="flex flex-col md:flex-row md:items-center  md:gap-1 ">
        <div className="flex items-center">
        <WiDirectionRight className="text-5xl"></WiDirectionRight>
        <h1 className=" font-medium">
        Recommendation by : <span className="text-custom_blue dark:text-dark_text_1"> {recommenderName}</span>
        </h1>
        </div>
        <p className="text-sm -mt-2 md:-mt-0 mb-2 pl-12 md:mb-0 md:pl-0">on {recommendationSubmissionTime}</p>
      </div>
      {/* comment section */}
      <div className="bg-page_bg dark:bg-slate-500 px-5 py-5 flex flex-col-reverse md:flex-row rounded-lg">
        {/* text */}
        <div className="flex-1 flex flex-col gap-1">
          <h1 className="text-2xl font-medium mb-2">
            {recommendTitle}
          </h1>
          <h1 className=" ">
           <span className="font-medium">Product Name: </span> {recommendedProductName}
          </h1>
          <p className="font-medium">Reason :</p>
          <p className="text-sm font-medium">{recommendReason}</p>
        </div>
        {/* img section */}
        <div className="w-full md:w-1/5 max-h-44 bg-white dark:bg-opacity-50 py-3 px-1">
            <img src={recommendedProductImage  ? `${recommendedProductImage}` : "https://i.ibb.co/9sNq2GK/macbook-pro.jpg"} className="object-contain w-full max-h-36 md:h-full" alt="" />
        </div>
      </div>
      <div className="h-1 border-b mt-6 mb-2"></div>
    </div>
  );
};

export default ShowRecommendationUsers;
