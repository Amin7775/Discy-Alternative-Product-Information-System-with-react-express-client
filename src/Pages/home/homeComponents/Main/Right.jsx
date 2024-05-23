import { useEffect, useState } from "react";
import HomeStatistics from "../HomeStatistics/HomeStatistics";
import HomeUserInformations from "../UsersInformation/HomeUserInformations";
import axios from "axios";

const Right = () => {
    const [userStats,setUserStats]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:5000/users/stats")
        .then(res=>{
            const data = res.data
            setUserStats(data)
        })
    },[])
    console.log(userStats)
    const {
        totalNumberOfUsers,
        totalNumberOfQueries,
        totalNumberOfRecommendations
    }= userStats

    console.log(totalNumberOfUsers,totalNumberOfQueries,totalNumberOfRecommendations)
    return (
        <div className="flex flex-col gap-6">
           

            <HomeStatistics userStats={userStats}></HomeStatistics>
            <HomeUserInformations></HomeUserInformations>
            
        </div>
    );
};

export default Right;