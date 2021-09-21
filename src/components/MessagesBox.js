import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import '../style/MessageBox.css'

function MessagesBox({messages, name}){
    // console.log(messages)

    return(
        
        <ScrollToBottom className="scrollBox">
    
            {console.log("hi")}
            {messages.map((message, i)=>{
                // console.log(message);
               return(
                <div key={i}>
                <Message message={message} name={name}></Message>
                 </div>

               )
            })}

        </ScrollToBottom>
        
    );
}

export default MessagesBox;