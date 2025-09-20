import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Image src="/acheron.png" width={80} height={80}></Image>
    <span class="ml-3 text-xl">Zidane Lineses</span>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/">
      <div class="mr-5 hover:text-white">Home</div>
      </Link>
      <Link href="/About">
      <div class="mr-5 hover:text-white">About</div>
      </Link>
      <Link href="/Contact">
      <div class="mr-5 hover:text-white">Contact Us</div>
      </Link>
      <Link href="/Content">
      <div class="mr-5 hover:text-white">Content</div>
      </Link>
    </nav>
  </div>
</header>
  )
}

export default Navbar
