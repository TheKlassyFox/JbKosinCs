import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends React.Component
{
    render()
    {
        return (

            <section className="home">
                <h1><span style={{fontSize: "2.3em", fontFamily: "inherit"}}>2021</span><br />제 40회<br />어린이 대회</h1>
                <div className="button">
                    <Link to="/Register">대회 접수하기</Link>
                </div>
            </section>
        );
    }
}

export default Home;