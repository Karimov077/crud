import React from 'react';

const Headers = () => {
  return (
    <header
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('https://your-image-url.jpg')`,
      }}
    >
      <nav className="container py-[20px] flex items-center justify-between">
        <div className="text-white font-bold text-[20px]">
          Karimov <span className="text-yellow-400">Karimov</span>
        </div>
        <div className="text-black font-bold text-[20px]">
          Product
        </div>
      </nav>
    </header>
  );
};

export default Headers;
