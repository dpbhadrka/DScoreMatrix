import React, { useState } from 'react'
import Context from "./Context"

type ContextProviderProps = {
    children: React.ReactNode
}


export default function ContextProvider({ children }: ContextProviderProps) {
    const [teamName, setTeamName] = useState<string>("TheScoreMatrix");
    const [totalOvers, setTotalOvers] = useState<number>(1);
    return (
        <>
            <Context.Provider value={{ teamName, setTeamName, totalOvers, setTotalOvers }}>
                {children}
            </Context.Provider>
        </>
    )
}
