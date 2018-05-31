import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import Modal from 'react-modal';

import Form from '../molecules/Form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const initialState = {
    type: 'general',
    user: 'unassigned',
    task: '',
    validationError: false,
};
class CreateTaskModal extends Component {
    state = {
        ...initialState,
    };

    updateForm = key => e => {
        const { value } = e.currentTarget;
        this.setState({
            [key]: value,
        });
    };

    createTask = () => {
        const { type, user, task } = this.state;
        const newTask = {
            type,
            user,
            task,
        };

        return newTask;
    };

    handleCreateClick = () => {
        const { addTask, closeModal } = this.props;
        const task = this.createTask();

        if (this.validate()) {
            addTask(task);
            closeModal();
            this.setState({ ...initialState });
        } else {
            this.setState({
                validationError: true,
            });
        }
    };

    validate = () => {
        const { task } = this.state;
        return task.length > 0;
    };

    render() {
        const { modalOpen, closeModal } = this.props;
        const { task, type, user, validationError } = this.state;
        const customStyles = {
            content: {
                width: '50%',
                margin: '0 auto',
            },
        };
        return (
            <div className="create-modal-container">
                <Modal
                    isOpen={modalOpen}
                    contentLabel="Modal"
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    style={customStyles}
                >
                    <div className="create-modal">
                        <div className="modal-title">Create Task</div>
                        <div className="create-form">
                            <Form>
                                <div className="input-group">
                                    <label>Type</label>
                                    <Input
                                        type="select"
                                        onChange={this.updateForm('type')}
                                        value={type}
                                    >
                                        <option value="general">General</option>
                                        <option value="bug">Bug</option>
                                        <option value="feature">Feature</option>
                                    </Input>
                                </div>
                                <div className="input-group">
                                    <label>Assignee</label>
                                    <Input
                                        type="select"
                                        onChange={this.updateForm('user')}
                                        value={user}
                                    >
                                        <option value="unassinged">
                                            Unassigned
                                        </option>
                                        <option value="Mike">Mike</option>
                                        <option value="Test">Test</option>
                                    </Input>
                                </div>
                                <div className="input-group">
                                    <label>Task</label>
                                    <Input
                                        type="text"
                                        onChange={this.updateForm('task')}
                                        value={task}
                                    />
                                    {validationError && (
                                        <div className="validation-message">
                                            You must provide a task
                                        </div>
                                    )}
                                </div>
                                <div className="button-group">
                                    <Button
                                        type="button"
                                        className="blue-button"
                                        onClick={this.handleCreateClick}
                                    >
                                        Create
                                    </Button>
                                    <Button
                                        type="button"
                                        className="task-modal-close"
                                        onClick={closeModal}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

CreateTaskModal.propTypes = {
    addTask: func,
    closeModal: func,
    modalOpen: bool,
};

export default CreateTaskModal;
