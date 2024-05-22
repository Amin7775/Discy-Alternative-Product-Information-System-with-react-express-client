import { useLoaderData } from "react-router-dom";
import CustomContainer from "../../components/Container/CustomContainer";
import QueryDetailsCard from "./QueryDetailsComponents/QueryDetailsCard";
import UserDetails from "./QueryDetailsComponents/UserDetails/UserDetails";
import ShowRecommendation from "./QueryDetailsComponents/ShowRecommendation/ShowRecommendation";
import AddRecommendations from "./QueryDetailsComponents/AddRecommendations/AddRecommendations";

const QueryDetails = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  // const param = useParams()
  // console.log(param)
  return (
    <div className="min-h-screen bg-page_bg">
      <CustomContainer>
        {/* query details details */}
        <QueryDetailsCard query={loadedData}></QueryDetailsCard>
        {/* User details */}
        <div className="my-10">
          <UserDetails query={loadedData}></UserDetails>
        </div>
        {/* show recommendation comments */}
        <div className="my-10">
          <ShowRecommendation query={loadedData}></ShowRecommendation>
        </div>
        {/* add recommendation form */}
        <div className="my-10">
          <AddRecommendations query={loadedData}></AddRecommendations>
        </div>
      </CustomContainer>
    </div>
  );
};

export default QueryDetails;
