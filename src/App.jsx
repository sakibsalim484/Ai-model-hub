import React, { Suspense } from 'react'
import Navber from './component/Navber/Navber'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Model from './component/modeli/Model'
const getmodels=async()=>{
  const res=await fetch('/models.json');
  return res.json();
}

const modelpromise =getmodels();
const App = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
<Model modelpromise={modelpromise}></Model>
    
    
      <Footer></Footer>
    </div>
  )
}

export default App