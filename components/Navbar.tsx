import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div className='h-16 w-full  flex items-center bg-gradient-to-r from-black to-purple-900 justify-end'>
    
        <ul className='gap-15 flex flex-row items-center font-mono text-blue-900h-96 w-full  mx-140 '>
         
            <li className='text-blue-500 hover:text-white '><Link href="/home">Home</Link></li>
            <li className='text-blue-500 hover:text-white'><Link href="/about">About</Link></li>
            <li className='text-blue-500 hover:text-white'><Link href="/projects">Projects</Link></li>
            <li className='text-blue-500 hover:text-white'><Link href="/contact">Contact</Link></li>
            
        </ul>
    
    </div>
  )
}

export default Navbar
