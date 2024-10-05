type ButtonProps = {
    text: string,
    className: string,
}
export const Button = ({ text, className }: ButtonProps) => {
    return (
        <>
            <button type="submit" className={`${className}`}>{text}</button>
        </>
    )
}

export default Button;
