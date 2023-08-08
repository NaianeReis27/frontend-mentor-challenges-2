import { Step } from './styles';
import { CardPlanComponent } from '../../CardPlan';
import arcade from "../../../assets/images/icon-arcade.svg"
import advanced from "../../../assets/images/icon-advanced.svg"
import pro from "../../../assets/images/icon-pro.svg"
import { CheckComponent } from '../../Checkbox';
export const Step2 = () => {
  return (
    <Step>
      <div className="container-texts">
          <h3>Select your plan</h3>
          <p>You have the of monthly of yearly billing.</p>
        </div>

        <div className="container-card">
          <CardPlanComponent icone={arcade} title={"Arcade"} value={9} />
          <CardPlanComponent icone={advanced} title={"Advanced"} value={12} />
          <CardPlanComponent icone={pro} title={"Pro"} value={15} />
        </div>

        <CheckComponent></CheckComponent>
    </Step>
  );
};
