import React from 'react';

const UnicagoSense = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div className="text-white text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Unicago Sense(1)</h1>
        <p>Smartphones haven't changed for a long time, let's change it once and for all.</p>
      </div>
      <div className="relative w-64 h-64 mb-8">
        <div className="absolute inset-0 bg-black rounded-full"></div>
        <div className="absolute inset-0 bg-black rounded-full ring-8 ring-black"></div>
      </div>
      <nav className="flex justify-between items-center w-full max-w-md px-4">
        <a href="#" className="text-white hover:text-gray-300">misson</a>
        <a href="#" className="text-white hover:text-gray-300">services</a>
        <a href="#" className="text-white hover:text-gray-300">team</a>
        <a href="#" className="text-white hover:text-gray-300">media</a>
        <a href="#" className="text-white hover:text-gray-300">industries</a>
        <div className="bg-white rounded-full w-12 h-6 flex items-center justify-center">
          <div className="bg-black w-4 h-4 rounded-full"></div>
        </div>
      </nav>
    </div>
  );
};

export default UnicagoSense;