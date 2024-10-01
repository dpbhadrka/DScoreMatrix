import React from "react";
import { ContextType } from "./ContextType"

const defaultValue: ContextType = {
    teamName: "TheScoreMatrix",
    setTeamName: () => { }

}

const TeamNameContext = React.createContext<ContextType>(defaultValue);

export default TeamNameContext;