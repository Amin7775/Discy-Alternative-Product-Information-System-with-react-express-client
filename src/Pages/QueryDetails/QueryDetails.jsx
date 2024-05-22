import { useLoaderData, useParams } from "react-router-dom";
import CustomContainer from "../../components/Container/CustomContainer";
import QueryDetailsCard from "./QueryDetailsComponents/QueryDetailsCard";
import UserDetails from "./QueryDetailsComponents/UserDetails/UserDetails";
import ShowRecommendation from "./QueryDetailsComponents/ShowRecommendation/ShowRecommendation";

const QueryDetails = () => {
    const loadedData = useLoaderData()
    console.log(loadedData)
    const param = useParams()
    console.log(param)
    return (
        <div className="min-h-screen bg-page_bg">
            <CustomContainer>
            This is Query Details
            <QueryDetailsCard query={loadedData}></QueryDetailsCard>
            <div className="my-10">
            <UserDetails query={loadedData}></UserDetails>
            </div>
            <div className="my-10">
            <ShowRecommendation query={loadedData}></ShowRecommendation>
            </div>
            </CustomContainer>
        </div>
    );
};

export default QueryDetails;