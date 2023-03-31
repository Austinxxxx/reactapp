import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Artists = ({ id, activeId, artists }) => {
  return activeId === id && artists !== undefined ? (
    <div className="artists">
      <Carousel slide={false} inteval={null} indicators={false}>
        {artists["_embedded"]["attractions"].map((item, index) => (
          <Carousel.Item key={index}>
            <p>{item.name}</p>
            {/*<img src={item["images"][0]["url"]}></img> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  ) : null;
};
export default Artists;
