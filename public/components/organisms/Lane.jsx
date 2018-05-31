import React from 'react';
import { array, string, func } from 'prop-types';

import Task from '../molecules/Task';

const Lane = ({
    tasks,
    children,
    prevStatus,
    nextStatus,
    updateTaskStatus,
    boardId,
}) => {
    return (
        <div className="lane">
            <div className="lane-header">{children}</div>
            <div className="tasks">
                {tasks.map(task => {
                    if (task.status !== 'DONE') {
                        return (
                            <Task
                                key={task.id}
                                className="task"
                                updateStatus={updateTaskStatus}
                                prevStatus={prevStatus}
                                nextStatus={nextStatus}
                                boardId={boardId}
                                {...task}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

Lane.propTypes = {
    boardId: string,
    children: string,
    nextStatus: string,
    prevStatus: string,
    tasks: array,
    updateTaskStatus: func,
};

export default Lane;
