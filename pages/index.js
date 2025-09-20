import Hero from "./Hero"

import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Seoul Pictures</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Some Personal Picture I Took While on Vacation in Korea</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <Image src="/IMG1.jpg" width={501} height={501}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <Image src="/IMG2.jpg" width={401} height={301}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <Image src="/IMG3.jpg" width={601} height={301}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <Image src="/IMG5.jpg" width={501} height={301}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <Image src="/IMG6.jpg" width={502} height={302}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <Image src="/IMG4.jpg" width={501} height={301}/>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
    
  );
}
