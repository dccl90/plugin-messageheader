import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';



class CustomMessageHeader extends React.Component {
  render() {
    // Retrieve Task, Member and Meessage details
    // (`task` will be undefined if there's no task selected in the UI)
    const { task, member, message } = this.props;

    const headerStyle = {
     paddingLeft: "12px",
     paddingRight: "12px",
     paddingTop: "5px",
     justifyContent: "space-between",
     display: "flex",
     flexFlow: "row nowrap",
     flexGrow: 1,
     flexShrink: 1
    }

    const usernameStyle = {
     fontSize: "10px",
     marginTop: "0px",
     marginBottom: "0px",
     overflow: "hidden",
     textOverflow: "ellipsis",
     whiteSpace: "nowrap",
     flex: "0 1 auto",
     marginRight: "8px",
     fontWeight: "bold",
    }

    const timeStyle = {
     fontSize: "10px",
     marginTop: "0px",
     marginBottom: "0px",
     overflow: "hidden",
     textOverflow: "ellipsis",
     whiteSpace: "nowrap",
     flex: "0 0 auto"
    }


    if(this.props.message.isFromMe || typeof member.source === 'undefined') {
     return(
      <div style={headerStyle}>
        <div style={usernameStyle}>{member.friendlyName}</div>
        <div style={timeStyle}>{message.source.timestamp.toLocaleTimeString()}</div>
      </div>
     )
    } else {
     return (
     <div style={headerStyle}>
        <div style={usernameStyle}>{task.attributes.name}</div>
        <div style={timeStyle}>{message.source.timestamp.toLocaleTimeString()}</div>
      </div>
     )
    }
 

    
  }
}

// The withTaskContext() helper function creates a
// Higher-Order Component that uses the Context API
// to access Task data, then adds the Task data to
// the wrapped component.

export default withTaskContext(CustomMessageHeader);