import React from 'react'

type CardProps = {
  title: string
  description: string
}

const Cards = (data: CardProps) => {
  return (
    <div className='border-blue-500 border-2 rounded-lg py-50 mt-7 px-3f0 bg-gray-800 text-white'>
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      <p className="text-gray-300">{data.description}</p>
    </div>
  )
}

export default Cards
