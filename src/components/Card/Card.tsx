import Image from 'next/image'
import React from 'react'

type ProtoTypes = {
    prod : Product
}
const Card = ({ prod } : ProtoTypes) => {
  return (
    <div className='flex flex-col gap-2 hover:scale-105 duration-300 w-64 h-80'>
      <Image src={prod.image} alt={prod.title} width={250} height={250} className='w-auto h-auto'/>
      <h2 className='text-gray-800 font-bold text-xl'>{prod.title}</h2>
      <p className='text-gray-600'>{prod.type}</p>
      <p className='font-bold text-xl'>${prod.price}</p>
    </div>
  )
}

export default Card

