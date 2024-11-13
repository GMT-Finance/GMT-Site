import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mx-auto bg-[#000112]'>
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#ffffff]'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#BDA475]'>GMT.</h1>
        <p className='py-4'>A GMT é uma plataforma ideal para investidores que buscam otimizar suas decisões de forma rápida e eficiente. Com recursos robustos de análise, ela permite monitorar e interpretar o mercado financeiro com precisão. </p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>GMT</h6>
            <ul>
                <li className='py-2 text-sm'>Sobre nós</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Vagas</li>
                <li className='py-2 text-sm'>Carreiras</li>
            </ul>
        </div>
    <div>
        <h6 className='font-medium text-gray-400'>Soluções</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Fale conosco</h6>
        <ul>
            <li className='py-2 text-sm'>Premium</li>
            <li className='py-2 text-sm'>Ajuda</li>
            <li className='py-2 text-sm'>Redes sociais</li>
            <li className='py-2 text-sm'>Ouvidoria</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Segurança</li>
            <li className='py-2 text-sm'>Política de privacidade</li>
            <li className='py-2 text-sm'>Termos</li>
        </ul>
    </div>
      </div>
    </div>
    </div>
    
  );
};

export default Footer;