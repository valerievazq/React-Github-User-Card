import React from "react";
import Followers from "./components/Followers.js";
import User from "./components/User.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      avatar: [],
      location: [],
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/valerievazq")
      .then((res) => res.json())
      .then((data) => {
        console.log("User Data", data);
        this.setState({ name: data.name });
        this.setState({ avatar: data.avatar_url });
        this.setState({ location: data.location });
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div>
        <User
          name={this.state.name}
          avatar={this.state.avatar}
          location={this.state.location}
        />
        <Followers />
      </div>
    );
  }
}

export default App;
