import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import cuid from 'cuid';

import Form from '../molecules/Form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const defaultState = {
    name: '',
    currentStatus: '',
    statuses: [],
};

class CreateBoard extends Component {
    state = defaultState;

    updateForm = key => e => {
        const { value } = e.currentTarget;
        this.setState({
            [key]: value,
        });
    };

    addStatus = () => {
        const { statuses, currentStatus } = this.state;
        if (
            statuses.indexOf(currentStatus.toUpperCase()) === -1 &&
            currentStatus !== ''
        ) {
            this.setState({
                statuses: [...statuses, currentStatus.toUpperCase()],
            });
            this.clearStatus();
        }
    };

    clearStatus = () => {
        this.setState({
            currentStatus: '',
        });
    };

    clearState = () => {
        this.setState({
            ...defaultState,
        });
    };

    handleCreateClick = () => {
        const { name, statuses } = this.state;
        const { onCreateClick } = this.props;
        if (name !== '' && statuses.length > 0) {
            onCreateClick({
                id: cuid(),
                name,
                statuses,
            });
            this.clearState();
        }
    };

    appendStatuses = () => {
        const { statuses } = this.state;
        return statuses.map(status => <li key={status}>{status}</li>);
    };

    render() {
        const { currentStatus, name } = this.state;
        return (
            <div className="create-board">
                <h2>Create A Board:</h2>
                <div className="container">
                    <Form>
                        <div className="input-group">
                            <label>Name:</label>
                            <Input
                                type="text"
                                onChange={this.updateForm('name')}
                                value={name}
                            />
                        </div>
                        <div className="input-group">
                            <label>Status:</label>
                            <input
                                type="text"
                                className="add-status-input"
                                onChange={this.updateForm('currentStatus')}
                                value={currentStatus}
                            />
                            <Button
                                type="button"
                                onClick={this.addStatus}
                                className="add-input-button"
                            >
                                Add Status
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="show-statuses">
                    Current Statuses:
                    <ul className="status-list">{this.appendStatuses()}</ul>
                </div>
                {this.state.statuses.length > 0 && (
                    <Link
                        type="button"
                        className="blue-button"
                        onClick={this.handleCreateClick}
                        to="/boards"
                    >
                        Create
                    </Link>
                )}
            </div>
        );
    }
}

CreateBoard.propTypes = {
    onCreateClick: func,
};

export default CreateBoard;
