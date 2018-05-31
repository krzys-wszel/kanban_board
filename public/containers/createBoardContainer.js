import { connect } from 'react-redux';
import { createBoard } from '../actions/boards';
import CreateBoard from '../components/ecosystems/CreateBoard';

const createBoardContainer = connect(null, { onCreateClick: createBoard })(
    CreateBoard
);

export default createBoardContainer;
