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
        <Box height={{sm:"100%", lg:"100%"}} sx={{margin:"100px 0px"}}>
            <Container>
                <Stack direction="column" textAlign="center" mt="150px">
                    <Box component="h5" style={{
                        fontSize: "14px", color: "#999", marginBottom: "9px", textTransform: "uppercase",
                        letterSpacing: "0.3em"
                    }}>What we do</Box>
                    <Box component="h1" style={{ fontSize: "38px", color: "#222", lineHeight: "calc(50/38)" }}>Our specialization</Box>
                </Stack>
                <Grid container spacing={3}
                    sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: { md:"flex-start", lg:"center"}, alignItems: "center", marginTop: "40px" }}>
                    <Grid item xs={12} md={6} lg={4} >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px",marginTop:"20px" }}>WER WIR SIND?</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                01
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{textAlign:"justify",lineHeight:"2.3"}}>Unsere Hauptaufgabe besteht darin, unsere Projekte nachhaltiger, ästhetisch ansprechender und komfortabler für die Gemeinschaft zu machen. Außerdem versuchen wir, Einrichtungen zu entwerfen, die Lebensbedingungen, Arbeitsplätze und verschiedene Aktivitäten bieten, angemessen und wirtschaftlich sind und sich in die Umgebung einfügen.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px",marginTop:"20px" }}>WER WIR SIND?</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                01
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{textAlign:"justify",lineHeight:"2.3"}}>Unsere Hauptaufgabe besteht darin, unsere Projekte nachhaltiger, ästhetisch ansprechender und komfortabler für die Gemeinschaft zu machen. Außerdem versuchen wir, Einrichtungen zu entwerfen, die Lebensbedingungen, Arbeitsplätze und verschiedene Aktivitäten bieten, angemessen und wirtschaftlich sind und sich in die Umgebung einfügen.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ImageCenter>
                                <img src={image} alt="image" />
                            </ImageCenter>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", marginTop: "20px" }}>
                            <p style={{ position: "absolute", fontSize: "28px",marginTop:"20px" }}>WER WIR SIND?</p>
                            <span
                                style={{ position: "relative", fontSize: "70px", color: "#e2dada", zIndex: "-1", marginBottom: "30px" }}>
                                01
                            </span>
                        </Box>
                        <Box>
                            <Typography sx={{textAlign:"justify",lineHeight:"2.3"}}>Unsere Hauptaufgabe besteht darin, unsere Projekte nachhaltiger, ästhetisch ansprechender und komfortabler für die Gemeinschaft zu machen. Außerdem versuchen wir, Einrichtungen zu entwerfen, die Lebensbedingungen, Arbeitsplätze und verschiedene Aktivitäten bieten, angemessen und wirtschaftlich sind und sich in die Umgebung einfügen.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Specialization;