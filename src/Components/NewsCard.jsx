import Image from 'next/image';
import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { IoShareSocialSharp } from "react-icons/io5";  
import { FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ getData }) => {
    console.log(getData);

    return (
        getData.map((item, ind) => {
            const { title, details, author, category_id } = item;

            return (
                <div key={ind} className='rounded-md bg-gray-100 m-1 p-5'>
                    <div className='bg-[#F3F3F3] m-1 flex items-center justify-between text-center'>
                        <div className='flex items-center gap-4'>
                            <div className='text-[50px]'>
                                <Image src={author.img} height={50} width={50} alt={'author.name'} />
                            </div>
                            <div className='text-left'>
                                <h1 className='text-1xl font-bold'>{author.name} </h1>
                                <p>{author.published_date}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 text-3xl'>
                            <IoShareSocialSharp></IoShareSocialSharp>
                            <FaRegBookmark></FaRegBookmark>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl text-left leading-relaxed font-bold'>{title}</h1>
                        <div className='w-full flex justify-center mt-3'>
                            <img src={item.image_url} height={400} width={400} alt={title} className='w-full rounded-md h-[400px] object-cover' />
                        </div>
                        <div>
                            <p className='text-start line-clamp-3'>{details}</p>
                            <button className='  text-red-500 font-bold flex justify-start    '>Read More</button>
                        </div>
                        <div className='w-full flex justify-between mt-3'>
                            <div className='flex items-center gap-2 text-2xl'>
                                <div className='flex text-red-400'>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                                <p>4.9</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaEye></FaEye>
                                <p>499</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    );
};

export default NewsCard;