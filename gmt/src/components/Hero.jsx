import React from 'react';

const Hero = () => {
  return (
    <div className='text-white ' >
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#BDA475] font-bold p-2'>
          Lorem ipsum dolor sit amet
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Adipiscing elit.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          Lorem ipsum dolor sit amet
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className='bg-[#BDA475] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Começar</button>
      </div>
    </div>
  );
};

export default Hero;

