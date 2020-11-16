import React from 'react';
// import portraits from '../images-portraits/dwarf-cleric-1.jpg';
// import styles from '../charImage.css';



function Card(props) {
    return (
        <div style={styles.card}>
            <img style={styles.image} src={props.card_number} alt="heyhey"/>
        </div>
    )
}

const styles = {
    card: {
        width: '1089px',
        height: '593px',
        // backgroundColor: 'blue',
        // border: '2px solid black',
        boxSizing: 'border-box',
        fontSize: '2.5em',
        color: 'white'

    },   
    image: {
        width: '100%',
        height: '100%'
    }
}


export default Card;
