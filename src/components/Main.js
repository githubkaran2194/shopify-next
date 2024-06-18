import React from 'react'
import WinterCollection from './WinterCollection'
import Home from './Home'
import CTA from './CTA'
import FeaturedProducts from './FeaturedProducts'
import Testimonials from './Testimonials'
import BestSellingsProducts from '@/app/products/bestselling/page'

export default function Main() {
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
