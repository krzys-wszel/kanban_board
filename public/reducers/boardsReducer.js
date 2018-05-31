/* eslint-disable */
import {
    CREATE_BOARD,
    ADD_TASK,
    UPDATE_TASK_STATUS,
} from '../actions/actionTypes';

const initialState = [
    {
        id: 'cjckweqxp0000SON31mc91pu4',
        name: 'Test Board',
        statuses: ['NEW', 'ACCEPTED', 'READY'],
        tasks: [
            {
                id: 'cjckweqxp0000SON31mc91pi3',
                status: 'NEW',
                task: 'Make thing',
                type: 'bug',
                assignee: 'Test User',
            },
            {
                id: 'cjckweqxp0000SON31mc91pi4',
                status: 'NEW',
                task: 'Do stuff',
                type: 'bug',
                assignee: 'Test User',
            },
            {
                id: 'cjckweqxp0000SON31mc91pi5',
                status: 'ACCEPTED',
                task: 'Test accepted',
                type: 'feature',
                assignee: 'Test User',
            },
            {
                id: 'cjckweqxp0000SON31mc91pi6',
                status: 'READY',
                task: 'Things are done',
                type: 'feature',
                assignee: 'Test User',
            },
        ],
    },
];

function board(state = {}, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        default:
            return state;
    }
}

function task(state = {}, action) {
    switch (action.type) {
        case UPDATE_TASK_STATUS:
            const updatedTasks = state.tasks.map(t => {
                if (t.id === action.taskId) {
                    t.status = action.status;
                }
                return t;
            });
            return { ...state, tasks: updatedTasks };
        default:
            return state;
    }
}

function boards(state = initialState, action) {
    switch (action.type) {
        case CREATE_BOARD:
            const createdBoard = { ...action.board, tasks: [] };
            return [...state, createdBoard];

        case ADD_TASK:
            return state.map(b => {
                if (b.id === action.id) {
                    return board(b, action);
                }
                return b;
            });

        case UPDATE_TASK_STATUS:
            return state.map(b => {
                if (b.id === action.boardId) {
                    return task(b, action);
                }
                return b;
            });

        default:
            return state;
    }
}

export default boards;
