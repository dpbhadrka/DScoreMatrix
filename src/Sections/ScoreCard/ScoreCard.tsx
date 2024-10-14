import { useContext } from 'react'
import Context from '../../Context/Context'
import './scoreCard.css'
import { ScoreDataPropType } from '../../Types/TargetTypes';

export default function ScoreCard({ scoreData }: ScoreDataPropType) {
    const { totalOvers } = useContext(Context);

    const calculateProjectedScore = () => {
        const runRate = scoreData.totalRuns / (Math.floor(scoreData.totalBalls / 6) + (scoreData.totalBalls % 6) / 6);
        const projectedScore = Math.ceil(totalOvers * parseFloat(runRate.toFixed(2)));
        return projectedScore;

    }

    return (
        <div className="matrix-left-container">
            <div>
                <strong>Current over</strong>
                <div> {Math.floor(scoreData.totalBalls / 6)}.{scoreData.totalBalls % 6} / {totalOvers}</div>
            </div>

            <div>
                <strong>CRR</strong>

                <div>
                    {scoreData.totalBalls != 0 ? (scoreData.totalRuns / (Math.floor(scoreData.totalBalls / 6) + (scoreData.totalBalls % 6) / 6)).toFixed(2) : 0.00}
                </div>
            </div>

            <div>
                <strong>No balls</strong>
                <div>{scoreData.totalNoBalls}</div>
            </div>

            <div>
                <strong>Wide Balls</strong>
                <div>{scoreData.totalWideBalls}</div>
            </div>

            {/* <div><strong>Target</strong><div>{200}</div></div> */}
            {/* <div><strong>RRR</strong><div>1.99</div></div> */}

            <div>
                <strong>Projected Score</strong>
                <div>
                    {scoreData.totalBalls != 0
                        ?
                        calculateProjectedScore()
                        :
                        0.00
                    }
                </div>
            </div>
        </div>
    )
}
