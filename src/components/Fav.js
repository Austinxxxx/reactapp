import { useState, useEffect } from "react";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Fav = () => {
  //localStorage.clear();
  const [fav, setFav] = useState([]);
  const items = { ...localStorage };

  useEffect(() => {
    for (var i = 0; i < localStorage.length; i++) {
      var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
      setFav((oldArray) => [...oldArray, item]);
    }
  }, []);

  //localdata.map((item, index) => console.log(item.category));

  const remove = (name) => {
    setFav((current) => current.filter((item) => item.name !== name));
  };

  return (
    <div
      className=" table-responsive card"
      style={{
        backgroundColor: "white",
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        borderRadius: "25px",
      }}
    >
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Event</th>
            <th>Category</th>
            <th>Venue</th>
            <th>Favorite</th>
          </tr>
          {fav.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.venue}</td>
              <td onClick={() => remove(item.name)}>remove</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fav;
