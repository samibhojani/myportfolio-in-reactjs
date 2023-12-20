import React from 'react'

const EducationCard = (props) => {
  return (
    <div className='flex flex-col lg:flex-row py-4'>
        <div className='w-full lg:w-2/4'>
            <h2 className='font-semibold'> {props.title} </h2>
            <div className='mt-2'>
                <p>Student</p>
                <p>Jan 2016 - Dec 2019</p>
            </div>
        </div>
        <div>
            <h2 className='font-semibold mt-2 lg:mt-0'>Certification / Degree Program</h2>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo blanditiis
               fugit doloribus. Eaque totam optio deleniti sapiente, sunt eveniet!
            </p>
            <div className='bg-slate-500 w-full h-0.5 mt-2'></div>
        </div>
    </div>
  )
}

export default EducationCard