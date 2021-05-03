import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends React.Component
{
    render()
    {
        return (

            <section className="home">
                <h1>제 24회<br />부산중부<br />어린이대회</h1>
                <div className="button">
                    <Link to="/Register">대회 접수하기</Link>
                </div>
            </section>
        );
    }
}

export default Home;