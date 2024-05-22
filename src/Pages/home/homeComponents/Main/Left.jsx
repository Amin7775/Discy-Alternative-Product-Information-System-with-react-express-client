import OneColumnCard from "../../../../components/QueriCards/OneColumnCard/OneColumnCard";
import RecentQueries from "../RecentQueries/RecentQueries";

const Left = ({loadedQueries}) => {

    return (
        <div className="grid grid-cols-1">
            <RecentQueries loadedQueries={loadedQueries}></RecentQueries>
        </div>
    );
};

export default Left;