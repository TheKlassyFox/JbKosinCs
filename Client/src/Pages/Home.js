import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends React.Component
{
    render()
    {
        return (

            <section className="home">
                <div className="weak-filter"></div>
                <h1>제 24회<br />부산중부<br />그리기/글짓기<br />대회</h1>
                <div className="button">
                    <Link to="/Register">작품 제출하기</Link>
                </div>
            </section>
        );
    }
}

export default Home;