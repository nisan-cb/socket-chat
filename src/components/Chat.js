import React, { useEffect, useState } from 'react';
import queryString from'query-string';
import io from 'socket.io-client';

import '../style/Chat.css';
import InfoBar from './InfoBar';
import Input from './Input';
import MessagesBox from './MessagesBox';

let socket;

function Chat({location}) {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    const ENDPOINT = 'https://react-socket-web-chat.herokuapp.com/';

    useEffect(()=>{
        const {name,room} = queryString.parse(location.search);
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        socket.emit('join',{name,room}, (error)=>{
            if(error)
                alert(error)
        } );
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[ENDPOINT,location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages(messages=> [...messages,message]);
            // setMessages(messages.push(message));
        })


    },[]);

    const sendHandler = (e)=>{
        console.log('sending..');
        e.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>{
                setMessage('');
            });
        }
    }

    // console.log(message,messages);

    return(
        <div className="cahtContainer">
            <div className="innerContainer">
                <InfoBar room={room} />
                <MessagesBox messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendHandler={sendHandler} />

            </div>
        </div>
    );
}

export default Chat;