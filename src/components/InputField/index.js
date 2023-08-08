import { Input } from "./styles";

export const InputFieldComponent = ({
  label,
  placeholder
}) => {
    return (
        <Input>
            <label>{label}</label>
            <input placeholder={placeholder}/>
        </Input>
    )
}