import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import IRCON from "../../../assets/1.-IRCON.png";
import ministria from "../../../assets/3.-MINISTRIA-E-ADMINISTRATES-PUBLIKE.png";
import Komuna from "../../../assets/11.-KOMUNA-E-PRISHTINES.png";
import czechRepublic from "../../../assets/4.-CZECH-DEVELOPMENT-AGENCY.png";
import topalWater from "../../../assets/2.-TOPOL-WATER.png";
import poppins from "../../../assets/5.-POPPINS.png";
import ministriaCekise from "../../../assets/6.-AMABASADA-E-CEKISE.png";
import universitetiPr from "../../../assets/13.-UNIVERSITETI-I-PRISHTINES.png";
import qkuk from "../../../assets/7.-QKUK.png";
import ujesjellesi from "../../../assets/12.-KRU-PRISHTINA.png";
import iberLepenci from "../../../assets/24.-IBER-LEPENCI.png"
import styled from 'styled-components';

const images = [
    {
        id:1,
        image:IRCON
    },{
        id:2,
        image:ministria
    },{
        id:3,
        image:Komuna
    },{
        id:4,
        image:czechRepublic
    },{
        id:5,
        image:topalWater
    },{
        id:6,
        image:poppins
    },{
        id:7,
        image:ministriaCekise
    },{
        id:8,
        image:universitetiPr
    },{
        id:9,
        image:qkuk
    },{
        id:10,
        image:ujesjellesi
    },{
        id:11,
        image:iberLepenci
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