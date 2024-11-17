import React from 'react';
const Hero = () => {
  return (
    <div className=' mx-auto' >
      <div className='max-w-[800px] mt-[-50px] w-full h-[90vh] mx-auto text-center flex flex-col justify-center'>
        <p className='text-white font-bold p-2'>
        Bolsa americana, insights globais
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#BDA475]'>
          GMT Finance.
        </h1>
        <p className='md:text-2xl text-xl font-bold text-white'>
        A plataforma que conecta você ao coração de Wall Street!
        </p>
        <button className='bg-[#BDA475] hover:bg-[#e9c684] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#000112]'>
          Começar
        </button>
      </div>
    </div>
  );
};

export default Hero;