import React from 'react';
import TextForm from '../Components/TextForm';
import '../App.css';

class Register extends React.Component
{
    render()
    {
        return (

            <section>
                <div className="filter"></div>
                <h1>대회 접수</h1>
                <div className="contents">
                    <TextForm />
                </div>
            </section>
        );
    }
}

export default Register;