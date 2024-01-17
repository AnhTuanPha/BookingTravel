import React, { Component } from 'react'

export class chatbot extends Component {
  render() {
    return (
      <div>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <div dangerouslySetInnerHTML={{ __html: `
   <df-messenger
     intent="WELCOME"
     chat-title="FirstTest"
     agent-id="xxxxxxxxxxx"
     language-code="en">
   </df-messenger>
` }} />
      </div>
    )
  }
}

export default chatbot