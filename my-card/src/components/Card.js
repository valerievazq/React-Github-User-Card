import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
function User(props) {
  return (
    <div>
      <div>
        <Card>
          <CardImg top width="100%" src={props.avatar} alt="Profile Pic" />
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardText>{props.bio}</CardText>
          </CardBody>
        </Card>
      </div>

      {/* <div>
        <img src={props.avatar} alt="user avatar" />
        <h4>{props.name}</h4>
        <p>{props.bio}</p>
      </div> */}
    </div>
  );
}

export default User;
