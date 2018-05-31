import { connect } from 'react-redux';
import { addTask, updateTaskStatus } from '../actions/boards';

import Board from '../components/ecosystems/Board';

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const board = state.boards.find(b => b.id === id);
    return { board, id };
};

const mapDispatchToProps = dispatch => {
    return {
        addTask(id, task) {
            dispatch(addTask(id, task));
        },
        updateTaskStatus(boardId, taskId, status) {
            dispatch(updateTaskStatus(boardId, taskId, status));
        },
    };
};

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
