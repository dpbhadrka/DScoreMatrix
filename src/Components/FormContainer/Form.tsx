import { FormEvent } from "react";
import "./form.css"

type FromProp = {
    children: React.ReactNode;
    handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, handleFormSubmit }: FromProp) {
    return (
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <div className='form-container'>
                {children}
            </div>
        </form>
    )
}
