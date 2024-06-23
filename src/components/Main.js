import React, { useEffect } from 'react'
import WinterCollection from './WinterCollection'
import Home from './Home'
import CTA from './CTA'
import FeaturedProducts from './FeaturedProducts'
import Testimonials from './Testimonials'
import BestSellingsProducts from '@/app/products/bestselling/page'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Main() {
  useEffect(() => {
    Aos.init({
        duration: 2000, 
        easing: "ease", 
        mirror: true,
    });
}, []);
  return (
    <div>
    <Home/>
    <br/>
    <BestSellingsProducts />
    <WinterCollection/>
    <FeaturedProducts/>
    <CTA/>
    <Testimonials />
    </div>
  )
}
