import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//layout
import HomePageLayout from '../layouts/HomePage.layout';
//compnents
import Delivery from '../components/Delivery';
import Dinning from '../components/Dinning';
import NightLife from '../components/NightLife';
import Nutrition from '../components/Nutrition';
//redux
import { useDispatch } from "react-redux";
import { getRestaurant } from "../redux/reducers/restaurant/restaurant.action";

const Home = () => {
  const {type} = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  return (
    <>
    <div className='my-5 mb-30 md:mb-10'>
    {type === 'delivery' && <Delivery/>}
    {type === 'dining' && <Dinning/>}
    {type === 'night' && <NightLife/>}
    {type === 'nutri' && <Nutrition/>}
    </div>
    </>
  )
}

export default HomePageLayout(Home)