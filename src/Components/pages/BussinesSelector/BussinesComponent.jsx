import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import "./bussiness.scss";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, NavLink } from 'react-router-dom';





const BussinesComponent = (props) => {
    return (
        <Box mt="50px" mb="100px">
            <Container>
                <Box mb="30px">
                    <Typography sx={{ fontSize: "36px", textTransform: "uppercase", marginBottom: "2px" }}>
                       {props.title}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        marginBottom: "10px", fontSize: "15px", textAlign: "justify",
                        fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
                        lineHeight: "2.3076923077", color: "#000",marginBottom: "35px"
                    }}>
                        {props.content}
                    </Typography>
                </Box>
                <Box sx={{opacity: "1",maxWidth: "100%",marginBottom: "20px"}}>
                    <NavLink className="btn-54" to="/">
                        <span className="shadow"></span>
                        <span className="depth"></span>
                        <span className="content">
                        View Project <ArrowForwardIcon sx={{ marginLeft: "20px"}}/>
                        </span>
                    </NavLink>
                </Box>
            </Container>

        </Box>
    )
}

export default BussinesComponent