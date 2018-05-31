import React, { Component } from 'react';
import { string, func } from 'prop-types';

import Button from '../atoms/Button';

class Task extends Component {
    render() {
        const {
            className,
            type,
            task,
            id,
            prevStatus,
            nextStatus,
            updateStatus,
            boardId,
        } = this.props;
        const classes = `${className} ${type}`;
        return (
            <div className={classes}>
                <div className="task-title">{task}</div>
                <div className="update-buttons">
                    {prevStatus && (
                        <Button
                            className="updateStatus"
                            onClick={() =>
                                updateStatus(boardId, id, prevStatus)
                            }
                        >
                            {prevStatus}
                        </Button>
                    )}
                    {!nextStatus ? (
                        <Button
                            className="complete-button"
                            onClick={() => updateStatus(boardId, id, 'DONE')}
                        >
                            DONE
                        </Button>
                    ) : (
                        <Button
                            className="updateStatus"
                            onClick={() =>
                                updateStatus(boardId, id, nextStatus)
                            }
                        >
                            {nextStatus}
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}

Task.propTypes = {
    boardId: string,
    className: string,
    id: string,
    nextStatus: string,
    prevStatus: string,
    task: string,
    type: string,
    updateStatus: func,
};

export default Task;
