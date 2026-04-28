import React from 'react';
import Marquee from "react-fast-marquee"; 

const Marque = async () => { 
    return (
        <div className="bg-gray-100 container mx-auto text-black p-4 h-[80px] flex items-center justify-center">
            <button className="bg-red-500  mr-5 text-white font-bold py-2 px-4 rounded">
                Latest
            </button>
            <Marquee speed={100} gradient={false} pauseOnHover={true}>
              Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default Marque;