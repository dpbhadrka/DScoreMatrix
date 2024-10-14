import { useContext, useState } from 'react'
import { ScoreDataType } from '../../Types/TargetTypes';
import Overpopup from '../../Sections/OverPopup/OverPopup';
import ScorePanel from '../../Sections/ScorePanel/ScorePanel';
import DisplayOver from '../../Components/DisplayOver/DisplayOver';
import OverPanel from '../../Sections/OverPanel/OverPanel';
import RunBoard from '../../Sections/RunBoard/RunBoard';
import ScoreCard from '../../Sections/ScoreCard/ScoreCard';
import Context from '../../Context/Context';
import './target.css'

export default function Target() {
    const { totalOvers } = useContext(Context)
    const [activeTab, setActiveTab] = useState("matrix");
    const [scoreData, setScoreData] = useState<ScoreDataType>({
        totalRuns: 0,
        currentOver: [],
        wicket: 0,
        totalBalls: 0,
        totalNoBalls: 0,
        totalWideBalls: 0,
        currentOverRun: 0,
    })

    const [allOvers, setAllOver] = useState<string[][]>([]);

    const calculateRun = (runs: string[]) => {
        let sum = 0;
        runs.forEach(element => {
            if (parseInt(element)) {
                sum = sum + parseInt(element);
            } else {
                switch (element) {
                    case "WD1":
                        sum = sum + 1;
                        break;

                    case "W":
                        sum = sum + 0;
                        break;
                    case "NB1":
                        sum = sum + 1;
                        break;
                    default:
                        sum;
                        break;
                }
            }
        });
        return sum;
    }


    return (
        <>
            <div className='tab-panel'>
                <strong className={activeTab == "matrix" ? "active" : ""} onClick={() => (setActiveTab("matrix"))}>Matrix</strong>
                <strong className={activeTab == "over-history" ? "active" : ""} onClick={() => setActiveTab("over-history")}>Over History</strong>
            </div>

            {totalOvers === 0 ? <Overpopup /> :
                activeTab == "matrix" ?
                    <div className='matrix-main-container'>

                        <ScorePanel scoreData={scoreData} />

                        <ScoreCard scoreData={scoreData} />

                        <div className="matrix-right-container">
                            <OverPanel scoreData={scoreData} />
                            <RunBoard score={scoreData} allOvers={allOvers} updateAllOver={setAllOver} updateScore={setScoreData} />
                        </div>

                    </div>
                    :
                    <div className="matrix-bottom-container">
                        <span className='over-info-title'>Over Information:</span>
                        {allOvers.length != 0 ?
                            allOvers.map((over, mainIndex) => (
                                <div className='over-container'>
                                    <div>
                                        <strong>Over: {mainIndex + 1}</strong>
                                        <strong>Runs: {calculateRun(over)}</strong>
                                    </div>
                                    <DisplayOver over={over} />
                                </div>
                            ))
                            : "No any over completed yet."}

                    </div>
            }
        </>

    )
}
