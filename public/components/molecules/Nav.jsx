import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <h1>
                <Link to="/">Kanban</Link>
            </h1>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/create">
						Create Board
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/boards">
						View Boards
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
