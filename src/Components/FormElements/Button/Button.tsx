import React from 'react';

type ButtonProps = {
    text: string;
    className: string;
    runUpdateHandler?: (event: React.MouseEvent<HTMLButtonElement>, text: string) => void;
    // Specify return type as void
};

export const Button: React.FC<ButtonProps> = ({ text, className, runUpdateHandler }) => {
    return (
        <>
            <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    if (runUpdateHandler) {
                        runUpdateHandler(event, text); // Call only if it's defined
                    }
                }}
                type="submit"
                className={className}
            >
                {text}
            </button>
        </>
    );
};


export default Button;
