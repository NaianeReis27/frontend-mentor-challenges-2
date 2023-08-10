import { Step } from './styles';
import { CardBillComponent } from '../../CardBill';

export const Step4 = () => {
  return (
    <Step>
      <div className="container-texts">
        <h3>Finish up</h3>
        <p>Double-check everything looks Ok before confirming</p>
      </div>

      <CardBillComponent></CardBillComponent>
    </Step>
  );
};
