import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa6';
import SideBar from '../components/SideBar';
import blogsdata from "../data/blogsdata.json";

const SingleBlog = () => {
    const { id } = useParams();
    const data = blogsdata.blogs.find(blogs => blogs.id === parseInt(id));

    if (!data) {
        return (
            <div className="text-center py-8">
                <h1 className="text-2xl font-bold">Blog not found</h1>
                <p>Sorry, we couldn't find the blog you're looking for.</p>
            </div>
        );
    }

    const { image, title, author, published_date, reading_time, content1, content2, content3, content4, content5, content6, content7, content8 } = data;

    return (
        <div>
            <div className="py-8 bg-gray-500 text-center text-white">
                <h1 className="text-3xl font-bold">Blog Details</h1>
            </div>
            <div className="max-w-7xl mx-auto my-12 flex flex-col lg:flex-row gap-12 px-4">
                {/* Blog Main Content */}
                <div className="lg:w-3/4">
                <img src={`/${image}`} alt="Blog Image" className="w-full rounded mb-6 mt-16" />

                 <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-800 cursor-pointer">{title}</h2>
                    <p className="mb-3 text-gray-600">
                        <FaUser className="inline-flex items-center mr-2" /> {author} | {published_date}
                    </p>
                    <p className="mb-3 text-gray-600">
                        <FaClock className="inline-flex items-center mr-2" /> {reading_time}
                    </p>
                    {content1 && <div className="text-base lg:text-lg text-gray-500 mb-6">{content1}</div>}
                    {content2 && <div className="text-base lg:text-lg text-gray-500 mb-6">{content2}</div>}
                    {content3 && <div className="text-base lg:text-lg text-gray-500 mb-6">{content3}</div>}
                    {content4 && <div className="text-base lg:text-lg text-gray-500 mb-6">{content4}</div>}
                    {content5 && <div className="text-base lg:text-lg text-gray-500 mb-6">{content5}</div>}
                    {content6 && <div className="text-base lg:text-lg text-gray-500 mb-6">{content6}</div>}
                    {content7 && <div className="text-base lg:text-lg text-gray-500 mb-6">{content7}</div>}
                    {content8 && <div className="text-base lg:text-lg text-gray-500 mb-6">{content8}</div>}
                </div>
                {/* Sidebar */}
                <div className="lg:w-1/4">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;

