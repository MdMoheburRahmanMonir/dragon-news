import React from 'react'; 
import { format } from "date-fns";
import localFont from 'next/font/local';

const myFonts = localFont({
    src: './Fonts/oldenglishtextmt.ttf',
    display: 'swap',
})
 
const Header = () => {
    return (
        <div className={`bg-white flex flex-col mt-[50px] mb-[30px] items-center justify-center text-black `}>
            <h1 className={`${myFonts.className} mb-5 text-6xl text-black`}>The Dragon News</h1>
            <p className="mb-[10px] text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "eeee MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;