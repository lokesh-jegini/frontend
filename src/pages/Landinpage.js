import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Products from '../components/products/Products'
import {acData} from "../data/ac"
import {booksData} from "../data/books"
import {computerData} from "../data/computers"
import {fridgeData} from "../data/fridge"
 import {furnitureData} from "../data/furniture"
import {kitchenData} from "../data/kitchen"
import {menData} from "../data/men"
 import {mobileData} from "../data/mobiles"
 import {speakerData} from "../data/speaker"
 import {tvData} from "../data/tv"
 import {watchData} from "../data/watch"
 import {womanData} from "../data/woman"


 


export default function Landinpage() {
  return (
    <div className='Landingpage'>
    <Navbar />
<Products data={acData}>acData</Products>
<Products data={booksData}>booksData</Products>
<Products data={computerData}>computerData</Products>
<Products data={fridgeData}>fridgeData</Products>
 <Products data={furnitureData}>furnitureData</Products>
<Products data={kitchenData}>kitchenData</Products>
<Products data={speakerData}>speakerData</Products>
<Products data={tvData}>tvData</Products>
<Products data={watchData}>watchData</Products>
<Products data={womanData}>womanData</Products>
<Products data={menData}>menData</Products>
<Products data={mobileData}>mobileData</Products> 

    </div>
  )
}
