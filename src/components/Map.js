import GoogleMapReact from "google-map-react";
const Map = ({ closeMap, address, lng, lat }) => {
  console.log(parseInt(lat));
  const locations = {
    center: {
      lat: parseInt(lat),
      lng: parseInt(lng),
    },
    zoom: 12,
  };
  const googleapi = "AIzaSyBeVtrNRqg_lU8dHL4_KqnKi835-57jAkY";

  return (
    <div style={{ height: "40vh", width: "60%" }}>
      <button onClick={() => closeMap()}>Close Map</button>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBeVtrNRqg_lU8dHL4_KqnKi835-57jAkY" }}
        defaultCenter={locations.center}
        defaultZoom={locations.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
