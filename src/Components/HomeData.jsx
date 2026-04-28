
import { getNewsData } from '@/lib/Data'; 
import React from 'react';
import NewsCard from './NewsCard';
import LeftSidebar from './LeftSidebar';
import RightSightBar from './RightSightBar';

const HomeData = async ({ data, active }) => {
const getData = await getNewsData(active);


    return (
        <div className='container mx-auto grid grid-cols-4 justify-between text-center gap-4'>
            <div className='col-span-1'>
                <LeftSidebar data={data} active={active}></LeftSidebar>
            </div>
            <div className='col-span-2'>
                <h1 className='text-2xl text-gray-700 font-bold text-start mb-4'>Dragon News Home</h1>
                <div className='flex flex-col gap-5'>
                    <NewsCard getData={getData}></NewsCard>
                </div>
            </div>
            <div className='col-span-1'>
                <RightSightBar></RightSightBar>
            </div>
        </div>
    );
};

export default HomeData;