import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Nav from './molecules/Nav';
import Home from './Home';
import createBoardContainer from '../containers/createBoardContainer';
import viewBoardsContainer from '../containers/viewBoardsContainer';
import BoardContainer from '../containers/BoardContainer';

import store from '../store';

const Routes = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="container">
                    <Nav />
                    <div className="routes-container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/create"
                                component={createBoardContainer}
                            />
                            <Route
                                exact
                                path="/boards"
                                component={viewBoardsContainer}
                            />
                            <Route
                                exact
                                path="/boards/:id"
                                component={BoardContainer}
                            />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        </Provider>
    );
};

export default Routes;
