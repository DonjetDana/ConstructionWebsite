import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const MobileUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
    margin-bottom: 20px;
`

const BussServMobMenu = styled.ul`
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    margin-left: 20px;
`

const SecondList = styled.li`
  list-style: none;
  width: 100%;
  padding: 10px 25px 10px 15px;
  border-bottom: 1px solid #e6e6e6;

  & a {
    text-decoration: none;
    text-transform: uppercase;
    color: #003d6d;
    font-size: 13px;
    position: relative;
  }
`


const Column = styled.div`
flex-direction: column;
width: 100%;
`

const MobileMenu = () => {
    const [isClickedBussines, setIsClickedBussines] = useState(false);
    const [isClickedService, setIsClickedService] = useState(false);
  return (
    <Box>
         <Container>
          <MobileUl id="menu">
            <Column>
              <SecondList><Link to="/">Home</Link></SecondList>
              <SecondList><Link to="/about">About</Link></SecondList>
              <SecondList onClick={() => setIsClickedBussines(!isClickedBussines)}>
                <Link to="#">
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    Bussines Selector {isClickedBussines ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />} 
                  </Box>
                  {isClickedBussines && (
                    <Box>
                      <BussServMobMenu>
                        <SecondList><Link to="/consulting-and-studies">Consulting And Studies</Link></SecondList>
                        <SecondList><Link to="/analysis-and-conceptual-design">Analysis And Conceptual Design</Link></SecondList>
                        <SecondList><Link to="/project-supervision">Project Supervision</Link></SecondList>
                        <SecondList><Link to="/project-managment">Project Managment</Link></SecondList>
                        <SecondList><Link to="/construction">Construction</Link></SecondList>
                      </BussServMobMenu>
                    </Box>
                  )}
                </Link>
              </SecondList>
              <SecondList onClick={() => setIsClickedService(!isClickedService)}>
                <Link to="#">
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  Service {isClickedService ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />} 
                  </Box>
                  {isClickedService && (
                    <Box>
                      <BussServMobMenu>
                      <SecondList><Link to="/consulting-and-studies">Consulting And Studies</Link></SecondList>
                      <SecondList><Link to="/analysis-and-conceptual-design">Analysis And Conceptual Design</Link></SecondList>
                      <SecondList><Link to="/project-supervision">Project Supervision</Link></SecondList>
                      <SecondList><Link to="/project-managment">Project Managment</Link></SecondList>
                      <SecondList><Link to="/construction">Construction</Link></SecondList>
                      </BussServMobMenu>
                    </Box>
                  )}
                </Link>
              </SecondList>
              <SecondList><Link to="/projects">Projects</Link></SecondList>
              <SecondList><Link to="/contact">Contact</Link></SecondList>
            </Column>
          </MobileUl>
        </Container>
    </Box>
  )
}

export default MobileMenu