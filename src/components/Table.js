const Table = ({ tabledata, chooseIndex }) => {
  return (
    <div>
      {tabledata.length != 0 ? (
        <div className="result-table">
          <table className="table" style={{ color: "white" }}>
            <tbody>
              <tr>
                <th>Date/Time</th>
                <th>Icon</th>
                <th>Event</th>
                <th>Genre</th>
                <th>Venue</th>
              </tr>
              {tabledata.map((item, index) => (
                <tr key={index}>
                  <td>{item.dates.start.localDate}</td>
                  <td>
                    <img
                      style={{ width: "50px", height: "40px" }}
                      src={item["images"][0]["url"]}
                    />
                  </td>
                  <td onClick={() => chooseIndex(index)}>{item.name}</td>
                  <td>
                    {item["classifications"] != undefined ? (
                      item["classifications"][0]["segment"]["name"]
                    ) : (
                      <p>No Genre</p>
                    )}
                  </td>
                  <td>{item["_embedded"]["venues"][0]["name"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Table;
