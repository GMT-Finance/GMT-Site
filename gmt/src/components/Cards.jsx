import React from 'react';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-full shadow-xl flex bg-gray-100 flex-col p-4 my-4 rounded-lg mx-auto">
          <h2 className="text-2xl font-bold text-center py-8">Gratuito</h2>
          <p className="text-center text-4xl font-bold">R$0</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Pesquisa de ações</p>
            <p className="py-2 border-b mx-8">Dicas e informações</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#000112] text-[#BDA475] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Assinar</button>
        </div>
        <div className="w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg mx-auto">
          <h2 className="text-2xl font-bold text-center py-8">Mensal</h2>
          <p className="text-center text-4xl font-bold">R$19,90</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Meus ativos</p>
            <p className="py-2 border-b mx-8">Notificações</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#000112] text-[#BDA475] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Assinar</button>
        </div>
        <div className="w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-full shadow-xl flex bg-gray-100 flex-col p-4 my-4 rounded-lg mx-auto">
          <h2 className="text-2xl font-bold text-center py-8">Anual</h2>
          <p className="text-center text-4xl font-bold">R$199,90</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Economia de X%</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#000112] text-[#BDA475] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Assinar</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
