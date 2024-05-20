import { RiMessage2Line } from "react-icons/ri";

const HomeStatistics = () => {
    return (
        <div className="bg-white p-5 rounded-sm">
            <h1 className="pb-2 text-lg font-medium">Our Statistics</h1>
            <div className=" border-t-2 ">
            {/* main statistics section*/}
            <div className="flex flex-col gap-3 text-white pt-5">
                {/* Total Queries */}
                <div className="bg-[#2f6ffd] flex items-center justify-between p-4 font-semibold">
                    {/* name */}
                    <div className="flex items-center gap-2 ">
                    <RiMessage2Line className="text-xl"></RiMessage2Line>
                    <h1 >
                    Queries
                    </h1>
                    </div>
                    {/* Stats */}
                    <div className="mr-1">
                        5
                    </div>
                </div>
                {/* Total Recommendations */}
                <div className="bg-[#ff5338] flex items-center justify-between p-4 font-semibold">
                    {/* name */}
                    <div className="flex items-center gap-2 ">
                    <RiMessage2Line className="text-xl"></RiMessage2Line>
                    <h1 >
                    Recommendations
                    </h1>
                    </div>
                    {/* Stats */}
                    <div className="mr-1">
                        65
                    </div>
                </div>
                {/* Total Users */}
                <div className="bg-[#333333] flex items-center justify-between p-4 font-semibold">
                    {/* name */}
                    <div className="flex items-center gap-2 ">
                    <RiMessage2Line className="text-xl"></RiMessage2Line>
                    <h1 >
                    Users
                    </h1>
                    </div>
                    {/* Stats */}
                    <div className="mr-1">
                        6
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeStatistics;