import React, { useState } from "react";
import "../App.css";
import { ReactComponent as Chat } from '../icons/chat.svg';
import { ReactComponent as AskDoubt } from '../icons/AskDoubt.svg';
import { ReactComponent as Hand } from '../icons/hand.svg';
import { ReactComponent as Settings } from '../icons/Setting.svg';
import { ReactComponent as FullScreen } from '../icons/FullScreen.svg';
import SideNavLayout from "./sideNavLayouts";

const SideBar = (props) => {

    const [toggleNav, setToggleNav] = useState(false);
    const [buttonName, setButtonName] = useState('chat');

    const toggleClassName = () => {
        setToggleNav(!toggleNav);
    }


    return (
        <div className="side-nav-bar">
            {props.setChild(toggleNav)}
            <div className="nav-button-group">
                <button className="main-nav-button" style={{backgroundColor:"Transparent", alignItems:"center"}} onClick={toggleClassName}><Chat /></button>
            </div>
            <div className={`sideMenu ${toggleNav? "visible":"hidden"}`}>
            <button onClick={()=>setButtonName('chat')}><Chat /></button>
            <button onClick={()=>setButtonName('askQuestions')}><AskDoubt /></button>
            <button onClick={()=>setButtonName('riseHand')}><Hand /></button>
            <button onClick={()=>setButtonName('settings')}><Settings /></button>
            <button style={{paddingBottom: "5px"}} onClick={toggleClassName}><FullScreen /></button>
                <SideNavLayout buttonName={buttonName} />
            </div>
        </div>
    )
}

export default SideBar