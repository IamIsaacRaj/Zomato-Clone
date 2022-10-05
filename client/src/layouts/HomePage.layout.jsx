import React from 'react'
// import Navbar from '../components/Navbar'
// import Navbar from '../components/FoodTab'

const HomePageLayout = (Component) => (...props)  => {
  return (
    <>
     {/* <Navbar/> */}
     {/* <FoodTab/> */}
     <div className='container mx-auto px-4 lg:px-20'>
      <Component {...props}/>
     </div>
    </>
  )
}

export default HomePageLayout