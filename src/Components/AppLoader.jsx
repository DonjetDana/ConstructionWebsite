import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import logo from '../assets/projectSupervision.png'; // Importo imazhin për ngarkimin
import LoaderSlider from './LoaderSlider';

const AppLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Pas një periudhe të caktuar, fshi imazhin e ngarkimit dhe trego përmbajtjen
        }, 2000); // Ndrysho kohën sipas nevojës

        return () => clearTimeout(timer);
    }, []);


    return (
        <div>
            {isLoading ? (
                <Box>
                    <LoaderSlider />
                    <Box
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Ngjyra e sfondit tërësor
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'opacity 1000ms ease-in-out', // Animacioni për kalimin e 1000 ms
                            opacity: 1, // Nis nga një gjendje e dukshme
                        }}
                    >
                        <img src={logo} alt="Loading" width="250px" height="100px" />
                    </Box>
                </Box>
            ) : (
                children
            )}
        </div>


    );
};

export default AppLoader;
