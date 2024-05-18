import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const LoaderSlider = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10)); // Ndrysho progresin
    }, 1000); // Ndrysho kohën e intervalit sipas nevojës

    return () => {
      clearInterval(interval); // Fshij intervalin kur komponenti zhduket
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: '4px',
        backgroundColor: '#db1d33',
        transition: 'width 1000ms ease-in-out',
        zIndex: 9999,
      }}
    />
  );
};

export default LoaderSlider;
