import React, { useState, useEffect } from "react";


const COUNTDOWN_TARGET = new Date("2023-04-27T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center">
      {Object.entries(timeLeft).map((el) => {
        const label = el[0];
        const value = el[1];
        return (
          <div className="flex flex-col items-center mx-2" key={label}>
            <div className="bg-gradient-to-br from-gray-800  to-black rounded-lg shadow-lg w-24 h-24 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center relative">
              <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">{value}</span>
            </div>
            <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mt-2">{label.toUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Countdown;
