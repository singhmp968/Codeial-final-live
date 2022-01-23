import React, { Component } from 'react';
import '../chat.css';
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      typeMessage: '',
    };
  }
  render() {
    const { typeMessage, messages } = this.state;
    return (
      <div className="chat-container">
        <div className="chat-header">
          Chat
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            alt=""
            height={17}
          />
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                messages.self
                  ? 'chat-bubble self-chat'
                  : 'chat-bubble other-chat'
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={typeMessage}
            onChange={(e) => this.setState({ typeMessage: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Chat;
