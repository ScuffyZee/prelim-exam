import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Welcome to the landing page
        <br class="hidden lg:inline-block"/>Bozo
      </h1>
      <p class="mb-8 leading-relaxed">I have no idea what to put here but welcome to the landing page and all, take a look around, check the different pages from the navbar and do what you want tbh</p>
      <div class="flex justify-center">

      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image src="/chibi.png" width={400} height={500}></Image>
    </div>
  </div>
</section>
  )
}

export default Hero