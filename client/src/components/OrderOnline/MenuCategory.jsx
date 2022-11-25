import React from 'react';
import classname from 'classnames';
import { Link,useParams } from 'react-router-dom';

const MenuCategory = (props) => {

  const { id } = useParams();

  return (
  <>
    <a 
      className={classname("py-2 px-1",{
        "text-zomato-400 bg-zomato-50 border-r-4 border-zomato-400":props.isActive,
      })}
      onClick = {props.onClickHandler}
      href={`/restaurant/${id}/order-online/#${props.target}`}
    >
     {props.name} ({props.items.length})
    </a>
  </>
  )
}

export default MenuCategory