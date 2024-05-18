import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.jpeg";
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';
import { Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import "./header.scss";
import MobileMenu from './MobileMenu';


const HeaderStyle = styled.div`
  width: 100%;
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 1px 3px 0 rgba(127,202,236,.8)' : 'none')}; ;
  background: rgba(255,255,255,.95);
  position: ${({ isScrolled }) => (isScrolled ? 'fixed' :  'static')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  &div {
    display: flex;
    justify-content:center;
    margin: 0 auto;
  }
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;


const BussinesServiceList = styled.ul`
  display: ${({ isHovered }) => (isHovered ? 'block' : 'none')};
  position: absolute;
  list-style-type: none;
  padding: 10px;
  margin: 20px 10px;
  color: #f8f8f8;
  z-index: 999;
  min-width: 265px;
  transition: all .3s ease;

  & li {
    margin-bottom: 1px;
    padding: 10px;
    background-color: #003d6d;
  }

  & a {
    text-decoration: none;
    color: white;
    padding: 10px;
  }
`;

const UnorderedList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`



const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003d6d;
  padding: 26px 22px;
  
  &:visited {
    color: #003d6d;
  }
  &:active {
    font-weight: bold;
  }

  &:hover ${BussinesServiceList} {
    display: block;
  }
`;



const MenuButton = styled(IconButton)`
  @media (min-width: 830px) {
    display: none;
  }
`;

const List = styled.li`
  list-style-type: none;
`;

const LogoSize = styled.div`
  & img {
    width: 100px;
    height: 80px;
    object-fit: contain;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveredBusiness, setIsHoveredBusiness] = useState(false);
  const [isHoveredServices, setIsHoveredServices] = useState(false);
  const location = useLocation();
 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 830);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }


    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const mobileStaticMenu = isMobile ? false : isScrolled;

  return (
    <HeaderStyle isScrolled={mobileStaticMenu} sx={{ background: "#ffffff", position: "static" }}>
      <Container xs="md">
        <SpaceBetween>
          <LogoSize className='logo'>
            <img src={logo} alt="" />
          </LogoSize>
          <div>
            {isMobile ? (
              <MenuButton edge="start" color="inherit" aria-label="menu" onClick={toggleMobileMenu}
                sx={{ transition: 'transform 0.3s ease', transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)', color: "gray" }}>
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </MenuButton>
            ) : (
              <UnorderedList>
                <List><StyledLink to="/">Home</StyledLink></List>
                <List><StyledLink to="/about">About</StyledLink></List>
                <List>
                  <StyledLink onMouseEnter={() => setIsHoveredBusiness(true)} onMouseLeave={() => setIsHoveredBusiness(false)}>
                    Bussines Selector
                    <BussinesServiceList isHovered={isHoveredBusiness}>
                      <List><Link to="/architecture">Architecture</Link></List>
                      <List><Link to="/3-3-energy-effiency-renewable-energy">Energy Efficiency and Renewable Energy</Link></List>
                      <List><Link to="/3-4-water-infrastructure">Water & Infrastructure</Link></List>
                    </BussinesServiceList>
                  </StyledLink>
                </List>
                <List>
                  <StyledLink onMouseEnter={() => setIsHoveredServices(true)} onMouseLeave={() => setIsHoveredServices(false)}>
                    Services
                    <BussinesServiceList isHovered={isHoveredServices}>
                      <List><Link to="/consulting-and-studies">Consulting And Studies</Link></List>
                      <List><Link to="/analysis-and-conceptual-design">Analysis And Conceptual Design</Link></List>
                      <List><Link to="/project-supervision">Project Supervision</Link></List>
                      <List><Link to="/project-managment">Project Managment</Link></List>
                      <List><Link to="/construction">Construction</Link></List>
                    </BussinesServiceList>
                  </StyledLink></List>
                <List><StyledLink to="/projects">Projects</StyledLink></List>
                <List><StyledLink to="/contact">Contact</StyledLink></List>
              </UnorderedList>
            )}
          </div>
        </SpaceBetween>
      </Container>
      {isMobileMenuOpen && (
        <MobileMenu />
      )}
    </HeaderStyle>

  );
};

export default Header;