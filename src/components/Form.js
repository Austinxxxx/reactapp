import { useState } from "react";
import { forwardRef } from "react";

const Form = (prop, ref) => {
  function onsubmit_query(e) {
    e.preventDefault();
  }

  // 0: not checked. Manual
  const [auto, setAuto] = useState(0);
  const handleCheck = () => {
    if (auto == 0) {
      setAuto(1);
      prop.checkbox(1);
    } else {
      setAuto(0);
      prop.checkbox(0);
    }
  };
  return (
    <div className="search-form">
      <h4 style={{ textAlign: "center" }}>Events Search</h4>
      <hr
        style={{
          color: "white",
          height: "1",
        }}
      />
      <form
        className="row g-3"
        ref={ref}
        style={{ padding: "10px", marginLeft: "10px", marginRight: "10px" }}
      >
        <div className="col-md-12">
          <label>Keyword</label>
          <input
            className="form-control"
            type="text"
            id="keyword"
            name="keyword"
            placeholder="Key"
            required
          />
        </div>

        <div className="col-md-4 col-sm-12">
          <label>Distance</label>
          <input
            className="form-control"
            type="text"
            id="distance"
            name="distance"
            placeholder="Distance"
            style={{ marginRight: "20px" }}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <label>Category</label>
          <select
            className="form-control"
            type="text"
            id="category"
            name="category"
          >
            <option value="default">Default</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="art">Art</option>
            <option value="film">Film</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>
        {auto == 0 ? (
          <div className="form-group" style={{ marginTop: "10px" }}>
            <label>Location</label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="location"
              placeholder="Location"
            />
          </div>
        ) : null}

        <div className="form-group">
          <label>
            <input
              id="checkbox"
              type="checkbox"
              name="checkbox"
              onChange={() => handleCheck()}
              style={{ float: "left" }}
            />
            Auto-Detect Location
          </label>
        </div>
      </form>
    </div>
  );
};
export default forwardRef(Form);
