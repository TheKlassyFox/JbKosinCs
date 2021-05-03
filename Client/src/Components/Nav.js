import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {navbar: false};
        this.changeBackground = this.changeBackground.bind(this);
    }

    componentDidMount()
    {
        window.addEventListener('scroll', this.changeBackground);
    }

    changeBackground()
    {
        if (window.scrollY < 20)
        {
            this.setState({navbar: false});
        }
        else
        {
            this.setState({navbar: true});
        }
    }

    render()
    {
        return (
<div>
            <nav className={this.state.navbar ? "active" : ""}>
                <Link className="Logo" to="/Home">부산중부노회 주일학교연합회</Link>
                <Link className="About" to="/About">대회 안내</Link>
                <Link className="Register" to="/Register">제출</Link>
                <Link className="Result" to="/Result">결과</Link>
            </nav>
            <div className={this.state.navbar ? "navline active" : "navline"}>

            </div>
            </div>
        );
    }
}

export default Nav;