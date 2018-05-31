import React, { Component } from 'react';
import { object, array, func, string } from 'prop-types';
import cuid from 'cuid';

import Lane from '../organisms/Lane';
import Button from '../atoms/Button';
import CreateTaskModal from './CreateTaskModal';

class Board extends Component {
    state = {
        modalOpen: false,
    };

    showLanes = () => {
        const { statuses, tasks, id } = this.props.board;
        const { updateTaskStatus } = this.props;
        return statuses.map((status, i) => {
            return (
                <Lane
                    key={status}
                    prevStatus={statuses[i - 1]}
                    nextStatus={statuses[i + 1]}
                    tasks={tasks.filter(task => task.status === status)}
                    updateTaskStatus={updateTaskStatus}
                    boardId={id}
                >
                    {status}
                </Lane>
            );
        });
    };

    openModal = () => {
        this.setState({ modalOpen: true });
    };

    closeModal = () => {
        this.setState({ modalOpen: false });
    };

    addNewTask = task => {
        const { addTask, id } = this.props;
        const { statuses } = this.props.board;
        const payload = {
            id: cuid(),
            status: statuses[0],
            ...task,
        };
        addTask(id, payload);
    };

    render() {
        const { modalOpen } = this.state;
        return (
            <div className="board">
                <CreateTaskModal
                    modalOpen={modalOpen}
                    closeModal={this.closeModal}
                    addTask={this.addNewTask}
                />
                <Button
                    type="button"
                    className="task-modal-open"
                    onClick={this.openModal}
                >
                    Create Task
                </Button>
                <div className="lane-list">{this.showLanes()}</div>
            </div>
        );
    }
}

Board.propTypes = {
    addTask: func,
    board: object,
    id: string,
    statuses: array,
    tasks: array,
    updateTaskStatus: func,
};

export default Board;
