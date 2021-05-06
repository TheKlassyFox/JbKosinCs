import React from 'react';
import ParticipantViewer from '../Components/ParticipantViewer';
import '../App.css';

class Result extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {p: null};
    }

    async componentDidMount()
    {
        const p = await fetch("/get/participants");

        if (p !== undefined)
        {
            this.setState({p: await p.json()});
        }
    }

    render()
    {
        return (

            <section>
                <div className="filter"></div>
                <h1>대회 결과</h1>
                <div className="contents">
                    <div className="eventResult">
                        <h2>글짓기 - 1학년 결과</h2>
                        <img src="/Results/1-1.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>글짓기 - 2학년 결과</h2>
                        <img src="/Results/1-2.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>글짓기 - 3학년 결과</h2>
                        <img src="/Results/1-3.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>글짓기 - 4학년 결과</h2>
                        <img src="/Results/1-4.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>글짓기 - 5학년 결과</h2>
                        <img src="/Results/1-5.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>글짓기 - 6학년 결과</h2>
                        <img src="/Results/1-6.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>그리기 - 유치부 결과</h2>
                        <img src="/Results/2-0.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>그리기 - 1학년 결과</h2>
                        <img src="/Results/2-1.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>그리기 - 2학년 결과</h2>
                        <img src="/Results/2-2.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>그리기 - 3학년 결과</h2>
                        <img src="/Results/2-3.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>그리기 - 4학년 결과</h2>
                        <img src="/Results/2-4.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>그리기 - 5학년 결과</h2>
                        <img src="/Results/2-5.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                    <div className="eventResult">
                        <h2>그리기 - 6학년 결과</h2>
                        <img src="/Results/2-6.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                </div>
            </section>
        );
    }
}

export default Result;