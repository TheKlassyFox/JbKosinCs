import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Footer extends React.Component
{
    render()
    {
        return (
            <div>
                <div style={{backgroundColor: "white", height: "1px"}}>

                </div>
                <footer>
                    <Link to="/Home">부산중부노회 주일학교연합회</Link>
                    <p><a href="http://jb.kosincs.org/" style={{color: "white"}}>기존 웹사이트</a><span>           |            </span><a href="http://kosincs.org/" style={{color: "white"}}>전국 주일학교 연합회</a><br /><br />Copyright 2021 JbKosinCs. All rights reserved.</p>
                </footer>
            </div>
        );
    }
}

export default Footer;