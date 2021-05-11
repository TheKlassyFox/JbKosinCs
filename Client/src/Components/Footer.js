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
                    <p>
                        <a href="http://jb.kosincs.org/" style={{color: "white"}} target="_blank">기존 웹사이트</a>
                        <span>     |     </span>
                        <a target="_blank" href="http://kosincs.org/" style={{color: "white"}}>전국 주일학교 연합회</a>
                        <br /><br />
                        <span>ⓒ 2021 부산중부노회주일학교연합회. All rights reserved.</span>
                        <br />
                        <br />
                        <span style={{color: 'grey', fontSize: '0.8em'}}>Developed by TheKlassyFox@gmail.com</span>
                    </p>
                </footer>
            </div>
        );
    }
}

export default Footer;