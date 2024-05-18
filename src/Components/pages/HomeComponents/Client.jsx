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
        left: 0;
        top: 0;
        padding: 0px;
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
                        <Box xs={{ fontSize: "12px" }}>Uber uns</Box>
                        <Box component="h1">EDMA ist ein Beratungs- und Bauingenieurunternehmen, das auf die Planung, Überwachung und den Bau öffentlicher und privater Projekte spezialisiert ist.</Box>
                        <Box mt={2} textAlign="justify">
                            Es wurde im Jahr 2010 von einem Team von Ingenieurexperten gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich Bauingenieurwesen und Beratung abgeschlossen. Wir sind bestrebt, unsere Projekte an die neuesten Entwicklungen anzupassen und die Spitzentechnologie zu nutzen, wobei wir uns stets auf die Wünsche des Kunden konzentrieren, die wir als Schlüssel zum Erfolg betrachten. Unser Ziel ist es, unsere Projekte mit hoher Qualität, Funktionalität, Ästhetik und Gebrauchstauglichkeit zu entwickeln, indem wir Ideen und Ratschläge dazu liefern, wie der Raum aussehen wird, in dem Sie leben, arbeiten oder entspannen
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ height: "100%" }}>
                        <ClientImage>
                            <Box >
                                <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
                            </Box>

                            <Box sx={{ maxWidth: "100%", maxHeight: "100%" }}>
                                <span className='line active'></span>
                                <span className='line line-bottom'></span>
                            </Box>
                            <Box sx={{position: "absolute",display: "flex",flexDirection: "column",zIndex: "2",
                                top: "40%",left: {xs: "30%",sm:"40%",md:"40%"},color: "white",textAlign: "center",}}>
                                <span className='line'>15</span>
                                <span className='line'>years of experience</span>
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