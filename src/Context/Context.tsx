import React from "react";
import { ContextType } from "./ContextType"

const defaultValue: ContextType = {
    teamName: "TheScoreMatrix",
    setTeamName: () => { },
    totalOvers: 0,
    setTotalOvers: () => { },

}

const TeamNameContext = React.createContext<ContextType>(defaultValue);

export default TeamNameContext;