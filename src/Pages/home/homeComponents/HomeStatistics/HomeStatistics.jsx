import { BiStats } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { IoMdStats } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { RiMessage2Line, RiQuestionAnswerLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const HomeStatistics = ({userStats}) => {

    const {
        totalNumberOfUsers,
        totalNumberOfQueries,
        totalNumberOfRecommendations
    }= userStats

    return (
        <div className="bg-white dark:bg-dark_div_bg p-5 rounded-sm">
            <div className="flex gap-1 items-center dark:text-dark_text_1">
            <ImStatsBars  className=" text-lg font-medium mb-3"></ImStatsBars    > 
            <h1 className="pb-2 text-lg font-medium "> Our Statistics</h1>
            </div>
            <div className=" border-t-2 dark:border-gray-200">
            {/* main statistics section*/}
            <div className="flex flex-col gap-3 text-white pt-5">
                {/* Total Queries */}
                <div className="bg-[#2d6ff7] flex items-center justify-between p-4 font-medium">
                    {/* name */}
                    <div className="flex items-center gap-2 ">
                    <RiMessage2Line className="text-xl"></RiMessage2Line>
                    <h1 >
                    Queries
                    </h1>
                    </div>
                    {/* Stats */}
                    <div className="mr-1">
                        {totalNumberOfQueries}
                    </div>
                </div>
                {/* Total Recommendations */}
                <div className="bg-[#ff5338] flex items-center justify-between p-4 font-medium">
                    {/* name */}
                    <div className="flex items-center gap-2 ">
                    <RiQuestionAnswerLine className="text-xl"></RiQuestionAnswerLine >
                    <h1 >
                    Recommendations
                    </h1>
                    </div>
                    {/* Stats */}
                    <div className="mr-1">
                        {totalNumberOfRecommendations}
                    </div>
                </div>
                {/* Total Users */}
                <div className="bg-[#333333] dark:bg-slate-500 flex items-center justify-between p-4 font-medium">
                    {/* name */}
                    <div className="flex items-center gap-2 ">
                    <FaRegUser  className="text-lg"></FaRegUser >
                    <h1 >
                    Users
                    </h1>
                    </div>
                    {/* Stats */}
                    <div className="mr-1">
                        {totalNumberOfUsers}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeStatistics;