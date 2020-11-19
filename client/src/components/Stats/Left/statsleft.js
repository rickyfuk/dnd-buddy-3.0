import React from 'react';
import StrModal from './STRENGTH/strModal';
import DexModal from './DEXTERITY/dexModal';
import ConModal from './CONSTITUTION/conModal';
import ConStats from './CONSTITUTION/conStats';
import DexStats from './DEXTERITY/dexStats';
import StrStats from './STRENGTH/strStats';
import '../assets/stats.css';

function StatsLeft() {



    return(

        <div>

            <div className="statBackground">
                <StrModal />
                <div>
                    <StrStats />
                </div>
            </div>

            <div className="statBackground">
                <DexModal />
                <div>
                    <DexStats />
                </div>
            </div>

            <div className="statBackground">
                <ConModal />
                <div>
                    <ConStats />
                </div>
            </div>
            
        </div>
        

        

    );
}

export default StatsLeft;