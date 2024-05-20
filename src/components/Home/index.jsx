import React from 'react';
import styles from './Home.module.scss';
import database from '../../db.json';
import Card from '../Card';
import MoreInfo from '../MoreInfo';

const Home = ({ search }) => {
    const [state, setState] = React.useState(true);
    const [activeCard, setActiveCard] = React.useState(null);

    let data = [];
    database.map((item) => {
        return data.push(item);
    });

    const handleClick = (i) => {
        setState(!state);
        setActiveCard(i);
    };

    const filteredData = data.filter((el) =>
        el.country.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.card__items}>
            {filteredData.length > 0 ? (
                filteredData.map((item, i) => (
                    <div className={styles.card__wrapper} onClick={() => handleClick(i)} key={i}>
                        {activeCard === i && !state ? (
                            <MoreInfo {...item} key={i} />
                        ) : (
                            <Card {...item} key={i} />
                        )}
                    </div>
                ))
            ) : (
                <div className={styles.notFound}>
                    <h2>Ничего не найдено(</h2>
                </div>
            )}
        </div>
    );
};

export default Home;
