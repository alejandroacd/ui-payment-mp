import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Formatear la hora para que siempre tenga dos dígitos
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <p>
      {`${formatTime(hours)}:${formatTime(minutes)}`}
    </p>
  );
};

export default Clock;
