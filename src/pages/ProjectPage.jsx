import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ImageGrid from '../Components/pages/Home/ImageGrid'
import styled from 'styled-components'

const ProjectButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    & button {
        width:100px;
        height:50px;
        border: 1px solid #888;
        background-color: white;color:#666;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background-color: #003d6d;
            color: white;
            border-color: transparent;
        }
    }
`

const ProjectPage = () => {
    return (
        <Box mt={5} mb="150px">
            <Container>
                <Box>
                    <Typography sx={{
                        fontSize: '36px', fontFamily: "Poppins,Arial,\"Helvetica Neue\",sans-serif",
                        textAlign: 'left', color: '#222', marginBottom: "30px"
                    }}>
                        PROJECTS
                    </Typography>
                </Box>
                <ImageGrid />
                <ProjectButton>
                    <button>Load more</button>
                </ProjectButton>
            </Container>
        </Box>
    )
}

export default ProjectPage;