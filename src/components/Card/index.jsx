import React from 'react';

import styles from './Card.module.scss';

const Card = ({ country, imageURL }) => {
    return (
        <div className={styles.card}>
            <h1>{country}</h1>
            <img src={imageURL} alt={country} />
        </div>
    );
};

export default Card;
