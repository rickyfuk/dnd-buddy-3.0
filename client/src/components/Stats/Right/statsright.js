import React from 'react';
import IntModal from './INTELLIGENCE/intModal';
import IntStats from './INTELLIGENCE/intStats';
import WisModal from './WISDOM/wisModal';
import WisStats from './WISDOM/wisStats';
import ChaModal from './CHARISMA/chaModal';
import ChaStats from './CHARISMA/chaStats';
import '../assets/stats.css';

function StatsRight() {
    return(

        <div>

            <div className="statBackground">
                <IntModal/>
                <div>
                    <IntStats />
                </div>
            </div>

            <div className="statBackground">
                < WisModal/>
                <div>
                    <WisStats />
                </div>
            </div>

            <div className="statBackground">
                <ChaModal />
                <div>
                    <ChaStats />
                </div>
            </div>
            
        </div>

    );
}

export default StatsRight;