import { Step } from './styles';
import { AddOnsComponent } from '../../AddOns';
export const Step3 = () => {
  return (
    <Step>
      <div className="container-texts">
        <h3>Pick add-ons</h3>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="container-addons">
        <AddOnsComponent description={"Access to multiplayer games"} index={0} title={"Online service"} value={1}></AddOnsComponent>
        <AddOnsComponent description={"Extra 1TB of cloud save"} index={1} title={"Large Storage"} value={2}></AddOnsComponent>
        <AddOnsComponent description={"Customizable theme your profile"} index={2} title={"Customizable profile"} value={2}></AddOnsComponent>
      </div>

    </Step>
  );
};
