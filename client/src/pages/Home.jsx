import React from 'react'
import Header from '../component/Header';
import Steps from '../component/Steps';
import BgSlider from '../component/BgSlider';
import Testimonial from '../component/Testimonial';
import Upload from '../component/Upload';
import Footer from '../component/Footer';


 function Home() {
  return (
    <div>
      <Header/>
     <Steps/>
     <BgSlider/>
     <Testimonial/>
     <Upload/>
     <Footer/>
    
    </div>
  )
}
export default Home;