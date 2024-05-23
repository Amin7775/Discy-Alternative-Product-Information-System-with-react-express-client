
const QueryChampionsCard = ({stats}) => {
    console.log(stats)
    return (
        <div className="">
            <div className="flex gap-3 items-center">
            <div className="avatar shadow-md rounded-full  ">
              <div className="w-11 rounded-full ">
                <img
                //   src={`${stats?.image}`}
                  src={stats?.image}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
            <p className="text-sm text-custom_blue dark:text-dark_text_1 font-semibold">{stats.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">Queries :  {stats.totalQueries}</p>
            </div>
          </div>
        </div>
    );
};

export default QueryChampionsCard;