import React from "react";
import { useState } from "react";
import Map from "./Map";
const Venue = ({ id, activeId, venue }) => {
  // 0 dont show map. 1 show map
  const [map, setMap] = useState(0);
  const showmap = () => {
    setMap(1);
  };
  const closeMap = () => {
    setMap(0);
  };
  console.log(map);
  return activeId === id && venue != undefined ? (
    <div className="row" style={{ color: "white" }}>
      <div className="col-lg-6 mb-4">
        <label>Name</label>
        <p>{venue["_embedded"]["venues"][0]["name"]}</p>
        <label>Address</label>
        <p>{venue["_embedded"]["venues"][0]["address"]["line1"]}</p>
        <label>Phone Number</label>
        <p>
          {
            venue["_embedded"]["venues"][0]["boxOfficeInfo"][
              "phoneNumberDetail"
            ]
          }
        </p>
      </div>
      <div className="col-lg-6 mb-4 align-self-center">
        <label>Open Hours</label>
        <p>
          {venue["_embedded"]["venues"][0]["boxOfficeInfo"]["openHoursDetail"]}
        </p>
        <label>General Rule</label>
        <p>{venue["_embedded"]["venues"][0]["generalInfo"]["generalRule"]}</p>
        <label>Child Rule</label>
        <p>{venue["_embedded"]["venues"][0]["generalInfo"]["childRule"]}</p>
      </div>
      <div>
        <button onClick={() => showmap()}>Show Venue on Google map</button>
      </div>
      <div>
        {map === 1 ? (
          <Map
            closeMap={closeMap}
            address={venue["_embedded"]["venues"][0]["address"]["line1"]}
            lng={venue["_embedded"]["venues"][0]["location"]["longitude"]}
            lat={venue["_embedded"]["venues"][0]["location"]["latitude"]}
          />
        ) : null}
      </div>
    </div>
  ) : null;
};
export default Venue;
