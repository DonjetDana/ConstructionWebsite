import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import "./service.scss"

const ServicesComponent = (props) => {
  const [isLoaded,setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    },500)
  },[]);


  return (
    <Box mt="50px" mb="150px">
      <Container>
        <Box>
          <Typography sx={{ fontSize: "36px", textTransform: "uppercase", marginBottom: "20px" }}>
            {props.title}
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "100%" }}>
          <img src={props.image} alt={props.image} width="100%" height="100%" />
        </Box>
        <Box mt="40px" mb="10px" className={`transition-box ${isLoaded ? 'loaded' : ''}`}>
          <Grid spacing={3} container
            sx={{
              flexDirection: { xs: "column", sm: "row", lg: "row" },
              display: "flex", justifyContent: { md: "flex-start", xs: "center" }, alignItems: "center",
            }}>
            <Grid item md={4} xs={12} sx={{ display: "flex", justifyContent: { md: "flex-start", sm: "center" } }}>
              <Box sx={{ maxWidth: "100%" }}>
                <img src={props.singleImg} alt={props.singleImg} />
              </Box>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography sx={{ fontSize: "1.125rem", lineHeight: "2.3", fontWeight: "normal", fontStyle: "normal", textAlign: "justify" }}>
                {props.content}
              </Typography>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  )
}

export default ServicesComponent