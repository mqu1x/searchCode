import React from 'react';

import styles from './MoreInfo.module.scss';

const MoreInfo = (props) => {
    return (
        <div className={styles.info}>
            <h1>{props.country}</h1>
            <ul>
                <li>Язык: {props.language}</li>
                <li>Столица: {props.capital}</li>
                <li>Валюта: {props.currency}</li>
                <li>Площадь территории: {props.territory}</li>
                <li>На {props.areaTop} месте по площади территории</li>
            </ul>
        </div>
    );
};

export default MoreInfo;
