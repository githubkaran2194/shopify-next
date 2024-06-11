/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Footer() {
    const date = new Date().getFullYear();
  return (
    <footer className="">
    <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
      <div className="max-w-sm">
        <div className="mb-6 flex h-10 items-center space-x-2">
          <img className="h-full object-contain" src="/images/logo-circle.png" alt="" />
          <span className="text-lg font-medium">shopify</span>
        </div>
        <div className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
        <nav aria-label="Guides Navigation" className="text-gray-500">
          <ul className="space-y-3">
            <li><Link className="hover:text-blue-600 hover:underline" href="#">How to make a footer</Link></li>
            <li><Link className="hover:text-blue-600 hover:underline" href="#">Designing your app</Link></li>
            <li><Link className="hover:text-blue-600 hover:underline" href="#">Getting help from the community</Link></li>
            <li><Link className="hover:text-blue-600 hover:underline" href="#">Pricing vs Hourly Rate</Link></li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
        <nav aria-label="Footer Navigation" className="text-gray-500">
          <ul className="space-y-3">
            <li><Link className="hover:text-blue-600 hover:underline" href="#">Pricing</Link></li>
            <li><Link className="hover:text-blue-600 hover:underline" href="#">Demo</Link></li>
            <li><Link className="hover:text-blue-600 hover:underline" href="#">Press</Link></li>
            <li><Link className="hover:text-blue-600 hover:underline" href="#">Support Hub</Link></li>
            <li><Link className="hover:text-blue-600 hover:underline" href="#">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">Support Us on Product Hunt</div>
        <div className="flex flex-col">
          <div className="mb-4">
            <Link href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light" alt="Apple - Think&#0032;Different | Product Hunt" /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
        <p className="">© {date}| All Rights Reserved</p>
        <p className="-order-1 sm:order-none">Made by ❤️ karan</p>
        <p className="">
          <Link className="" href="#">Privacy Policy</Link>
          <span>|</span>
          <Link className="" href="#">Terms of Service</Link>
        </p>
      </div>
    </div>
  </footer>
  
  )
}
