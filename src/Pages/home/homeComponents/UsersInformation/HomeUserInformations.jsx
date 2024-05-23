import { ImStatsBars } from "react-icons/im";

const HomeUserInformations = () => {
    

    return (
        <div className="bg-white p-5 rounded-sm">
            <div className="flex gap-1 items-center ">
            <ImStatsBars  className=" text-lg font-medium mb-3"></ImStatsBars    > 
            <h1 className="pb-2 text-lg font-medium"> Top Members</h1>
            </div>
            <div className=" border-t-2 "></div>
            {/* query champions */}
        </div>
    );
};

export default HomeUserInformations;