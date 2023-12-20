import React from 'react'
import EducationCard from '../layouts/EducationCard'

const Education = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-slate-100'>
      <h1 className='text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb7'>Education</h1>
      <div className='bg-white p-5 rounded-md'>
        <EducationCard title='BS - Information Technology' />
        <EducationCard title='Project Management Professional' />
      </div>
    </div>
  )
}

export default Education