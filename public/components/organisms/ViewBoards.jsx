import React from 'react';
import { array } from 'prop-types';

import { Link } from 'react-router-dom';

const ViewBoards = ({ boards }) => {
    return (
        <div className="board-list">
            {boards.map(board => {
                return (
                    <Link
                        to={`boards/${board.id}`}
                        key={board.id}
                        className="board-card"
                    >
                        <div className="upper-card">
                            <div className="card-image" />
                            <div className="board-name">{board.name}</div>
                        </div>
                        <div className="issue-count">
                            {`${board.tasks.length} active issues`}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

ViewBoards.propTypes = {
    boards: array,
};

export default ViewBoards;
