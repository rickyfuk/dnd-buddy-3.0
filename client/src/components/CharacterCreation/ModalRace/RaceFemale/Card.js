import React from 'react';



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
