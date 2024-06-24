import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/Header/header'
import Exploremenu from '../../components/ExploreMenu/exploremenu'
import Fooddisplay from '../../components/FoodDisplay/fooddisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const home = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category = {category}/>
      <AppDownload/>
    </div>
  )
}

export default home
