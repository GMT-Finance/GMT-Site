import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return ( 
    <div className='flex justify-between items-center h-24 mx-auto px-20 text-white bg-[#000112]'>
      <h1 className=' w-full text-3xl font-bold text-[#BDA475]'>GMT</h1>
      
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#BDA475]'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 hover:text-[#BDA475]'>
          <Link to="/stocks">Ações</Link>
        </li>
        <li className='p-4 hover:text-[#BDA475]'>
          <Link to="/">Empresa</Link>
        </li>
        <button className='bg-[#BDA475] w-[70px] rounded-md font-medium my-3 mx-auto py-1 text-[#000112] hover:bg-[#A89465]'>
          Entrar
        </button>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#181D31] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#BDA475] m-4'>GMT</h1>
        <li className='p-4 border-b border-gray-600 hover:text-[#BDA475]'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 border-b border-gray-600 hover:text-[#e9c684]'>
          <Link to="/stocks">Ações</Link>
        </li>
        <li className='p-4 border-b border-gray-600 hover:text-[#e9c684]'>
          <Link to="/info">Sobre nós</Link>
        </li>
        <button className='bg-[#BDA475] w-[70px] rounded-md font-medium my-3 mx-auto py-1 text-[#000112] hover:bg-[#A89465]'>
          Entrar
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
