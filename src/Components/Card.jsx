import React from 'react'

const Card = ({title,price ,discountPercentage,brand,description,thumbnail}) => {
  return (
    <div  className=" flex justify-between items-center rounded-lg mx-5 my-2  bg-gray-200 py-5 px-2 ">
     <div className='flex w-1/2 justify-between'>  
     <img src={thumbnail} className='w-32 object-cover' alt="" />
<div className='w-[63%]'>
    
    
    
<span className="flex font-bold text-2xl" >{title}</span>
<span className="flex font-medium text-xl" >{brand}</span>
<span className="flex font-medium" >{price}</span>

<span className="flex font-medium" >{discountPercentage}</span>
<span className="flex font-medium" >{description}</span>




</div>
     </div>

<button className='w-44 h-12 p-3 rounded-lg bg-blue-700 text-white'>Buy</button>
</div>
  )
}

export default Card