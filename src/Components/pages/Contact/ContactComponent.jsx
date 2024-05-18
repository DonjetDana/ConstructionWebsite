import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import GoogleMap from '../../GoogleMap';
import styled from 'styled-components';
import "./contact.scss";


const TextAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%; 
    min-height: 200px;

    & textarea {
        background-color: #eeeeee;
        padding: 17px 20px;
        color: #333;
        margin-bottom: 20px;
        border: 0px;
        width: 100%;
        flex: 1; /* Shto këtë rresht për të bërë textarea të marrë të gjithë hapësirën e mundshme */
        resize: none; 
        
    }
    `

const ContactInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    
    & input[type=text] {
        background-color: #eeeeee;
        padding: 17px 20px;
        color: #333;
        border: 0px;
        width: 100%;
    }`
const ContactComponent = () => {
    return (
        <Box mt={5} mb="100px">
            <Container>
                <Box>
                    <Typography sx={{
                        fontSize: '36px', fontFamily: "Poppins,Arial,\"Helvetica Neue\",sans-serif",
                        textAlign: 'left', color: '#222', marginBottom: "30px"
                    }}>
                        CONTACT
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ textTransform: "uppercase", color: "#888", fontSize: "11px", fontWeight: "400", marginBottom: "20px" }}>
                        Let's work with us
                    </Typography>
                    <Typography sx={{
                        fontSize: '36px', fontFamily: "Poppins,Arial,\"Helvetica Neue\",sans-serif",
                        textAlign: 'left', color: '#222', marginBottom: "30px"
                    }}>
                        Together we can make dreams come true
                    </Typography>
                </Box>
                <GoogleMap />

                <Box>
                    <Grid container spacing={2}
                        sx={{
                            flexDirection: { xs: "column", sm: "row", lg: "row" },
                            display: "flex", justifyContent: { md: "flex-start", xs: "center" }, alignItems: "center"
                        }}>
                        <Grid item lg={4} md={4} sm={12} mb="20px">
                            <Box sx={{
                                display: "flex", justifyContent: { sm: "space-evenly", md: "flex-start" },
                                flexDirection: "column", width: "100%", textAlign: { sm: "center", md: "left" }
                            }}>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "1.125rem", textTransform: "uppercase",
                                        margin: "20px 0px", color: "#222", lineHeight: "1.2"
                                    }}>Address:</Typography>
                                    <Typography sx={{ fontSize: "1.125rem", color: "#222" }}>
                                        Täfernstrasse 2a 5405 Dättwil
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "1.125rem", textTransform: "uppercase",
                                        margin: "20px 0px", color: "#222"
                                    }}>TELEPHONE NUMBER:</Typography>
                                    <Typography sx={{ fontSize: "1.125rem", marginTop: "20px", color: "#222" }}> 079 586 00 92</Typography>
                                    <Typography sx={{ fontSize: "1.125rem", marginTop: "20px", color: "#222" }}>044 593 54 11</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        fontSize: "1.125rem", textTransform: "uppercase",
                                        margin: "20px 0px", color: "#222"
                                    }}>Email:</Typography>
                                    <Typography sx={{ fontSize: "1.125rem", margin: "20px 0px", color: "#222" }}>
                                        edma@gmx.ch
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item lg={8} md={8} xs={12}>
                            <Box sx={{ width: "100%", display: "flex" }}>
                                <Grid container spacing={2} sx={{ display: "flex" }}>
                                    <Grid item md={6} sm={6} xs={12} sx={{
                                        display: "flex", flexDirection: { xs: "column", lg: "row" },
                                        justifyContent: { xs: "center", lg: "flex-start", alignItems: "center" }
                                    }}>
                                        <ContactInput>
                                            <div className="wrap-input-9">
                                                <input className="input" type="text" placeholder="Name" required/>
                                                    <span className="focus-border">
                                                        <i></i>
                                                    </span>
                                            </div>
                                            <div className="wrap-input-9">
                                                <input className="input" type="text" placeholder="Email" required/>
                                                    <span className="focus-border">
                                                        <i></i>
                                                    </span>
                                            </div>
                                            <div className="wrap-input-9">
                                                <input className="input" type="text" placeholder="Telephone" required/>
                                                    <span className="focus-border">
                                                        <i></i>
                                                    </span>
                                            </div>
                                        </ContactInput>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={12}>
                                        <TextAreaStyle>
                                            <textarea name="message" placeholder='News'></textarea>
                                        </TextAreaStyle>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </Box>
    )
}

export default ContactComponent