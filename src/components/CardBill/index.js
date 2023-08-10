import { Table } from './styles';
import { useContext, useEffect, useState } from 'react';
import { PlanContext } from '../../context/context';
export const CardBillComponent = () => {

  const { getValues } = useContext(PlanContext);

  const form = getValues();
  
  const [value, setValue] = useState(0);

  const CalcBill = () => {
    let sum =
      form.addons
        .filter((ele) => ele.acquired)
        .reduce((sum, item) => sum + item.value, 0) + form.plan.value;
    if (form.billing === 'monthly') {
      setValue(sum);
    } else {
      setValue(sum * 10);
    }
  };

  useEffect(() => {
    CalcBill();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <div>
            <h4>{`${form.plan.name} (${form.billing})`}</h4>
            <p>Change</p>
          </div>
          <h4>
            {form.billing == 'monthly'
              ? `R$${form.plan.value}/mo`
              : `R$${form.plan.value * 10}/yr`}
          </h4>
        </tr>
      </thead>
      <th></th>
      <tbody>
        {form.addons.map(
          (ele) =>
            ele.acquired && (
              <tr>
                <p>{ele.name}</p>
                <h5>
                  {form.billing == 'monthly'
                    ? `R$${Number(ele.value.toString())}/mo`
                    : `R$${Number(ele.value.toString()) * 10}/yr`}
                </h5>
              </tr>
            )
        )}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <p>
              {form.billing == 'monthly'
                ? `Total (per month)`
                : `Total (per year)`}
            </p>
          </td>
          <td>
            <h3>
              {form.billing == 'monthly' ? `$${value}/mo` : `R$${value}/yr`}
            </h3>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};
