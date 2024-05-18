import React from 'react'
import Client from '../Components/pages/Home/Client';
import Specialization from '../Components/pages/Home/Specialization';
import ImageGrid from '../Components/pages/Home/ImageGrid';
import Partners from '../Components/pages/Home/Partners';

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