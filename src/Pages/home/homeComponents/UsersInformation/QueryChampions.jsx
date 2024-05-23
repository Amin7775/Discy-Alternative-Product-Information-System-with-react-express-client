import { ImStatsBars } from 'react-icons/im';
import { FaTrophy } from "react-icons/fa6";
import QueryChampionsCard from './QueryChampionsCard';

const QueryChampions = ({queryStats}) => {
    // console.log(queryStats)
    return (
        <div className="bg-white dark:bg-dark_div_bg p-5 rounded-sm">
            <div className="flex gap-2 items-center dark:text-dark_text_1">
            <FaTrophy  className=" text-lg font-medium mb-2"></FaTrophy    > 
            <h1 className="pb-2 text-lg font-medium"> Query Champions</h1>
            </div>
            <div className=" border-t-2 "></div>
            {/* query champions */}
            <div className='grid grid-cols-1 gap-4 mt-5'>
                {
                    queryStats?.map(stats => <QueryChampionsCard stats={stats} key={stats._id}></QueryChampionsCard>)
                }
            </div>
        </div>
    );
};

export default QueryChampions;