import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="landing-page">
                <h1 className="welcome-message">Welcome to Kanban!</h1>
                <div className="description">
                    Kanban is a workflow visualization tool that lets you create
                    and optimize your own custom workflow.
                </div>
                <div className="links">
                    Use the links in the Nav Bar to{' '}
                    <Link to="/create">create a new board</Link> or{' '}
                    <Link to="/boards">view an existing board.</Link>
                </div>
            </div>
        );
    }
}

export default Home;
