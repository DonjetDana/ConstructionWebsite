import { Box, Container, Grid } from '@mui/material'
import React from 'react';
import logo from "../../../assets/blog-01-1.jpg"
import styled from 'styled-components';
import "./Client.scss";



const ClientImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;


    &::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
    }

`

const Client = () => {
    return (
        <Box mt={5} >
            <Container maxWidth="lg">
                <Grid container
                    spacing={3}
                    sx={{ flexDirection: { xs: "column", lg: "row" }, display: "flex", justifyContent: { md: "flex-start", lg: "center" }, alignItems: "center" }}>
                    <Grid item xs={12} lg={6} sx={{ wordBreak: "break-word", height: "100%" }}>
                        <Box xs={{ fontSize: "12px" }}>About US</Box>
                        <Box component="h1">EDMA is a consulting and civil engineering company specializing in the design, supervision and construction of public and private projects.</Box>
                        <Box mt={2} textAlign="justify">
                        Founded in 2010 by a team of engineering experts, it has completed more than 400 projects over a period of more than a decade with varying expertise in civil engineering and consulting. We strive to adapt our projects to the latest developments and to use cutting-edge technology, always focusing on the customer's wishes, which we consider the key to success. Our aim is to develop our projects with high quality, functionality, aesthetics and usability by providing ideas and advice on what the space in which you live, work or relax will look like.
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ height: "100%" }}>
                        <ClientImage>
                            <Box >
                                <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
                            </Box>

                            <Box sx={{ maxWidth: "100%", maxHeight: "100%" }}>
                                <span className='line active'></span>
                                <span className='line-2 line-bottom'></span>
                            </Box>
                            <Box sx={{position: "absolute",display: "flex",flexDirection: "column",zIndex: "2",
                                top: "40%",left: {xs: "30%",sm:"40%",md:"40%"},color: "white",textAlign: "center"}}>
                                <span className='text'>15</span>
                                <span className='text'>years of experience</span>
                            </Box>
                        </ClientImage>
                        {/* </Box> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Client;