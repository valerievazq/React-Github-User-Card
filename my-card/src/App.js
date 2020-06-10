import React from "react";
import Followers from "./components/Followers.js";
import User from "./components/User.js";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    userData: [],
    followersData: [],
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/valerievazq")
      .then((response) => {
        this.setState({
          userData: response.data,
        });
        console.log(response.data);
      })

      .catch((error) => console.log(error));
    axios
      .get("https://api.github.com/users/valerievazq/followers")
      .then((response) => {
        this.setState({
          followers: response.data,
          followersData: response.data,
        });
        console.log(response.data);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub</h1>
        <div>
          <User userData={this.state.userData}></User>
          <div className="data">
            {" "}
            <Followers followersData={this.state.followersData} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: [],
//       avatar: [],
//       bio: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://api.github.com/users/valerievazq")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("User", data);
//         this.setState({ name: data.name });
//         this.setState({ avatar: data.avatar_url });
//         this.setState({ login: data.login });
//         this.setState({ bio: data.bio });
//       })
//       .catch((err) => console.error(err));
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <User
//             name={this.state.name}
//             avatar={this.state.avatar}
//             bio={this.state.bio}
//           />
//         </div>

//         <Followers />
//       </div>
//     );
//   }
// }
// export default App;
