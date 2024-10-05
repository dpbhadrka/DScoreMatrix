import "./input.css"
import { inputProps } from "./../FormElementTypes"

export default function Input({ name, type, id, label, className, placeholder, isChecked, required }: inputProps) {
    return (
        <div className={className}>
            <input placeholder={placeholder}
                className={`${(type == "text" || type == "number") ? "form-input-field" : " form-clickable-field"}`}
                name={name} id={id} type={type}
                defaultChecked={isChecked}
                required={required}
                {...(type === "number" || type === "text" ? {} : { value: label })}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
