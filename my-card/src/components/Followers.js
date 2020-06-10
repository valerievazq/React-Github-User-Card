import React from "react";

export default class Followers extends React.Component {
  render() {
    
    return (
      <div>

        {this.props.followersData.map((data) => (
          <div className="card2">
            <img width="150px" src={data.avatar_url} alt='avatar pic'/>
            <div className="data2">
              <p className="login2">Name: {data.login}</p>
              <p>URL: {data.html_url}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
