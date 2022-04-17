import React from 'react';
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-90px] w-full h-screen mx-auto flex flex-col text-center justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>Gro with data</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-blod'> fast, flexible financing for </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-blod pl-4'
                 strings={['BTB','BTC' , 'SASS']}
                 typeSpeed={120} 
                 backSpeed={140} 
                 loop/>
            </div>
            <p className='md:text-2xl text-xl font-blod text-gray-600'>Monitor your data analytics to increase revenue for BTB , BTC & SASS platforms</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-meduim my-6 mx-auto py-3 text-black '>Get Start</button>
        </div>
    </div>
  )
}
