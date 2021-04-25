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
                    <p>Copyright (c) 2021 부산중부노회 주일학교연합회. All rights reserved.</p>
                </footer>
            </div>
        );
    }
}

export default Footer;