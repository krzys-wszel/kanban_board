import { CREATE_BOARD, ADD_TASK, UPDATE_TASK_STATUS } from './actionTypes';

export function createBoard(board) {
    return {
        type: CREATE_BOARD,
        board,
    };
}

export function addTask(id, payload) {
    return {
        type: ADD_TASK,
        id,
        payload,
    };
}

export function updateTaskStatus(boardId, taskId, status) {
    return {
        type: UPDATE_TASK_STATUS,
        boardId,
        taskId,
        status,
    };
}
