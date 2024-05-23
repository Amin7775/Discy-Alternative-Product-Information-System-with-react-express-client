import connectImg from './../../../../assets/images/illustrations/undraw_online_connection_6778a.png'

const AboutDiscy = () => {
  return (
    <div className="max-w-[88%] md:max-w-2xl lg:max-w-6xl xl:max-w-7xl  mx-auto pt-5 pb-2 dark:text-gray-200">
      <h1 className="text-4xl font-medium text-center my-5">
        Share & grow the world's knowledge!
      </h1>
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:items-center lg:justify-between lg:mt-10 ">
      <div className='lg:w-3/4 px-2'>
      <h1 className='text-2xl md:text-3xl font-medium dark:text-gray-100 text-custom_blue mb-1'>
      Welcome to Discy,
      </h1>
      <p className="text-lg md:text-xl leading-7 md:leading-8">
      where you embark on a journey of discovery. Explore a
        realm of endless possibilities as you seek alternatives curated to meet
        your needs. From insightful recommendations to tailored solutions,
        immerse yourself in to query experience that transcends the ordinary.
        Step in and uncover the perfect alternatives for you.
      </p>
        </div>
        <div className='border-2 dark:border-gray-200 dark:border-0 mx-auto lg:mx-0'>
        <img src={connectImg} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default AboutDiscy;
