import { Step } from './styles';
import { CardPlanComponent } from '../../CardPlan';
import arcade from '../../../assets/images/icon-arcade.svg';
import advanced from '../../../assets/images/icon-advanced.svg';
import pro from '../../../assets/images/icon-pro.svg';
import { CheckComponent } from '../../Checkbox';
import { useContext } from 'react';
import { PlanContext } from '../../../context/context';
import { useState } from 'react';
export const Step2 = () => {
  const { register, getValues } = useContext(PlanContext);
  const [selected, setSelected] = useState(getValues().plan.id)
  const cardsplans = [
    {
      icone: arcade,
      title: 'Arcade',
      value: 9,
    },
    {
      icone: advanced,
      title: 'Advanced',
      value: 12,
    },
    {
      icone: pro,
      title: 'Pro',
      value: 15,
    },
  ];

  return (
    <Step>
      <div className="container-texts">
        <h3>Select your plan</h3>

        <p>You have the of monthly of yearly billing.</p>
      </div>

      <div className="container-card">
        {cardsplans.map((ele, index) => (
          <CardPlanComponent
            index={index}
            selected={selected}
            setSelected={setSelected}
            key={ele.title}
            icone={ele.icone}
            title={ele.title}
            value={ele.value}
          />
        ))}

        <select {...register('plan')}>
          <option value={{ name: 'arcade', value: '9', id: 1 }}>
            Option 1
          </option>
          <option value={{ name: 'advanced', value: '12', id: 2 }}>
            Option 2
          </option>
          <option value={{ name: 'pro', value: '15', id: 3 }}>Option 3</option>
        </select>
      </div>

      <CheckComponent />

      <select {...register('billing')}>
        <option value="monthly">Option 1</option>
        <option value="yearly">Option 2</option>
      </select>
    </Step>
  );
};
