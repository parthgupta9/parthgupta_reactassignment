import React, { useEffect, useState } from 'react';
import BasketballPlayerCard from './BasketballsPlayerCard';
import images from '../assets/image.avif'

const players = [
  {
    name: "Parth",
    image: images,
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  },
  {
    name: "Harsh",
    image: images,
    position: "Forward",
    stats: {
      pointsPerGame: 27.0,
      assistsPerGame: 5.9,
      reboundsPerGame: 7.1
    }
  },
  {
    name: "Mohit",
    image: images,
    position: "Guard",
    stats: {
      pointsPerGame: 24.3,
      assistsPerGame: 6.5,
      reboundsPerGame: 4.6
    }
  }
];

const PlayerList = () => {
  const [eventCard, setEventCard] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setEventCard(players);
  }, []);

  return (
    <div className="px-8 md:px-12 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-7">
      {eventCard.map((player) => (
        <BasketballPlayerCard 
          key={player.name}
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      ))}
    </div>
  );
};

export default PlayerList;
