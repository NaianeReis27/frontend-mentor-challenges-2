import { Input } from './styles';
import { PlanContext } from '../../context/context';
import { useContext } from 'react';
export const InputFieldComponent = ({ label, placeholder, name }) => {
  const { register, errors } = useContext(PlanContext);
  return (
    <Input>
      <div>
        <label>{label}</label>
        {errors.name && <span>This field is required</span>}
      </div>

      <input
        type="text"
        {...register(name, { required: true })}
        placeholder={placeholder}
      />
    </Input>
  );
};
