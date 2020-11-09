import React, { useEffect } from 'react';

function DiceEditor () {
    
    const dice = () => {
        
        useEffect (() => {
            const timer = setTimeout(() => {

                const dice4 = 'df-d4-';
                let num = Math.floor((Math.random()*4)+1);
                const setDice=dice4+num;
            }, 189);

            const timer2 = setTimeout(() => {

                const dice4 = 'df-d4-';
                let num = Math.floor((Math.random()*4)+1);
                const setDice=dice4+num;
            }, 295);

            const timer3 = setTimeout(() => {

                const dice4 = 'df-d4-';
                let num = Math.floor((Math.random()*4)+1);
                const setDice=dice4+num;
            }, 450);

            const timer4 = setTimeout(() => {

                const dice4 = 'df-d4-';
                let num = Math.floor((Math.random()*4)+1);
                const setDice=dice4+num;
            }, 555);

            const timer5 = setTimeout(() => {

                const dice4 = 'df-d4-';
                let num = Math.floor((Math.random()*4)+1);
                const setDice=dice4+num;
            }, 758);

            const timer6 = setTimeout(() => {

                const dice4 = 'df-d4-';
                let num = Math.floor((Math.random()*4)+1);
                const setDice = dice4+num;
            }, 826);

            const timer7 = setTimeout(() => {

                const dice4 = 'df-d4-';
                let num = Math.floor((Math.random()*4)+1);
                const setDice = dice4+num;
            }, 1000);

            return () => clearTimeout(timer);
            return () => clearTimeout(timer2);
            return () => clearTimeout(timer3);
            return () => clearTimeout(timer4);
            return () => clearTimeout(timer5);
            return () => clearTimeout(timer6);
            return () => clearTimeout(timer7);
        }, []);

    }


    return (
        <i className={(dice)}></i>
    );
    
}
  
export default DiceEditor;