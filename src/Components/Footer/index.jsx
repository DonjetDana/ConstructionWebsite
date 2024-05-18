import React from 'react';
import styled from 'styled-components';
import bgImage from '../../assets/blog-01-1.jpg';
import { Box, Container, Grid, Typography } from '@mui/material';
import logo from "../../assets/logo-nobg.png";
import { Link } from 'react-router-dom';

const BacgroundImage = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &::after {
        content: "";
        position: absolute;
        background-color: rgba(0,0,0,0.75);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`;

const StyledUl = styled.ul`
`


const LogoSize = styled.div`
    position: absolute;
    z-index: 2;

    & img {
        width: 120px;
        height: 100px;
        object-fit: contain;
    }
`;

const StyledItem = styled.li`
    list-style-type: none;
    padding: 10px;
`;

const StyledLinks = styled(Link)`
    text-decoration: none;
    color: white;
`;
// flexDirection: { xs:"column", sm:"row", lg: "row" },
const Footer = () => {
    return (
        <Box mt={{ xs: "150px", md: "0px" }}>
            <BacgroundImage>
                <Container sx={{ height: "100%" }}>
                    <Grid container spacing={2} sx={{  height:"100%"}}>
                        <Grid item xs={12} sm={6}  md={6} lg={4} pr="10px" sx={{display:"flex",
                        justifyContent:{xs: "center",sm:"flex-start"},alignItems:{xs:"center",sm:"flex-start"},
                        textAlign:{xs:"center",sm:"left"},margin:{xs:"50px 0px"}}}>
                            <LogoSize>
                                <img src={logo} alt={logo} />
                                <Box sx={{ color: "#ebebeb"}}>
                                    <Typography>Addresse: Täfernstrasse 2a 5405 Dättwil</Typography>
                                    <Typography>Tel: 079 586 00 92</Typography>
                                    <Typography>Tel: 044 593 54 11</Typography>
                                    <Typography>Email: edma@gmx.ch</Typography>
                                </Box>
                            </LogoSize>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} sx={{display:"flex",
                        justifyContent:{xs: "center",sm:"flex-start"},alignItems:{xs:"center",sm:"flex-start"},
                        textAlign:{xs:"center",sm:"left"},padding:{ xs:"50px 0px"},margin:{xs:"50px 0px"}}}>
                            <Box sx={{ position: "absolute", zIndex: "2", textAlign: { xs: "center", md: "left" }, marginTop: { xs: "70px", md: "0px" }, paddingLeft:{ xs:"0px",sm:"30px"} }}>
                                <Typography variant="h4" sx={{ color: "white", fontSize: "18px", fontWeight: "400",
                                 margin: "30px 0px", textAlign: "center"}}>Links</Typography>
                                <StyledUl>
                                    <StyledItem>
                                        <StyledLinks to="/">Home</StyledLinks>
                                    </StyledItem>
                                    <StyledItem>
                                        <StyledLinks to="/about">About</StyledLinks>
                                    </StyledItem>
                                    <StyledItem>
                                        <StyledLinks to="/projects">Projects</StyledLinks>
                                    </StyledItem>
                                    <StyledItem>
                                        <StyledLinks to="/contact">Contact</StyledLinks>
                                    </StyledItem>
                                </StyledUl>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} sx={{marginTop:"30px", display:"flex",
                        justifyContent:{xs: "center",sm:"flex-start"},alignItems:{xs:"center",sm:"flex-start"},
                        textAlign:{xs:"center",sm:"left"},paddingBottom:{ xs:"50px"}
                        ,margin:{xs:"20px 0px 0px 0px",sm:"50px 0px"}}}>
                            <Box sx={{ position: "absolute", zIndex: "2"}}>
                                <Typography variant="h4" sx={{ color: "white", textDecoration: "uppercase", fontSize: "18px", 
                                fontWeight: "400",margin:{xs:"0px",sm:"30px 0px"}}}>Copyright</Typography>
                                <Typography sx={{ color: "white"}}>Copyright © 2023 | EDMA</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BacgroundImage>
        </Box>
    );
};

export default Footer;
