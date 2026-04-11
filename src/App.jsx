import React, { Suspense, useState } from 'react'
import Navber from './component/Navber/Navber'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Model from './component/modeli/Model'
import Cart from './component/Cart'
const getmodels=async()=>{
  const res=await fetch('/models.json');
  return res.json();
}

const modelpromise =getmodels();
const App = () => {
  const [activeTab, setActiveTab] = useState('model');
  const [carts ,setCarts] = useState([]);
  console.log(activeTab);
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Model" defaultChecked onClick={()=>setActiveTab('model')} />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="cart" onClick={()=>setActiveTab('cart')}  />
  
</div>
{activeTab === 'model' ? <Model modelpromise={modelpromise} carts={carts} setCarts={setCarts}></Model> : null}
{activeTab === 'cart' ? <Cart carts={carts} setCarts={setCarts} ></Cart> : null}
      <Footer></Footer>
    </div>
  )
}

export default App