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
                    <div>
                        <h2>글짓기 - 1학년</h2>
                        <img src="/Results/imaged.jpg" onError={(e) => {e.target.onError = null;}}></img>
                    </div>
                </div>
            </section>
        );
    }
}

export default Result;