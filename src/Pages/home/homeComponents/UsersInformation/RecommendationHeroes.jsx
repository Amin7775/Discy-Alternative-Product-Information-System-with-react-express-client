import { ImStatsBars } from "react-icons/im";
import { GiTightrope } from "react-icons/gi";
import { GiNinjaHeroicStance } from "react-icons/gi";
import RecommendationHeroesCard from "./RecommendationHeroesCard";

const RecommendationHeroes = ({recommendationStats}) => {
    console.log(recommendationStats)
    return (
        <div className="bg-white p-5 rounded-sm">
            <div className="flex gap-1 items-center ">
            <GiNinjaHeroicStance  className=" text-xl font-medium mb-3"></GiNinjaHeroicStance    > 
            <h1 className="pb-2 text-lg font-medium"> Recommendation Heroes</h1>
            </div>
            <div className=" border-t-2 "></div>
            {/*recommendation heroes */}
            <div className='grid grid-cols-1 gap-4 mt-5'>
                {
                    recommendationStats?.map(stats => <RecommendationHeroesCard stats={stats} key={stats._id}></RecommendationHeroesCard>)
                }
            </div>
        </div>
    );
};

export default RecommendationHeroes;