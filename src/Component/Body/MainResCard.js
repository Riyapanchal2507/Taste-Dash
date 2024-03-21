import React from 'react';

const MainResCard = ({resData}) => {
    const item = resData;
  return (
    <div>
      <div className="card">
        <img
            className="card-img-top"
            src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            item.info.cloudinaryImageId
            }
            style = {{ width: "100%", height:"45%" }}
        />
        <h3 className="card-title">{item.info.name}</h3>
        <p>{item.info.cuisines.join(",")}</p>
        <p>{item.info.costForTwo}</p>
        <p>{item.info.sla.slaString}</p>
        <p className="card-rating">Ratings:{item.info.avgRating}</p>
        </div>
    </div>
  );
}

export default MainResCard;
