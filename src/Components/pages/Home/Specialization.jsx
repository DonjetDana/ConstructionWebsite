import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import image from "../../../assets/service-01-1.png"
import styled from 'styled-components';

const ImageCenter = styled.div`
    img {
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: translateY(-10px); /* Adjust the value as needed */
    }
`;

const Specialization = () => {
    return (
        <Box height={{ sm: "100%", lg: "100%" }} sx={{ margin: "100px 0px" }}>
            <Container>
                <Stack direction="column" textAlign="center" mt="150px">
                    <Box component="h5" style={{
                        fontSize: "14px", color: "#999", marginBottom: "9px", textTransform: "uppercase",
                        letterSpacing: "0.3em"
                    }}>What we do</Box>
                    <Box component="h1" style={{ fontSize: "38px", color: "#222", lineHeight: "calc(50/38)" }}>Our specialization</Box>
                </Stack>
                <Grid container spacing={3}
                    sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: { md: "flex-start", lg: "center" }, alignItems: "flex-start", marginTop: "40px" }}>
                    <Grid item xs={12} md={6} lg={4} >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px", marginTop: "20px",textTransform:"uppercase"}}>Our Task</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                01
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: "justify", lineHeight: "2.3" }}>Our main mission is to make our projects more sustainable, aesthetically pleasing and comfortable for the community. We also try to design facilities that provide living conditions, jobs and various activities, are adequate and economical and fit into the surrounding environment.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px", marginTop: "20px",textTransform:"uppercase"}}>Who are we?</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                02
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: "justify", lineHeight: "2.3" }}>EDMA is a design studio specializing in design, construction and supervision. The activity as a design studio began in 2010 and has been implementing many projects of different character in the field of construction and design for over a decade. As a company, we strive to adapt our projects to the latest developments in architecture and materials of the time, always based on the customer requirements that are crucial for success. We offer ideas and tips about what it might look like where you live, work or rest. Our goal is to make our projects high quality, functional, aesthetic and practical. We offer services for various types of construction and design. With qualified personnel and professionalism in providing services in the field of design of individual and collective residential complexes, administrative facilities, wastewater treatment plants, road and public infrastructure drainage, sewerage, water supply and drainage channels, catering facilities, etc. We offer you quality, accuracy and responsibility for our projects . Every request you make is a duty for us, and every duty for us is an obligation.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px", marginTop: "20px",textTransform:"uppercase" }}>Our Vision</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                03
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: "justify", lineHeight: "2.3" }}>Our vision for the future is that architecture and construction projects are as economical and ecological as possible. In an environment dominated by the principle of greening, where the social well-being of people comes first and where objects are consistent with the environment and the developments of the time, they are undoubtedly a source of well-being and social and social life.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Specialization;