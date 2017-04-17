import React, {Component} 			from 'react';
import { Provider } 				from 'react-redux';

import AppContainer 	from './components/navigation';
import configureStore 				from "./store/configureStore.js";
const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}
