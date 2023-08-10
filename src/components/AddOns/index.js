import { AddOns } from './styles';
import { useContext, useState } from 'react';
import { PlanContext } from '../../context/context';
export const AddOnsComponent = ({ title, description, value, index }) => {
  const { getValues, register } = useContext(PlanContext);
  const [isSelected, setIsSelected] = useState(getValues().addons[index].acquired);
  const handleChange = () => {
    setIsSelected(!isSelected);
  };

  return (
    <AddOns
    selected ={isSelected}
    >
        <input
          onClick={()=> handleChange()}
          type="checkbox"
          {...register(`addons.${index}.acquired`, true)}
          id={`check${index}`}
        ></input>

        <div>
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>

          <div>
            <p>
              {
                (getValues().billing === 'monthly'
                  ? `R$${value}/mo`
                  : `R$${value * 10}/yr`)
              }
            </p>
          </div>
        </div>
    </AddOns>
  );
};
