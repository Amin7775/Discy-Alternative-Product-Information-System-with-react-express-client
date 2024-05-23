import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-custom_Dark pt-20 pb-10 dark:border-t dark:border-gray-500">
          {/* links container */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mb-5 px-5">
            {/* store information */}
            <div className="md:col-span-2 md:mb-5 lg:col-span-1 lg:mb-0">
              <h1 className="text-white text-xl font-medium">Store Information</h1>
              <div className="border-b-2 border-custom-color-1 w-1/6 my-3"></div>
              {/* links */}
              <div className="grid grid-cols-1 gap-3 text-gray-300 font-jost text-lg mt-5">
                <div className="flex items-center gap-1">
                  <FaLocationDot></FaLocationDot>
                  <p className="text-wrap">Dhaka,Bangladesh</p>
                </div>
                <div className="flex items-center gap-1">
                  <BsTelephone></BsTelephone>
                  <p className="text-wrap">01832348474</p>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdPhonePortrait></IoMdPhonePortrait>
                  <p className="text-wrap">01832348474</p>
                </div>
                <div className="flex items-center gap-1">
                  <MdEmail></MdEmail>
                  <p className="text-wrap">Discy@gmail.com</p>
                </div>
              </div>
            </div>
            {/* Quick links */}
            <div>
              <div>
                <h1 className="text-white text-xl font-medium">Quick Links</h1>
                <div className="border-b-2 border-custom-color-1 w-1/6 my-3"></div>
                {/* links */}
                <div className="grid grid-cols-1 gap-3 text-gray-300 font-jost text-lg mt-5">
                 
                  <p>
                    <a href="/shipping">Queries</a>
                  </p>
                  <p>
                    <a href="/sitemap">Top Members</a>
                  </p>
                  <p>
                    <a href="/faqs">FAQs</a>
                  </p>
                  <p>
                    <a href="/about-us">About Us</a>
                  </p>
                </div>
              </div>
            </div>
            {/* Help */}
            <div>
              <div>
                <h1 className="text-white text-xl font-medium">Help</h1>
                <div className="border-b-2 border-custom-color-1 w-1/6 my-3"></div>
                {/* links */}
                <div className="grid grid-cols-1 gap-3 text-gray-300 font-jost text-lg mt-5">
                <p>
                    <a href="/contact-us">Contact Us</a>
                  </p>
                  <p>
                    <a href="/term-and-policy">Term & Policy</a>
                  </p>
                  <p>
                    <a href="/careers">Careers</a>
                  </p>
                  <p>
                    <a href="/service">Services</a>
                  </p>
                  
                </div>
              </div>
            </div>
            {/* services*/}
            <div>
              <div>
                <h1 className="text-white text-xl font-medium">Quick Links</h1>
                <div className="border-b-2 border-custom-color-1 w-1/6 my-3"></div>
                {/* links */}
                <div className="grid grid-cols-1 gap-3 text-gray-300 font-jost text-lg mt-5">
                  
                  <p>
                    <a href="/terms-and-conditions">Terms And Conditions</a>
                  </p>
                  <p>
                    <a href="/policy-for-sellers">Policy For Users</a>
                  </p>
                  <p>
                    <a href="/shipping-and-refund">Premium Membership</a>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-[#323232]"></div>
          <div className="pt-5">
            <p className="text-center text-gray-300">© 2024 Discy. All rights reserved.  </p>
          </div>
        </div>
    );
};

export default Footer;