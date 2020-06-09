import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
//import './Card.css';

function Followers(props) {
  const [follower, setFollower] = useState([]);

  const handleFollower = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/valerievazq/followers`)
      .then((res) => {
        setFollower(res.data);
        console.log("Followers ", follower);
      })

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <button onClick={handleFollower}>Followers</button>
      {console.log("followers", follower)}
      {follower.map((item) => (
        <CardDeck>
          <Card>
            <CardImg
              src={item.avatar_url}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{item.login}</CardTitle>
              <CardSubtitle>{item.location}</CardSubtitle>
            </CardBody>
          </Card>
        </CardDeck>
      ))}
    </div>
  );
}

export default Followers;
