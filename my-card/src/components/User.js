import React from "react";
//import './Card.css';
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
// } from "reactstrap";
export default class User extends React.Component {
  render() {
    return (
      <div>
        <div>
        <img width="150px" src={this.props.userData.avatar_url} alt='avatar picture' />
          <p>Name: {this.props.userData.login}</p>
          <p>URL: {this.props.userData.html_url}</p>
          <p>Bio: {this.props.userData.bio}</p>
          <p>Followers: {this.props.userData.followers}</p>
          <p>Following: {this.props.userData.following}</p>
        </div>
        {/* <div> */}
        {/* <Card>
        <CardImg top width="100%" src= {props.avatar} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div> */}
      </div>
    );
  }
}
