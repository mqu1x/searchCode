import { useState } from 'react';

import Home from './components/Home';
import Header from './components/Header';

import './styles/App.scss';

function App() {
    const [search, setSearch] = useState('');

    return (
        <div className='app'>
            <Header search={search} setSearch={setSearch} />
            <Home search={search} />
        </div>
    );
}

export default App;
