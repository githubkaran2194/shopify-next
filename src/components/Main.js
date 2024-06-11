import React from 'react'
import WinterCollection from './WinterCollection'
import BestSelling from './BestSelling'
import Home from './Home'
import CTA from './CTA'
import FeaturedProducts from './FeaturedProducts'
import Testimonials from './Testimonials'

export default function Main() {
  return (
    <div>
    <Home/>
    <br/>
    <BestSelling />
    <WinterCollection/>
    <FeaturedProducts/>
    <CTA/>
    <Testimonials />
    </div>
  )
}
