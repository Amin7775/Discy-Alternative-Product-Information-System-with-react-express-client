
import RecentQueriesCard from "./RecentQueriesCard.jsx/RecentQueriesCard";

const RecentQueries = ({loadedQueries}) => {
    return (
        <div>
            
            {/* cards container */}
            <div className="grid grid-cols-1 gap-6">
                {
                    loadedQueries?.map(query => <RecentQueriesCard query={query} ></RecentQueriesCard>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;