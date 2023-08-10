import { Card } from './styles';
import { useContext, useEffect, useState} from 'react';
import { PlanContext } from '../../context/context';

export const CardPlanComponent = ({
  icone,
  title,
  value,
  index,
  setSelected,
  selected
}) => {
  const { getValues, setValue, watch } = useContext(PlanContext);

  const watchedValues = watch();

  const [billingData, setBillingData] = useState()
  

  const changeValueCardPlan = () => {
    
    setValue('plan', { id: index+1, name: title.toLowerCase(), value: value})
    setSelected(index+1)
    
  }

  useEffect(()=>{
    setBillingData(getValues().billing)
    
  },[watchedValues]);

  return (
    <Card selected={selected === index+1} onClick={changeValueCardPlan}>
      <img src={icone}/>
      <div>
        <h4>{title}</h4>
        <p>
          {billingData === "monthly" 
            ? `R$${value}/mo`
            : `R$${value * 10}/yr`}
        </p>
        {billingData == 'yearly' && <h5>2 months free</h5>}
      </div>
    </Card>
  );
};
