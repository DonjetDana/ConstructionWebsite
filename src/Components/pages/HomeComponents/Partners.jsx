import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import IRCON from "../../../assets/1.-IRCON.png";
import styled from 'styled-components';

const images = [
    {
        id:1,
        image:IRCON
    },{
        id:2,
        image:IRCON
    },{
        id:3,
        image:IRCON
    },{
        id:4,
        image:IRCON
    },{
        id:5,
        image:IRCON
    },{
        id:6,
        image:IRCON
    },{
        id:7,
        image:IRCON
    },{
        id:8,
        image:IRCON
    },{
        id:9,
        image:IRCON
    },{
        id:10,
        image:IRCON
    },{
        id:11,
        image:IRCON
    },

]

const StyleImages = styled.div`
    img {
        filter: grayscale(100%);
    }

    & :hover img{
        filter:grayscale(0%);
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }`;

const Partners = () => {
    return (
        <Box mb="100px">
            <Container>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
                    <h5 style={{ textDecoration: "uppercase", fontSize: "11px", color: "#999", fontWeight: "400" }}>Awesome Partner</h5>
                    <h2 style={{ fontWeight: "400", fontSize: "38px", lineHeight: "calc(50/38)" }}>Our Clients</h2>
                </Box>
                <Grid container spacing={2} sx={{ display: "flex",justifyContent:"flex-start",alignItems:"center",textAlign:"center"}}>
                    {images.map((items) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={items.id}>
                            <StyleImages>
                                <Link>
                                    <img src={items.image} alt={items.image}/>
                                </Link>
                            </StyleImages>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    )
}

export default Partners