import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState("");

  function DisplayUser() {
    Axios.get(`http://localhost:3002/user`)
      .then((res) => {
        //  console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    DisplayUser();
  }, []);

  return (
    <div>
      <div>
        {user}

        <DisplayUser />
      </div>
    </div>
  );
}
