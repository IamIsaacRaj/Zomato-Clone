import React from 'react';
import {Outlet} from 'react-router-dom';
//layout
import RestaurantLayout from '../layouts/RestaurantPage.layout';
const Restaurant = () => {
  return (
    <>
      <h1>Restaurant</h1> 
      <Outlet />
    </>
  )
}

export default RestaurantLayout(Restaurant)