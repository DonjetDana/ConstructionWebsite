import React, { useEffect, useState } from 'react';
import { Box, keyframes } from '@mui/material';
import logo from '../assets/projectSupervision.png'; // Importo imazhin për ngarkimin
import LoaderSlider from './LoaderSlider';

const preloaderFade = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
    }

`
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
                            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'opacity 1000ms ease-in-out', 
                            animation: `${preloaderFade} 1000ms linear infinit` 
                        }}
                    >
                        <img src={logo} alt="Loading" width="160px" height="50px" />
                    </Box>
                </Box>
            ) : (
                children
            )}
        </div>


    );
};

export default AppLoader;
