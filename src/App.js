import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Tabs from "./components/Tabs";
import Fav from "./components/Fav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

function App() {
  // use state to determine if display table or tabs
  //0 to show table as default, 1 to show tabs
  const [tab, setTab] = useState(0);
  const handleBack = (index) => {
    setTab(index);
  };
  // Set up Search <-> Fav routing; 1 is search, 2 is fav
  const [activePage, setActivePage] = useState(0);
  const handleClick = (id) => {
    setActivePage(id);
  };

  //展示Table哪一行
  const [index, setIndex] = useState(-1);
  const chooseIndex = (index) => {
    setIndex(index);
    setTab(1);
  };

  //App收集Form的数据，call backend，得到api data，render Table 和 其他
  const [backendData, setBackendData] = useState([]);
  const formRef = useRef();
  const save = () => {
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    fetchdata(data);
  };
  const fetchdata = (data) => {
    var url =
      "http://nodejsversion2-env.eba-am5du3km.us-east-2.elasticbeanstalk.com/api";
    url += "/" + data.keyword;
    url += "/" + data.distance;
    url += "/" + data.category;
    url += "/" + data.location;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBackendData(data["_embedded"]["events"]);
      });
  };
  /*
  useEffect(() => {
    fetchdata();
  }, []);
  */

  return (
    <div>
      <div className="page-switch">
        <p onClick={() => handleClick(0)}>Search</p>
        <p onClick={() => handleClick(1)}>Favorite</p>
      </div>

      {activePage == 0 ? (
        <div>
          <Form ref={formRef} />
          <button
            style={{
              background: "orangered",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
            type="submit"
            onClick={save}
          >
            Search
          </button>
          {tab === 0 ? (
            <Table tabledata={backendData} chooseIndex={chooseIndex} />
          ) : (
            <Tabs
              data={backendData[index]}
              keyword={backendData[index]}
              handleBack={handleBack}
            />
          )}
        </div>
      ) : (
        <div>
          <Fav />
        </div>
      )}
    </div>
  );
}

export default App;
