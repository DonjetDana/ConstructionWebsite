import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo-nobg.png"

const AboutComponent = () => {
    const [experienceNumbers,setExperienceNumbers] = useState({
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            // Llogaritni numrat përseci numër në të njëjtën kohë
            if (experienceNumbers.count1 < 13) {
                setExperienceNumbers(prevNumbers => ({
                    ...prevNumbers,
                    count1: prevNumbers.count1 + 1
                }));
            }
            if (experienceNumbers.count2 < 200) {
                setExperienceNumbers(prevNumbers => ({
                    ...prevNumbers,
                    count2: prevNumbers.count2 + 1
                }));
            }
            if (experienceNumbers.count3 < 400) {
                setExperienceNumbers(prevNumbers => ({
                    ...prevNumbers,
                    count3: prevNumbers.count3 + 1
                }));
            }
            if (experienceNumbers.count4 < 500) {
                setExperienceNumbers(prevNumbers => ({
                    ...prevNumbers,
                    count4: prevNumbers.count4 + 1
                }));
            }
        }, 1); // Ndryshoni kohën sipas nevojës
    
        // Pastro intervalin në fund të komponentit
        return () => clearInterval(interval);
    }, [experienceNumbers]);

    return (
        <Box mt={5}>
            <Container>
                <Box>
                    <Typography sx={{ fontSize: '36px', textDecoration: 'uppercase', textAlign: 'left', color: '#222' }}>
                        About us
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{ width: '100%', height: '100%' }}>
                        <Typography sx={{ textAlign: "center", marginBottom: "20px" }}>We develop projects from conception to the last details</Typography>
                        <Box sx={{ textAlign: 'center', maxWidth: '100%', maxHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={logo} alt={logo} width="50%" height="50%" />
                        </Box>
                    </Box>
                    <Grid mt={5} container space={3} sx={{ flexDiretion: { xs: 'column', md: 'row', display: 'flex' } }}>
                        <Grid item xs={12} lg={6}>
                            <Grid container spacing={3} sx={{ flexDirection: { xs: 'column', md: 'row' }, display: 'flex',justifyContent: { xs:'center',md:'flex-start'},alignItems:'center'}}>
                                <Grid item md={6} sm={6} xs={12}>
                                    <Box sx={{ backgroundColor: '#f8f8f8', width: '100px', height: '100px' }}>
                                        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography sx={{ fontSize: '30px', color: '#222', lineHeight: '1' }}>{experienceNumbers.count1}+</Typography>
                                            <h5 style={{ color: '#555', marginTop: '4px', fontSize: '11px' }}>Langjährige Erfahrung</h5>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <Box sx={{ backgroundColor: '#f8f8f8', width: '100px', height: '100px' }}>
                                        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography sx={{ fontSize: '30px', color: '#222', lineHeight: '1' }}>{experienceNumbers.count2}+</Typography>
                                            <h5 style={{ color: '#555', marginTop: '4px', fontSize: '11px' }}>Langjährige Erfahrung</h5>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <Box sx={{ backgroundColor: '#f8f8f8', width: '100px', height: '100px' }}>
                                        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography sx={{ fontSize: '30px', color: '#222', lineHeight: '1' }}>{experienceNumbers.count3}+</Typography>
                                            <h5 style={{ color: '#555', marginTop: '4px', fontSize: '11px' }}>Langjährige Erfahrung</h5>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sm={6} xs={12}>
                                    <Box sx={{ backgroundColor: '#f8f8f8', width: '100px', height: '100px' }}>
                                        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography sx={{ fontSize: '30px', color: '#222', lineHeight: '1' }}>{experienceNumbers.count4}+</Typography>
                                            <h5 style={{ color: '#555', marginTop: '4px', fontSize: '11px' }}>Langjährige Erfahrung</h5>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box>
                                <Typography sx={{ lineHeight: 'calc(40/18)', fontSize: '15px', textAlign: 'justify' }}>
                                    <b>EDMA GmbH</b> wurde im Jahr 2010 von einem Expertenteam des Maschinenbaus gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich Bauingenieurwesen und Beratung abgeschlossen.

                                    Im Laufe der Entwicklung zahlreicher Bauprojekte sowie der Planung und Umsetzung schlüsselfertiger Projekte haben wir ein tiefes Verständnis dafür gewonnen, wie wir die Effizienz optimieren und maximieren und gleichzeitig die Auswirkungen auf die Umwelt minimieren können.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default AboutComponent