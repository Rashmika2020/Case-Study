import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Details() {
  const [details, setDetails] = useState("");

  function DisplayDetails() {
    Axios.get(`http://localhost:3002/details`)
      .then((res) => {
        //  console.log(res);
        setDetails(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    DisplayDetails();
  }, []);

  return (
    <div>
      {details}

      <h3>
        <DisplayDetails />
      </h3>
    </div>
  );
}
