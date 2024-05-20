// this is a container for all pages. 


const CustomContainer = ({children}) => {
    return (
        <div className="max-w-[88%] md:max-w-2xl lg:max-w-6xl xl:max-w-7xl  mx-auto py-5">
            {children}
        </div>
    );
};

export default CustomContainer;