import { useContext } from 'react'
import Button from '../../Components/FormElements/Button/Button'
import Context from '../../Context/Context'
import './runBoard.css'
import { ScoreDataType, RunBoardPropType } from '../../Types/TargetTypes';

export default function RunBoard({ score, updateScore, allOvers, updateAllOver }: RunBoardPropType) {

    const { totalOvers } = useContext(Context);

    let newTotal = score.totalRuns,
        completedOver = 0,
        onGoingOver = score.currentOver,
        updatedWicket = score.wicket,
        updatedNoBalls = score.totalNoBalls,
        updatedTotalBall = score.totalBalls,
        updatedWideBalls = score.totalWideBalls,
        updatedCurrentOverRun = score.currentOverRun;


    const checkForOVerUpdate = () => {
        if (score.totalBalls != 0 && (score.totalBalls + 1) % 6 == 0) {

            completedOver = ((score.totalBalls + 1) / 6);
            if (Number(completedOver) == totalOvers) {
                console.log("Total over completed.");
                updateAllOver([...allOvers, onGoingOver])
                onGoingOver = [];
            } else {
                console.log([...allOvers, onGoingOver])
                updateAllOver([...allOvers, onGoingOver])
                onGoingOver = [];
                setTimeout(() => {
                    alert(`${completedOver} over completed.`);
                }, 500);
            }
            updatedCurrentOverRun = 0;
        }
        else {
            completedOver = completedOver + 1;
        }

    }

    const increaseTotal = (value: string, isExtra: boolean) => {
        newTotal = score.totalRuns + parseInt(value);
        updatedCurrentOverRun = updatedCurrentOverRun + parseInt(value);
        if (!isExtra) {
            onGoingOver.push(value);
        }
    }

    const increaseWicketCount = () => {
        updatedWicket = score.wicket + 1;
        onGoingOver.push("W");
    }

    const increaseBallCount = () => {
        updatedTotalBall = score.totalBalls + 1;
    }

    const runUpdateHandler = (event: React.MouseEvent<HTMLButtonElement>, value: string) => {

        const target = event.currentTarget; // Store the reference to currentTarget
        target.classList.add("clicked");

        setTimeout(() => {
            target.classList.remove("clicked"); // Use the stored reference
        }, 100);


        if (parseInt(value) || parseInt(value) == 0) {

            //Update run by value.
            increaseTotal(value, false);

            // Update over.
            checkForOVerUpdate();

            // Update ball count
            increaseBallCount();

        } else {
            console.log("else")

            switch (value) {
                case "No Ball":
                    // Plus 1 run.
                    increaseTotal("1", true);
                    // Update no balls
                    updatedNoBalls = (score.totalNoBalls + 1);
                    // Update ongoing over
                    onGoingOver.push("NB1");
                    // Extra delivery.


                    // Not over update.
                    // Not total ball updated.

                    break;

                case "Wide":
                    // Plus 1 run.
                    increaseTotal("1", true);
                    // Update wide balls
                    updatedWideBalls = score.totalWideBalls + 1;

                    // Update ongoing over
                    onGoingOver.push("WD1");

                    // Extra delivery.

                    // Not over update.

                    break;

                case "Wicket":
                    // Wicket update.
                    increaseWicketCount();
                    // Not run update.
                    increaseBallCount();
                    // Over update.
                    checkForOVerUpdate();

                    break;
            }
        }

        updateScore((score: ScoreDataType) => ({
            ...score,
            totalRuns: newTotal,
            totalBalls: updatedTotalBall,
            wicket: updatedWicket,
            totalWideBalls: updatedWideBalls,
            totalNoBalls: updatedNoBalls,
            currentOverRun: updatedCurrentOverRun,
            currentOver: onGoingOver
        }))
    }

    return (
        <div className="matrix-right-bottom">
            <div className="run-card">
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="0" />
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="1" />
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="2" />
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="3" />
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="4" />
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="6" />
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="No Ball" />
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="Wide" />
                <Button className='run-button' runUpdateHandler={runUpdateHandler} text="Wicket" />
            </div>
        </div>
    )
}
