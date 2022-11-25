import React,{ useState } from 'react';
//component
import MenuCollection from './MenuCollection';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getImage } from '../../redux/reducers/image/image.action';
import { useEffect } from 'react';
const Menu = () => {

  const [menus,setMenus] = useState([]);

  const dispatch = useDispatch();
  const restaurant = useSelector((globaState) =>
    globaState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (restaurant) {
      dispatch(getImage(restaurant?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location))
        setMenus(images);
      });
    }
  }, [restaurant]);
  return (
    <div className='flex flex-wrap gap-3'>
      <MenuCollection menuTitle="Menu" pages={menus.length} images={menus} />
    </div>
  )
}

export default Menu