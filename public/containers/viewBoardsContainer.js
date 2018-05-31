import { connect } from 'react-redux';

import ViewBoards from '../components/organisms/ViewBoards';

const mapStateToProps = state => ({
    boards: state.boards,
});

const viewBoardsContainer = connect(mapStateToProps)(ViewBoards);

export default viewBoardsContainer;
