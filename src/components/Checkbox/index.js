import { Checkbox } from './styles';
import { useRef, useEffect, useState } from 'react';
import { useContext } from 'react';
import { PlanContext } from '../../context/context';
export const CheckComponent = () => {
  const { getValues, setValue, watch } = useContext(PlanContext);

  const checkRef = useRef();
  const watchedValues = watch();

  const [billing, setBillingData] = useState(getValues().billing);
  useEffect(() => {
    if (getValues().billing == 'monthly') {
      checkRef.current.checked = false;
    } else {
      checkRef.current.checked = true;
    }
  }, [watchedValues]);

  const changeChoice = () => {
    if (!checkRef.current.checked) {
      setValue('billing', 'monthly');
    } else {
      setValue('billing', 'yearly');
    }
    setBillingData(getValues().billing);
  };

  return (
    <Checkbox billing={billing}>
      <span className="monthly">Monthly</span>
      <input ref={checkRef} onChange={changeChoice} type="checkbox" />
      <span className="yearly">Yearly</span>
    </Checkbox>
  );
};
