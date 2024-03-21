import { useEffect, useState } from "react";
import React from 'react';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);

    const {resId} = useParams();
console.log(resId);
    useEffect(()=>{
        fetchResMenu();
    },[]);

    const fetchResMenu = async()=>{
      const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
      const data = await fetch (url);
      
      const json = await data.json();
      // console.log(json)

      setresInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    const items = resInfo?.cards[0]?.card?.card?.info

    if(!items) return 
    
    const {name, cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

  return(
    <div className='menu'>
      <div style={{display:"flex"}}>
        <div>
          <h1>{name}</h1>
          <p>{cuisines.join(",")} - {costForTwoMessage}</p>
          <h2>Menu</h2>
          <ul>
            {itemCards.map((item)=>(
              <li key={item.card.info.id}>
                {item.card.info.name} - {"Rs."} {item.card.info.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;


// data?.cards[2]?.groupCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards