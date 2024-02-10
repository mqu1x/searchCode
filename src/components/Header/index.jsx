import React from 'react';

import styles from './Header.module.scss';

const Header = ({ search, setSearch }) => {
    return (
        <header className={styles.header}>
            <div>
                <h1>mquix</h1>
            </div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.input}
                type='text'
                placeholder='Поиск страны'
            />
        </header>
    );
};

export default Header;
