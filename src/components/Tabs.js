import Artists from "./Artists";
import Venue from "./Venue";
import Events from "./Events";
import React, { useEffect, useState } from "react";
import { FaGrinHearts, FaRegGrinHearts } from "react-icons/fa";

const Tabs = ({ data, keyword, handleBack }) => {
  const ulstyle = {
    display: "flex",
    listStyleType: "none",
    backgroundColor: "green",
  };

  const [activeId, setActiveId] = useState("1");
  const handleClick = (id) => {
    setActiveId(id);
  };
  //直接在tabs里localstorage，然后在fav直接access
  const favit = (data) => {
    localStorage.setItem(
      data.name,
      JSON.stringify({
        date: data.dates.start.localDate,
        name: data.name,
        category: data["classifications"][0]["segment"]["name"],
        venue: data["_embedded"]["venues"][0]["name"],
      })
    );
  };
  const [venue, setVenue] = useState();
  const fetchdata = () => {
    var apikey = "KR2wKHbuJprTgYBjFRMs1wdfaCHSkAnf";
    var url = "https://app.ticketmaster.com/discovery/v2/venues.json?";
    url += "keyword=" + data["_embedded"]["venues"][0]["name"];
    url += "&apikey=" + apikey;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVenue(data);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {data != undefined ? (
        <div className="Tabs">
          <div>
            <p onClick={() => handleBack(0)}>back</p>
            <h3 style={{ textAlign: "center" }}>{data.name}</h3>
            <FaRegGrinHearts
              onClick={() => favit(data)}
              style={{
                float: "left",
                display: "inline-block",
                textAlign: "center",
                display: "flex",
              }}
            />
          </div>
          {/*<h2 onClick={() => favit(data)}>heart</h2>*/}
          <div>
            <ul className="nav justify-content-center" style={ulstyle}>
              <li className="nav-item">&nbsp; &nbsp; </li>
              <li className="nav-item" onClick={() => handleClick("1")}>
                Events
              </li>
              <li>&nbsp; &nbsp; </li>
              <li>&nbsp; &nbsp; </li>
              <li className="nav-item" onClick={() => handleClick("2")}>
                Artists/Teams
              </li>
              <li>&nbsp; &nbsp; </li>
              <li>&nbsp; &nbsp; </li>
              <li className="nav-item" onClick={() => handleClick("3")}>
                Venue
              </li>
              <li>&nbsp; &nbsp; </li>
              <li>&nbsp; &nbsp; </li>
            </ul>
          </div>
          <div className="outlet">
            <Events id="1" activeId={activeId} eventDetail={data} />
            <Artists id="2" activeId={activeId} artists={data} />
            <Venue id="3" activeId={activeId} venue={venue} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Tabs;
