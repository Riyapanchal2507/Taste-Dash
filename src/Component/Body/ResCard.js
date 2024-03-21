import React, { useEffect, useState } from "react";
import Search from "./Search";
import "./body.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import MainResCard from "./MainResCard";

const ResCard = () => {
  const [listofRes, setListofRes] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    const result =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants && json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
    setListofRes(result);
    console.log(result);
  };

  if (!listofRes) return;
   
  if(listofRes.length === 0){
    return <Shimmer/>;
  }

  return (
    <div className="res-card">
      <div className="filter">
        <button 
          className='filter-btn' 
          onClick={()=>{
            const filteredList = listofRes.filter(
              (res)=> res?.info?.avgRating>4
            );
            setListofRes(filteredList);
          }}
        >
        Top Rated Restaurants</button>
      </div>

      <div className="search">
        <Search />
      </div>

      <div style={{ display:"flex", flexWrap:"wrap" }}>
        {listofRes.map((item) => (
          <Link to={'/restaurants/' +item.info.id}>
            <MainResCard key={item.info.id} resData = {item}/>
          </Link>
        ))}
        </div>
      </div>
  );
};

export default ResCard;
