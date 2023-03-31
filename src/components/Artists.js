import { React, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const Artists = ({ id, activeId, data }) => {
  var artistsName = [];
  var [infoState, setInfo] = useState("");
  if (data != undefined) {
    for (let i = 0; i < data["_embedded"]["attractions"].length; i++) {
      artistsName.push(data["_embedded"]["attractions"][i]["name"]);
    }
    var infos = [];
    var getInfo = async () => {
      for (let i = 0; i < artistsName.length; i++) {
        fetch(
          "http://nodejsversion2-env.eba-am5du3km.us-east-2.elasticbeanstalk.com/spotify/" +
            artistsName[i]
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            var artist = data["artists"]["items"][0];
            var info = {
              name: artist["name"],
              image: artist["images"][0]["url"],
              followers: artist["followers"]["total"],
              popularity: artist["popularity"],
              spotify: artist["external_urls"]["spotify"],
            };

            infos.push(info);
            console.log(infos);
          })
          .then(setInfo(infos));
      }
    };
  }
  useEffect(() => {
    getInfo();
  }, []);

  return activeId === id && data !== undefined ? (
    <div className="artists">
      <Carousel slide={false} inteval={null} indicators={false}>
        {infoState.map((item, index) => (
          <Carousel.Item key={index} className="row g-3">
            <div className="col-md-3">
              <img
                src={item.image}
                style={{ width: "100px", borderRadius: "50px" }}
              ></img>
              <p>{item.name}</p>
            </div>
            <div className="col-md-3">
              <label>Popularity</label>
              <p>{item.popularity}</p>
            </div>
            <div className="col-md-3">
              <label>Followers</label>
              <p>{item.followers}</p>
            </div>
            <div className="col-md-3">
              <label>Spotify Link</label>
              <p>
                <a href={item.spotify}>Clickable Spotify Icon</a>
              </p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  ) : null;
};
export default Artists;
