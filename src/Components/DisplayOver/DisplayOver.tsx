import { nanoid } from 'nanoid'
import './displayOver.css';
import { overPropType } from '../../Types/TargetTypes';

export default function DisplayOver({ over }: overPropType) {

    return (
        <div className="current-over">
            {over.length !== 0 ? (
                over.map((ball: string, index: number) => (
                    <div
                        key={nanoid() + index}
                        className={
                            ball === "W" ? "wicket" :
                                ball === "NB1" ? "no-ball" :
                                    ball === "WD1" ? "wide" :
                                        ball === "6" ? "six" :
                                            ball === "4" ? "four" :
                                                "run"
                        }
                    >
                        {ball}
                    </div>
                ))
            ) : (
                <div className='run' style={{ visibility: "hidden" }}>0</div>
            )}
        </div>
    );
}
