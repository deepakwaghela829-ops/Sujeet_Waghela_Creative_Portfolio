import React, { useState, useEffect } from 'react';

export function useLiveClock() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const updateClock = () => {
      const now = new Date();
      setTimeString(formatter.format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeString;
}
