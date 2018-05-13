// import { PureComponent } from 'react';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBeb8aKzvacv21jg6ybPqPvqfTjqFzmKfM';

const App = () => (
    <Fragment>
        <div>Hi2!</div>
        <SearchBar />
    </Fragment>
);

ReactDOM.render(<App />, document.getElementById('container'));
