import React, { useState, useEffect } from "react";

const ApiCalls = () => {
  const URL = "https://jsonplaceholder.typicode.com/users"; // specify endpoint

  const [print, setPrint] = useState([]);

  const getData = async (apiCall) => {
    try {
      const response = await fetch(apiCall);
      const data = await response.json();
      setPrint(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData(URL);
  }, []);

  return (
    <div>
      {print.map((eachItem) => (
        <div key={eachItem.id}>
          <h1>{eachItem.name}</h1>
          <h2>{eachItem.email}</h2>
          <h3>{eachItem.phone}</h3>
          <h4>{eachItem.website}</h4>    
        </div>
      ))}
    </div>
  );
};

export default ApiCalls;
