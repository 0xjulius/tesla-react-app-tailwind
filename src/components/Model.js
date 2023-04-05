import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

const Model = () => {
    return (
        <div>
            <div className='absolute inset-x-0 top-[15%] text-center'>
                <h1 className='text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s'>Model 3</h1>
                <p className='p-2 text-sm animate__animated animate__fadeInUp animate__delay-2s'>Leasing starting at $349/mo</p>
            </div>
            <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
                <a href='#'><button className='bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white animate__animated animate__fadeInLeft'>View Inventory</button></a>
                <a href='#'><button className='bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 animate__animated animate__fadeInRight'>Custom Order</button></a>
            </div>
            <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]'>
                <FiChevronDown size={24} />
            </div>
        </div >
    )
}

export default Model