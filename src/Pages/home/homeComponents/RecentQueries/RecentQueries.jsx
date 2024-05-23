
import RecentQueriesCard from "./RecentQueriesCard.jsx/RecentQueriesCard";
import RecentQueriesCard2 from "./RecentQueriesCard.jsx/RecentQueriesCard2";

const RecentQueries = ({loadedQueries}) => {
    return (
        <div>
            
            {/* cards container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    // loadedQueries?.map(query => <RecentQueriesCard query={query} ></RecentQueriesCard>)
                    loadedQueries?.map(query => <RecentQueriesCard2 query={query} ></RecentQueriesCard2>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;