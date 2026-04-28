import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ data, active }) => {
    return (
        <div>
            {
                data.map(item => (
                    <Link className={`${active === item.category_id && 'bg-blue-500 text-white'} flex justify-start w-full`} key={item.category_id} href={`/category/${item.category_id}`}>
                        <p className='flex justify-start pl-7 w-full font-bold text-lg   m-1 p-1'>{item.category_name}</p>
                    </Link>
                ))
            }
        </div>
    );
};

export default LeftSidebar;