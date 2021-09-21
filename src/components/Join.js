import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../style/Join.css';

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [msg,setMsg] = useState('');

    function submitHandler(e){
        if(!name || !room){
            e.preventDefault();
            setMsg('fill all the fileds.');
        }else{
            setMsg('');
        }
    }

    return(
        <div className="join-container">
            <div className="inner-container"> 
            <h1>Join</h1>
            <span>{msg}</span>
            <input 
                className="join-input mt-20" 
                type="text"
                placeholder="Nickname" 
                onChange={(e)=>{setName(e.target.value)}} 
                value={name}
            />
            <input 
                className="join-input mt-20" 
                placeholder="Room" 
                onChange={(e)=>{setRoom(e.target.value)}} 
                value={room}
                onKeyPress={e=> e.key==='Enter'? submitHandler(e) : null}
                
            />
            <Link onClick={submitHandler} to={`/chat?name=${name}&room=${room}`}>
                <button className="button mt-20" type="submit"
                
                >Sign in</button>
            </Link>
            
            </div>
            <p className="note"> 
               
                יש לשים לב לבחור שם חדר זהה עם אותם משתמשים שאיתם תרצה להתכתב                
            </p>
        </div>
    );
}

export default Join;