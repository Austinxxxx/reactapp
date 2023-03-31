import React from "react";
const Events = ({ id, activeId, eventDetail }) => {
  return activeId === id ? (
    <div className="row" style={{ color: "white" }}>
      <div className="col-lg-6 mb-4">
        <label>Date</label>
        <p>{eventDetail.dates.start.localDate}</p>
        <label>Artist/Team</label>
        <p>
          {eventDetail["_embedded"]["attractions"] != undefined
            ? eventDetail["_embedded"]["attractions"][0]["name"]
            : null}
        </p>
        <label>Genres</label>
        <p>
          {eventDetail["classifications"] != undefined
            ? eventDetail["classifications"][0]["segment"]["name"]
            : null}
        </p>
        <label>Prices Ranges</label>
        <p>
          {eventDetail["priceRanges"][0]["min"]}-
          {eventDetail["priceRanges"][0]["max"]}
        </p>
        <label>Ticket Status</label>
        <p>{eventDetail.dates.status.code}</p>
        <label>Buy Ticket At</label>
        <p>
          {eventDetail["url"] != undefined ? (
            <a href={eventDetail["url"]}>Ticketmaster</a>
          ) : null}
        </p>
      </div>
      <div className="col-lg-6 mb-4 align-self-center">
        <img
          src={eventDetail.seatmap.staticUrl}
          style={{ width: "300px" }}
        ></img>
      </div>
    </div>
  ) : null;
};
export default Events;
