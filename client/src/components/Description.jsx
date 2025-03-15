import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center '>
            <img src={assets.sample_img_1} alt='' className='w-80 xl:w-96 rounded-lg '/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Transform your concepts into visuals effortlessly with our no-cost AI image creator. Perfect for creating captivating graphics or original artwork, our solution converts your written descriptions into striking images in moments. Just envision your idea, write it down, and see it materialize instantly.</p>
                <p className='text-gray-600'>Just enter a text description, and our state-of-the-art AI will create premium images instantly. Whether you need product visuals, character concepts, portraits, or even imaginary scenes, everything can be visualized with minimal effort. Backed by sophisticated AI technology, there are no bounds to what you can create.</p>

            </div>
        </div>
    </div>
  )
}

export default Description