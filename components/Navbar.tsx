import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div className='h-16 w-full  flex items-center bg-gradient-to-r from-black to-purple-900 justify-end'>
    
    
        <ul className='flex flex-row justify-end gap-10 p-5 text-lg font-serif text-blue-900h-96 
    bg-gradient-to-r from-black to-purple-900 '>
            <li className='text-blue-500 hover:text-white'><Link href="/home">Home</Link></li>
            <li className='text-blue-500 hover:text-white'><Link href="/about">About</Link></li>
            <li className='text-blue-500 hover:text-white'><Link href="/projects">Projects</Link></li>
            <li className='text-blue-500 hover:text-white'><Link href="/skills">Skills</Link></li>
            <li className='text-blue-500 hover:text-white'><Link href="/contact">Contact</Link></li>
            
        </ul>
    
    </div>
  )
}

export default Navbar
