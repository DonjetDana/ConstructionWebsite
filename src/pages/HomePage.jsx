import React from 'react'
import Client from '../Components/pages/HomeComponents/Client';
import Specialization from '../Components/pages/HomeComponents/Specialization';
import ImageGrid from '../Components/pages/HomeComponents/ImageGrid';
import Partners from '../Components/pages/HomeComponents/Partners';

const HomePage = () => {
  return (
    <>
    <Client />
    <Specialization />
    <ImageGrid />
    <Partners />
    </>
  )
}

export default HomePage