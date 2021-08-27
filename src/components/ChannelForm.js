import React, { Component } from "react";

export default class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ""
    };
  }
  onChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log("Submiting ", this.state.channel);
    this.props.selectChannel(this.state.channel);
    this.setState({ channel: "" });
  };
  render() {
    return (
      <div style={{margin:'16px'}}>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Channel Name"
            name="channel"
            value={this.state.channel}
            onChange={this.onChange}
          />
          <input type="submit" value="Join Channel" style={{margin:'6px'}}/>
        </form>
      </div>
    );
  }
}
