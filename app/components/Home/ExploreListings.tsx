import React from 'react';
import HomeListingsSVGs from '../Svgs/homeListings';

const ExploreListings = () => {
    return (
        <>
            <div className='container py-8 px-4 max-w-5xl mx-auto'><h1 className='text-xl font-bold'>Browse Properties</h1>
                <div className="grid grid-cols-3 gap-3 my-5">
                    <div className="border border-solid col-span-1 p-4 rounded-sm border-gray-300">
                        <div className="flex gap-3 items-center">
                            <HomeListingsSVGs />
                            <div className="font-bold"><p>Homes</p></div>
                        </div>
                        <div className="flex"></div>
                    </div>
                    <div className="border border-solid col-span-1 p-4 rounded-sm border-gray-300"></div>
                    <div className="border border-solid col-span-1 p-4 rounded-sm border-gray-300"></div>
                </div>
            </div>
        </>
    )
};

export default ExploreListings;