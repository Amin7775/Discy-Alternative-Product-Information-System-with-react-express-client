import axios from "axios";
import { useEffect, useState } from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";

const UserDetails = ({ query }) => {
  const { userEmail, userImg } = query;
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/queryUser?email=${userEmail}`)
      .then((res) => {
        setUserData(res.data);
      });
  }, [userEmail]);

  return (
    <div className="bg-white px-6 md:px-10 py-8  rounded-md drop-shadow-sm dark:bg-dark_div_bg">
      <h1 className="text-xl md:text-2xl text-center font-medium">
        Query User Information
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-center mt-2 md:mt-3 lg:mt-4 dark:bg-slate-500">
        <div className="flex gap-1 px-3 py-2 border bg-page_bg dark:bg-slate-500 dark:border-gray-600 drop-shadow-sm   justify-center">
          <p className=" text-sm font-medium text-center">Name : {userData?.name}</p>
        </div>
        {/* <div className="flex gap-1 px-3 py-2 border bg-page_bg drop-shadow-sm justify-center items-center text-center">
          <p className=" text-sm font-medium ">Email : {userEmail}</p>
        </div> */}
        <div className="flex gap-1 px-3 py-2 border bg-page_bg dark:bg-slate-500 dark:border-gray-600 drop-shadow-sm   justify-center">
          <p className=" text-sm font-medium ">Queries : {userData?.totalQueries}</p>
        </div>
        <div className="flex gap-1 px-3 py-2 border bg-page_bg dark:bg-slate-500 dark:border-gray-600 drop-shadow-sm   justify-center">
          <p className=" text-sm font-medium ">Recommendations : {userData?.totalRecommendations}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
