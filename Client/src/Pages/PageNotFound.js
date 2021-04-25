import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class PageNotFound extends React.Component
{
    render()
    {
        return (

            <section className="home">
                <div className="filter"></div>
                <h1>404<br />페이지를 찾을 수 없습니다.</h1>
                <div className="button">
                    <Link to="/Home">홈으로</Link>
                </div>
            </section>
        );
    }
}

export default PageNotFound;