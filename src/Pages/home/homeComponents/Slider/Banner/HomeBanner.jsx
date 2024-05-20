import { Link } from 'react-router-dom';
import BannerImg from './../../../../../assets/images/HomeBanner/4.jpg'

const HomeBanner = () => {
    return (
        <div className='h-[450px] text-white flex items-center my-5 ' style={{background: `url(${BannerImg})`, backgroundRepeat: 'none' , backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div className='md:pl-20  text-center md:text-start'>
            <h1 className='text-xl md:text-3xl font-medium mb-4 md:mb-6'>Unlock the World of Knowledge</h1>
            <p className='max-w-[85%] mx-auto md:mx-0 md:max-w-[60%] text-base md:text-lg font-medium mb-6'> Dive into a world of queries and find the best alternatives recommended by others.Ask questions and get real answers Whether you’re looking for crossword answers, practical advice or you’ve just come for a chat.</p>
            <Link to={'/queries'}>
            <button className='md:text-lg font-medium bg-white text-custom_Dark px-10 py-2 md:py-3 hover:bg-custom_Dark hover:text-white transition duration-300 ease-in-out transform hover:scale-105'>View All Queries</button>
            </Link>
            </div>
        </div>
    );
};

export default HomeBanner;