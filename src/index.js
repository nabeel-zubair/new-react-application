import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'fontsource-roboto';

import store from './store';
import { bugAdded, bugResolved } from './actions/actionCreator';

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugResolved(1));

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
