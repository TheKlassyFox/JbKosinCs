import React from 'react';
import '../App.css';

class ParticipantViewer extends React.Component
{
    render()
    {
        return (

            <div className="pvList">
                {this.props.participants.map((p, i) =>
                    <div key={i} className="pv">
                        <h2>{p.name}</h2>
                        <h2>{p.church}</h2>
                        <h3>{p.dateCreated}</h3>
                        <h3>{p.eventname}</h3>
                        <img src={p.submission} alt={p.name} />
                    </div>
                )};
            </div>
        );
    }
}

export default ParticipantViewer;