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
                {
                    this.state.p ? <ParticipantViewer participants={this.state.p} /> : <h2>결과가 없습니다.</h2>
                }
                </div>
            </section>
        );
    }
}

export default Result;