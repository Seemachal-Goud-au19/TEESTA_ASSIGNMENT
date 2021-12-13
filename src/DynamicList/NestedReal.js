import React, { useEffect, useState } from "react";
import { datas } from "./Data";
import "./Nested.css"

export const NestedReal = () => {
  const [data, setData] = useState([]);
  const [statedata, setStatedata] = useState([]);

  useEffect(() => {
    setData(datas);
  }, []);

  const ShowState = () => {
    setStatedata(data);
  };

  return (
    <div className="dynamic">
      <div>
        <button className="india" onClick={ShowState}>India</button>
      </div>

      <div>
        {statedata
          ? statedata.map((val, idx) => {
              return (
                <div>
                  <input
                    checked={val.ischecked}
                    type="checkbox"
                    name={val.state}
                  />
                  <label>{val.state}</label>
                </div>
              );
            })
          : ""}
      </div>
      {/* city */}

      <button>Submitt</button>
    </div>
  );
};
