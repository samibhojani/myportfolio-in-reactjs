import React from 'react'
import SkillCard from '../layouts/SkillCard'

const About = () => {

const skill1 = 'w-11/12';
const skill2 = 'w-2/3';
const skill3 = 'w-4/5';

  return (
    <div className='min-h-screen flex flex-col justify-round lg:gap-8 lg:px-32 px-5 bg-backgroundColor'>
        <div className='mt-16'>
            <h1 className='text-4xl font-semibold text-center lg:mt-2'>About Me</h1>
        </div>

        <div className='-mt-10'>
            <div className='mb-10'>
                <h2 className='text-3xl font-semibold'>I'm Sami Bhojani</h2>
                <p className='mt-4 lg:mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, perferendis animi consequuntur 
                    sequi voluptate excepturi commodi aspernatur autem deserunt totam 
                    atque, odio sunt. Beatae fugit tempore, quis quia nesciunt magni?
                </p>
            </div>
            <div>
                <h2 className='text-3xl font-semibold'>My Skills</h2>

                <div>
                    <SkillCard title='ERP Implementations and Administration' width={skill1} val='95%' />
                    <SkillCard title='Web Development - MERN' width={skill2} val='70%' />
                    <SkillCard title='SQA Engineering' width={skill3} val='85%' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About