import React from 'react';
import ArrowDown from '../Visuals/arrowDown';

const SearchComponent = () => {
    return (
        <>
            <div className="relative h-custom">
                <div className="absolute h-custom inset-0 bg-black opacity-50 z-40"></div>
                <div className="absolute h-custom container mx-auto p-4 z-50">
                    <div className="searchForm w-1/2 h-custom mx-auto my-24 flex items-center flex-col">
                        <h1 className="text-white text-4xl font-bold mx-auto">Search properties for sale in Pakistan</h1>
                        <div className="grid grid-cols-3 my-5 gap-6">
                            <button type="button" className='bg-white px-10 py-3'>Buy</button>
                            <button type="button" className='border border-white text-white'>Rent</button>
                            <a href="#" className='border text-white flex items-center justify-center'>Projects</a>
                        </div>
                        <div className="grid grid-cols-4 gap-2 bg-opaque w-full p-2 h-auto rounded-sm">
                            <div className="bg-white rounded-sm cursor-pointer h-14 p-2">
                                <p className='text-sm text-gray-400'>City</p>
                                <div className="flex justify-between items-center">
                                    <p>Lahore</p>
                                    <ArrowDown />
                                </div>
                            </div>
                            <div className="col-span-2 bg-white rounded-sm cursor-pointer h-14 p-2">
                                <p className='text-sm text-gray-400'>Location</p>
                                <div className="flex justify-between items-center">
                                    <input className='w-full appearance-none focus:outline-none' type="text" />
                                </div>
                            </div>
                            <button className='bg-primary-color text-white w-full rounded-sm'>Find</button>
                            <div className="bg-white rounded-sm cursor-pointer h-14 p-2">
                                <p className='text-sm text-gray-400'>City</p>
                                <div className="flex justify-between items-center">
                                    <p>Lahore</p>
                                    <ArrowDown />
                                </div>
                            </div>
                            <div className="bg-white rounded-sm cursor-pointer h-14 p-2">
                                <p className='text-sm text-gray-400'>City</p>
                                <div className="flex justify-between items-center">
                                    <p>Lahore</p>
                                    <ArrowDown />
                                </div>
                            </div>
                            <div className="bg-white rounded-sm cursor-pointer h-14 p-2">
                                <p className='text-sm text-gray-400'>City</p>
                                <div className="flex justify-between items-center">
                                    <p>Lahore</p>
                                    <ArrowDown />
                                </div>
                            </div>
                            <div className="bg-white rounded-sm cursor-pointer h-14 p-2">
                                <p className='text-sm text-gray-400'>City</p>
                                <div className="flex justify-between items-center">
                                    <p>Lahore</p>
                                    <ArrowDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
};

export default SearchComponent;