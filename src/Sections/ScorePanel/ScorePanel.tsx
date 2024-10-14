import { useParams } from 'react-router-dom';
import { ScoreDataPropType } from '../../Types/TargetTypes'
import './scorePanel.css'

const ScorePanel = ({ scoreData }: ScoreDataPropType) => {
    const { myteam } = useParams();
    return (
        <div className='matrix-top-container'>
            <strong>{myteam}</strong>
            <div>
                <strong>{scoreData.totalRuns} / {scoreData.wicket}</strong>
            </div>
        </div>
    )
}

export default ScorePanel;