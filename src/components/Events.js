import React from "react";
const Events = ({ id, activeId, eventDetail }) => {
  return activeId === id ? (
    <div className="row" style={{ color: "white" }}>
      <div className="col-lg-6 mb-4">
        <label>Date</label>
        <p>{eventDetail.dates.start.localDate}</p>
        <label>Artist/Team</label>
        <p>{eventDetail.dates.start.localDate}</p>
        <label>Genres</label>
        <p>{eventDetail.dates.start.localDate}</p>
        <label>Prices Ranges</label>
        <p>{eventDetail.dates.start.localDate}</p>
        <label>Ticket Status</label>
        <p>{eventDetail.dates.start.localDate}</p>
        <label>Buy Ticket At</label>
        <p>Ticketmaster</p>
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
