import { useContext, useEffect, useState } from "react";
import HomeStatistics from "../HomeStatistics/HomeStatistics";
import axios from "axios";
import QueryChampions from "../UsersInformation/QueryChampions";
import RecommendationHeroes from "../UsersInformation/RecommendationHeroes";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Right = () => {
    const [userStats,setUserStats]=useState([])
    const [queryStats,setQueryStats]=useState([])
    const [recommendationStats,setRecommendationStats] = useState([])
    const {user} = useContext(AuthContext)
    // console.log(user)
    
    useEffect(()=>{
        // for user stats
        axios.get("https://discy-server.vercel.app/users/stats")
        .then(res=>{
            const data = res.data
            setUserStats(data)
        })
        //for query champions
        axios.get("https://discy-server.vercel.app/users/sortQuery")
        .then(res=>{
            const data = res.data
            setQueryStats(data)
        })
        //for recommendation heroes
        axios.get("https://discy-server.vercel.app/users/sortRecommendations")
        .then(res=>{
            const data = res.data
            setRecommendationStats(data)
        })

    },[])
    // const {
    //     totalNumberOfUsers,
    //     totalNumberOfQueries,
    //     totalNumberOfRecommendations
    // }= userStats

    // console.log(totalNumberOfUsers,totalNumberOfQueries,totalNumberOfRecommendations)
    return (
        <div className="flex flex-col gap-6">
           

            <HomeStatistics userStats={userStats}></HomeStatistics>
            {/* <HomeUserInformations></HomeUserInformations> */}
            <QueryChampions queryStats={queryStats}></QueryChampions>
            <RecommendationHeroes recommendationStats={recommendationStats}></RecommendationHeroes>
            
        </div>
    );
};

export default Right;