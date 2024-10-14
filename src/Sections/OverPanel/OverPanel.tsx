import { useContext } from 'react'
import Context from '../../Context/Context'
import DisplayOver from '../../Components/DisplayOver/DisplayOver'
import { ScoreDataPropType } from '../../Types/TargetTypes';

export default function OverPanel({ scoreData }: ScoreDataPropType) {
    const { totalOvers } = useContext(Context);
    return (
        <div className='matrix-right-top'>
            <div className='top-bar'>
                <strong>Over: {Math.floor(scoreData.totalBalls / 6)}.{scoreData.totalBalls % 6} / {totalOvers}.0</strong>
                <strong>Run: {scoreData.currentOverRun}</strong>
            </div>
            <DisplayOver over={scoreData.currentOver} />
        </div>


    )
}
