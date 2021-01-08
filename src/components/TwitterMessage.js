import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280
    };
  }
  handleInputChange = () => {
    this.setState( preState => {
      return{
        maxChars: preState.maxChars -1
       }
     }
    )
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInputChange} />
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
