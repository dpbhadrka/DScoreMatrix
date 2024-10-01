import React, { useState } from 'react'
import Context from "./Context"

type ContextProviderProps = {
    children: React.ReactNode
}


export default function ContextProvider({ children }: ContextProviderProps) {
    const [teamName, setTeamName] = useState<string>("TheScoreMatrix");
    return (
        <>
            <Context.Provider value={{ teamName, setTeamName }}>
                {children}
            </Context.Provider>
        </>
    )
}
