import React from 'react';
import '../style/Input.css';

function Input ({message,setMessage,sendHandler}){

    return (

        <form className="form">
            <input 
                className="input"
                type="text"
                placeholder="Tyoe a message..."
                value={message}
                onChange={e=>setMessage(e.target.value)}
                onKeyPress={e=> e.key==='Enter'? sendHandler(e): null}
            />
            <button 
                className="sendBtn"
                onClick={e=>sendHandler(e)}
            >Send</button>

        </form>
    )
}

export default Input;