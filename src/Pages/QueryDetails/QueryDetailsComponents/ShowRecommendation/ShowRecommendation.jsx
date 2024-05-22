import { useEffect, useState } from "react";
import ShowRecommendationUsers from "./ShowRecommendationUsers";
import axios from "axios";

const ShowRecommendation = ({ query }) => {
  const { recommendationCount,_id } = query;

  const [recommendations,setrecommendations]= useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:5000/recommendations")
    .then(res=>{ 
      setrecommendations(res.data)
    })
  },[])
  console.log(recommendations)

  return (
    <div className="bg-white px-6 md:px-10 py-8  rounded-md drop-shadow-sm">
      <h1 className="text-xl md:text-2xl text-center font-medium">
        Recommendations
      </h1>
      {recommendationCount < 0 ? (
        <>
          <div className="h-1 border-b my-6"></div>
          <h1 className="text-center text-gray-400">
            This query has no recommendations yet. Be the first one to write a
            recommendation.
          </h1>
          <div className="h-1 border-b my-6"></div>
        </>
      ) : (
        <>
          <div className="h-1 border-b mt-6 mb-2"></div>
          
          {
            recommendations?.map(recommendation =><ShowRecommendationUsers key={recommendation._id} recommendation={recommendation}></ShowRecommendationUsers> )
          }
          
        </>
      )}
    </div>
  );
};

export default ShowRecommendation;
