import { useContext, useEffect, useState } from "react";
import HomeStatistics from "../HomeStatistics/HomeStatistics";
import HomeUserInformations from "../UsersInformation/HomeUserInformations";
import axios from "axios";
import QueryChampions from "../UsersInformation/QueryChampions";
import RecommendationHeroes from "../UsersInformation/RecommendationHeroes";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Right = () => {
    const [userStats,setUserStats]=useState([])
    const {user} = useContext(AuthContext)
    console.log(user)
    
    useEffect(()=>{
        // for user stats
        axios.get("http://localhost:5000/users/stats")
        .then(res=>{
            const data = res.data
            setUserStats(data)
        })
        //for query champions
    },[])
    const {
        totalNumberOfUsers,
        totalNumberOfQueries,
        totalNumberOfRecommendations
    }= userStats

    console.log(totalNumberOfUsers,totalNumberOfQueries,totalNumberOfRecommendations)
    return (
        <div className="flex flex-col gap-6">
           

            <HomeStatistics userStats={userStats}></HomeStatistics>
            {/* <HomeUserInformations></HomeUserInformations> */}
            <QueryChampions></QueryChampions>
            <RecommendationHeroes></RecommendationHeroes>
            
        </div>
    );
};

export default Right;