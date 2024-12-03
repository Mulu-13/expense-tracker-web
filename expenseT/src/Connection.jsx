import { useState, useEffect } from "react";
import "./index.css";

function Connection() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {typeof data.users == "undefined" ? (
        <div className="p-10 bg-green-90">Loading...</div>
      ) : (
        <div>
          <p className="p-5 bg-gray-400">gsfsdgf</p>
          <div>
            {data.users.map((user, i) => (
              <p key={i}>{user}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Connection;
