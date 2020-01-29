import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };
  }
  handleChange = e => {
    this.setState({msg: e.target.value})
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.msg} onChange={this.handleChange}/>
        <span>{this.props.maxChars-this.state.msg.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
