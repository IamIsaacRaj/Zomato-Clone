import React from 'react';


const NutritionCaroselCard = ({image,title}) => {
  return (
    <>
    <div>
      <div className='rounded-md w-4/5 px-3 md:px-4 md:w-auto my-2'>
        <img src={image}
        alt = {title}
        className='w-full h-full object-cover rounded-t-md'
        />
      </div>
      <div>
        <h3 className='text-sm my-2 text-center font-light md:text-xl '>
          {title}
        </h3>
      </div>
    </div>
    </>
  )
}

export default NutritionCaroselCard