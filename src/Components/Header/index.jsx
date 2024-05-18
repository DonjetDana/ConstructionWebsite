import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.jpeg";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';
import { Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import "./header.scss";


const HeaderStyle = styled.div`
  width: 100%;
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 1px 3px 0 rgba(127,202,236,.8)' : 'none')}; ;
  background: rgba(255,255,255,.95);
  position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'static')};
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
  const [isClickedBussines, setIsClickedBussines] = useState(false);
  const [isClickedService, setIsClickedService] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const menuElement = document.getElementById('menu');
    const body = document.body;
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isMobileMenuOpen) {
        body.classList.remove('no-scroll');
      } else {
        body.classList.add('no-scroll');
      }
    }
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
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMobileMenuOpen]);

  return (
    <HeaderStyle isScrolled={isScrolled} sx={{ background: "#ffffff", position: "static" }}>
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
                      <List><Link to="/architecture">Die Architecture</Link></List>
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
      )}
    </HeaderStyle>

  );
};

export default Header;