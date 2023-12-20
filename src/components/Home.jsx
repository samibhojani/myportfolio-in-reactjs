import React from 'react'
import img from '../assets/main4.png'
import Button from '../layouts/Button'
const Home = () => {
  return (
    <div className='nim-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-background'>
        <div className='flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4'>
            <h1 className='text-5xl font-semibold leading-tight mt-24'>I'm  Sami Bhojani 
                <span className='text-brightColors'> Software-Project </span>
                Manager
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic aperiam 
                a cupiditate dolores, tenetur saepe nulla quasi accusamus et eius in iste 
                rerum facilis quos qui fugiat quaerat dolorem voluptatibus.
            </p>
            <Button title='HIRE ME' />
        </div>
        <div className='mt-20'>
            <img width={570} src={img} alt="MainPic" />
        </div>
    </div>
  )
}

export default Home