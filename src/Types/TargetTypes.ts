export type ScoreDataType = {
    totalRuns: number,
    totalBalls: number,
    currentOver: string[],
    totalNoBalls: number,
    totalWideBalls: number,
    wicket: number,
    currentOverRun: number,

}

export type ScoreDataPropType = {
    scoreData: ScoreDataType,
}

export type overPropType = {
    over: string[],
}

export type RunBoardPropType = {
    score: ScoreDataType,
    updateScore: React.Dispatch<React.SetStateAction<ScoreDataType>>,
    allOvers: string[][],
    updateAllOver: React.Dispatch<React.SetStateAction<string[][]>>,

}