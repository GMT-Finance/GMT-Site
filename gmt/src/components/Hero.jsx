import React from 'react';
const Hero = () => {
  return (
    <div className='text-white mx-auto' >
      <div className='max-w-[800px] mt-[-50px] w-full h-[90vh] mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#BDA475] font-bold p-2'>
          Lorem ipsum dolor sit amet
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Adipiscing elit.
        </h1>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Simule o seu futuro financeiro com a GMT!
        </p>
        <button className='bg-[#BDA475] hover:bg-[#e9c684] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Começar
        </button>
      </div>
    </div>
  );
};

export default Hero;