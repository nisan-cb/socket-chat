import React from 'react';
import '../style/InfoBar.css';
import onlineIcon  from '../icons/onlineIcon.png'
import closeIcon  from '../icons/closeIcon.png'

function InfoBar({room}){

    return(
        <div className="infoBar">
            <div className="leftContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3>{room}</h3>
            </div>

            <div className="rightContainer">   
                <a href="/" ><img src={closeIcon} alt="close"/></a>
            </div>
        </div>
    );
}

export default InfoBar;