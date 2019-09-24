import React from 'react';
import Hitlist from '../containers/Hitlist';
import Filter from '../containers/Filter';

const App = () => {
    return (
        <div className="app">
            <Filter />
			<Hitlist />
        </div>
    );
};

export default App;
