import React from 'react';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="max-h-[550px] w-70 px-4 py-2 bg-gradient-to-tr from-[#0A2530] to-black rounded-lg flex flex-col items-center my-6">
      <img src={image} alt={name} className="w-full h-1/2 mt-6 pb-4" />
      <h1 className="text-xl md:text-3xl font-[rabu-kliwon] pt-2 text-[#7EF2F6]">
        {name}
      </h1>
      <h2 className="text-lg font-semibold text-slate-300">
        {position}
      </h2>
      <div className="player-stats">
        <p className="text-llg text-slate-300">Points per Game: {stats.pointsPerGame}</p>
        <p className="text-llg text-slate-300">Assists per Game: {stats.assistsPerGame}</p>
        <p className="text-llg text-slate-300">Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
