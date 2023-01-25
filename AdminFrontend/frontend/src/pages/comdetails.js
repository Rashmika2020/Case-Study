import React from "react";
import Table from "react-bootstrap/Table";
import Details from "./Details";
import Button from "react-bootstrap/Button";
import DisplayUser from "./user";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

export default function Comdetails() {
  
  const navigate = useNavigate();
  return (
    <div>
    

      <MDBContainer fluid className="p-8">
        <MDBRow>
          <h1
            className="px-8 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Details Of Computers <br />
          </h1>

          <MDBCard className="my-8 bg-glass">
            <MDBCardBody className="p-5">
            <Table className="tb">
        <thead>
          <tr>
            <th>Computer</th>
            <th>CPU Usage</th>
            <th>Applications that consume more than 10%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DisplayUser />
            </td>
            <td>
              <Details />
            </td>
            <td>

              <Button variant="warning" onClick={() => navigate("/list")}>
                Click here to get details
              </Button>
            </td>
          </tr>
        </tbody>
      </Table> 
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>

    </div>
  );
}
