import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";


export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setInterval(() => {
    fetch(`http://localhost:3002/list`)
      .then((response) => response.json())
      .then((data) => setData(data));
    }, 5000);
  }, []);
  

  return (
    <div>
  
      <MDBContainer fluid className="p-8">
        <MDBRow>
        <h1
            className="px-8 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Applications' CPU Usage <br />
          </h1>

          <MDBCard className="my-8 bg-glass">
            <MDBCardBody className="p-5">
           <Table className="tb">
            
        <thead>
          <tr>
            <th>PID</th>
            <th>Name</th>
            <th>CPU Usage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((process, index) => (
            <tr key={index}>
              <td> {process.pid}</td>
              <td>{process.name}</td>
              <td>{process.cpu}</td>
            </tr>
          ))}
        </tbody>
      </Table> 
     
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>

      {/* <Table className="tb">
        <thead>
          <tr>
            <th>PID</th>
            <th>Name</th>
            <th>CPU Usage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((process, index) => (
            <tr key={index}>
              <td> {process.pid}</td>
              <td>{process.name}</td>
              <td>{process.cpu}</td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </div>
  );
}
